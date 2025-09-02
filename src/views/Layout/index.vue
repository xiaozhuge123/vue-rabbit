<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed  from "@/views/Layout/components/LayoutFixed.vue";
import { onMounted } from 'vue';

import { useCategoryStore } from '@/stores/category';
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutFixed/>
  <LayoutHeader />
  <LayoutNav />
  <RouterView />
  <LayoutFooter />
</template>

<style scoped>

</style>
