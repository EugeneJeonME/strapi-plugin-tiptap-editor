import pluginId from '../admin/src/pluginId';
import pluginInfo from '../admin/src/utils/pluginInfo';

import type { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: pluginInfo.name,
    plugin: pluginId,
    type: 'richtext',
  });
};
