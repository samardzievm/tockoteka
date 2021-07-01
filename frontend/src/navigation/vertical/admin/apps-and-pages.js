export default [
  {
    header: 'Apps & Pages',
  },
  {
    title: 'Blogs',
    // route: 'apps-email',
    icon: 'AlignCenterIcon',
    children: [
      {
        title: 'List of Blogs',
        route: 'apps-invoice-list',
      },
      {
        title: 'New Blog',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Category Blogs',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
      },
      {
        title: 'New Category Blog',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'Shop',
    route: 'apps-chat',
    icon: 'ShoppingBagIcon',
  },
  {
    title: 'Classifieds',
    route: 'apps-chat',
    icon: 'GiftIcon',
  },
]
