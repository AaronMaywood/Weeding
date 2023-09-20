<script setup>
import Garden from './components/Garden.vue';
import { gameStart, isGameClear } from './store.js';
gameStart();
</script>

<template>
	<h1>草むしり</h1>
	<Garden />
	<p class="clear" v-if="isGameClear()">GAME CLEAR!</p>
</template>

<style scoped>
h1 {
	text-align: center;
}

.clear {
	background: #006600;
	color: white;
	padding: 1rem;
	font-size: 5rem;
	width: max-content;
	/* 画面中央に表示 */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-100%);
}
</style>

