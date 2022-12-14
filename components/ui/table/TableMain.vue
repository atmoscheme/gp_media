<script setup lang="ts">
import { PropType } from "vue";
const props = defineProps({
  payload: {
    type: Object as PropType<TableData>,
    default: () => ({}),
  },
});

const payload = reactive(props.payload);
const tableHeaders = computed(() => payload.tableHeaders);
const sortIndex = ref(tableHeaders.value[0]);
const findText = ref("");

const modalOpened = ref(false);

// methods
// ---------
const sortData = (index: keyof TableItem) => {
  sortIndex.value = index;
};
const findData = (text: string) => {
  findText.value = text;
};

const sortedData = computed(() => {
  let data = payload.items;
  const index = sortIndex.value;
  if (findText.value) {
    data = data.filter((i) => i.title.includes(findText.value));
  }
  return data.sort((a: TableItem, b: TableItem) => {
    if (a[index] < b[index]) {
      return -1;
    }
    if (a[index] > b[index]) {
      return 1;
    }
    return 0;
  });
});
</script>
<template>
  <div class="table-wrapper">
    <UiTableHead :data="payload.tableHeaders" @sort="sortData" />
    <UiTableFinder @find="findData" />
    <div class="table-rows">
      <UiTableRow
        v-for="item in sortedData"
        :key="item.id"
        :data="item"
        :columns="payload.tableHeaders"
      />
      <h3 v-if="!sortedData.length">Empty result</h3>
    </div>
    <UiTableFooter />
    <UiTableNewItem
      v-if="modalOpened"
      @closeModal="modalOpened = false"
    ></UiTableNewItem>
    <button @click="modalOpened = true">Create item</button>
  </div>
</template>

<style lang="scss" scoped>
.table-rows {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
