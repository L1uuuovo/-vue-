/* 
    公共的请求接口
*/
const base = {
    host:'http://api.tianapi.com', //天行数据  疫情病毒
    baseUrl:'https://grnx.api.storeapi.net',
    covInfo:'/ncov/index?key=9216e3b63fb04b72667c6923d6ad6610', //疫情病毒信息
    chinaData:'/api/94/219?format=json&appid=13768&sign=6f0822084a615e0442988abae5b2e073',
    worldData:'/api/94/220?format=json&appid=13768&sign=6f0822084a615e0442988abae5b2e073',
    city:'/api/94/221',
    swiperBanner:'http://iwenwiki.com/wapicovid19/ncovimg.php',//轮播图疫情
    travel:'/api/springTravel/citys?key=171e165a7d991c5f6ecd5194c54778ef',
    travelQuery:'/api/springTravel/query?key=171e165a7d991c5f6ecd5194c54778ef',//城市疫情&from=10191&to=10349
    getcity:'/foo/aj/getcitycode',
}

export default base