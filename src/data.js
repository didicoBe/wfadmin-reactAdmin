import  api  from "./service";




const dataProvider = {
    getList: async (resource) => {
       await api.get(resource).then(response=>{
            return { data: response.data }
        }).catch((erro)=>{
            return Promise.reject()
        })
    },
    getOne:     (resource, params) => Promise,
    getMany:    (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create:     (resource, params) => Promise,
    update:     (resource, params) => Promise,
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,
}


export default dataProvider