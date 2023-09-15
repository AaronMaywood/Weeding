import { ref } from 'vue';
const X_MAX = 3;
const Y_MAX = 3;
export const state = ref([
	[0,0,0],
	[0,0,0],
	[0,0,0],
]);

// 除草する
export function weeding(x,y){
	state.value[x][y]--;
	if( state.value[x][y] < 0 ){
		state.value[x][y] = 0;
	}
}

// 草が伸びる
function grow(x,y){
	state.value[x][y]++;
	if( state.value[x][y] > 3){
		state.value[x][y] = 3;
	}
}

// 草を更新
let counter = 0;
function update(){
	// ランダムに空き地に草が生える
	if( Math.random() > 0.99 ){
		const x = Math.floor(Math.random() * X_MAX);
		const y = Math.floor(Math.random() * X_MAX);
		grow(x,y);
	}

	requestAnimationFrame(update);
}

requestAnimationFrame(update);

