export default [
  {
    method: 'GET',
    path: '/',
    handler: 'settings.index',
    config: { policies: [] },
  },
  {
    method: 'PUT',
    path: '/update-settings',
    handler: 'settings.updateSettings',
    config: { policies: [] },
  },
];
