import { Box } from '@strapi/design-system';
import { EditorContent } from '@tiptap/react';
import React, { useState } from 'react';

import { Menubar } from './componenets/Menubar';
import { BubbleMenubar } from './componenets/Menubar/Bubble';
import { Wrapper } from './styled.css';
import MediaLib from '../../MediaLib';

import type { Settings } from '../../../types';
import type { Editor } from '@tiptap/react';

interface TiptapWithHandlerProps {
  editor: Editor;
  settings: Settings;
}

const TiptapWithHandler = ({ editor, settings }: TiptapWithHandlerProps) => {
  // Media library handling
  const [mediaLibVisible, setMediaLibVisible] = useState(false);
  const [forceInsert, setForceInsert] = useState(false);
  const handleToggleMediaLib = () => setMediaLibVisible(v => !v);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getUpdatedImage = (asset: any) => ({
    src: asset.url,
    alt: asset.alt,
    ...(asset.width && { width: asset.width }),
    ...(asset.height && { height: asset.height }),
    ...(asset.url?.includes('lazy') ||
      (asset.caption === 'lazy' && { loading: 'lazy' })),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeAssets = (assets: any) => {
    if (!forceInsert && editor.isActive('image')) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      assets.map((asset: any) => {
        if (asset.mime.includes('image')) {
          editor.chain().focus().setImage(getUpdatedImage(asset)).run();
        }
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      assets.map((asset: any) => {
        if (asset.mime.includes('image')) {
          editor.commands.setImage(getUpdatedImage(asset));
        }
      });
    }

    setForceInsert(false);
    handleToggleMediaLib();
  };

  return (
    <Wrapper>
      <Box
        hasRadius={true}
        overflow={'hidden'}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="neutral200"
      >
        <Menubar
          editor={editor}
          toggleMediaLib={handleToggleMediaLib}
          settings={settings}
        />
        <BubbleMenubar editor={editor} />

        <Box
          padding={2}
          background="neutral0"
          maxHeight={'600px'}
          style={{ resize: 'vertical', overflow: 'auto' }}
        >
          <EditorContent editor={editor} />
        </Box>
      </Box>

      {settings.other && settings.other.wordcount && (
        <Box marginTop={'5px'} color="neutral600">
          {editor.storage.characterCount.words()}{' '}
          {editor.storage.characterCount.words() > 1 ? 'words' : 'word'}
        </Box>
      )}

      <MediaLib
        isOpen={mediaLibVisible}
        onChange={handleChangeAssets}
        onToggle={handleToggleMediaLib}
      />
    </Wrapper>
  );
};

export default TiptapWithHandler;
