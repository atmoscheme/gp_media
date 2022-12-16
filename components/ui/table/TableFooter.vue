<script setup lang="ts">
import { useTable } from "~/stores/table";
const table = useTable();
</script>
<template>
  <div class="table-footer">
    <div class="table-footer_pagination">
      page number:
      <span
        v-for="page in table.getPages"
        :key="page"
        class="table-footer_counter__item"
        :class="{
          'table-footer_pagination__item--bold': page === table.currentPage,
        }"
        @click="table.setPage(page)"
        >{{ page }}</span
      >
    </div>
    <div class="table-footer_counter">
      per page:
      <span
        v-for="item in [10, 20, 50]"
        :key="item"
        class="table-footer_counter__item"
        :class="{ 'table-footer_counter__item--bold': item === table.perPage }"
        @click="table.setPerPage(item)"
        >{{ item }}</span
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.table-footer_pagination,
.table-footer_counter {
  height: 40px;
  margin: 16px;
  &__item {
    background-color: #f6f6f6;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 8px;
    padding: 8px;
  }
  &__item--bold {
    font-weight: bold;
    background-color: gray;
  }
}
</style>
