import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/master',
  publicPath: '/master/',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: 'http://localhost:8090/app1', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: 'http://localhost:8090/app2', // html entry
        },
        {
          name: 'app3', // 唯一 id
          entry: 'http://localhost:8090/app3', // html entry
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          redirect: '/app1'
        },
        {
          path: '/app1',
          // component: '@/pages/index2',
          microApp: 'app1',
          // settings: { singular: false },
        },
        {
          path: '/app2',
          microApp: 'app2',
          // component: '@/pages/index2',
        },
        {
          path: '/app3',
          microApp: 'app3',
        },
        {
          path: '/master',
          component: '@/pages/index2',
        },
      ],
    },
  ],
});
