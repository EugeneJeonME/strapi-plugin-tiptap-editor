import { IconButtonGroup, IconButton } from '@strapi/design-system';
import React, { Fragment, useState } from 'react';
import { AiOutlineBgColors } from 'react-icons/ai';
import { CgMoveTask } from 'react-icons/cg';
import { TbSubtask } from 'react-icons/tb';
import { VscTasklist } from 'react-icons/vsc';

import { getDaisyUiColorKey } from '../../../../../../utils/colors';
import DaisyColorDialog from '../../Dialog/DaisyColorDialog';

import type { Editor } from '@tiptap/react';

interface TaskBubbleProps {
  editor: Editor;
}

export const TaskBubble = ({ editor }: TaskBubbleProps) => {
  const [isOpenDaisyColorDialog, setOpenDaisyColorDialog] = useState(false);
  const [colorKey, setColorKey] = useState<string | undefined>();

  return (
    <Fragment key="taskMenu">
      <IconButtonGroup className="button-group">
        <IconButton
          icon={<CgMoveTask />}
          label="Split-Task list"
          className={['large-icon']}
          disabled={!editor.can().splitListItem('taskItem')}
          onClick={() => editor.chain().focus().splitListItem('taskItem').run()}
        />
        <IconButton
          icon={<TbSubtask />}
          label="Subtask list"
          className={['large-icon']}
          disabled={!editor.can().sinkListItem('taskItem')}
          onClick={() => editor.chain().focus().sinkListItem('taskItem').run()}
        />
        <IconButton
          icon={<VscTasklist />}
          label="Lift-Task list"
          className={['large-icon']}
          disabled={!editor.can().liftListItem('taskItem')}
          onClick={() => editor.chain().focus().liftListItem('taskItem').run()}
        />
      </IconButtonGroup>
      <IconButtonGroup className="button-group">
        <IconButton
          icon={<AiOutlineBgColors />}
          label="Task color"
          className={['large-icon']}
          onClick={() => setOpenDaisyColorDialog(true)}
        />
      </IconButtonGroup>

      {/* Dialogs */}
      <DaisyColorDialog
        color={colorKey}
        isOpen={isOpenDaisyColorDialog}
        onClose={() => setOpenDaisyColorDialog(false)}
        autoClose={true}
        onRemoveColor={() => {
          editor
            .chain()
            .focus()
            .updateAttributes('taskList', { class: undefined })
            .run();
          setColorKey(undefined);
        }}
        onChangeColor={color => {
          const daisyUiColorKey = getDaisyUiColorKey(color);
          if (!daisyUiColorKey) return;
          editor
            .chain()
            .focus()
            .updateAttributes('taskList', {
              class: `taskList-${daisyUiColorKey}`,
            })
            .run();
          setColorKey(daisyUiColorKey);
        }}
      />
    </Fragment>
  );
};
