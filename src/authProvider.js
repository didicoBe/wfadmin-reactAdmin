
import  api  from "./service";

const authProvider = {
    login: async({ username, password })=>{
        console.log(password)
        const body = {
            login: username,
            senha: password
        }
        
        await api.post('/login', body).then(response=>{
            localStorage.setItem('login', response.data.response[0].email);
            localStorage.setItem('token', response.data.response[0].token);
            localStorage.setItem('nome', response.data.response[0].nome);
            return(
                Promise.resolve()
            )
        }).catch((erro)=>{
            Promise.reject()    
        })
    },
    logout: ()=>{
        localStorage.clear();
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    checkError: error => Promise.resolve(),
    getPermissions: params => Promise.resolve(),
};

export default authProvider;