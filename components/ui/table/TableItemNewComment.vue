<script lang="ts" setup>
import { sendItemNewComment } from "~/services/api";
defineProps({
  id: {
    type: Number,
    default: null,
  },
});
const data = reactive({
  name: "foo",
  email: "bar",
  body: "test body",
});
</script>
<template>
  <div class="table-comment-wrapper">
    <div class="table-comment-item">
      <label>Title:</label>
      <input v-model="data.title" type="text" />
      <label>Body:</label>
      <textarea v-model="data.body" />
      <button @click="sendItemNewComment(data, id, $emit('closeModal'))">
        Send form
      </button>
      <button @click="$emit('closeModal')">Cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-comment-wrapper {
  padding: 100px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;
  .table-comment-item {
    padding: 40px;
    background-color: white;
    border-radius: 30px;
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    input,
    textarea,
    button {
      margin-bottom: 16px;
    }
    button {
      width: 100px;
    }
  }
}
</style>
