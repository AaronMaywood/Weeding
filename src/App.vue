<script setup>
import Garden from './components/Garden.vue';
import { initialize, gameState } from './store.js';
initialize();
</script>

<template>
	<Garden />
	<p class="clear" v-if="gameState === 1">GAME CLEAR!</p>
</template>

<style scoped>
.clear {
	background: #006600;
	color: white;
	padding: 1rem;
	font-size: 5rem;
	/* 画面中央に表示 */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
</style>

