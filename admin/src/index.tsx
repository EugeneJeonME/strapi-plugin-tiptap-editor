import { prefixPluginTranslations } from '@strapi/helper-plugin';

import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import pluginId from './pluginId';
import getTrad from './utils/getTrad';
import pluginInfo from './utils/pluginInfo';

import type { StrapiAdminInstance } from 'strapi-typed';

const TiptapEditorComponenet = async () => {
  const component = await import(
    /* webpackChunkName: "strapi-plugin-tiptip-editor-componenet" */ './components/TiptapEditor'
  );

  return component;
};

const SettingsComponent = async () => {
  const component = await import(
    /* webpackChunkName: "strapi-plugin-tiptip-editor-settings-page" */ './pages/Settings'
  );

  return component;
};

export default {
  register(app: StrapiAdminInstance) {
    // Config Page
    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: {
          id: getTrad('plugin.settings'),
          defaultMessage: 'Settings for TipTap Editor',
        },
      },
      [
        {
          intlLabel: {
            id: getTrad('plugin.settings.name'),
            defaultMessage: 'Settings',
          },
          id: 'settings',
          to: `/settings/${pluginInfo.name}`,
          Component: SettingsComponent,
          permissions: [],
        },
      ]
    );

    // Custom Fields (need to server/register)
    app.customFields.register({
      name: pluginInfo.name,
      pluginId,
      type: 'richtext',
      components: {
        Input: TiptapEditorComponenet,
      },
      icon: PluginIcon,
      intlLabel: {
        defaultMessage: pluginInfo.displayName,
        description: '',
        id: `${pluginId}.label`,
      },
      intlDescription: {
        defaultMessage: pluginInfo.description,
        description: '',
        id: `${pluginId}.description`,
      },
      options: {
        base: [],
        advanced: [],
        validator: () => ({}),
      },
    });

    // app.addMenuLink({
    //   to: `/plugins/${pluginId}`,
    //   icon: PluginIcon,
    //   intlLabel: {
    //     id: `${pluginId}.plugin.name`,
    //     defaultMessage: name,
    //   },
    //   Component: async () => {
    //     const component = await import(
    //       /* webpackChunkName: "[request]" */ './pages/App'
    //     );

    //     return component;
    //   },
    //   permissions: [
    //     // Uncomment to set the permissions of the plugin here
    //     // {
    //     //   action: '', // the action name should be plugin::plugin-name.actionType
    //     //   subject: null,
    //     // },
    //   ],
    // });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
  },

  bootstrap(/* app: any */) {
    //
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async registerTrads(app: any) {
    const { locales }: { locales: string[] } = app;

    const importedTrads = await Promise.all(
      locales.map(async locale => {
        try {
          const { default: data } = await import(
            /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
          );
          return {
            data: prefixPluginTranslations(data, pluginId),
            locale,
          };
        } catch {
          return {
            data: {},
            locale,
          };
        }
      })
    );

    return Promise.resolve(importedTrads);
  },
};
