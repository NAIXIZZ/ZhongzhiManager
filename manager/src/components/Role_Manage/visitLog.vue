<template>
  <div class="content">
    <el-table class="visitLog"
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      style="width: 100%"
    >
      <el-table-column prop="time" label="访问时间" sortable> </el-table-column>
      <el-table-column
        prop="level"
        label="日志级别"
        :filters="modelType"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="type" label="日志类型"> </el-table-column>
      <el-table-column prop="ip" label="访问IP"> </el-table-column>
      <el-table-column prop="browser" label="浏览器"> </el-table-column>
      <el-table-column prop="source" label="源位置"> </el-table-column>
      <el-table-column prop="url" label="访问URL"> </el-table-column>
      <el-table-column prop="content" label="日志内容"> </el-table-column>
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
import "@/assets/css/Role_Manage/roleManage.css";
export default {
  name: "visitLog",
  data() {
    return {
      tableData: [
        {
          time: "2016-05-02 16:42:44",
          level: "信息",
          type: "用户登录",
          ip: "xxxx",
          browser: "Chrome",
          source: "中国，福建省，厦门市",
          url: "xxxxxx",
          content: "登录成功"
        },
        {
          time: "2017-05-02 16:42:44",
          level: "信息",
          type: "用户登录",
          ip: "xxxx",
          browser: "Chrome",
          source: "中国，福建省，厦门市",
          url: "xxxxxx",
          content: "登录成功"
        },
        {
          time: "2016-05-02 20:42:44",
          level: "信息",
          type: "用户登录",
          ip: "xxxx",
          browser: "Chrome",
          source: "中国，福建省，厦门市",
          url: "xxxxxx",
          content: "登录成功"
        },
        {
          time: "2016-05-02 16:04:44",
          level: "信息",
          type: "用户登录",
          ip: "xxxx",
          browser: "Chrome",
          source: "中国，福建省，厦门市",
          url: "xxxxxx",
          content: "登录成功"
        },
      ],
      modelType: [
        { text: "紧急", value: "紧急" },
        { text: "警告", value: "警告" },
        { text: "严重", value: "严重" },
        { text: "错误", value: "错误" },
        { text: "提醒", value: "提醒" },
        { text: "注意", value: "注意" },
        { text: "信息", value: "信息" },
        { text: "调试", value: "调试" },
      ],
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
  },
};
</script>