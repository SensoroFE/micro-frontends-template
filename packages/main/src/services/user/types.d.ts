declare namespace API {
  namespace User {
    /**
     * 当前登录的用户信息
     */
    interface Current {
      /**
       * 用户头像
       */
      avatar?: string;
      /**
       * 用户名
       */
      name?: string;
      title?: string;
      group?: string;
      signature?: string;
      tags?: {
        key: string;
        label: string;
      }[];
      userid?: string;
      unreadCount?: number;
    }
  }
}
