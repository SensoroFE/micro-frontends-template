import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:7001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:7002', // html entry
        },
        {
          name: 'app3', // 唯一 id
          entry: '//localhost:7003', // html entry
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
          path: '/app1',
          microApp: 'app1',
          // settings: { singular: false },
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
        {
          path: '/app3',
          microApp: 'app3',
        },
      ],
    },
  ],
});
