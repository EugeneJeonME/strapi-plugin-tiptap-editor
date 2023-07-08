/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Extension } from '@tiptap/core';

const CSSColumns = Extension.create({
  name: 'cssColumns',
  addOptions() {
    return {
      types: [],
      columnTypes: [2, 3],
      defaultColumnType: 'two',
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          cssColumns: {
            default: null,
            renderHTML: attributes => {
              if (attributes.cssColumns === null) return;
              return {
                style: `column-count: ${attributes.cssColumns}`,
              };
            },
            parseHTML: element => element.style.columnCount || null,
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      toggleColumns:
        (columnType: any) =>
        ({ commands, editor }: { commands: any; editor: any }) => {
          if (!editor.isActive({ cssColumns: columnType }))
            return this.options.types.every((type: any) =>
              commands.updateAttributes(type, { cssColumns: columnType })
            );
          return this.options.types.every((type: any) =>
            commands.resetAttributes(type, 'cssColumns')
          );
        },
      unsetColumns:
        (columnType: any) =>
        ({ commands }: { commands: any }) => {
          return this.options.types.every((type: any) =>
            commands.resetAttributes(type, 'cssColumns')
          );
        },
    } as any;
  },
});

export default CSSColumns;
