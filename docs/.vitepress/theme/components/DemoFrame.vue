<template>
  <div class="demo-frame">
    <div class="demo-frame__toolbar">
      <span class="demo-frame__dot" />
      <span class="demo-frame__title">{{ title }}</span>
      <button class="demo-frame__action" type="button" @click="goHome">首页</button>
      <button class="demo-frame__action" type="button" @click="reload">刷新</button>
      <a class="demo-frame__open" :href="frameSrc" target="_blank" rel="noreferrer">打开</a>
    </div>
    <div class="demo-frame__device">
      <div class="demo-frame__status">
        <span>9:41</span>
        <span class="demo-frame__status-indicator" />
      </div>
      <iframe :key="frameKey" class="demo-frame__iframe" :src="frameSrc" :title="title" />
    </div>
    <div class="demo-frame__path">{{ displayPath }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    path: string;
    title?: string;
  }>(),
  {
    title: '组件演示',
  },
);

const frameKey = ref(0);
const currentPath = ref(props.path);

watch(
  () => props.path,
  (value) => {
    currentPath.value = value;
    frameKey.value += 1;
  },
);

const trimTrailingSlash = (value: string) => value.replace(/\/$/, '');

const getDefaultDemoBase = () => {
  if (import.meta.env.VITE_DEMO_BASE) {
    return import.meta.env.VITE_DEMO_BASE;
  }

  if (import.meta.env.DEV) {
    return 'http://127.0.0.1:5175';
  }

  return `${import.meta.env.BASE_URL}demo/`;
};

const demoBase = computed(() => trimTrailingSlash(getDefaultDemoBase()));

const normalizePath = (path: string) => (path.startsWith('/') ? path : `/${path}`);

const frameSrc = computed(() => {
  const normalizedPath = normalizePath(currentPath.value);
  return `${demoBase.value}/#${normalizedPath}`;
});

const displayPath = computed(() => normalizePath(currentPath.value));

const reload = () => {
  frameKey.value += 1;
};

const goHome = () => {
  currentPath.value = '/pages/index/index';
  frameKey.value += 1;
};
</script>
