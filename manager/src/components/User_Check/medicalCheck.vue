<template>
  <div class="content">
    <el-table class="medicalCheck"
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      style="width: 100%"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="cardType" label="证件类型"></el-table-column>
      <el-table-column prop="cardNum" label="证件号码"></el-table-column>
      <el-table-column prop="cardPic" label="证件图片"></el-table-column>
      <el-table-column prop="organization" label="工作单位"></el-table-column>
      <el-table-column prop="professional" label="职称"></el-table-column>
      <el-table-column prop="jobNum" label="工号"></el-table-column>
      <el-table-column prop="employeeCard" label="工作证"></el-table-column>
      <el-table-column prop="time" label="申请时间" sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="success"
            icon="el-icon-check"
            class="check"
          ></el-button>
          <el-button @click="fail" icon="el-icon-close" class="fail"></el-button>
          <el-dialog title="医疗人员审核" :visible.sync="check" append-to-body>
            <p v-if="scope.row.flag == '1'">是否确认审核通过</p>
            <p v-else>是否确认审核失败</p>
            <div slot="footer" class="dialog-footer">
              <el-button @click="check = false">取 消</el-button>
              <el-button type="primary" @click="check = false"
                >确 定</el-button
              >
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import "@/assets/css/User_Check/medicalCheck.css";
export default {
  name: "medicalCheck",
  data() {
    return {
      tableData: [
        {
          userName: "张三",
          name: "张三",
          phone: "12345678901",
          cardType: "身份证",
          cardNum: "xxxxxxxxxxxxxxxxxx",
          cardPic: "",
          organization: "xxxxx",
          professional: "xxx",
          jobNum: "1231321",
          employeeCard: "",
          time: "2021-06-12",
        },
        {
          userName: "张三",
          name: "张三",
          phone: "12345678901",
          cardType: "身份证",
          cardNum: "xxxxxxxxxxxxxxxxxx",
          cardPic: "",
          organization: "xxxxx",
          professional: "xxx",
          jobNum: "1231321",
          employeeCard: "",
          time: "2021-06-12",
        },
        {
          userName: "张三",
          name: "张三",
          phone: "12345678901",
          cardType: "身份证",
          cardNum: "xxxxxxxxxxxxxxxxxx",
          cardPic: "",
          organization: "xxxxx",
          professional: "xxx",
          jobNum: "1231321",
          employeeCard: "",
          time: "2021-06-12",
        },
      ],
      check: false,
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    success() {
      this.check = true;
      flag = 1
    },
    fail() {
      this.check = true;
      flag = 0
    }
  },
};
</script>