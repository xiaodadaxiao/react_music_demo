import axios from "axios";

const BASE_URL_1 = "http://123.207.32.32:9001";
const BASE_URL_2 = "http://localhost:8080";
const TIMEOUT = 5000;

//默认axios实例对象
export default function request(config) {
    //创建一个axios实例
    const instance = axios.create({
        baseURL: BASE_URL_1,
        timeout: TIMEOUT
    });
    //请求拦截器
    instance.interceptors.request.use((config) => {
        return config
    }, (err) => {
        console.log("request intance 请求错误：", err)
    })

    //响应拦截器
    instance.interceptors.response.use((res) => {
        return res.data;
    }, (err) => {
        console.log("request intance 响应拦截器错误：", err)
    })

    //发送请求
    return instance(config)
}