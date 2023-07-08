import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import React from 'react';

const CodeBlock = ({
  node: {
    attrs: { language: defaultLanguage },
  },
  updateAttributes,
  extension,
}: {
  node: {
    attrs: { language: string };
  };
  updateAttributes: (attributes: { language: string }) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extension: any;
}) => (
  <NodeViewWrapper
    style={{
      position: 'relative',
    }}
  >
    {
      <select
        contentEditable={false}
        defaultValue={defaultLanguage}
        onChange={event => updateAttributes({ language: event.target.value })}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
        }}
      >
        <option value="null">auto</option>
        <option disabled>—</option>
        {extension.options.lowlight
          .listLanguages()
          .map((lang: string, index: number) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
      </select>
    }
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
);

export default CodeBlock;
