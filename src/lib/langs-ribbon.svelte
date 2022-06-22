<script lang="ts">
	import { default as _langs } from '$lib/assets/languages.json';
	import _ from 'lodash';

	const langs = _.shuffle(
		_langs as {
			name: string;
			endonym: string;
		}[]
	);
	const hover = langs.map((_) => false);
</script>

<div class="flex flex-wrap px-2 py-4 justify-center text-sm text-center capitalize">
	{#each langs as lang, i}
		<p
			on:focus={() => (hover[i] = true)}
			on:mouseover={() => (hover[i] = true)}
			on:mouseleave={() => (hover[i] = false)}
			class="px-4 py-2 relative whitespace-nowrap cursor-default"
		>
			<span class:blur-md={hover[i]} class="italic text-gray-400">
				{lang.endonym}
			</span>
			<span
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				class:text-transparent={!hover[i]}
			>
				{lang.name}
			</span>
		</p>
	{/each}
</div>
