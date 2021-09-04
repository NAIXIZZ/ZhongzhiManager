<template>
  <div class="main">
    <div class="operBar">
      <div class="left">
        <div class="userid">
          <p>用户ID</p>
          <p></p>
        </div>
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
      <div class="back">
        <router-link to="/roleManage">
          <el-button size="small">返回</el-button>
        </router-link>
      </div>
    </div>
    <div class="left">
      <router-link to="visitLog">
        <el-button type="text" :class="{ active: isLog }" @click="log"
          >访问日志</el-button
        >
      </router-link>
      <span>|</span>
      <router-link to="taskDetail">
        <el-button type="text" :class="{ active: isTask }" @click="task"
          >任务详情</el-button
        >
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "@/assets/css/Role_Manage/roleManage.css";
export default {
  name: "userDetail",
  data() {
    return {
      usersea: "",
      isLog: true,
      isTask: false,
    };
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    },
    log() {
      this.isLog = true;
      this.isTask = false;
    },
    task() {
      this.isLog = false;
      this.isTask = true;
    },
  },
};
</script>