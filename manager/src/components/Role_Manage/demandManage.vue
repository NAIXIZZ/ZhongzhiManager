<template>
<div class="content">
<el-table class="demand" :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
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
  <div class="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20,30,50]"
        :page-size="pageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import "@/assets/css/Role_Manage/roleManage.css";
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
      currentPage: 1,
      pageSize: 10,
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
    },
  }
};
</script>