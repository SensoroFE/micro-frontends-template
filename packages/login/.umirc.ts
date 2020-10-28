import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/login/',
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true
  },
  qiankun: {
    slave: {}
  }
});
