import type { Editor } from '@tiptap/core';
import type { Level } from '@tiptap/extension-heading';

export const getLevel = (level: number): Level => {
  if (level === 1 || level === 2 || level === 3 || level === 4 || level === 5) {
    return level;
  }
  // level === 6
  return 6;
};

export const onHeadingChange = (editor: Editor, type: string) => {
  switch (type) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      editor
        .chain()
        .focus()
        .toggleHeading({
          level: getLevel(parseInt(type.replace('h', ''))),
        })
        .run();
      break;
    case 'paragraph':
    default:
      editor.chain().focus().setParagraph().run();
      break;
  }
};
