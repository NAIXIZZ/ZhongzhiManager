<template>
  <div class="main">
    <div class="back">
      <el-button size="small" @click="goOff">返回</el-button>
    </div>
    <div class="content">
      <el-table :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)" class="aiLabel">
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
        <el-table-column label="操作" class="oper">
          <el-button type="success" plain>选择</el-button>
          <el-button type="danger" plain>暂停</el-button>
          <el-button type="warning" plain>撤销</el-button>
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
import "@/assets/css/Data_Manage/AILabel.css";
export default {
  name: "AILabel",
  data() {
    return {
      tableData: [
        {
          modelname: "aaa",
          modeltype: "NER",
          modelid: "00001",
          modeleffect: "97%",
          desc: "xxxxx",
        },
        {
          modelname: "bbb",
          modeltype: "CQA",
          modelid: "00002",
          modeleffect: "90%",
          desc: "xxx",
        },
        {
          modelname: "ccc",
          modeltype: "Intention/Action",
          modelid: "00003",
          modeleffect: "95%",
          desc: "xxxxx",
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
        const property = column['property'];
        return row[property] === value;
      }
  },
};
</script>