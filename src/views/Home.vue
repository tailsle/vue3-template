<template>
	<div class="home">
		<n-button tertiary> Default </n-button>
		<n-button tertiary type="primary"> Primary </n-button>
		<n-button tertiary type="info"> Info </n-button>
		<n-button tertiary type="success"> Success </n-button>
		<n-button tertiary type="warning"> Warning </n-button>
		<n-button  type="error"> Error </n-button>
		<n-button type="primary" @click="userStore.add">加一</n-button>
		<n-divider />
		<n-button type="info" @click="userStore.sub">减一</n-button>
		<div class="age">岁数：{{ userStore.age }}</div>
	</div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/module/user';
const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
