<template>
  <img :src="icon" :alt="'dsfdf'" />
</template>

<script lang="ts" setup>
import icons from '@/assets/icons';
import { useWeatherStore } from '~/features/weather/store';
const store = useWeatherStore();

const props = defineProps({
  weathercode: {
    type: Number,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
});

const iconTime = (): 'dayIcon' | 'nightIcon' => {
  console.log('Rerender');
  return 'nightIcon';
};

const icon = computed(() => {
  return icons[props.weathercode.toString() as keyof typeof icons][iconTime()];
  console.log(props.weathercode);
});
</script>
