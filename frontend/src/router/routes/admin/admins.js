export default [
  {
    path: '/admin/',
    name: 'admin',
    // eslint-disable-next-line import/extensions
    component: () => import('@/views/admin/Dashboard'),
  },
  {
    path: '/admin/dashboard',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
]
