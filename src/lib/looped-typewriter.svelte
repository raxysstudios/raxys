<script>
	import { onMount } from 'svelte';

	export let strings = [];

	function shuffle(array) {
		let currentIndex = array.length;
		let randomIndex = 0;
		while (currentIndex != 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	let quote;
	onMount(
		() =>
			// @ts-ignore
			new Typewriter(quote, {
				strings: shuffle(strings),
				autoStart: true,
				cursor: '',
				loop: true,
				delay: 30,
				deleteSpeed: 30,
				pauseFor: 5000
			})
	);
</script>

<span bind:this={quote} />
