<template>
  <div class="main">
    <!-- <div class="back">
      <el-button size="small" @click="goOff">返回</el-button>
    </div> -->
    <div class="content">
      <el-table class="dataRelease"
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
        <el-table-column label="文本标题" prop="title"> </el-table-column>
        <el-table-column
          label="文本类别"
          prop="texttype"
          :filters="textType"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column label="文本ID" prop="textid"> </el-table-column>
        <el-table-column
          label="模型支持"
          prop="model"
        ></el-table-column>
        <el-table-column label="定价" prop="price"> </el-table-column>
        <el-table-column
          label="展示状态"
          prop="disp"
          :filters="disp"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column label="发布日期" prop="date"> </el-table-column>
        <el-table-column label="操作" class="oper">
          <template slot-scope="scope">
            <el-button
              type="primary"
              plain
              @click="handleEdit(scope.$index, scope.row)"
              >数据发布</el-button
            >
            <el-button type="success" plain @click="picVisible = true"
              >图谱展示</el-button
            >
            <router-link to="viewDetail">
              <el-button type="info" plain style="margin-left: 10px">查看</el-button>
            </router-link>
          </template>

          <el-dialog
            title="发布数据"
            :visible.sync="dataVisible"
            append-to-body
          >
            <el-form :model="data" ref="data">
              <el-form-item
                prop="textid"
                label="文本ID"
                :label-width="formLabelWidth"
              >
                <el-input v-model="data.textid" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item
                prop="title"
                label="文本标题"
                :label-width="formLabelWidth"
              >
                <el-input v-model="data.title" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item
                prop="texttype"
                label="文本类别"
                :label-width="formLabelWidth"
              >
                <el-input v-model="data.texttype" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item
                prop="model"
                label="模型支持"
                :label-width="formLabelWidth"
              >
                <el-select v-model="data.model" placeholder="请选择模型">
                  <el-option
                    v-for="item in model"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                prop="price"
                label="定价"
                :label-width="formLabelWidth"
              >
                <el-input v-model="data.price" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item
                prop="desc"
                label="文本描述"
                :label-width="formLabelWidth"
              >
                <el-input v-model="data.desc" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dataVisible = false">取 消</el-button>
              <el-button type="primary" @click="dataVisible = false"
                >保 存</el-button
              >
              <el-button type="primary" @click="dataVisible = false"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-dialog
            title="提示"
            :visible.sync="picVisible"
            width="30%"
            append-to-body
          >
            <span>是否确认展示图谱？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="picVisible = false">取 消</el-button>
              <el-button type="primary" @click="picVisible = false"
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
import "@/assets/css/Data_Release/dataRelease.css";
export default {
  name: "dataRelease",
  data() {
    return {
      tableData: [
        {
          title: "aaa",
          texttype: "电子病历",
          textid: "00001",
          model: "A",
          price: "xx",
          disp: "未发布",
          date: "2021-06-10",
          desc: "xxxxx",
        },
        {
          title: "bbb",
          texttype: "诊疗分析",
          textid: "00002",
          model: "B",
          price: "xx",
          disp: "未发布",
          date: "2021-06-13",
          desc: "xxxxx",
        },
        {
          title: "ccc",
          texttype: "电子病历",
          textid: "00003",
          model: "A",
          price: "xx",
          disp: "未发布",
          date: "2021-06-10",
          desc: "xxxxx",
        },
      ],
      textType: [
        { text: "电子病历", value: "电子病历" },
        { text: "诊疗分析", value: "诊疗分析" },
        { text: "脑梗死", value: "脑梗死" },
      ],
      disp: [
        { text: "已发布", value: "已发布" },
        { text: "未发布", value: "未发布" },
      ],
      data: {
        textid: "",
        title: "",
        texttype: "",
        model: "",
        price: "",
        desc: "",
      },
      model: [
        {
          value: "A",
          label: "A",
        },
        {
          value: "B",
          label: "B",
        },
        {
          value: "C",
          label: "C",
        },
      ],
      picVisible: false,
      dataVisible: false,
      currentPage: 1,
      pageSize: 10,
      formLabelWidth: "120px",
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
    handleEdit(index, row) {
      this.dataVisible = true;
      this.data = Object.assign({}, row);
    },
  },
};
</script>