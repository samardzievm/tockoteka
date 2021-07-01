export default [
  {
    header: 'Admin Page',
  },
  {
    title: 'Dashboard',
    route: 'admin',
    icon: 'HomeIcon',
  },
  {
    title: 'Admins',
    icon: 'UserIcon',
    children: [
      {
        title: 'List Of Admins',
        route: 'apps-invoice-list',
      },
      {
        title: 'Add Admin',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'Users',
    icon: 'UsersIcon',
    children: [
      {
        title: 'List Of Users',
        route: 'apps-invoice-list',
      },
      {
        title: 'Add User',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
  {
    title: 'Permissions',
    icon: 'UnlockIcon',
    children: [
      {
        title: 'List Of Permissions',
        route: 'apps-invoice-list',
      },
      {
        title: 'Add Permission',
        route: { name: 'apps-invoice-add' },
      },
    ],
  },
]
