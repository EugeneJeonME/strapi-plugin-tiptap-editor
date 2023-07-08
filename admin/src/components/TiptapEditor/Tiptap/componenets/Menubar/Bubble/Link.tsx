import { IconButtonGroup, IconButton } from '@strapi/design-system';
import classNames from 'classnames';
import React, { Fragment, useCallback, useState } from 'react';
import { AiOutlineBgColors } from 'react-icons/ai';
import { PiTextAUnderlineFill } from 'react-icons/pi';

import { getDaisyUiColorKey } from '../../../../../../utils/colors';
import DaisyColorDialog from '../../Dialog/DaisyColorDialog';

import type { Editor } from '@tiptap/react';

interface LinkBubbleProps {
  editor: Editor;
}

export const LinkBubble = ({ editor }: LinkBubbleProps) => {
  const [isOpenDaisyColorDialog, setOpenDaisyColorDialog] = useState(false);
  const [colorKey, setColorKey] = useState<string | undefined>();
  const [hoverClassName, setHoverClassName] = useState<string | undefined>();

  const handleToggleHover = useCallback(() => {
    setHoverClassName(value => {
      const nextValue = value ? undefined : 'link-hover';
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .updateAttributes('link', {
          class: classNames(
            'link',
            colorKey ? `link-${colorKey}` : undefined,
            nextValue
          ),
        })
        .run();
      return nextValue;
    });
  }, [colorKey, editor]);

  const handleRemoveColor = useCallback(() => {
    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .updateAttributes('link', { class: classNames('link', hoverClassName) })
      .run();
    setColorKey(undefined);
  }, [editor, hoverClassName]);

  const handleChangeColor = useCallback(
    (color: string) => {
      const daisyUiColorKey = getDaisyUiColorKey(color);
      if (!daisyUiColorKey) return;
      editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .updateAttributes('link', {
          class: classNames('link', `link-${daisyUiColorKey}`, hoverClassName),
        })
        .run();
      setColorKey(daisyUiColorKey);
    },
    [editor, hoverClassName]
  );

  return (
    <Fragment key="LinkMenu">
      <IconButtonGroup className="button-group">
        <IconButton
          icon={<AiOutlineBgColors />}
          label="Link color"
          className={['large-icon']}
          onClick={() => setOpenDaisyColorDialog(true)}
        />
        <IconButton
          icon={<PiTextAUnderlineFill />}
          label="Link show only hover"
          className={['large-icon']}
          onClick={handleToggleHover}
        />
      </IconButtonGroup>

      {/* Dialogs */}
      <DaisyColorDialog
        color={colorKey}
        isOpen={isOpenDaisyColorDialog}
        onClose={() => setOpenDaisyColorDialog(false)}
        autoClose={true}
        onRemoveColor={handleRemoveColor}
        onChangeColor={handleChangeColor}
      />
    </Fragment>
  );
};
