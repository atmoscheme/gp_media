<script>
export default {
  name: "TableRow",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<template>
  <div class="table-row">
    <div
      v-for="column in columns"
      :key="column"
      class="table-row-column"
      :class="`table-row-column__${column}`"
    >
      {{ data[column] }}
    </div>
    <NuxtLink class="table-row-column__url" :to="`table/item/${data.id}`">
      {{ `table/item/${data.id}` }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.table-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid black;
  height: 32px;
  width: 100%;
  overflow: hidden;
  &:hover {
    background-color: gray;
  }
}
</style>
