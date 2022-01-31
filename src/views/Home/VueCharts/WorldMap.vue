<template>
  <div>
        <div class="title">世界疫情地图</div>
        <van-tabs v-model="active" animated @change="change">
            <van-tab title="现存确诊">
                <div id="nowWorldMain" style="width: 100%; height: 8rem"></div>
            </van-tab>
            <van-tab title="累计确诊">
                <div id="nowWorldMain2" style="width: 100%; height: 8rem"></div>
            </van-tab>
        </van-tabs>
  </div>
</template>

<script>
import api from '../../../api/index.js'
export default {
    name:'WorldMap',
    data(){
        return {
            active:0,
            arr:[],
        }
    },
    mounted() {
        api.getWorldData()
        .then(res => {
            let worlds = res.data.retdata
            let arr = []
            let nowArr = []
            for(let i= 0;i<worlds.length;i++){
                let obj = {}
                let nowObj = {}
                obj.name = worlds[i].xArea
                obj.value = worlds[i].confirm
                nowObj.name = worlds[i].xArea
                nowObj.value = worlds[i].curConfirm
                arr.push(obj)
                nowArr.push(nowObj)
            }
            this.arr = arr
            this.$nextTick(()=>{
                this.$myCharts.WorldMap('nowWorldMain',nowArr)
            })
        })
    },
    methods:{
        change(title){
            if(title == 1){
                this.$nextTick(()=>{
                    this.$myCharts.WorldMap('nowWorldMain2',this.arr)
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
    #nowWorldMain,#nowWorldMain2{
        background: #f5f5f5;
    }
</style>