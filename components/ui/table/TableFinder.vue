<script setup>

</script>
<template>
  <div class="table-finder">
    <input
      type="text"
      class="table-finder__input"
      placeholder="find by title"
      @input="$emit('find', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="scss">
.table-finder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  padding: 16px;
  &__input {
    width: 95%;
    height: 40px;
  }
}
</style>
