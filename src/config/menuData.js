export const menuData = [
    {
      title: 'OA管理',
      icon: 'el-icon-s-grid',
      id: '1',
      children: [
        {
          title: '差旅',
          icon: 'el-icon-s-grid',
          id: '1-1',
          children: [
            {title: '差旅申请',id:'1-1-1',src:'/travel-shenqing',icon:'el-icon-s-grid'},
            {title: '差旅报销',id:'1-2-2',src:'/travel-baoxiao',icon:'el-icon-s-grid'},
          ]
        },
        {
          title: '采购',
          icon: 'el-icon-s-grid',
          id: '1-2',
          children: [
            {title: '活动申请',id:'1-2-1',src:'/caigou-shenqing',icon:'el-icon-s-grid'},
            {title: '活动报销',id:'1-2-2',src:'/caigou-baoxiao',icon:'el-icon-s-grid'},
          ]
        },
        {
          title: '假期管理',
          id: '1-3',
          src: '/holiday',
          icon: 'el-icon-s-grid',
          children: [
            {title: '假期申请',id:'1-3-1',src:'/holiday-shenqing',icon:'el-icon-s-grid'},
            {title: '销假申请',id:'1-3-2',src:'/holiday-xiaojia',icon:'el-icon-s-grid'},
          ]
        },
        {
          title: '加班申请',
          id: '1-4',
          src: '/overtime',
          icon: 'el-icon-s-grid',
          children: null
        },
        {
          title: '计算机/信息/网络',
          id: '1-5',
          src: '/device',
          icon: 'el-icon-s-grid',
          children: [
            {title: '计算机设备领用申请',id:'1-5-1',src:'/device-computed',icon:'el-icon-s-grid'},
            {title: '信息系统账号申请',id:'1-5-2',src:'/device-infoSysAccount',icon:'el-icon-s-grid'},
            {title: '网络访问策略申请',id:'1-5-3',src:'/device-network',icon:'el-icon-s-grid'},
            {title: '非标软件安装申请',id:'1-5-4',src:'/device-appliction',icon:'el-icon-s-grid'},
          ]
        },
        {
          title: '合同',
          id: '1-6',
          src: '/contract;',
          icon: 'el-icon-s-grid',
          children: [
            {title: '合同审批申请',id:'1-6-1',src:'/contract-approve',icon:'el-icon-s-grid'},
            {title: '合同上传',id:'1-6-2',src:'/contract-upload',icon:'el-icon-s-grid'},
          ]
        },
        {
          title: '审批系统',
          id: '1-7',
          src:'/approve',
          icon: 'el-icon-s-grid',
          children: [
            {title: '待办任务',id:'1-7-1',src:'/approve-wait',icon:'el-icon-s-grid'},
            {title: '已办任务',id:'1-7-2',src:'/approve-done',icon:'el-icon-s-grid'},
            {title: '我提交的单据',id:'1-7-3',src:'/approve-myForm',icon:'el-icon-s-grid'},
          ]
        },
      ]
    },
    // {
    //   title: '测试菜单',
    //   id: '8',
    //   icon: 'el-icon-s-grid',
    //   children: [
    //     {
    //       title: '二级菜单',
    //       id:'8-1',
    //       src:'/first/second',
    //       icon:'el-icon-s-grid',
    //       children: [
    //         {
    //           title: '三级菜单',
    //           id: '8-1-1',
    //           src: '/first/second/third',
    //           children:[
    //             {
    //               title:'四级菜单',
    //               id: '8-1-1-1',
    //               src: '/first/second/third/fouth',
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //   ]
    // }
  ]