/* eslint-disable no-unused-vars */
import axios from 'axios';


// const get = () => {
//     console.log('get请求');
// }

// const post = () => {
//     console.log('post请求')
// }

// export{
//     get,
//     post
// }

// process.env.NODE_ENV环境
let baseURL;
if(process.env.NODE_ENV=='development'){
    baseURL = 'http://132.232.94.151:3000/api'
}else{
    baseURL = '/'
}
// baseURL es6 方法


const $http = axios.create({
    baseURL,
})
// create 是axios自带的方法

export const get = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
        // axiso 自带 get 和 post 方法
        $http.get(url,{
            params,
        }).then(res=>{
            if(res.data.status===0){
                console.log("status===0, res=", res);
                resolve(res.data);
            }else{
                console.log("status!==0, res=", res);
                // alert(res.data)
                resolve(res.data);
            }
        }).catch(error=>{
            reject(err.data)
        })
    })
}

export const post = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
        $http.post(url,params).then(res=>{
            if(res.data.status===0){
                resolve(res.data);
            }else{
                alert(res.data.msg);
            }
        }).catch(error=>{
            alert('网络异常');
        })
    })
}