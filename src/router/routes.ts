//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      title: null,
      hidden: true,
      icon: null
    }
  },
  {
    //登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "Promotion" //菜单文字左侧的图标,支持element-plus全部图标
    }
  },

  {
    // 注册
    path: "/register",
    component: () => import("@/views/register/index.vue"),
    name: "register",
    meta: {
      title: "注册", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "Promotion" //菜单文字左侧的图标,支持element-plus全部图标
    }
  },

  {
    //登录成功以后展示数据的路由
    path: "/index",
    component: () => import("@/layout/index.vue"),
    name: "Layout",
    meta: {
      title: "公共导航",
      hidden: false,
      icon: "ChromeFilled"
    },
    redirect: "/welcome",
    children: [
      {
        //欢迎页面
        path: "/welcome",
        component: () => import("@/views/welcome/index.vue"),
        name: "welcome",
        meta: {
          title: "欢迎", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "Promotion" //菜单文字左侧的图标,支持element-plus全部图标
        }
      }
    ]
  },

  {
    //404
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
      icon: "DocumentDelete"
    }
  }
];

//异步路由(管理员)
export const asnycAdminRoute = [
  {
    path: "/admin",
    component: () => import("@/layout/index.vue"),
    name: "admin",
    meta: {
      title: "管理页",
      icon: "Tools"
    },
    children: [
      {
        path: "/user/account",
        component: () => import("@/views/user/account/index.vue"),
        name: "account",
        meta: {
          title: "个人主页",
          icon: "UserFilled",
          hidden: true
        }
      },
      {
        //用户管理
        path: "/admin/userManagement",
        component: () => import("@/views/admin/userManagement/index.vue"),
        name: "userManagement",
        meta: {
          title: "用户管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "Management" //菜单文字左侧的图标,支持element-plus全部图标
        }
      },
      {
        //商品管理
        path: "/admin/commodityManagement",
        component: () => import("@/views/admin/commodityManagement/index.vue"),
        name: "commodityManagement",
        meta: {
          title: "商品管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "Goods" //菜单文字左侧的图标,支持element-plus全部图标
        }
      },
      {
        //商品类别管理
        path: "/admin/commodityTypeManagement",
        component: () =>
          import("@/views/admin/commodityTypeManagement/index.vue"),
        name: "commodityTypeManagement",
        meta: {
          title: "商品类别管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "Goods" //菜单文字左侧的图标,支持element-plus全部图标
        }
      },
      {
        //商品管理
        path: "/admin/commodityOrderManagement",
        component: () =>
          import("@/views/admin/commodityOrderManagement/index.vue"),
        name: "commodityOrderManagement",
        meta: {
          title: "商品订单管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "WalletFilled" //菜单文字左侧的图标,支持element-plus全部图标
        }
      },
      {
        //权限管理页面
        path: "/admin/noticeManagement",
        component: () => import("@/views/admin/noticeManagement/index.vue"),
        name: "noticeManagement",
        meta: {
          title: "公告管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "VideoCamera" //菜单文字左侧的图标,支持element-plus全部图标
        }
      },
      {
        //面经管理页面
        path: "/admin/postManagement",
        component: () => import("@/views/admin/postManagement/index.vue"),
        name: "postManagement",
        meta: {
          title: "攻略管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "EditPen" //菜单文字左侧的图标,支持element-plus全部图标
        }
      },
      {
        //面经管理页面
        path: "/admin/aiManagement",
        component: () => import("@/views/admin/aiManagement/index.vue"),
        name: "aiManagement",
        meta: {
          title: "AI 管理", //菜单标题
          hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
          icon: "Scissor" //菜单文字左侧的图标,支持element-plus全部图标
        }
      }
    ]
  }
];
//异步路由(用户)
export const asnycUserRoute = [
  {
    path: "/user",
    component: () => import("@/layout/index.vue"),
    name: "user",
    meta: {
      title: "用户大厅",
      icon: "Tools"
    },
    children: [
      {
        path: "/user/account",
        component: () => import("@/views/user/account/index.vue"),
        name: "account",
        meta: {
          title: "个人主页",
          icon: "UserFilled",
          hidden: true
        }
      },
      {
        path: `/user/home`,
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: {
          title: "主页",
          icon: "HomeFilled",
          hidden: false
        }
      },
      {
        path: `/user/commodity`,
        component: () => import("@/views/user/commodity/index.vue"),
        name: "commodity",
        meta: {
          title: "商品",
          icon: "Goods",
          hidden: false
        }
      },
      {
        path: `/user/commodity/detail/:id`,
        component: () => import("@/views/user/commodityDetail/index.vue"),
        name: "commodityDetail",
        meta: {
          title: "商品详情",
          icon: "Goods",
          hidden: true
        }
      },
      {
        path: "/user/notice",
        component: () => import("@/views/user/notice/index.vue"),
        name: "notice",
        meta: {
          title: "公告",
          icon: "Bell",
          hidden: false
        }
      },

      {
        path: "/user/message",
        component: () => import("@/views/user/message/index.vue"),
        name: "message",
        meta: {
          title: "买家留言",
          icon: "Mouse",
          hidden: false
        }
      },
      {
        path: "/user/post",
        component: () => import("@/views/user/post/index.vue"),
        name: "post",
        meta: {
          title: "交易攻略",
          icon: "Postcard",
          hidden: false
        }
      },
      {
        path: "/user/post/:id",
        component: () => import("@/views/user/post/postDetail/index.vue"),
        name: "PostDetail",
        meta: {
          title: "攻略详情",
          icon: "Postcard",
          hidden: true
        }
      },
      {
        path: "/user/AiTalk",
        component: () => import("@/views/user/AITalk/index.vue"),
        name: "AiTalk",
        meta: {
          title: "AI对话",
          icon: "Microphone",
          hidden: false
        }
      },
      {
        path: "/user/commodityRecommend",
        component: () => import("@/views/user/commodityRecommend/index.vue"),
        name: "commodityRecommend",
        meta: {
          title: "商品推荐",
          icon: "Sell",
          hidden: false
        }
      }
    ]
  }
];
//任意路由
export const anyRoute = {
  //任意路由
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  name: "Any",
  meta: {
    title: "任意路由",
    hidden: true,
    icon: "DataLine"
  }
};
