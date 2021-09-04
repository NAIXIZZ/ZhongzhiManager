<template>
  <div class="main">
    <div class="operBar">
      <div class="left">
        <router-link to="medicalManage">
          <el-button :class="{ active: isMedical }" type="text" @click="medical"
            >医疗人员管理</el-button
          >
        </router-link>
        <span>|</span>
        <router-link to="demandManage">
          <el-button :class="{ active: isDemand }" type="text" @click="demand"
            >数据需求方管理</el-button
          >
        </router-link>
        <div class="file_search">
          <el-input
            placeholder="搜索用户"
            size="small"
            v-model="usersea"
            clearable
          >
          </el-input>
          <el-button type="info" plain size="small">搜索</el-button>
        </div>
      </div>
      <div class="right">
        <el-button type="success" plain size="small" icon="el-icon-download"
          >下载</el-button
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import "@/assets/css/Role_Manage/roleManage.css";
export default {
  name: "roleManage",
  data() {
    return {
      usersea: "",
      isMedical: true,
      isDemand: false,
    };
  },
  methods: {
    medical() {
      this.isMedical = true;
      this.isDemand = false;
    },
    demand() {
      this.isMedical = false;
      this.isDemand = true;
    },
  },
};
</script>