import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/login/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {}
  }
});
