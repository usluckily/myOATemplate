// import apply from '@/view/admin/holiday/shenqing/index.vue'
// import xiaojia from '@/view/admin/holiday/xiaojia/index.vue'

export default [
    {
        path: 'holiday-shenqing',
        name: '/holidayShenqing',
        component: r => require.ensure([], () => r(require('@/view/admin/holiday/shenqing/index.vue')), 'holiday')
    },
    {
        path: 'holiday-xiaojia',
        name: '/holidayXiaojia',
        component: r => require.ensure([], () => r(require('@/view/admin/holiday/xiaojia/index.vue')), 'holiday')
    },
]