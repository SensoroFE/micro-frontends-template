import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/app3/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {}
  },
  dynamicImport: {}
});
