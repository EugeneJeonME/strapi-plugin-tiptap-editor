/*
 *
 * HomePage
 *
 */

import {
  Button,
  HeaderLayout,
  ContentLayout,
  Box,
  Main,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from '@strapi/design-system';
import {
  Form,
  LoadingIndicatorPage,
  useNotification,
  useOverlayBlocker,
} from '@strapi/helper-plugin';
import { Check } from '@strapi/icons';
import { Formik } from 'formik';
import React, { memo } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import EmbedsTabContent from './Tab/Embeds';
import LayoutTabContent from './Tab/Layout';
import OtherTabContent from './Tab/Others';
import TextTabContent from './Tab/Text';
import defaultSettings from '../../../../settings';
import { fetchSettings, updateSettings } from '../../lib/api';
import pluginId from '../../pluginId';
import { mergeDeep } from '../../utils/merge';

import type { Settings } from '../../types';

const SettingsPage = () => {
  const toggleNotification = useNotification();
  const { lockApp, unlockApp } = useOverlayBlocker();
  const query = useQuery<Settings>('settings', fetchSettings);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (settings: Settings) => updateSettings(settings),
    {
      onSuccess: async () => {
        // Refresh after mutation
        await queryClient.invalidateQueries('settings');
        toggleNotification({
          type: 'success',
          message: {
            id: `${pluginId}-save-success`,
            defaultMessage: 'Saved',
          },
        });
        unlockApp();
      },
      onError: async () => {
        toggleNotification({
          type: 'warning',
          message: {
            id: `${pluginId}-save-error`,
            defaultMessage: 'Saved failed',
          },
        });
        unlockApp();
      },
    }
  );

  if (query.isLoading) {
    return (
      <Main aria-busy="true">
        <HeaderLayout
          title={'Strapi Plugin TipTap Settings'}
          subtitle={'Change how the editor should behave'}
        />
        <ContentLayout>
          <LoadingIndicatorPage />
        </ContentLayout>
      </Main>
    );
  }

  // Merge saved settings with default values, in case new ones are added
  const mergedSettings: Settings = mergeDeep(defaultSettings, query.data);

  return (
    <Main aria-busy={query.isLoading}>
      <Formik
        initialValues={mergedSettings}
        onSubmit={async values => {
          lockApp();
          await mutation.mutateAsync(values);
        }}
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <HeaderLayout
                title={'Strapi Plugin TipTap Settings'}
                subtitle={'Change how the editor should behave'}
                primaryAction={
                  <Button
                    isLoading={mutation.isLoading}
                    type="submit"
                    startIcon={<Check />}
                    size="L"
                  >
                    Save
                  </Button>
                }
              />
              <ContentLayout>
                <Box
                  background="neutral0"
                  hasRadius
                  shadow="filterShadow"
                  paddingTop={6}
                  paddingBottom={6}
                  paddingLeft={7}
                  paddingRight={7}
                >
                  <TabGroup
                    label="Some stuff for the label"
                    id="tabs"
                    variant="simple"
                  >
                    <Tabs>
                      <Tab>Text</Tab>
                      <Tab>Layout</Tab>
                      <Tab>Embeds</Tab>
                      <Tab>Other</Tab>
                    </Tabs>
                    <TabPanels>
                      <TabPanel>
                        <Box
                          color="neutral800"
                          padding={4}
                          background="neutral0"
                        >
                          <TextTabContent
                            values={values}
                            handleChange={handleChange}
                          />
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <Box
                          color="neutral800"
                          padding={4}
                          background="neutral0"
                        >
                          <LayoutTabContent
                            values={values}
                            handleChange={handleChange}
                          />
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        {/* Embeds tab content*/}
                        <Box
                          color="neutral800"
                          padding={4}
                          background="neutral0"
                        >
                          <EmbedsTabContent
                            values={values}
                            handleChange={handleChange}
                          />
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        {/* Other tab content*/}
                        <Box
                          color="neutral800"
                          padding={4}
                          background="neutral0"
                        >
                          <OtherTabContent
                            values={values}
                            handleChange={handleChange}
                          />
                        </Box>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                  {/* Main box end*/}
                </Box>
              </ContentLayout>
            </Form>
          );
        }}
      </Formik>
    </Main>
  );
};

export default memo(SettingsPage);
