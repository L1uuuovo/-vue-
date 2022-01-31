<template>
  <div>
        <div class="title">国内疫情地图</div>
        <van-tabs v-model="active" animated @change="change">
            <van-tab title="现存确诊">
                <div id="nowMain" style="width: 100%; height: 8rem"></div>
            </van-tab>
            <van-tab title="累计确诊">
                <div id="main" style="width: 100%; height: 8rem"></div>
            </van-tab>
        </van-tabs>
  </div>
</template>

<script>
import api from '../../../api/index.js'
export default {
    name:'ChinaMap',
    data(){
        return {
            active:0,
            arr:[],
        }
    },
    mounted() {
        api.getChinaData()
        .then(res => {
            let citys = res.data.retdata
            let arr = []
            let nowArr = []
            for(let i= 0;i<citys.length;i++){
                let obj = {}
                let nowObj = {}
                obj.name = citys[i].xArea
                obj.value = citys[i].confirm
                nowObj.name = citys[i].xArea
                nowObj.value = citys[i].curConfirm
                arr.push(obj)
                nowArr.push(nowObj)
            }
            this.arr = arr
            this.$nextTick(()=>{
                this.$myCharts.ChinaMap('nowMain',nowArr)
            })
        })
    },
    methods:{
        change(title){
            if(title == 1){
                this.$nextTick(()=>{
                    this.$myCharts.ChinaMap('main',this.arr)
                })      
            }
        }
    }
}
</script>

<style scoped>
    .title{
        margin: 0.2rem;
        padding-top: 0.2rem;
        border-top: 1px solid #eee;
    }
    .title::before{
        content: '';
        border-left: 0.1rem solid rgb(9,60,202);
        font-size: 0.26rem;
        margin-right: 0.1rem;
    }
    #main,#nowMain{
        background: #f5f5f5;
    }
</style>