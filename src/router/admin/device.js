import computed from '@/view/admin/device/computed/index.vue'
import infoSysAccount from '@/view/admin/device/infoSysAccount/index.vue'
import network from '@/view/admin/device/network/index.vue'
import appliction from '@/view/admin/device/appliction/index.vue'

export default [
    {
        path: 'device-computed',
        name: 'device-computed',
        component: computed
    },
    {
        path: 'device-infoSysAccount',
        name: 'device-infoSysAccount',
        component: infoSysAccount
    },
    {
        path: 'device-network',
        name: 'device-network',
        component: network
    },
    {
        path: 'device-appliction',
        name: 'device-appliction',
        component: appliction
    },
]