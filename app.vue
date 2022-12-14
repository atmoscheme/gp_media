<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
  <TheNav></TheNav>
</template>

<style>
.page {
  margin-top: 60px;
  padding: 16px;
}
</style>
