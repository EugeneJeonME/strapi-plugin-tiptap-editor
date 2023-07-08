import type { Strapi } from '@strapi/strapi';

export default ({}: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
});
