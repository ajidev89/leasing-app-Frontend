import { createStore } from 'vuex'
/// Create a new store instance.
export const store = createStore({
    state: {
        token: "",
        base_url:"http://127.0.0.1:8000/api/"
    },
    getters:{
        getUser(state){
            return state.token
        }
    },
    actions:{
        getToken(context,token){
            context.commit('loginUser',token)
        }
    },
    mutations: {
        loginUser(state,token) {
            state.token = token
        }
    },
    
});
