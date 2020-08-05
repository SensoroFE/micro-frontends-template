import { defineConfig } from 'umi';

function defineApp(app: { name: string; entry: string }) {
  if (process.env.NODE_ENV === 'production') {
    return {
      ...app,
      entry: `http://localhost:9000/${app.name}`,
    };
  } else {
    return app;
  }
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/main',
  publicPath: '/main/',
  runtimePublicPath: true,
  qiankun: {
    master: {
      sandbox:true,
      /**
       * 注册子应用信息
       *
       * name 唯一 推荐使用目录名
       */
      apps: [
        defineApp({
          name: 'account',
          entry: 'http://localhost:9001',
        }),
        defineApp({
          name: 'dashboard',
          entry: 'http://localhost:9002',
        }),
        defineApp({
          name: 'login',
          entry: 'http://localhost:9003',
        })
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
          redirect: '/login',
        },
        {
          path: '/login',
          microApp: 'login',
        },
        {
          path: '/dashboard',
          microApp: 'dashboard',
        },
        {
          path: '/account',
          microApp: 'account',
        },
        {
          path: '/master',
          component: '@/pages/index2',
        },
      ],
    },
  ],
});
