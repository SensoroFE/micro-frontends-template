import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/app2/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {}
  }
});
