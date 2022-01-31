<template>
  <div class="home">
    <!-- 1. 疫情图片 -->
    <div class="logo">
      <img src="../../assets/images/logo.png" width="100%" alt="" />
      <!-- 点击进入城市选择 -->
      <router-link class="select" to="/selectCity">{{ city }}</router-link>
    </div>
    <!-- 2. 病毒信息 -->
    <CovInfo :covDesc="covDesc" :news="news" />
    <!-- 3. 疫情-小导航 -->
    <div class="list">
      <div>
        <router-link to="/area">
          <img src="../../assets/images/1.png" alt="" />
          <div>风险地区</div>
        </router-link>
      </div>
      <div>
        <router-link to="/hesuan">
          <img src="../../assets/images/2.png" alt="" />
          <div>核算检测</div>
        </router-link>
      </div>
      <div>
        <router-link to="/prevention">
          <img src="../../assets/images/3.png" alt="" />
          <div>防疫物资</div>
        </router-link>
      </div>
      <div>
        <router-link to="/travel">
          <img src="../../assets/images/4.png" alt="" />
          <div>出行政策</div>
        </router-link>
      </div>
    </div>
    <!-- 4. 数据统计 -->
    <CovNumber :covData="covData" />

    <!-- 5. 中国地图 -->
    <ChinaMap/>

    <!-- 6. 世界地图 -->
    <WorldMap/>

    <!-- 7. 轮播图 -->
    <VueSwiper/>
  </div>
</template>

<script>
import CovInfo from './CovInfo/CovInfo'
import CovNumber from './CovInfo/CovNumber'
import api from '../../api/index'
import ChinaMap from './VueCharts/ChinaMap'
import WorldMap from './VueCharts/WorldMap'
import VueSwiper from './VueSwiper/VueSwiper'
export default {
    name:'Home',
    data() {
      return {
        covDesc:{},
        news:[],
        covData:{},
        city: "国内疫情",
      }
    },
    components:{
      CovInfo,
      CovNumber,
      ChinaMap,
      WorldMap,
      VueSwiper
      },
    created() {
      let city = localStorage.getItem('city')
      if(city){
        this.city = city
      }
      //请求病毒接口
      api.getCovInfo()
      .then(res => {
        let data = res.data.newslist[0].desc
        this.covDesc = {
          note1:data.note1,
          note2:data.note2,
          note3:data.note3,
          remark1:data.remark1,
          remark2:data.remark2,
          remark3:data.remark3,
        }
        this.news = res.data.newslist[0].news
        this.covData = {
          currentConfirmedCount: data.currentConfirmedCount,
          confirmedCount: data.confirmedCount,
          suspectedCount: data.suspectedCount,
          curedCount: data.curedCount,
          deadCount: data.deadCount,
          seriousCount: data.seriousCount,
          suspectedIncr: data.suspectedIncr,
          currentConfirmedIncr: data.currentConfirmedIncr,
          confirmedIncr: data.confirmedIncr,
          curedIncr: data.curedIncr,
          deadIncr: data.deadIncr,
          seriousIncr: data.seriousIncr,
          modifyTime: data.modifyTime,
        }
        console.log(this.covData)
      })
       /**
            currentConfirmedCount 现存确诊
            confirmedCount  累计确诊
            suspectedCount  累计境外输入人数
            curedCount    累计治愈人数
            deadCount   累计死亡人数
            seriousCount  现存无症状人数
            suspectedIncr  新增境外输入人数
            currentConfirmedIncr   相比昨日现存确诊人数
            confirmedIncr  相比昨日累计确诊人数
            curedIncr   相比昨日新增治愈人数
            deadIncr  相比昨日新增死亡人数
            seriousIncr 相比昨日现存无症状人数

              modifyTime 时间
             
             */
    },
}
</script>

<style>
  .logo {
    position: relative;
  }
  .logo .select {
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
  }
  .list{
    display: flex;
    padding-bottom: 0.2rem;
  }
  .list div{
    flex: 1;
    text-align: center;
    color: #666;
  }
  .list div img{
    width: 0.8rem;
    height: 0.8rem;
  }
</style>