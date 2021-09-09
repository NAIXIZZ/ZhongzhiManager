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
      <div class="upload">
        <el-button
          size="small"
          type="primary"
          @click="uploadbtn = true"
          class="uploadbtn"
          >上传原始数据集</el-button
        >
        <el-dialog title="选取原始数据集" :visible.sync="uploadbtn" width="30%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="dataUpload"
            accept=".ner,.cqa,.intention,.zip"
          >
            <el-button size="small" type="primary">上传原始数据集</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传ner/cqa/intention/zip文件
            </div>
          </el-upload>
          <span slot="footer" class="dialog-footer">
            <el-button @click="uploadbtn = false">取 消</el-button>
            <el-button type="primary" @click="uploadbtn = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </div>
    <div class="content">
      <el-table
        class="ds"
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-table
              :data="props.row.taskData"
              :default-sort="{ prop: 'date', order: 'descending' }"
              class="demo-table-expand"
            >
              <el-table-column prop="taskname" label="任务名称">
              </el-table-column>
              <el-table-column prop="progress" label="完成进度">
              </el-table-column>
              <el-table-column prop="config" label="配置文件">
              </el-table-column>
              <el-table-column prop="label" label="是否已预标注">
              </el-table-column>
              <el-table-column prop="staff" label="分配人员"> </el-table-column>
              <el-table-column prop="taskauthor" label="创建者">
              </el-table-column>
              <el-table-column prop="taskdate" label="创建时间" sortable>
              </el-table-column>
              <el-table-column label="操作">
                <el-button
                  @click="taskset = true"
                  icon="el-icon-setting"
                  class="task_set"
                ></el-button>
                <el-dialog
                  title="设置任务"
                  :visible.sync="taskset"
                  append-to-body
                >
                  <el-form :model="setform">
                    <el-form-item
                      label="分配人员"
                      :label-width="formLabelWidth"
                    >
                      <el-select
                        v-model="setform.person"
                        multiple
                        placeholder="请选择指派用户"
                      >
                        <el-option
                          v-for="item in person"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="优先级" :label-width="formLabelWidth">
                      <el-select
                        v-model="setform.priority"
                        placeholder="请选择优先级"
                      >
                        <el-option
                          v-for="item in priority"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="每包份数"
                      :label-width="formLabelWidth"
                    >
                      <el-select
                        v-model="setform.number"
                        placeholder="请选择每包份数"
                      >
                        <el-option
                          v-for="item in number"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="任务包类别"
                      :label-width="formLabelWidth"
                    >
                      <el-select
                        v-model="setform.tasktype"
                        placeholder="请选择类别"
                      >
                        <el-option
                          v-for="item in tasktype"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="医学类别"
                      :label-width="formLabelWidth"
                    >
                      <el-select
                        v-model="setform.medtype"
                        placeholder="请选择类别"
                      >
                        <el-option
                          v-for="item in medtype"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="每包积分"
                      :label-width="formLabelWidth"
                    >
                      <el-input
                        v-model="setform.integral"
                        autocomplete="off"
                        placeholder="请输入积分"
                        style="width: 221px"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="截止日期"
                      :label-width="formLabelWidth"
                    >
                      <el-date-picker
                        v-model="setform.deadline"
                        type="date"
                        placeholder="选择截止日期"
                      >
                      </el-date-picker>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="taskset = false">取 消</el-button>
                    <el-button type="primary" @click="taskset = false"
                      >确 定</el-button
                    >
                  </div>
                </el-dialog>
                <router-link to="editConfiguration">
                  <el-button icon="el-icon-edit" class="task_edit"></el-button>
                </router-link>

                <el-button
                  icon="el-icon-download"
                  onclick="window.location.href='https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'"
                  class="data_download"
                ></el-button>
                <el-button icon="el-icon-delete" class="data_del"></el-button>
                <router-link to="AILabel">
                  <el-button icon="el-icon-cpu" class="task_label"></el-button>
                </router-link>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="数据集名称" prop="dataname"> </el-table-column>
        <el-table-column label="创建者" prop="dataauthor"> </el-table-column>
        <el-table-column label="创建时间" prop="datadate" sortable>
        </el-table-column>
        <el-table-column label="操作" class="oper">
          <el-button
            size="small"
            type="primary"
            @click="conf_upload = true"
            icon="el-icon-upload2"
            class="conf_upload"
          >
          </el-button>
          <el-dialog
            title="选取配置文件"
            :visible.sync="conf_upload"
            width="30%"
            append-to-body
          >
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="confUpload"
            >
              <el-button size="small" type="primary">上传配置文件</el-button>
            </el-upload>
            <span slot="footer" class="dialog-footer">
              <el-button @click="conf_upload = false">取 消</el-button>
              <el-button type="primary" @click="conf_upload = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
          <el-button
            icon="el-icon-download"
            onclick="window.location.href='https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'"
            class="data_download"
          ></el-button>
          <el-button icon="el-icon-delete" class="data_del"></el-button>
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
import "@/assets/css/Data_Manage/DS.css";
import {
  findAll,
} from "../network/DataManage";
export default {
  name: "DS",
  data() {
    return {
      filesel: [
        {
          value: "NER",
          label: "NER",
        },
        {
          value: "CQA",
          label: "CQA",
        },
        {
          value: "Intention/Action",
          label: "Intention/Action",
        },
        {
          value: "NER/Relation",
          label: "NER/Relation",
        },
      ],
      filesel: "",
      filesea: "",
      uploadbtn: false,
      conf_upload: false,
      dataUpload: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      confUpload: [
        // {
        //   name: "",
        //   url: ""
        // }
      ],
      tableData: [
        // {
        //   dataname: "数据集1",
        //   dataauthor: "admin1",
        //   datadate: "2021-06-11",
        //   taskData: [
        //     {
        //       taskname: "NER NER01",
        //       progress: "未完成",
        //       config: "已上传",
        //       label: "是",
        //       staff: "test1",
        //       taskauthor: "admin2",
        //       taskdate: "2021-06-12",
        //     },
        //   ],
        // },
        // {
        //   dataname: "数据集2",
        //   dataauthor: "admin1",
        //   datadate: "2021-06-10",
        //   taskData: [
        //     {
        //       taskname: "NER NER01",
        //       progress: "未完成",
        //       config: "已上传",
        //       label: "是",
        //       staff: "test1",
        //       taskauthor: "admin2",
        //       taskdate: "2021-06-12",
        //     },
        //   ],
        // },
        // {
        //   dataname: "数据集3",
        //   dataauthor: "admin1",
        //   datadate: "2021-06-11",
        //   taskData: [
        //     {
        //       taskname: "NER NER01",
        //       progress: "未完成",
        //       config: "已上传",
        //       label: "是",
        //       staff: "test1",
        //       taskauthor: "admin2",
        //       taskdate: "2021-06-12",
        //     },
        //   ],
        // },
        // {
        //   dataname: "数据集4",
        //   dataauthor: "admin1",
        //   datadate: "2021-06-12",
        //   taskData: [
        //     {
        //       taskname: "NER NER01",
        //       progress: "未完成",
        //       config: "已上传",
        //       label: "是",
        //       staff: "test1",
        //       taskauthor: "admin2",
        //       taskdate: "2021-06-12",
        //     },
        //   ],
        // },
        // {
        //   dataname: "数据集5",
        //   dataauthor: "admin1",
        //   datadate: "2021-06-13",
        //   taskData: [
        //     {
        //       taskname: "NER NER01",
        //       progress: "未完成",
        //       config: "已上传",
        //       label: "是",
        //       staff: "test1",
        //       taskauthor: "admin2",
        //       taskdate: "2021-06-12",
        //     },
        //   ],
        // },
      ],
      taskset: false,
      setform: {
        person: "",
        priority: "",
        number: "",
        tasktype: "",
        medtype: "",
        integral: "",
        deadline: "",
      },
      formLabelWidth: "120px",
      person: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      priority: [],
      number: [],
      tasktype: [],
      medtype: [],
      deadline: "",
      currentPage: 1,
      pageSize: 10,
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      findAll().then((res) => {
        this.tableData = [];
        this.tableData = res;
        console.log(res);
      });
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>