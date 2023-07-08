import settings from '../../settings';

import type { Strapi } from '@strapi/strapi';
import type { StrapiRequestContext } from 'strapi-typed';

export default ({ strapi }: { strapi: Strapi }) => {
  const storeKey = {
    type: 'plugin',
    name: 'strapi-plugin-tiptap-editor',
    key: 'settings',
  };

  const index = async (ctx: StrapiRequestContext) => {
    const savedSettings = await strapi.store(storeKey).get();
    if (savedSettings !== null) {
      ctx.send(savedSettings);
    } else {
      ctx.send(settings);
    }
  };

  const updateSettings = async (ctx: StrapiRequestContext) => {
    const newSettings = ctx.request.body;
    await strapi.store(storeKey).set({ value: newSettings });
    ctx.send({ res: 'ok' });
  };

  return {
    index,
    updateSettings,
  };
};
