import React from 'react';
import { useQuery } from 'react-query';

import Tiptap from './Tiptap';
import defaultSettings from '../../../../settings';
import { fetchSettings } from '../../lib/api';
import { mergeDeep } from '../../utils/merge';

import type { TiptapEditorProps, Settings } from '../../types';

import './variables.css';

const TiptapEditor = (props: TiptapEditorProps) => {
  const { data: savedSettings, isLoading } = useQuery<Settings>(
    'settings',
    fetchSettings
  );

  if (isLoading) return null;

  const settings = mergeDeep(defaultSettings, savedSettings);

  return <Tiptap settings={settings} {...props} />;
};

export default TiptapEditor;
