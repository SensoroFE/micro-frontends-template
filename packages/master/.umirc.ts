import { defineConfig } from 'umi';

function defineApp(app: { name: string; entry: string }) {
  if (process.env.NODE_ENV === 'production') {
    return {
      ...app,
      entry: `http://localhost:8090/${app.name}`,
    };
  } else {
    return app;
  }
}

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
        defineApp({
          name: 'app1', // 唯一 id
          entry: 'http://localhost:7001', // html entry
        }),
        defineApp({
          name: 'app2', // 唯一 id
          entry: 'http://localhost:7002', // html entry
        }),
        defineApp({
          name: 'app3', // 唯一 id
          entry: 'http://localhost:7003', // html entry
        }),
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
          redirect: '/app1',
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
