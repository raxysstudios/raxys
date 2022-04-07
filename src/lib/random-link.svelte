<script lang="ts">
	import state from '$lib/assets/state.png';
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import friends from './assets/friends.json';

	let url = '';
	function nextUrl() {
		url = 'https://t.me/' + _.sample(friends);
	}
	onMount(nextUrl);
</script>

<a href={url} on:click={nextUrl} target="_blank">
	<div class="h-28 w-full relative overflow-hidden flex justify-center">
		<img
			class="absolute select-none h-28 m-auto origin-bottom hover:scale-110 drop-shadow-lg hover:drop-shadow-xl"
			src={state}
			alt="raxys"
		/>
	</div>
</a>
