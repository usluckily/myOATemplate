import wait from '@/view/admin/approve/wait/index.vue'
import done from '@/view/admin/approve/done/index.vue'
import myForm from '@/view/admin/approve/my-form/index.vue'

export default [
    {
        path: 'approve-wait',
        name: 'approveWait',
        component: wait
    },
    {
        path: 'approve-done',
        name: 'approveDone',
        component: done
    },
    {
        path: 'approve-myForm',
        name: 'approveMyForm',
        component: myForm
    },
]