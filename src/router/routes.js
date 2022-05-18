import Home from '@/views/homePage.vue'

export default [
  {
    path: '/',
    name: 'layoutHome',
    meta: {
      hide: true
    },
    redirect: {
      name: 'childRoute'
    },
    component: Home,
    children: [
      {
        path: '/formDemo',
        name: 'formDemo',
        meta: {
          title: 'formDemo',
          icon: 'Apple',
          cache: true
        },
        component: () => import('@/views/formDemo/formDemo.vue'),
        children: [
          {
            path: '/formDemo/childRoute',
            name: 'childRoute',
            meta: {
              title: 'childRoute',
              icon: 'Apple',
              cache: true
            },
            component: () => import('@/views/formDemo/childRoute/childRoute.vue')
          }
        ]
      },
      {
        path: '/tableDemo',
        name: 'tableDemo',
        meta: {
          title: 'tableDemo',
          icon: 'Apple',
          cache: true,
          level: 1 // 一级路由页面必须此参数
        },
        component: () => import('@/views/tableDemo/tableDemo.vue')
      }
    ]
  }
]
