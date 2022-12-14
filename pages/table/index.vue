<script lang="ts" setup>
import { useTable } from "~/stores/table";
import { getTableData } from "~/services/api";
const table = useTable();

// data
const data: TableData = reactive({
  items: [],
  tableHeaders: ["id", "title", "userId", "body"],
});

// methods

// fetch users from  api
const getData = async () => {
  data.items = await getTableData(table);
};

getData();

// watchers
watch(table, () => getData());
</script>
<template>
  <UiPageWrapper>
    <UiTableMain :payload="data"></UiTableMain>
  </UiPageWrapper>
</template>

<style lang="scss">
.table-wrapper {
  .table-head-item,
  .table-row-column {
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    &__id,
    &__userId {
      width: 5%;
    }
    &__body,
    &__title {
      width: 35%;
    }
    &__url {
      width: 20%;
    }
  }
}
</style>
