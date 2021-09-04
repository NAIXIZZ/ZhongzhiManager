<template>
<div class="content">
  <el-table class="medical" :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
    <el-table-column type="index"> </el-table-column>
    <el-table-column prop="userName" label="用户姓名"> </el-table-column>
    <el-table-column prop="userId" label="用户ID" sortable> </el-table-column>
    <el-table-column
      prop="manager"
      label="是否为管理员"
      :filters="modelType"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column prop="integral" label="积分" sortable> </el-table-column>
    <el-table-column prop="IdCard" label="身份证号"> </el-table-column>
    <el-table-column prop="phone" label="手机号"> </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="manageset = true"
          icon="el-icon-setting"
          class="task_set"
        ></el-button>
        <el-button icon="el-icon-delete" class="data_del"></el-button>
        <router-link to="/userDetail">
          <el-button icon="el-icon-tickets" class="task_label" style="margin-left:10px"></el-button>
        </router-link>
        <el-dialog title="权限管理" :visible.sync="manageset" append-to-body>
          <p v-if="scope.row.manager ">管理员权限删除</p>
          <p v-else>设置为管理员</p>
          <div slot="footer" class="dialog-footer">
            <el-button @click="manageset = false">取 消</el-button>
            <el-button type="primary" @click="manageset = false"
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
  name: "medicalManage",
  data() {
    return {
      tableData: [
        {
          userName: "张三",
          userId: "00001",
          manager: true,
          integral: "1200",
          IdCard: "xxxxxxxxxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
        },
        {
          userName: "李四",
          userId: "00002",
          manager: "是",
          integral: "120",
          IdCard: "xxxxxxxxxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
        },
        {
          userName: "王五",
          userId: "00003",
          manager: "否",
          integral: "1300",
          IdCard: "xxxxxxxxxxxxxxxxxx",
          phone: "xxxxxxxxxxx",
        },
      ],
      modelType: [
        { text: "是", value: "是" },
        { text: "否", value: "否" },
      ],
      manageset: false,
      currentPage: 1,
      pageSize: 10,
    };
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
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>