import axios from 'axios';
const instance = axios.create({ withCredentials: true });

instance.interceptors.response.use(response => {
    console.log(response)
    console.log(`notificationInterceptors():: succcess`)
    return response;
}, error => {
    console.error(`notificationInterceptors():: error`)
    console.log(error.response)
    switch (error.response.status) {
        case 401:
            console.log("Please login again")
            error.response.data.type = 'WARNING'
            break;
        case 403:
            console.log("Access Denied: ")
            error.response.data.type = 'WARNING'
            break;
        default:
            console.log(`Application has caused general failure [${error.response.status}]`)
            error.response.data.type = 'ERROR'
            break;
    }

    return Promise.reject(error)
})


export default instance;
