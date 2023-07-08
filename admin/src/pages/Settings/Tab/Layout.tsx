import {
  Typography,
  ToggleInput,
  GridLayout,
  Box,
} from '@strapi/design-system';
import React, { Fragment } from 'react';

import type { Settings, FormikTabs } from '../../../types';

const Layout = ({ values, handleChange }: FormikTabs<Settings>) => {
  return (
    <Fragment>
      {/* <Box marginBottom={'1rem'}>
        <Typography variant={'beta'}>Columns</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="2 Columns"
            size="S"
            name="columns"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.columns.includes('two')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'columns',
                  value: addRemoveFromList([...values.columns], 'two'),
                },
              })
            }
          />
        </Box>

        <Box>
          <ToggleInput
            label="3 Columns"
            size="S"
            name="columns"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.columns.includes('three')}
            onChange={() =>
              handleChange({
                target: {
                  name: 'columns',
                  value: addRemoveFromList([...values.columns], 'three'),
                },
              })
            }
          />
        </Box>
        <Box></Box>
        <Box></Box>
      </GridLayout> */}

      <Box marginTop="2rem" marginBottom={'1rem'}>
        <Typography variant={'beta'}>Table</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Enable table"
            size="S"
            name="table"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.table}
            onChange={() =>
              handleChange({
                target: {
                  name: 'table',
                  value: !values.table,
                },
              })
            }
          />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </GridLayout>

      <Box marginTop="2rem" marginBottom={'1rem'}>
        <Typography variant={'beta'}>Horizontal Rule</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Enable horizontal rule"
            size="S"
            name="horizontal"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.horizontal}
            onChange={() =>
              handleChange({
                target: {
                  name: 'horizontal',
                  value: !values.horizontal,
                },
              })
            }
          />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </GridLayout>

      <Box marginTop="2rem" marginBottom={'1rem'}>
        <Typography variant={'beta'}>Hardbreak</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Enable hardbreaks"
            size="S"
            name="hardbreak"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.hardbreak}
            onChange={() =>
              handleChange({
                target: {
                  name: 'hardbreak',
                  value: !values.hardbreak,
                },
              })
            }
          />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </GridLayout>

      <Box marginTop="2rem" marginBottom={'1rem'}>
        <Typography variant={'beta'}>Focus</Typography>
      </Box>

      <GridLayout>
        <Box>
          <ToggleInput
            label="Enable focus"
            size="S"
            name="focus"
            onLabel="Enabled"
            offLabel="Disabled"
            checked={values.focus}
            onChange={() =>
              handleChange({
                target: {
                  name: 'focus',
                  value: !values.focus,
                },
              })
            }
          />
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </GridLayout>
    </Fragment>
  );
};

export default Layout;
