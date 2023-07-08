import {
  Typography,
  ToggleInput,
  GridLayout,
  Field,
  Box,
} from '@strapi/design-system';
import React, { Fragment } from 'react';

import { addRemoveFromList } from '../../../utils/addRemoveFromList';

import type { Settings, FormikTabs } from '../../../types';

const Text = ({ values, handleChange }: FormikTabs<Settings>) => {
  return (
    <Fragment>
      <Box marginBottom={'1rem'}>
        <Typography variant="beta" as="h2">
          Heading
        </Typography>
      </Box>

      <GridLayout>
        <Box>
          <Field>
            <ToggleInput
              label="Heading 1"
              size="S"
              name="headings"
              onLabel="Enabled"
              offLabel="Disabled"
              checked={values.headings.includes('h1')}
              onChange={() =>
                handleChange({
                  target: {
                    name: 'headings',
                    value: addRemoveFromList([...values.headings], 'h1'),
                  },
                })
              }
            />
          </Field>
        </Box>
        <Box>
          <ToggleInput
            label="Heading 2"
            size="S"
            name="headings"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.headings.includes('h2')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'headings',
                  value: addRemoveFromList([...values.headings], 'h2'),
                },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Heading 3"
            size="S"
            name="headings"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.headings.includes('h3')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'headings',
                  value: addRemoveFromList([...values.headings], 'h3'),
                },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Heading 4"
            size="S"
            name="headings"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.headings.includes('h4')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'headings',
                  value: addRemoveFromList([...values.headings], 'h4'),
                },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Heading 5"
            size="S"
            name="headings"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.headings.includes('h5')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'headings',
                  value: addRemoveFromList([...values.headings], 'h5'),
                },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Heading 6"
            size="S"
            name="headings"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.headings.includes('h6')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'headings',
                  value: addRemoveFromList([...values.headings], 'h6'),
                },
              })
            }
          />
        </Box>
      </GridLayout>

      <Box marginTop={'2rem'} marginBottom={'1rem'}>
        <Typography variant={'beta'}>Text styles</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Bold"
            name="bold"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.bold}
            onChange={() =>
              handleChange({ target: { name: 'bold', value: !values.bold } })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Italic"
            name="italic"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.italic}
            onChange={() =>
              handleChange({
                target: { name: 'italic', value: !values.italic },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Strikethrough"
            name="strikethrough"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.strikeThrough}
            onChange={() =>
              handleChange({
                target: { name: 'strikeThrough', value: !values.strikeThrough },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Underline"
            name="underline"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.underline}
            onChange={() =>
              handleChange({
                target: { name: 'underline', value: !values.underline },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Code"
            name="code"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.code}
            onChange={() =>
              handleChange({ target: { name: 'code', value: !values.code } })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Blockquote"
            name="blockquote"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.blockquote}
            onChange={() =>
              handleChange({
                target: { name: 'blockquote', value: !values.blockquote },
              })
            }
          />
        </Box>

        <Box>
          <ToggleInput
            label="Color"
            name="color"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.color}
            onChange={() =>
              handleChange({ target: { name: 'color', value: !values.color } })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Highlight"
            name="highlight"
            size="S"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.highlight}
            onChange={() =>
              handleChange({
                target: { name: 'highlight', value: !values.highlight },
              })
            }
          />
        </Box>
      </GridLayout>

      <Box marginTop={'2rem'} marginBottom={'1rem'}>
        <Typography variant={'beta'}>Text alignment</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Left"
            size="S"
            name="align"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.align.includes('left')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'align',
                  value: addRemoveFromList([...values.align], 'left'),
                },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Center"
            size="S"
            name="align"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.align.includes('center')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'align',
                  value: addRemoveFromList([...values.align], 'center'),
                },
              })
            }
          />
        </Box>
        <Box>
          <ToggleInput
            label="Right"
            size="S"
            name="align"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.align.includes('right')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'align',
                  value: addRemoveFromList([...values.align], 'right'),
                },
              })
            }
          />
        </Box>
        <Box></Box>
      </GridLayout>

      <Box marginTop={'2rem'} marginBottom={'1rem'}>
        <Typography variant={'beta'}>Lists</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Ordered list"
            size="S"
            name="lists"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.orderedList.enabled}
            onChange={() =>
              handleChange({
                target: {
                  name: 'orderedList.enabled',
                  value: !values.orderedList.enabled,
                },
              })
            }
          />
        </Box>

        <Box>
          <ToggleInput
            label="Unordered list"
            size="S"
            name="align"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.bulletList.enabled}
            onChange={() =>
              handleChange({
                target: {
                  name: 'bulletList.enabled',
                  value: !values.bulletList.enabled,
                },
              })
            }
          />
        </Box>
        <Box></Box>
        <Box></Box>

        <Box>
          <ToggleInput
            label="Disable shorthand for ordered list"
            hint="Normally you can type: 1. and after the space it converts it to a ordered list. This can be annoying when typing dates."
            size="S"
            name="lists"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.orderedList.disabledShorthand}
            onChange={() =>
              handleChange({
                target: {
                  name: 'orderedList.disabledShorthand',
                  value: !values.orderedList.disabledShorthand,
                },
              })
            }
          />
        </Box>
      </GridLayout>
    </Fragment>
  );
};

export default Text;
