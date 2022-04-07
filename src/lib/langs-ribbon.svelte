<script lang="ts">
	import { default as _langs } from '$lib/assets/langs.json';
	import { onMount } from 'svelte';
	import { shuffle } from './utils/shuffle';

	type Lang = { eng: String; nat: String };

	let langs: Lang[] = [];
	let hover: boolean[] = [];

	onMount(() => {
		langs = shuffle(_langs) as Lang[];
		hover = langs.map((_) => false);
	});
</script>

<div class="flex flex-wrap p-4 justify-center text-sm text-center capitalize font-bold">
	{#each langs as lang, i}
		<div
			on:focus={() => (hover[i] = true)}
			on:mouseover={() => (hover[i] = true)}
			on:mouseleave={() => (hover[i] = false)}
			class="px-8 py-4 cursor-pointer relative whitespace-nowrap "
		>
			<span class:hovered={hover[i]} class="italic text-slate-400">{lang.nat}</span>
			<span
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				class:text-transparent={!hover[i]}
			>
				{lang.eng}
			</span>
		</div>
	{/each}
</div>

<style lang="postcss">
	.hovered {
		@apply blur-[2px];
	}
</style>
