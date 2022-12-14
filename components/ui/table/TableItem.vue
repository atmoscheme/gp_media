<script lang="ts" setup>
import { PropType } from "vue";
const modalOpened = ref(false);
defineProps({
  payload: {
    type: Object as PropType<TableItem>,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="table-item">
    <h1>{{ payload.title }}</h1>
    <p>{{ payload.body }}</p>
    <div class="table-item-comments">
      <h2>comments:</h2>
      <div
        v-for="comment in payload.comments"
        :key="comment.id"
        class="table-item-comments__item"
      >
        <h3>{{ comment.name }}</h3>
        <h4>{{ comment.email }}</h4>
        <div>{{ comment.body }}</div>
      </div>
    </div>
    <UiTableItemNewComment
      v-if="modalOpened"
      :id="payload.id"
      @closeModal="modalOpened = false"
    ></UiTableItemNewComment>
    <button @click="modalOpened = true">Create New Comment</button>
  </div>
</template>

<style lang="scss" scoped>
.table-item-comments {
  &__item {
    border-radius: 4px;
    background-color: #d2cfcf;
    padding: 8px;
    margin-bottom: 8px;
  }
}
</style>
