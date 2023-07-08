import {
  Typography,
  ToggleInput,
  GridLayout,
  Box,
} from '@strapi/design-system';
import React, { Fragment } from 'react';

import type { Settings, FormikTabs } from '../../../types';

const Others = ({ values, handleChange }: FormikTabs<Settings>) => {
  const wordcount = values.other && values.other.wordcount;

  return (
    <Fragment>
      <Box marginBottom={'1rem'}>
        <Typography variant={'beta'}>Other</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Word count"
            hint="Show a word counter under the editor"
            size="S"
            name="other.wordcount"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={wordcount}
            onChange={() =>
              handleChange({
                target: {
                  name: 'other.wordcount',
                  value: !wordcount,
                },
              })
            }
          />
        </Box>
      </GridLayout>

      <Box marginTop={'2rem'} marginBottom={'1rem'}></Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Save content as JSON"
            hint="Save editor content as JSON instead of raw HTML. NOTE: You will have to save pages again, as changing this setting will NOT auto update you currently saved content"
            size="S"
            name="other.saveJson"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.other.saveJson}
            onChange={() =>
              handleChange({
                target: {
                  name: 'other.saveJson',
                  value: !values.other.saveJson,
                },
              })
            }
          />
        </Box>
      </GridLayout>
    </Fragment>
  );
};

export default Others;
