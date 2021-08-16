<template>

    <div class="head_main">
      <div class="head_pic">
          <img src="../assets/logo.png" alt="众智医疗">
      </div>
      <div class="head_content">
          <router-link to="DS">数据管理</router-link>
          <router-link to="">人员管理</router-link>
          <router-link to="">用户审核</router-link>
          <router-link to="">评论管理</router-link>
          <router-link to="">模型展示</router-link>
          <router-link to="">数据发布</router-link>
          <router-link to="">退出</router-link>
      </div>
    </div>

</template>

<script>
export default {
  name: "Head",
};
</script>

<style>
.head_main{
    width: 100%;
    height: 10%;
    background: white;
    box-shadow: 0px 5px 5px #888888;
    display: flex;
    flex-direction: row;
}
.head_pic{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.head_pic img{
    width: 60%;
    min-width: 100px;
}
.head_content{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.head_content a{
    font-size: 100%;
    text-decoration: none;
    color: #817D7D;
}
.head_content a:hover{
    text-decoration: underline;
}
</style>
