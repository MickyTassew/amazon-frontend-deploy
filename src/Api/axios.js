import axios from "axios";

const axiosInstance = axios.create({
    // local insance of fire base functions
    // baseURL:"http://127.0.0.1:5001/clone-a9ab0/us-central1/api",
    // deployed vesrion of amazon server on render.com
    baseURL: "https://amazon-api-deploy-m1fn.onrender.com/"

});


export {axiosInstance}