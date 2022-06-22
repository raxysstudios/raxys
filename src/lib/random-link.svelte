<script lang="ts">
	import state from '$lib/assets/state.png';
	import _ from 'lodash';
	import friends from './assets/friends.json';
	import { getTgUrl } from './utils/getTgUrl';

	let url = '';
	function nextUrl() {
		url = getTgUrl(_.sample(friends));
	}
	nextUrl();
</script>

<a href={url} on:click={nextUrl} target="_blank">
	<div class="h-28 w-full relative overflow-hidden flex justify-center">
		<img
			class="absolute select-none h-28 m-auto origin-bottom hover:scale-105 drop-shadow-lg hover:drop-shadow-xl"
			src={state}
			alt="raxys"
		/>
	</div>
</a>
