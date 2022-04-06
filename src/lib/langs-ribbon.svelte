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

<div class="flex text-sm text-center text-slate-400 font-bold capitalize">
	{#each langs as lang, i}
		<div
			on:focus={() => (hover[i] = true)}
			on:mouseover={() => (hover[i] = true)}
			on:mouseleave={() => (hover[i] = false)}
			class="m-2 p-4 cursor-pointer relative overflow-visible"
		>
			<span class:text-slate-300={hover[i]}>{lang.eng}</span>
			<span
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent whitespace-nowrap pointer-events-none"
				class:!text-black={hover[i]}
			>
				{lang.nat}
			</span>
		</div>
	{/each}
</div>
