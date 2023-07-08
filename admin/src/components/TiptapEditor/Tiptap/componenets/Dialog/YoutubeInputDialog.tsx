import {
  Button,
  Stack,
  Dialog,
  DialogBody,
  DialogFooter,
  TextInput,
} from '@strapi/design-system';
import React from 'react';

interface InputDialogProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;

  url: string;
  setUrl: (url: string) => void;

  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;

  onRemoveUrl: () => void;
  onSetUrl: () => void;
}

const YoutubeInputDialog = ({
  title = 'YouTube URL',
  isOpen,
  onClose,

  url,
  setUrl,

  width,
  height,
  setWidth,
  setHeight,

  onRemoveUrl,
  onSetUrl,
}: InputDialogProps) => {
  return (
    <Dialog onClose={onClose} title={title} isOpen={isOpen}>
      <DialogBody>
        <Stack spacing={2}>
          <TextInput
            label="YouTube URL"
            placeholder="Write or paste the url here"
            name="url"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
            value={url}
            aria-label="YouTube URL"
          />

          <Stack horizontal={true} spacing={2}>
            <TextInput
              label="YouTube video width"
              type="number"
              placeholder="width of the embed"
              name="url"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setWidth(parseInt(e.target.value))
              }
              value={width}
              aria-label="YouTube video width"
            />

            <TextInput
              label="YouTube video height"
              type="number"
              placeholder="height of the embed"
              name="url"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setHeight(parseInt(e.target.value))
              }
              value={height}
              aria-label="YouTube video height"
            />
          </Stack>
        </Stack>
      </DialogBody>
      <DialogFooter
        startAction={
          <Button onClick={onRemoveUrl} variant="tertiary">
            Remove Link
          </Button>
        }
        endAction={
          <Button onClick={onSetUrl} variant="success-light">
            Insert Link
          </Button>
        }
      />
    </Dialog>
  );
};

// export default forwardRef<HTMLInputElement, InputDialogProps>(InputDialog);
export default YoutubeInputDialog;
