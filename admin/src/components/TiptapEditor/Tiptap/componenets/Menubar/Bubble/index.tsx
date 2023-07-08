import { Flex } from '@strapi/design-system';
import { BubbleMenu } from '@tiptap/react';
import React from 'react';

import { LinkBubble } from './Link';
import { TableBubble } from './Table';
import { TaskBubble } from './Task';

import type { Editor } from '@tiptap/react';

interface BubbleMenubarProps {
  editor: Editor;
}

export const BubbleMenubar = ({ editor }: BubbleMenubarProps) => {
  if (!editor) {
    return null;
  }

  const menuBars = [];

  if (editor.isActive('table')) {
    menuBars.push(TableBubble({ editor }));
  }

  if (editor.isActive('taskList')) {
    menuBars.push(TaskBubble({ editor }));
  }

  if (editor.isActive('link')) {
    menuBars.push(LinkBubble({ editor }));
  }

  return (
    <BubbleMenu editor={editor} tippyOptions={{ zIndex: 2, maxWidth: '450px' }}>
      {menuBars.length > 0 && (
        <Flex
          padding={2}
          className="menubar floating"
          style={{ flexWrap: 'wrap' }}
        >
          {menuBars}
        </Flex>
      )}
    </BubbleMenu>
  );
};
