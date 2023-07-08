import { IconButtonGroup, IconButton } from '@strapi/design-system';
import React, { Fragment } from 'react';
import {
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowRight,
  AiOutlineInsertRowLeft,
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineDelete,
  AiOutlineMergeCells,
  AiOutlineSplitCells,
} from 'react-icons/ai';
import { TbFreezeRow, TbFreezeColumn, TbFreezeRowColumn } from 'react-icons/tb';

import type { Editor } from '@tiptap/react';

interface TableBubbleProps {
  editor: Editor;
}

export const TableBubble = ({ editor }: TableBubbleProps) => {
  return (
    <Fragment key="tableMenu">
      <IconButtonGroup className="button-group">
        <IconButton
          icon={<TbFreezeRowColumn />}
          label="Toggle header row"
          onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        />
        <IconButton
          icon={<TbFreezeRow />}
          label="Toggle header column"
          onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        />
        <IconButton
          icon={<TbFreezeColumn />}
          label="Toggle header cell"
          onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        />
      </IconButtonGroup>

      <IconButtonGroup className="button-group">
        <IconButton
          icon={<AiOutlineInsertRowBelow />}
          label="Insert row below"
          onClick={() => editor.chain().focus().addRowAfter().run()}
        />
        <IconButton
          icon={<AiOutlineInsertRowAbove />}
          label="Insert row above"
          onClick={() => editor.chain().focus().addRowBefore().run()}
        />
        <IconButton
          icon={<AiOutlineInsertRowLeft />}
          label="Insert Column to the left"
          onClick={() => editor.chain().focus().addColumnBefore().run()}
        />
        <IconButton
          icon={<AiOutlineInsertRowRight />}
          label="Insert Column to the right"
          onClick={() => editor.chain().focus().addColumnAfter().run()}
        />
      </IconButtonGroup>

      <IconButtonGroup className="button-group">
        <IconButton
          icon={<AiOutlineDeleteRow />}
          label="Delete row"
          onClick={() => editor.chain().focus().deleteRow().run()}
        />
        <IconButton
          icon={<AiOutlineDeleteColumn />}
          label="Delete column"
          onClick={() => editor.chain().focus().deleteColumn().run()}
        />
      </IconButtonGroup>

      <IconButtonGroup className="button-group">
        <IconButton
          icon={<AiOutlineMergeCells />}
          label="Merge cells"
          onClick={() => editor.chain().focus().mergeCells().run()}
        />
        <IconButton
          icon={<AiOutlineSplitCells />}
          label="Split cells"
          onClick={() => editor.chain().focus().splitCell().run()}
        />
      </IconButtonGroup>

      <IconButtonGroup className="button-group">
        <IconButton
          icon={<AiOutlineDelete />}
          label="Delete table"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete the table?')) {
              editor.chain().focus().deleteTable().run();
            }
          }}
        />
      </IconButtonGroup>
    </Fragment>
  );
};
