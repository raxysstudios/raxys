<script>
	import { onMount } from 'svelte';
	import { shuffle } from './utils/shuffle';

	export let strings = [];

	let quote;
	onMount(
		() =>
			// @ts-ignore
			new Typewriter(quote, {
				strings: shuffle(strings),
				autoStart: true,
				cursor: '',
				loop: true,
				delay: 1,
				deleteSpeed: 1,
				pauseFor: 5000
			})
	);
</script>

<span bind:this={quote} />
