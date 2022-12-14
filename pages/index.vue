<script setup>
const router = useRouter();
if (router.currentRoute.value.fullPath === "/") {
  router.push("table");
}
</script>
