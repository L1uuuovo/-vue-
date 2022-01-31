/* 
    所有请求接口的方法
*/
import axios from 'axios'
import base from './base'
import md5 from 'md5-js'
//请求方法
const api =  {
    //病毒信息获取
    getCovInfo(){
        return axios.get(base.host+base.covInfo)
    },
    getChinaData(){
        return axios.get(base.baseUrl+base.chinaData)
    },
    getWorldData(){
        return axios.get(base.baseUrl+base.worldData)
    },
    getCityData(city_name){
        let sign = md5('appid13768city_name'+city_name+'formatjson1b7490cd647a714ca5d6091aefb98050')
        let a ='format=json&appid=13768&city_name=' + city_name + '&sign=' + sign;
        return axios.get(base.baseUrl+base.city+'?'+a)
    },
    getSwiperBanner() {
        return axios.get(base.swiperBanner)
    },
    getTravel() {
        return axios.get(base.travel)
    },
    /**
     * 城市的出行政策疫情  
     * &from=10191&to=10349
     * axios.get('url?xx=xx&xx=xx')
     * axios.get('url',{
     *      params:{
     *          参数：xx,
     *          ... 
     *      }
     * })
     */
    getTravelQuery(params) {//params={from:'',to:''}
        return axios.get(base.travelQuery,{
            params
        })
    },
    getCity(){
        return axios.get(base.getcity)
    }
}

export default api