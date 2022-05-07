<template>
	<n-config-provider :theme="appStore.theme">
		<router-view />
	</n-config-provider>
</template>
<script setup lang="ts">
import useAppStore from '@/store/module/app';
const appStore = useAppStore();
</script>

<style>
@import 'nprogress/nprogress.css';
#nprogress .bar {
	background: red !important;
}
</style>
