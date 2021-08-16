<template>
  <div class="main">
    <div class="operBar">
      <div class="search">
        <el-select v-model="value" placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input placeholder="搜索文件" v-model="input" clearable>
        </el-input>
        <el-button type="info" plain>搜索</el-button>
      </div>
      <div class="upload"></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "DS",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      input: "",
    };
  },
};
</script>

<style>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
