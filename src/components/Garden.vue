<script setup>
import { state } from '../store.js';
import Weed from './Weed.vue';
</script>

<template>
	<table>
		<tr>
			<Weed :x="0" :y="0" />
			<Weed :x="1" :y="0" />
			<Weed :x="2" :y="0" />
		</tr>
		<tr>
			<Weed :x="0" :y="1" />
			<Weed :x="1" :y="1" />
			<Weed :x="2" :y="1" />
		</tr>
		<tr>
			<Weed :x="0" :y="2" />
			<Weed :x="1" :y="2" />
			<Weed :x="2" :y="2" />
		</tr>
	</table>
</template>

