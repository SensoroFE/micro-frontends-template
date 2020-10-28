import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings
} from '@ant-design/pro-layout';
import RightContent from '@/components/right-content';
import Footer from '@/components/footer';
import logo from '@/assets/logo.svg';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; currentUser?: API.User.Current };
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    onPageChange: () => {
      // const { currentUser } = initialState;
      // const { location } = history;

      // 如果没有登录，重定向到 login
      // if (!currentUser?.userid && NO_LOGIN_WHITELIST.indexOf(location.pathname) === -1) {
      //   history.push('/login');
      // }
    },
    locale: 'zh-CN',
    menu: {
      locale: false,
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
    logo: logo
  };
};
