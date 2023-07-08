import {
  Button,
  Stack,
  Dialog,
  DialogBody,
  DialogFooter,
} from '@strapi/design-system';
import React, { useCallback, useState } from 'react';
import { CirclePicker } from 'react-color';

import { DaisyUiColors } from '../../../../../utils/colors';

interface DaisyColorDialogProps {
  title?: string;
  color?: string;
  isOpen: boolean;
  onClose?: () => void;
  onRemoveColor?: () => void;
  onChangeColor?: (color: string) => void;
  autoClose?: boolean;
}

const DaisyColorDialog = ({
  title = 'Select color',
  color: initialColor,
  isOpen,
  onClose,
  onRemoveColor,
  onChangeColor,
  autoClose = false,
}: DaisyColorDialogProps) => {
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
    handleAutoClose();
  }, [color, onChangeColor, handleAutoClose]);

  return (
    <Dialog onClose={onClose} title={title} isOpen={isOpen}>
      <DialogBody>
        <Stack spacing={2}>
          <CirclePicker
            color={color ?? '#000'}
            colors={['#000', ...Object.values(DaisyUiColors)]}
            onChange={color => setColor(color.hex)}
            styles={{
              default: {
                card: {
                  width: 'auto',
                },
              },
            }}
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

export default DaisyColorDialog;
