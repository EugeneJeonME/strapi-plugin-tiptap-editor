import {
  Button,
  Stack,
  Dialog,
  DialogBody,
  DialogFooter,
} from '@strapi/design-system';
import React, { forwardRef, useCallback, useState } from 'react';
import { SketchPicker } from 'react-color';

import { useForwardRef } from '../../../../../hooks/useForwardRef';

import type { ForwardedRef } from 'react';

interface ColorDialogProps {
  title?: string;
  color?: string;
  isOpen: boolean;
  onClose?: () => void;
  onRemoveColor?: () => void;
  onChangeColor?: (color: string) => void;
  autoClose?: boolean;
}

const ColorDialog = (
  {
    title = 'Select color',
    color: initialColor,
    isOpen,
    onClose,
    onRemoveColor,
    onChangeColor,
    autoClose = false,
  }: ColorDialogProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const colorInputRef = useForwardRef<HTMLInputElement>(ref);
  const [color, setColor] = useState<string | undefined>(initialColor);

  const handleAutoClose = useCallback(() => {
    if (autoClose) onClose?.();
  }, [autoClose, onClose]);

  const handleRemoveColor = useCallback(() => {
    onRemoveColor?.();
    handleAutoClose();
  }, [onRemoveColor, handleAutoClose]);

  const handleChangeColor = useCallback(() => {
    if (color) {
      onChangeColor?.(color);
    }
    handleAutoClose;
  }, [color, onChangeColor, handleAutoClose]);

  return (
    <Dialog onClose={onClose} title={title} isOpen={isOpen}>
      <DialogBody>
        <Stack spacing={2}>
          <SketchPicker
            color={color ?? '#000'}
            onChange={color => setColor(color.hex)}
            styles={{
              default: {
                picker: {
                  width: 'auto',
                },
              },
            }}
          />
          <input
            style={{ width: '100%', height: '2em' }}
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            ref={colorInputRef}
          />
        </Stack>
      </DialogBody>
      <DialogFooter
        startAction={
          <Button onClick={handleRemoveColor} variant="tertiary">
            Remove color
          </Button>
        }
        endAction={
          <Button onClick={handleChangeColor} variant="success-light">
            Change color
          </Button>
        }
      />
    </Dialog>
  );
};

export default forwardRef<HTMLInputElement, ColorDialogProps>(ColorDialog);
