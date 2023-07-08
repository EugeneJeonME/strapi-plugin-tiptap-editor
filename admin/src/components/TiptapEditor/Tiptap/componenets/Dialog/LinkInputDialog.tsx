import {
  Button,
  Stack,
  Dialog,
  DialogBody,
  DialogFooter,
  TextInput,
  Select,
  Option,
} from '@strapi/design-system';
import React from 'react';

interface InputDialogProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;

  linkValue: string;
  linkTargetValue: string;
  onChangeLink: (value: string) => void;
  onChangeTargetLink: (value: string) => void;

  onRemoveLink: () => void;
  onSetLink: () => void;
}

const LinkInputDialog = ({
  title = 'Insert Link',
  isOpen,
  onClose,

  linkValue,
  linkTargetValue,
  onChangeLink,
  onChangeTargetLink,

  onRemoveLink,
  onSetLink,
}: InputDialogProps) => {
  return (
    <Dialog onClose={onClose} title={title} isOpen={isOpen}>
      <DialogBody>
        <Stack spacing={2}>
          <TextInput
            label="Link URL"
            placeholder="Write or paste the url here"
            name="url"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeLink(e.target.value)
            }
            value={linkValue}
            aria-label="URL"
          />
          <Select
            id="linkTargetSelect"
            label="Link target"
            required
            placeholder="Select link target"
            value={linkTargetValue}
            onChange={onChangeTargetLink}
          >
            <Option value={'_self'}>Self</Option>
            <Option value={'_blank'}>Blank</Option>
            <Option value={'_parent'}>Parent</Option>
            <Option value={'_top'}>Top</Option>
          </Select>
        </Stack>
      </DialogBody>
      <DialogFooter
        startAction={
          <Button onClick={onRemoveLink} variant="tertiary">
            Remove Link
          </Button>
        }
        endAction={
          <Button onClick={onSetLink} variant="success-light">
            Insert Link
          </Button>
        }
      />
    </Dialog>
  );
};

// export default forwardRef<HTMLInputElement, InputDialogProps>(InputDialog);
export default LinkInputDialog;
