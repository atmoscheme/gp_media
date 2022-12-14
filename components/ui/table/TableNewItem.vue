<script lang="ts" setup>
import { sendNewItem } from "~/services/api";
const data = reactive({
  title: "foo",
  body: "bar",
  userId: 666,
});
</script>
<template>
  <div class="table-edit-wrapper">
    <div class="table-edit-item">
      <label>Title:</label>
      <input v-model="data.title" type="text" />
      <label>Body:</label>
      <textarea v-model="data.body" />
      <button @click="sendNewItem(data, $emit('closeModal'))">Send form</button>
      <button @click="$emit('closeModal')">Cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-edit-wrapper {
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
  .table-edit-item {
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
