import approve from '@/view/admin/contract/approve/index.vue'
import upload from '@/view/admin/contract/upload/index.vue'

export default [
    {
        path: 'contract-approve',
        name: 'contract-approve',
        component: approve
    },
    {
        path: 'contract-upload',
        name: 'contract-upload',
        component: upload
    },
]