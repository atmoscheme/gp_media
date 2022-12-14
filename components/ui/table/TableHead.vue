<script>
export default {
  name: "TableHead",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
// console.log(user);
</script>
<template>
  <div class="table-head">
    <div
      v-for="header in data"
      :key="header"
      class="table-head-item"
      :class="`table-head-item__${header}`"
      @click="$emit('sort', header)"
    >
      {{ header }}
    </div>
    <div class="table-head-item__url">url</div>
  </div>
</template>

<style scoped lang="scss">
.table-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  font-weight: bold;
  font-family: Dubai;
  height: 32px;
  width: 100%;
  margin-bottom: 16px;
  background-color: gray;
  color: white;
  .table-head-item {
    cursor: pointer;
  }
}
</style>
