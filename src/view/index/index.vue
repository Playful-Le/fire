<template>
  <div class="bg">
    <div class="search">
      <div class="mt-4">
        <el-input
          v-model="input3"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-select
              v-model="select"
              placeholder="Select"
              style="width: 115px"
            >
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
      <div class="peo-list">
        <div class="line" v-for="(item, index) in peoList" :key="index">
          <div class="peo-left">
            <img :src="item.icon" alt="" />
            {{ item.name }}
          </div>
          <img class="peo-right" @click="toUser" src="@/assets/right.png" alt="" />
        </div>
      </div>
    </div>
    <div class="info">
      <div class="line" v-for="(item, index) in infoList" :key="index">
        <div class="peo-left">
          <img v-if="item.icon" :src="item.icon" alt="" />
          {{ item.name }}
        </div>
      </div>
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
    const toUser = (() => {
      router.push({
        name: 'user'
      })
    })
    return {
      toUser
    }
  },
  data() {
    return {
      peoList: [
        {
          icon: require("@/assets/icon1.png"),
          name: "打不死的小强",
        },
        {
          icon: require("@/assets/icon1.png"),
          name: "打不死的小强",
        },
        {
          icon: require("@/assets/icon2.png"),
          name: "打不死的小强",
        },
        {
          icon: require("@/assets/icon3.png"),
          name: "打不死的小强",
        },
      ],
      infoList: [
        {
          name: "南山街道西丽社区消防站点",
        },
        {
          icon: require("@/assets/icon1.png"),
          name: "打不死的小强",
        },
        {
          icon: require("@/assets/icon1.png"),
          name: "18834567890",
        },
        {
          icon: require("@/assets/icon2.png"),
          name: "6/8(值班/总数)",
        },
        {
          icon: require("@/assets/icon3.png"),
          name: "2/5(外出/总数)",
        },
        {
          icon: require("@/assets/icon3.png"),
          name: "245/285(正常/总数)",
        },
      ],
      tableData: [
        {
          date: "出警信息--南山街道--小型站--出警",
          name: "三小场所发生火灾",
          address: "02-22 13:23:56",
        },
        {
          date: "出警信息--南山街道--小型站--出警",
          name: "三小场所发生火灾",
          address: "02-22 13:23:56",
        },{
          date: "出警信息--南山街道--小型站--出警",
          name: "三小场所发生火灾",
          address: "02-22 13:23:56",
        },{
          date: "出警信息--南山街道--小型站--出警",
          name: "三小场所发生火灾",
          address: "02-22 13:23:56",
        },
        {
          date: "出警信息--南山街道--小型站--出警",
          name: "三小场所发生火灾",
          address: "02-22 13:23:56",
        },
      ],
    };
  },
  methods: {
    tableRowClassName() {},
  },
};
</script>
<style lang="scss" scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.bg {
  width: 100vw;
  height: 100vh;
  padding-top: 107px;
  position: relative;
  background: url(@/assets/bg.png) no-repeat;
  background-size: 100%;
  color: #fff;

  .search {
    width: 392px;
    height: 275px;
    margin-left: 62px;
    ::v-deep .el-input-group {
      height: 50px;
      border-radius: 25px;
      overflow: hidden;
    }
    ::v-deep
      .el-input-group--prepend
      .el-input-group__prepend
      .el-select
      .el-input
      .el-input__wrapper ,
      ::v-deep .el-input__wrapper,
      ::v-deep .el-input-group__append,
      ::v-deep .el-input-group__prepend{
      background: rgba(138, 138, 138, 0.53);
      box-shadow: none;
    }
    ::v-deep
      .el-input-group--prepend
      .el-input-group__prepend
      .el-select
      .el-input
      .el-input__wrapper{
      background: none;
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