import axios from 'axios';
const instance = axios.create({ withCredentials: true });

instance.interceptors.response.use(response => {
    // console.log(response)
    console.log(`notificationInterceptors():: succcess`)
    switch (response.status) {
        case 200:
            response.data.notiType = 'INFO'
            break;
        default:
            response.data.notiType = 'DEFAULT'
            break;
    }
    // console.log(response)
    return response;
}, error => {
    console.log(`notificationInterceptors():: error`)
    // console.log(error.data)
    error['data'] = error.response || {}
    if (!error.response)
        error['response'] = { data: { status: 0 } }

    // Object.getOwnPropertyNames(error).forEach(prop => {
    //     console.log(`--------`)
    //     console.log(prop)
    //     console.log(error[prop])
    // })
    switch (error.response.data.status) {
        case 400:
        case 401:
            console.log("Please login again")
            error.data.notiType = 'WARNING'
            break;
        case 403:
            console.log("Access Denied: ")
            error.data.notiType = 'WARNING'
            break;
        default:
            console.log(`Application has caused general failure [${error.message}]`)
            error.data.notiType = 'ERROR'
            break;
    }
    // console.log(error.data)
    return Promise.reject(error)
})


export default instance;
