import apply from '@/view/admin/travel/shenqing/index.vue'
import baoxiao from '@/view/admin/travel/baoxiao/index.vue'

export default [
    {
        path: 'travel-shenqing',
        name: '/travelShenqing',
        component: apply
    },
    {
        path: 'travel-baoxiao',
        name: '/travelBaoxiao',
        component: baoxiao
    },
]