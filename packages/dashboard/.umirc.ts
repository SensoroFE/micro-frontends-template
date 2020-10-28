import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: '/dashboard/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {}
  },
  dynamicImport: {},
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/17.0.1/umd/react.development.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/17.0.1/umd/react-dom.development.js'
  ]
});
