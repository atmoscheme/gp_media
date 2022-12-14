<template>
  <nav class="nav">
    <ul>
      <li><NuxtLink to="/table">Table</NuxtLink></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
};
</script>

<style scoped>
.nav {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 2rem;
  height: 60px;
  background-color: blue;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Agency FB";
}
</style>
