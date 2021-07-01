export default [
  {
    header: 'Categories',
  },
  {
    title: 'Blog',
    // route: 'apps-email',
    icon: 'LayersIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'New Blog',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
    ],
  },
  {
    title: 'Shop',
    icon: 'LayersIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'New Item',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
    ],
  },
  {
    title: 'Classified',
    icon: 'LayersIcon',
    children: [
      {
        title: 'List',
        route: 'apps-invoice-list',
      },
      {
        title: 'New Item',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
    ],
  },
]
