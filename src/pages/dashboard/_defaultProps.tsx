import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/',
        name: '欢迎',
        icon: <SmileFilled />,
        component: './Welcome',
      },
      // {
      //   path: '/admin',
      //   name: '管理页',
      //   icon: <CrownFilled />,
      //   access: 'canAdmin',
      //   component: './Admin',
      //   routes: [
      //     {
      //       path: '/admin/sub-page1',
      //       name: '一级页面',
      //       icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      //       component: './Welcome',
      //     },
      //     {
      //       path: '/admin/sub-page2',
      //       name: '二级页面',
      //       icon: <CrownFilled />,
      //       component: './Welcome',
      //     },
      //     {
      //       path: '/admin/sub-page3',
      //       name: '三级页面',
      //       icon: <CrownFilled />,
      //       component: './Welcome',
      //     },
      //   ],
      // },
      {
        name: '列表頁',
        icon: <TabletFilled />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/stakeholders',
            name: '投資人專區',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'finance',
                name: '財務資訊',
                icon: <CrownFilled />,
                component: './table/finance',
              },
              {
                path: 'dac-members',
                name: '董事會成員背景',
                icon: <CrownFilled />,
                component: './table/director',
              },
              {
                path: 'meeting-info',
                name: '股東會資訊',
                icon: <CrownFilled />,
                component: './table/meeting',
              },
              {
                path: 'holder-members',
                name: '主要股東名單',
                icon: <CrownFilled />,
                component: './table/holder',
              },
              {
                path: 'meeting-data',
                name: '會議相關資料',
                icon: <CrownFilled />,
                component: './table/meetingData',
              },
              {
                path: 'explaination',
                name: '法人說明會',
                icon: <CrownFilled />,
                component: './table/explaination',
              },
              {
                path: 'maintainance-data',
                name: '公司治理',
                icon: <CrownFilled />,
                component: './table/management',
              },
              {
                path: 'regulation-data',
                name: '規章辦法',
                icon: <CrownFilled />,
                component: './table/regulation',
              },
            ],
          },
          // {
          //   path: '/list/sub-page2',
          //   name: '二级列表页面',
          //   icon: <CrownFilled />,
          //   component: './Welcome',
          // },
          // {
          //   path: '/list/sub-page3',
          //   name: '三级列表页面',
          //   icon: <CrownFilled />,
          //   component: './Welcome',
          // },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
        icon: <ChromeFilled />,
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: './logo.svg',
      title: '天方網站',
      desc: '直接連結到網站',
      url: 'https://tpenergy.com.tw/',
    },
    // {
    //   icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
    //   title: 'AntV',
    //   desc: '蚂蚁集团全新一代数据可视化解决方案',
    //   url: 'https://antv.vision/',
    //   target: '_blank',
    // },
    // {
    //   icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
    //   title: 'Pro Components',
    //   desc: '专业级 UI 组件库',
    //   url: 'https://procomponents.ant.design/',
    // },
    // {
    //   icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
    //   title: 'umi',
    //   desc: '插件化的企业级前端应用框架。',
    //   url: 'https://umijs.org/zh-CN/docs',
    // },

    // {
    //   icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
    //   title: 'qiankun',
    //   desc: '可能是你见过最完善的微前端解决方案🧐',
    //   url: 'https://qiankun.umijs.org/',
    // },
    // {
    //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
    //   title: '语雀',
    //   desc: '知识创作与分享工具',
    //   url: 'https://www.yuque.com/',
    // },
    // {
    //   icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
    //   title: 'Kitchen ',
    //   desc: 'Sketch 工具集',
    //   url: 'https://kitchen.alipay.com/',
    // },
    // {
    //   icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
    //   title: 'dumi',
    //   desc: '为组件开发场景而生的文档工具',
    //   url: 'https://d.umijs.org/zh-CN',
    // },
  ],
};