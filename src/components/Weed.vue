<script setup>
import { computed } from 'vue';
import { state, weeding } from '../store.js';
const props = defineProps({
	x: Number,
	y: Number,
});
const grass = computed(() => {
	return ['','v','w','W'][state.value[props.x][props.y]];
});
</script>

<template>
	<td @click="weeding(x,y)" :class="grass">{{grass}}</td>
</template>

<style scoped>
td {
	user-select: none;	/* ダブルクリックでテキストが選択されないようにする */
	border: 1px solid green;
	width: 150px;
	height: 150px;
	font-size: 6rem;
	text-align: center;
	background: #ffaa00;
}
.v {
	background: #00ee00;
}
.w {
	background: #00bb00;
}
.W {
	background: #008800;
}
</style>
