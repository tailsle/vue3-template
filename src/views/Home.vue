<template>
	<div class="home">
		<el-button type="primary" @click="userStore.add">加一</el-button>
		<el-button type="" @click="userStore.sub">减一</el-button>
		<div class="age">岁数：{{ userStore.age }}</div>
	</div>
</template>

<script lang="ts" setup>
import useUserStore from '@/store/module/user';
const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
