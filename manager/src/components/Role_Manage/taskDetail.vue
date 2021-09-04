<template>
  <div class="content">
    <el-table class="taskDetail"
      :data="
        tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      style="width: 100%"
    >
      <el-table-column prop="name" label="文件名称"> </el-table-column>
      <el-table-column
        prop="type"
        label="文件类型"
        :filters="modelType"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="gettime" label="领取时间"> </el-table-column>
      <el-table-column prop="schedule" label="完成进度"> </el-table-column>
      <el-table-column prop="finishtime" label="完成时间"> </el-table-column>
      <el-table-column prop="ip" label="IP地址"> </el-table-column>
      <el-table-column label="操作">
        <el-button>查看</el-button>
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
import "@/assets/css/Role_Manage/roleManage.css";
export default {
  name: "taskDetail",
  data() {
    return {
      tableData: [
        {
          name: "2016-05-02 16:42:44",
          type: "NER",
          gettime: "2016-05-02 16:42:44",
          schedule: "xxxx",
          finishtime: "2016-05-10 16:42:44",
          ip: "xxxxx",
        },
        {
          name: "2016-05-02 16:42:44",
          type: "NER",
          gettime: "2016-05-02 16:42:44",
          schedule: "xxxx",
          finishtime: "2016-05-10 16:42:44",
          ip: "xxxxx",
        },
        {
          name: "2016-05-02 16:42:44",
          type: "NER",
          gettime: "2016-05-02 16:42:44",
          schedule: "xxxx",
          finishtime: "2016-05-10 16:42:44",
          ip: "xxxxx",
        },
        {
          name: "2016-05-02 16:42:44",
          type: "NER",
          gettime: "2016-05-02 16:42:44",
          schedule: "xxxx",
          finishtime: "2016-05-10 16:42:44",
          ip: "xxxxx",
        },
      ],
      modelType: [
        { text: "NER", value: "NER" },
        { text: "CQA", value: "CQA" },
        { text: "Intention/Action", value: "Intention/Action" },
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