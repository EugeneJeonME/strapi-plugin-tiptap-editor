import {
  Box,
  Flex,
  IconButton,
  IconButtonGroup,
  Select,
  Option,
} from '@strapi/design-system';
import {
  Bold,
  Italic,
  StrikeThrough,
  Underline,
  BulletList,
  NumberList,
  Code,
  Landscape,
  Link,
  PaintBrush,
  Pencil,
} from '@strapi/icons';
import React, { useState } from 'react';
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiFillYoutube,
  AiOutlineLine,
  AiOutlineTable,
  AiOutlineEnter,
} from 'react-icons/ai';
import { BiCodeBlock } from 'react-icons/bi';
import { BsUiChecks } from 'react-icons/bs';
import { GrBlockQuote } from 'react-icons/gr';

import { onHeadingChange } from '../../../../../utils/tiptap';
import ColorDialog from '../Dialog/ColorDialog';
import LinkInputDialog from '../Dialog/LinkInputDialog';
import YoutubeInputDialog from '../Dialog/YoutubeInputDialog';

import type { Settings } from '../../../../../types';
import type { Editor } from '@tiptap/core';

interface MenubarProps {
  editor: Editor;
  toggleMediaLib: () => void;
  settings: Settings;
}

export const Menubar = ({ editor, toggleMediaLib, settings }: MenubarProps) => {
  // Link
  const [isVisibleLinkDialog, setIsVisibleLinkDialog] = useState(false);
  const [linkInput, setLinkInput] = useState('');
  const [linkTargetInput, setLinkTargetInput] = useState('');

  // Youtube
  const [isVisibleYoutubeDialog, setIsVisibleYoutubeDialog] = useState(false);
  const [youtubeURL, setYoutubeURL] = useState('');
  const [youtubeHeight, setYoutubeHeight] = useState(480);
  const [youtubeWidth, setYoutubeWidth] = useState(640);

  // Colors
  const [isOpenTextColorDialog, setOpenTextColorDialog] = useState(false);
  const [isOpenHighlightDialog, setOpenHighlightDialog] = useState(false);

  const openLinkDialog = () => {
    const previousUrl = editor.getAttributes('link').href;
    const previousTarget = editor.getAttributes('link').target;

    // Update fields before showing dialog
    if (previousUrl) setLinkInput(previousUrl);
    if (previousTarget) setLinkTargetInput(previousTarget);

    setIsVisibleLinkDialog(true);
  };

  const onInsertLink = () => {
    if (linkInput.trim() === '') {
      // Empty -> Unset
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      // Update
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: linkInput, target: linkTargetInput })
        .run();
    }

    // Reset dialog
    setIsVisibleLinkDialog(false);
    setLinkInput('');
    setLinkTargetInput('');
  };

  const onInsertYoutubeEmbed = () => {
    editor
      .chain()
      .focus()
      .setYoutubeVideo({
        src: youtubeURL,
        width: youtubeWidth,
        height: youtubeHeight,
      })
      .run();
    setYoutubeURL('');
    setIsVisibleYoutubeDialog(false);
  };

  let selectedTextStyle = 'none';
  if (editor.isActive('heading', { level: 1 })) selectedTextStyle = 'h1';
  if (editor.isActive('heading', { level: 2 })) selectedTextStyle = 'h2';
  if (editor.isActive('heading', { level: 3 })) selectedTextStyle = 'h3';
  if (editor.isActive('heading', { level: 4 })) selectedTextStyle = 'h4';
  if (editor.isActive('heading', { level: 5 })) selectedTextStyle = 'h5';
  if (editor.isActive('heading', { level: 6 })) selectedTextStyle = 'h6';
  if (editor.isActive('paragraph')) selectedTextStyle = 'paragraph';

  return (
    <Box padding={2} background="neutral100" className="menubar">
      <Flex justifyContent="space-between">
        <Flex style={{ flexWrap: 'wrap' }}>
          <Box className="button-group">
            <Select
              required
              size="S"
              placeholder="Text style"
              onChange={(val: string) => onHeadingChange(editor, val)}
              value={selectedTextStyle}
            >
              <Option value={'paragraph'}>Paragraph</Option>
              {settings.headings.includes('h1') ? (
                <Option value={'h1'}>Heading 1</Option>
              ) : null}
              {settings.headings.includes('h2') ? (
                <Option value={'h2'}>Heading 2</Option>
              ) : null}
              {settings.headings.includes('h3') ? (
                <Option value={'h3'}>Heading 3</Option>
              ) : null}
              {settings.headings.includes('h4') ? (
                <Option value={'h4'}>Heading 4</Option>
              ) : null}
              {settings.headings.includes('h5') ? (
                <Option value={'h5'}>Heading 5</Option>
              ) : null}
              {settings.headings.includes('h6') ? (
                <Option value={'h6'}>Heading 6</Option>
              ) : null}
            </Select>
          </Box>

          <IconButtonGroup className="button-group">
            {settings.bold ? (
              <IconButton
                icon={<Bold />}
                label="Bold"
                className={[
                  'large-icon',
                  editor.isActive('bold') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleBold().run()}
              />
            ) : null}
            {settings.italic ? (
              <IconButton
                icon={<Italic />}
                label="Italic"
                className={[
                  'large-icon',
                  editor.isActive('italic') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleItalic().run()}
              />
            ) : null}
            {settings.strikeThrough ? (
              <IconButton
                icon={<StrikeThrough />}
                label="Strikethrough"
                className={[
                  'large-icon',
                  editor.isActive('strike') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleStrike().run()}
              />
            ) : null}
            {settings.underline ? (
              <IconButton
                icon={<Underline />}
                label="Underline"
                className={[
                  'large-icon',
                  editor.isActive('underline') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
              />
            ) : null}

            {settings.color ? (
              <IconButton
                icon={<PaintBrush />}
                label="Text color"
                onClick={() => setOpenTextColorDialog(true)}
              />
            ) : null}

            {settings.highlight ? (
              <IconButton
                icon={<Pencil />}
                label="Highlight"
                onClick={() => setOpenHighlightDialog(true)}
              />
            ) : null}
          </IconButtonGroup>

          <IconButtonGroup className="button-group">
            {settings.align.includes('left') ? (
              <IconButton
                icon={<AiOutlineAlignLeft />}
                label="Align left"
                className={['medium-icon']}
                onClick={() =>
                  editor.chain().focus().setTextAlign('left').run()
                }
              />
            ) : null}
            {settings.align.includes('center') ? (
              <IconButton
                icon={<AiOutlineAlignCenter />}
                label="Align center"
                className={['medium-icon']}
                onClick={() =>
                  editor.chain().focus().setTextAlign('center').run()
                }
              />
            ) : null}
            {settings.align.includes('right') ? (
              <IconButton
                icon={<AiOutlineAlignRight />}
                label="Align right"
                className={['medium-icon']}
                onClick={() =>
                  editor.chain().focus().setTextAlign('right').run()
                }
              />
            ) : null}
          </IconButtonGroup>

          <IconButtonGroup className="button-group">
            {settings.bulletList.enabled ? (
              <IconButton
                icon={<BulletList />}
                label="Bullet list"
                className={[
                  'large-icon',
                  editor.isActive('bulletList') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              />
            ) : null}
            {settings.orderedList.enabled ? (
              <IconButton
                icon={<NumberList />}
                label="Ordered list"
                className={[
                  'large-icon',
                  editor.isActive('orderedList') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
              />
            ) : null}
            <IconButton
              icon={<BsUiChecks />}
              label="Task list"
              className={[
                'large-icon',
                editor.isActive('taskList') ? 'is-active' : '',
              ]}
              onClick={() => editor.chain().focus().toggleTaskList().run()}
            />
          </IconButtonGroup>

          <IconButtonGroup className="button-group">
            {settings.code ? (
              <IconButton
                icon={<Code />}
                label="Code"
                className={[
                  'large-icon',
                  editor.isActive('code') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleCode().run()}
              />
            ) : null}

            {settings.code ? (
              <IconButton
                icon={<BiCodeBlock />}
                label="Code Block"
                className={[
                  'large-icon',
                  editor.isActive('codeBlock') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              />
            ) : null}

            {settings.blockquote ? (
              <IconButton
                icon={<GrBlockQuote />}
                label="Blockquote"
                className={[
                  'large-icon',
                  editor.isActive('blockquote') ? 'is-active' : '',
                ]}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
              />
            ) : null}

            {settings.links.enabled ? (
              <IconButton
                icon={<Link />}
                label="Link"
                className={[
                  'medium-icon',
                  editor.isActive('link') ? 'is-active' : '',
                ]}
                onClick={() => openLinkDialog()}
              />
            ) : null}

            {settings.image.enabled ? (
              <IconButton
                icon={<Landscape />}
                label={
                  editor.isActive('image') ? 'Change image' : 'Insert image'
                }
                className={[
                  'medium-icon',
                  editor.isActive('image') &&
                  !editor.getAttributes('image').src.includes(';base64')
                    ? 'is-active'
                    : '',
                ]}
                onClick={toggleMediaLib}
              />
            ) : null}

            {settings.table ? (
              <IconButton
                icon={<AiOutlineTable />}
                label="Table"
                className={[
                  'large-icon',
                  editor.isActive('table') ? 'is-active' : '',
                ]}
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .insertTable({ cols: 3, rows: 3, withHeaderRow: false })
                    .run()
                }
              />
            ) : null}

            {settings.youtube.enabled ? (
              <IconButton
                icon={<AiFillYoutube />}
                label="YouTube"
                className={[
                  'large-icon',
                  editor.isActive('youtube') ? 'is-active' : '',
                ]}
                onClick={() => setIsVisibleYoutubeDialog(true)}
              />
            ) : null}

            {settings.horizontal ? (
              <IconButton
                icon={<AiOutlineLine />}
                label="Horizontal line"
                className={['large-icon']}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
              />
            ) : null}

            {settings.hardbreak ? (
              <IconButton
                icon={<AiOutlineEnter />}
                label="Hard break"
                className={['large-icon']}
                onClick={() => editor.chain().focus().setHardBreak().run()}
              />
            ) : null}
          </IconButtonGroup>
        </Flex>
      </Flex>

      {/* Dialogs */}
      {/* text color input dialog */}
      <ColorDialog
        color={editor.getAttributes('textStyle').color}
        isOpen={isOpenTextColorDialog}
        onClose={() => setOpenTextColorDialog(false)}
        autoClose={true}
        onRemoveColor={editor.commands.unsetColor}
        onChangeColor={color => editor.chain().focus().setColor(color).run()}
      />

      {/* highlight color input dialog */}
      <ColorDialog
        color={editor.getAttributes('highlight').color}
        isOpen={isOpenHighlightDialog}
        onClose={() => setOpenHighlightDialog(false)}
        autoClose={true}
        onRemoveColor={editor.commands.unsetHighlight}
        onChangeColor={color =>
          editor.chain().focus().toggleHighlight({ color: color }).run()
        }
      />

      {/* link input dialog  */}
      <LinkInputDialog
        isOpen={isVisibleLinkDialog}
        onClose={() => setIsVisibleLinkDialog(false)}
        linkValue={linkInput}
        linkTargetValue={linkTargetInput}
        onChangeLink={setLinkInput}
        onChangeTargetLink={setLinkTargetInput}
        onRemoveLink={() => {
          setLinkInput('');
          setLinkTargetInput('');
          setIsVisibleLinkDialog(false);
        }}
        onSetLink={onInsertLink}
      />

      {/* YouTube embed input dialog */}
      <YoutubeInputDialog
        isOpen={isVisibleYoutubeDialog}
        onClose={() => setIsVisibleYoutubeDialog(false)}
        url={youtubeURL}
        setUrl={setYoutubeURL}
        width={youtubeWidth}
        setWidth={setYoutubeWidth}
        height={youtubeHeight}
        setHeight={setYoutubeHeight}
        onRemoveUrl={() => {
          setYoutubeURL('');
          setIsVisibleYoutubeDialog(false);
        }}
        onSetUrl={onInsertYoutubeEmbed}
      />
    </Box>
  );
};
