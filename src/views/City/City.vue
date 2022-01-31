<template>
    <div>
        <h2>{{ cityname }}</h2>
        <van-tabs type="card" @change="change">
            <van-tab title="现存确诊">
                <div id="nowMain" style="width: 7.5rem; height: 8rem"></div>
            </van-tab>
            <van-tab title="累计确诊">
                <div id="main" style="width: 7.5rem; height: 8rem"></div>
            </van-tab>
        </van-tabs>
  </div>
</template>

<script>
import api from "../../api/index.js";
export default {
    name:'City',
    data(){
        return {
            newArr:[],
        }
    },
    props:['cityname'],
    mounted(){
        api.getCityData(this.cityname)
        .then((res)=>{
            let arr = res.data.retdata.subList
            let newArr = []
            let newArr2 = []
            arr.forEach(ele => {
                let obj = {}
                let obj2 = {}
                if ( ele.city.endsWith("区") ||ele.city.endsWith("州") ||ele.city.endsWith("盟")||ele.city.endsWith("旗")) {
                    obj.name = ele.city
                    obj2.name = ele.city
                } else {
                    obj.name = ele.city + "市"
                    obj2.name = ele.city + "市"
                }
                obj.value = ele.confirm  //累计
                obj2.value = ele.curConfirm  //现在
                newArr.push(obj)
                newArr2.push(obj2)
            })
            this.newArr = newArr
            this.$nextTick(()=>{
                this.$myCharts.CityMap('nowMain',this.cityname,newArr2)
            })
        })
    },
    methods:{
        change(title){
            if(title == 1){
                this.$nextTick(()=>{
                    this.$myCharts.CityMap('main',this.cityname,this.newArr)
                })      
            }
        }
    }
}
</script>

<style>
    h2{
        padding-left: 0.2rem;
    }
</style>