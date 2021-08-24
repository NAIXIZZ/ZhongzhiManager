<template>
  <div class="main">
    <div class="operBar">
      <div class="back">
        <el-button size="small" @click="goOff">返回</el-button>
      </div>
      <div class="oper">
        <el-button type="success" size="small" round>智能预标注</el-button>
        <el-button type="success" size="small" round @click="handleAdd"
          >新增配置</el-button
        >
      </div>
    </div>
    <div class="content">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column prop="ConfigID" label="ConfigID"> </el-table-column>
        <el-table-column prop="options" label="选项"> </el-table-column>
        <el-table-column prop="ENoptions" label="英文选项"> </el-table-column>
        <el-table-column prop="color" label="颜色"> </el-table-column>
        <el-table-column label="编辑" width="100">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="删除" width="100">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click="del(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :title="dialog_title[title]"
        :visible.sync="add_editDialog"
        append-to-body
      >
        <el-form :model="add_editForm" :rules="rules" ref="add_editForm">
          <el-form-item
            label="ConfigID"
            :label-width="formLabelWidth"
            prop="ConfigID"
            required
          >
            <el-input
              v-model="add_editForm.ConfigID"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="选项"
            :label-width="formLabelWidth"
            prop="options"
            required
          >
            <el-input
              v-model="add_editForm.options"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="英文选项"
            :label-width="formLabelWidth"
            prop="ENoptions"
            required
          >
            <el-input
              v-model="add_editForm.ENoptions"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="类型" :label-width="formLabelWidth" prop="type">
            <!-- <p v-model="add_editForm.ENoptions"></p> -->
          </el-form-item>
          <el-form-item
            label="颜色"
            :label-width="formLabelWidth"
            prop="color"
            required
          >
            <el-input
              v-model="add_editForm.color"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            v-if="title == 'add'"
            @click="add('add_editForm')"
            >提 交</el-button
          >
          <el-button type="primary" v-else @click="edit('add_editForm')"
            >提 交</el-button
          >
          <el-button @click="add_editDialog = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import "@/assets/css/editConfiguration.css";
export default {
  name: "editConfiguration",
  data() {
    return {
      tableData: [
        {
          ConfigID: "0",
          options: "疾病和诊断",
          ENoptions: "diseases",
          color: "#eac0a2",
        },
        {
          ConfigID: "1",
          options: "症状和体征",
          ENoptions: "symptom",
          color: "#619dff",
        },
        {
          ConfigID: "2",
          options: "治疗方案",
          ENoptions: "treatment plan",
          color: "#9d61ff",
        },
        {
          ConfigID: "3",
          options: "检验和检查",
          ENoptions: "examination",
          color: "#ff9d61",
        },
      ],
      dialog_title: {
        add: "新增配置",
        edit: "编辑配置",
      },
      title: "",
      add_editForm: {
        ConfigID: "",
        options: "",
        ENoptions: "",
        color: "",
      },
      add_editDialog: false,
    };
  },
  methods: {
    indexMethod(index) {
      return index;
    },
    handleEdit(index, row) {
      this.add_editDialog = true;
      this.title = "edit";
      this.add_editForm = Object.assign({}, row);
    },
    handleAdd() {
      this.add_editDialog = true;
      this.title = "add";
      this.add_editForm = {
        ConfigID: "",
        options: "",
        ENoptions: "",
        color: "",
      };
    },
    goOff() {
      this.$router.go(-1);
    },
  },
};
</script>
