import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/clone-c587f/us-central1/api'

    //deployed version of amazon on render.com
    baseURL: 'https://amazon-api-twan.onrender.com'
})

export {axiosInstance}