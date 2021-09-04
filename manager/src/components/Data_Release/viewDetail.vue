<template>
  <div class="main">
    <div class="topBar">
      <div class="info">
          <span>文本ID：</span>
          <span></span>
          <span>文本类别：</span>
          <span></span>
          <span>文本标题：</span>
          <span></span>
          <span>发布日期：</span>
          <span></span>
      </div>
      <div class="back">
        <el-button size="small" @click="goOff">返回</el-button>
      </div>
    </div>
    <div class="con">
        <div class="text"></div>
        <div class="pic"></div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/Data_Release/viewDetail.css";
export default {
  name: "viewDetail",
  data() {
    return {};
  },
  methods: {
      goOff() {
      this.$router.go(-1);
    },
  },
};
</script>
