<script setup>
import Weed from './Weed.vue';
</script>

<template>
	<h1>草むしり</h1>
	<table>
		<tr>
			<Weed :x="0" :y="0" />
			<Weed :x="1" :y="0" />
			<Weed :x="2" :y="0" />
			<Weed :x="3" :y="0" />
			<Weed :x="4" :y="0" />
		</tr>
		<tr>
			<Weed :x="0" :y="1" />
			<Weed :x="1" :y="1" />
			<Weed :x="2" :y="1" />
			<Weed :x="3" :y="1" />
			<Weed :x="4" :y="1" />
		</tr>
		<tr>
			<Weed :x="0" :y="2" />
			<Weed :x="1" :y="2" />
			<Weed :x="2" :y="2" />
			<Weed :x="3" :y="2" />
			<Weed :x="4" :y="2" />
		</tr>
		<tr>
			<Weed :x="0" :y="3" />
			<Weed :x="1" :y="3" />
			<Weed :x="2" :y="3" />
			<Weed :x="3" :y="3" />
			<Weed :x="4" :y="3" />
		</tr>
		<tr>
			<Weed :x="0" :y="4" />
			<Weed :x="1" :y="4" />
			<Weed :x="2" :y="4" />
			<Weed :x="3" :y="4" />
			<Weed :x="4" :y="4" />
		</tr>
	</table>
</template>

<style scoped>
h1 {
	text-align: center;
}
table {
	/* 中央寄せ */
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
</style>
