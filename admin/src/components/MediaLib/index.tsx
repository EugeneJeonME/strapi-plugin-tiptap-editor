import { prefixFileUrlWithBackendUrl, useLibrary } from '@strapi/helper-plugin';
import React from 'react';

interface MediaLibProps {
  isOpen?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (files: any) => void;
  onToggle?: () => void;
}

const MediaLib = ({
  isOpen = false,
  onChange = () => ({}),
  onToggle = () => ({}),
}: MediaLibProps) => {
  const { components } = useLibrary();
  const MediaLibraryDialog = components['media-library'];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectAssets = (files: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedFiles = files.map((f: any) => ({
      ...f,
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      mime: f.mime,
    }));

    onChange(formattedFiles);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <MediaLibraryDialog
      onClose={onToggle}
      onSelectAssets={handleSelectAssets}
    />
  );
};

export default MediaLib;
