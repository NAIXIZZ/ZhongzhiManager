<template>
<el-table :data="tableData" style="width: 100%">
    <el-table-column type="index"> </el-table-column>
    <el-table-column prop="userName" label="用户名"> </el-table-column>
    <el-table-column prop="IndiName" label="个人姓名/法人姓名"> </el-table-column>
    <el-table-column
      prop="enterprise"
      label="企业名称"
    >
    </el-table-column>
    <el-table-column prop="phone" label="手机号"></el-table-column>
    <el-table-column prop="cerType" label="证件类型"></el-table-column>
    <el-table-column prop="cerNum" label="证件号码"></el-table-column>
    <el-table-column prop="cerPic" label="证件图片"></el-table-column>
    <el-table-column prop="email" label="电子邮箱"></el-table-column>
    <el-table-column prop="cooperate" label="合作意向"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "demandManage",
  data() {
    return {
      tableData: [
        {
          userName: "张三",
          IndiName: "张三",
          enterprise: "xxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
          cerType: "身份证",
          cerNum: "xxxxxxxxxxx",
          email: "xxxxxxxx@xxx.com",
          cooperate: "xxxxxxxxx"
        },
        {
          userName: "张三",
          IndiName: "张三",
          enterprise: "xxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
          cerType: "身份证",
          cerNum: "xxxxxxxxxxx",
          email: "xxxxxxxx@xxx.com",
          cooperate: "xxxxxxxxx"
        },
        {
          userName: "张三",
          IndiName: "张三",
          enterprise: "xxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
          cerType: "身份证",
          cerNum: "xxxxxxxxxxx",
          email: "xxxxxxxx@xxx.com",
          cooperate: "xxxxxxxxx"
        },
      ],
    }
  }
};
</script>