<template>
  <div class="main">
    <!-- <div class="back">
      <el-button size="small" @click="goOff">返回</el-button>
    </div> -->
    <div class="content">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="文本描述：">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="模型名称" prop="modelname"> </el-table-column>
        <el-table-column
          label="模型类别"
          prop="modeltype"
          :filters="modelType"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column label="模型ID" prop="modelid"> </el-table-column>
        <el-table-column label="模型效果" prop="modeleffect" sortable>
        </el-table-column>
        <el-table-column
          label="发布状态"
          prop="disp"
          :filters="disp"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column label="操作" class="oper">
          <el-button type="success" plain @click="dialogVisible = true"
            >发布</el-button
          >
          <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span>是否确认展示模型？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
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
import "@/assets/css/Model_Display/modelDisplay.css";
export default {
  name: "modelDisplay",
  data() {
    return {
      tableData: [
        {
          modelname: "aaa",
          modeltype: "NER",
          modelid: "00001",
          modeleffect: "97%",
          disp: "未发布",
          desc: "xxxxx",
        },
        {
          modelname: "bbb",
          modeltype: "CQA",
          modelid: "00002",
          modeleffect: "90%",
          disp: "已发布",
          desc: "xxx",
        },
        {
          modelname: "ccc",
          modeltype: "Intention/Action",
          modelid: "00003",
          modeleffect: "95%",
          disp: "已发布",
          desc: "xxxxx",
        },
      ],
      modelType: [
        { text: "NER", value: "NER" },
        { text: "CQA", value: "CQA" },
        { text: "Intention/Action", value: "Intention/Action" },
      ],
      disp: [
        { text: "已发布", value: "已发布" },
        { text: "未发布", value: "未发布" },
      ],
      dialogVisible: false,
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
    goOff() {
      this.$router.go(-1);
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>