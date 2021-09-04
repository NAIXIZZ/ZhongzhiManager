<template>
  <div class="main">
    <div class="operBar">
      <div class="search">
        <el-select
          v-model="filesel"
          clearable
          placeholder="全部"
          class="file_select"
        >
          <el-option
            v-for="item in filesel"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <div class="file_search">
          <el-input placeholder="搜索文件" v-model="filesea" clearable>
          </el-input>
          <el-button type="info" plain>搜索</el-button>
        </div>
      </div>
    </div>
    <div class="content">
      <el-table class="commentManage"
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%"
      >
        <el-table-column prop="desc" label="问题描述"></el-table-column>
        <el-table-column prop="content" label="问题内容"></el-table-column>
        <el-table-column prop="answer" label="标准答案"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-edit"
              class="task_edit"
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>
            <el-dialog title="回复" :visible.sync="dialogFormVisible">
              <el-form :model="form" ref="form">
                <el-form-item
                  prop="desc"
                  label="问题描述"
                  :label-width="formLabelWidth"
                >
                  <p>{{ form.desc }}</p>
                </el-form-item>
                <el-form-item
                  prop="content"
                  label="问题内容"
                  :label-width="formLabelWidth"
                >
                  <p>{{ form.content }}</p>
                </el-form-item>
                <el-form-item
                  prop="answer"
                  label="标准答案"
                  :label-width="formLabelWidth"
                >
                  <el-input v-model="form.answer" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">提 交</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >取 消</el-button
                >
              </div>
            </el-dialog>
            <el-button
              icon="el-icon-delete"
              class="data_del"
              style="margin-left: 10px"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
import "@/assets/css/Comment_Manage/commentManage.css";
export default {
  name: "commentManage",
  data() {
    return {
      filesel: "",
      filesea: "",
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData: [
        {
          desc: "xxxxxx",
          content: "aaaaaaaaa",
          answer: "aa",
        },
        {
          desc: "xxxxxx",
          content: "bbbbbb",
          answer: "",
        },
        {
          desc: "xxxxxx",
          content: "xxxxxxxxxxxx",
          answer: "ccc",
        },
        {
          desc: "xxxxxx",
          content: "xxxxxxxxxxxx",
          answer: "xxx",
        },
        {
          desc: "xxxxxx",
          content: "xxxxxxxxxxxx",
          answer: "xxx",
        },
      ],
      form: {
        desc: "",
        content: "",
        answer: "",
      },
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
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      this.form = Object.assign({}, row);
    },
  },
};
</script>