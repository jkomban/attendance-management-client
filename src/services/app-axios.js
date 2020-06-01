import axios from 'axios';
const instance = axios.create({ withCredentials: true });

instance.interceptors.response.use(response => {
    console.log(response)
    console.log(`notificationInterceptors():: succcess`)
    switch (response.status) {
        case 200:
            response.data.notiType = 'INFO'
            break;
        default:
            response.data.notiType = 'DEFAULT'
            break;
    }
    console.log(response)
    return response;
}, error => {
    console.error(`notificationInterceptors():: error`)
    console.log(error.response)
    switch (error.response.status) {
        case 401:
            console.log("Please login again")
            error.data.notiType = 'WARNING'
            break;
        case 403:
            console.log("Access Denied: ")
            error.data.notiType = 'WARNING'
            break;
        default:
            console.log(`Application has caused general failure [${error.response.status}]`)
            error.data.notiType = 'ERROR'
            break;
    }

    console.log(error)

    return Promise.reject(error)
})


export default instance;
