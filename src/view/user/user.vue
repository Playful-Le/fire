<template>
  <div class="bg">
    <div class="list">
      <div class="tabs">
        <div class="tab" v-for="(item,index) in tabs" :key="index">{{item}}</div>
      </div>
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
      />
       <div class="tab-list">
        <div class="item" v-for="(item,index) in tabList" :key="index">
          <div class="item-l">{{item.name}}</div>
          <div class="item-r">
            <img src="@/assets/icon1.png" alt="">
            <img class="more" src="@/assets/icon1.png" alt="">
          </div>
        </div>
      </div>
    </div>
   <div class="banner">
     <img src="@/assets/banner.png" alt="">
   </div>
    <div class="bottom">
      <div class="notive">
        <img src="@/assets/list.png" alt="">
        <!-- <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table> -->
      </div>
      <div class="energy">
        <img src="@/assets/echart3.png" alt="">
      </div>
    </div>
    <div class="right">
      <div class="site">
        <img src="@/assets/echart.png" alt="" />
      </div>
      <div class="people">
        <img src="@/assets/echart1.png" alt="" />
      </div>
      <div class="meterial">
        <img src="@/assets/echart2.png" alt="" />
      </div>
      <div class="cars">
        <img src="@/assets/echart3.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const toHome = (() => {
      router.push({
        name: 'index'
      })
    })
    return {
      toHome
    }
  },
  data(){
    return{
      tabs:['人员','物资','车辆'],
      tabList: [
        {
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        },{
          name: '张三'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  padding-top: 107px;
  position: relative;
  background: #30333A;
  color: #fff;

  .list{
    width: 496px;
    max-height: 636px;
    overflow: hidden;
    margin-left: 56px;
    margin-top: 102px;
    background: rgba(138, 138, 138, 0.53);
    .tabs{
      height: 80px;
      line-height: 80px;
      display: flex;
      justify-content: space-around;
      align-content: center;
    }
    ::v-deep .el-input{
      width: 80%;
      margin: 0 auto;
      border-radius: 30px;
      overflow: hidden;
    }
    ::v-deep .el-input__wrapper{
      border: none;
      box-shadow: none;
      background: rgba(138, 138, 138, 0.53);
    }
    .tab-list{
      margin-top: 20px;
      .item{
        height: 45px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-r{
          img{
            width: 15px;
            height: 15px;
          }
          .more{
            margin-left: 10px;
          }
        }
      }
    }
  }
  .banner{
    width: 708px;
    height: 438px;
    position: absolute;
    left: 606px;
    top: 236px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .peo-list,.info {
    margin-top: 13px;
    background: rgba(138, 138, 138, 0.53);

    .line {
      height: 55px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:  1px solid rgba(255, 255, 255, 0.14);
      .peo-left {
        display: flex;
        align-items: center;
        font-size: 18px;
        img {
          margin-right: 7px;
        }
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
  .info{
    position: absolute;
    top: 176px;
    left: 940px;
    width: 300px;
    height: 280px;
    margin-top: 0;
    .line{
      height: 45px;
      line-height: 45px;
    }
  }
  .bottom{
    position: absolute;
    left: 62px;
    // right: 542px;
    bottom: 24px;
    display: flex;
    .notive{
      width: 772px;
      height: 274px;
    }
    .energy{
      width: 509px;
      height: 274px;
      margin-left: 35px;
    }
    img{
        width: 100%;
        height: 100%;
      }
  }
  .right{
    position: absolute;
    top: 100px;
    right: 62px;
    bottom: 24px;
    width: 496px;
    div{
      margin-bottom: 18px;
    }
    .site{
      width: 100%;
      height: 80px;
    }
    .people{
      // width: 772px;
      height: 264px;
    }
    .meterial{
      // width: 772px;
      height: 270px;
    }
    .cars{
      // width: 772px;
      height: 274px;
    }
     img{
        width: 100%;
        height: 100%;
      }
  }
}
</style>