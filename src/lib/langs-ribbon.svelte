<script lang="ts">
	import { default as _langs } from '$lib/assets/languages.json';
	import _ from 'lodash';
	import { getTgUrl } from './utils/getTgUrl';

	type Language = {
		name: string;
		endonym: string;
		channel?: string;
	};

	const langs = _.shuffle(_langs as Language[]);
	const hover = langs.map((_) => false);
</script>

<div class="flex flex-wrap px-2 py-4 justify-center text-sm text-center capitalize font-bold">
	{#each langs as lang, i}
		<a
			href={getTgUrl(lang.channel)}
			target="_blank"
			on:focus={() => (hover[i] = true)}
			on:mouseover={() => (hover[i] = true)}
			on:mouseleave={() => (hover[i] = false)}
			class="px-4 py-2 relative whitespace-nowrap"
			class:cursor-default={!lang.channel}
		>
			<span class:blur-sm={hover[i]} class="italic text-slate-400">
				{lang.endonym}
			</span>
			<span
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
				class:text-transparent={!hover[i]}
			>
				{lang.name}
			</span>
		</a>
	{/each}
</div>
