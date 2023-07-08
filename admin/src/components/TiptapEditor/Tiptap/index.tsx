import {
  Field,
  FieldLabel,
  Typography,
  Stack,
  Box,
} from '@strapi/design-system';

import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Color from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import DropCursor from '@tiptap/extension-dropcursor';
import Focus from '@tiptap/extension-focus';
import FontFamily from '@tiptap/extension-font-family';
import GapCursor from '@tiptap/extension-gapcursor';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Highlight from '@tiptap/extension-highlight';
import History from '@tiptap/extension-history';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Image from '@tiptap/extension-image';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import TiptapTypography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
// import Youtube from '@tiptap/extension-youtube';

import { ReactNodeViewRenderer, useEditor } from '@tiptap/react';
import { lowlight } from 'lowlight';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import CodeBlock from './extensions/CodeBlock';
import CSSColumns from './extensions/CSSColumns';
import Youtube from './extensions/Youtube';
import TiptapWithHandler from './TiptapWithHandler';

import type { Settings, TiptapEditorProps } from '../../../types';
import type { Extensions } from '@tiptap/react';

interface TiptapProps extends TiptapEditorProps {
  settings: Settings;
}

const Tiptap = ({
  description,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  value,
  required,
  settings,
}: TiptapProps) => {
  const { formatMessage } = useIntl();
  const [currentContent, setCurrentContent] = useState('');

  const extensions = [
    Document,
    Paragraph,

    CSSColumns.configure({
      types: ['paragraph'],
    }),

    Text,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    TextStyle,
    FontFamily,
    Heading,
    Bold,
    Strike,
    Italic,
    Underline,
    Subscript,
    Superscript,
    TiptapTypography,

    settings.color ? Color : null,
    settings.highlight
      ? Highlight.configure({
          multicolor: true,
        })
      : null,

    settings.hardbreak ? HardBreak : null,
    settings.horizontal ? HorizontalRule : null,
    settings.blockquote ? Blockquote : null,

    BulletList,
    settings.orderedList.disabledShorthand
      ? OrderedList.extend({
          addInputRules() {
            return [];
          },
        })
      : OrderedList,
    ListItem,

    settings.code
      ? Code.configure({
          HTMLAttributes: {
            class: 'inline-code',
          },
        })
      : null,
    settings.code
      ? CodeBlockLowlight.extend({
          addNodeView() {
            return ReactNodeViewRenderer(CodeBlock);
          },
        }).configure({
          lowlight,
        })
      : null,

    settings.table
      ? Table.configure({
          allowTableNodeSelection: true,
        })
      : null,
    settings.table ? TableCell : null,
    settings.table ? TableHeader : null,
    settings.table ? TableRow : null,

    TaskItem.configure({
      nested: true,
    }),
    TaskList.extend({
      addAttributes() {
        return {
          class: {
            default: undefined,
            renderHTML: attributes => {
              return {
                class: attributes.class,
              };
            },
          },
        };
      },
    }),

    settings.links.enabled
      ? Link.configure({
          autolink: settings.links.autolink,
          openOnClick: settings.links.openOnClick,
          linkOnPaste: settings.links.linkOnPaste,
          HTMLAttributes: {
            rel: settings.links.HTMLAttributes.rel,
          },
        })
      : null,
    settings.image.enabled
      ? Image.extend({
          addAttributes() {
            return {
              ...this.parent?.(),
              width: { default: null },
              height: { default: null },
              loading: { default: null },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              renderHTML: (attributes: Record<string, any>) => {
                return {
                  width: attributes.width,
                  height: attributes.height,
                  loading: attributes.loading,
                };
              },
            };
          },
        }).configure({
          inline: settings.image.inline,
          allowBase64: settings.image.allowBase64,
        })
      : null,
    settings.youtube.enabled
      ? Youtube.configure({
          inline: false,
          height: settings.youtube.height,
          width: settings.youtube.width,
        })
      : null,

    DropCursor,
    GapCursor,
    settings.focus ? Focus : null,

    BubbleMenu,
    Placeholder,
    settings.other && settings.other.wordcount ? CharacterCount : null,
    History,
  ].filter(v => v !== null) as Extensions;

  const editor = useEditor({
    extensions,
    parseOptions: {
      preserveWhitespace: 'full',
    },
    onUpdate(ctx) {
      if (settings.other.saveJson) {
        onChange({
          target: { name, value: JSON.stringify(ctx.editor.getJSON()) },
        });
      } else {
        onChange({ target: { name, value: ctx.editor.getHTML() } });
      }
    },
  });

  useEffect(() => {
    if (!editor) return;
    if (currentContent !== '') return;

    // Content can be 2 things: JSON or String. Be able to display both things.
    try {
      // If content is saved as json, parse it
      const json = JSON.parse(value);
      setCurrentContent(value);
      editor.commands.setContent(json, false);
    } catch (e) {
      setCurrentContent(value);
      editor.commands.setContent(value, false);
    }
  }, [currentContent, editor, value]);

  return (
    <Field required={required}>
      <Stack spacing={1}>
        <Box>
          <FieldLabel action={labelAction}>
            {formatMessage(intlLabel)}
          </FieldLabel>
        </Box>
        {editor && (
          <TiptapWithHandler key="tiptap" editor={editor} settings={settings} />
        )}
        {error && (
          <Typography variant="pi" textColor="danger600">
            {formatMessage({ id: error, defaultMessage: error })}
          </Typography>
        )}
        {description && (
          <Typography variant="pi">{formatMessage(description)}</Typography>
        )}
      </Stack>
    </Field>
  );
};

export default Tiptap;
