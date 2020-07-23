import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/app1/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {}
  }
});
