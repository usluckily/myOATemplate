import {storeHelper} from '@/assets/js/util'

export default {
    state:{
        userInfo: storeHelper.getJ('userInfo') || {}
    },
    actions:{
        login({commit}, userInfo){
            return new Promise((resolve, reject) => {
                if(!userInfo.account || !userInfo.pwd) reject('请填写用户名密码')

                userInfo['headPic'] = 'http://apicms.zatech.com:8090/api/user/avatar?uid=1155'
                resolve(userInfo)
                commit('SET_USERINFO', userInfo)
            })
        }
    },
    mutations: {
        SET_USERINFO: (state, userInfo) => {
            state.userInfo = userInfo
            storeHelper.setJ('userInfo', userInfo)
        }
    }
}