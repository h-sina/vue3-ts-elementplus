<template>
  <div class="message">
    <div class="add">
      <el-button @click="data.dialogVisible = true">留言</el-button>
    </div>
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in data.commentList"
        :key="index"
        :timestamp="moment(item.createdTime).format('YYYY-MM-DD HH:mm:ss')"
      >{{ item.context }}</el-timeline-item>
    </el-timeline>
    <el-dialog v-model="data.dialogVisible" title="留言欸😎" width="50%" :before-close="handleClose">
      <el-form :model="data.form">
        <el-form-item>
          <el-input v-model="data.form.context"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="data.dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="confirmComment">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { reactive, defineComponent, onMounted } from "vue";
import LoadingCustom from "../components/Loading.vue";
import moment from "moment";
import qs from "qs";
import { ElMessage } from "element-plus";
const data = reactive({
  commentList: [],
  isLoading: false,
  dialogVisible: false,
  form: {
    context: "",
    createdTime: ""
  }
});
components: {
  LoadingCustom;
}
// export default defineComponent({
//   setup(props, context) {

//   }
// })

const getComment = () => {
  axios({
    url: "http://localhost:3007/my/comment",
    method: "get",
    headers: { Authorization: window.sessionStorage.token }
  })
    .then(res => {
      data.commentList = res.data;
      data.isLoading = false;
    })
    .catch(err => {
      alert(err);
    });
};
const handleClose = () => {
  data.dialogVisible = false;
  data.form = {};
};
const confirmComment = () => {
  data.form.createdTime = new Date();
  moment(data.form.createdTime).format("YYYY-MM-DD HH:mm:ss");
  axios({
    url: "http://localhost:3007/my/addcomment",
    method: "post",
    data: qs.stringify(data.form),
    headers: { Authorization: window.sessionStorage.token }
  })
    .then(res => {
      if (res.data.status == 0) {
        ElMessage({
          message: "留言成功！🤭",
          type: "success"
        });
      } else {
        ElMessage({
          message: "留言失败！🤪",
          type: "error"
        });
      }
      getComment();
    })
    .catch(err => {
      alert(err);
    });
  handleClose();
};
onMounted(() => {
  getComment()
})
</script>

<style scoped>
.message {
  margin: 30px;
  text-align: left;
}
.add {
  margin: 10px;
}
</style>
