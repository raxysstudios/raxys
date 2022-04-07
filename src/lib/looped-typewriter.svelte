<script>
	import { onMount } from 'svelte';
	import quotes from './assets/quotes.json';
	import _ from 'lodash';

	let quote;
	onMount(
		() =>
			// @ts-ignore
			new Typewriter(quote, {
				strings: _.shuffle(quotes),
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
