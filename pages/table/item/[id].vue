<script lang="ts" setup>
import { getItem, getItemComments } from "~/services/api";

const route = useRoute();
const id = route.params.id;
const item = ref(await getItem(Number(id)));
const comments = ref(await getItemComments(Number(id)));

const itemData = { ...item.value, comments: comments.value };
</script>

<template>
  <UiPageWrapper>
    <UiTableItem :payload="itemData"></UiTableItem>
  </UiPageWrapper>
</template>
