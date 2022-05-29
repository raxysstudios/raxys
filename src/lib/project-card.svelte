<script lang="ts">
	import raxys from '$lib/assets/raxys-color.png';
	import LinkIcon from './link-icon.svelte';
	export let icon = '';
	export let web = '';
	export let android = '';
	export let ios = '';
</script>

<div class="bg-white shadow-sm hover:shadow-md rounded-sm flex flex-col p-4 gap-4 w-full sm:w-72 ">
	<div class="flex flex-row items-center gap-4">
		<img class="w-12 rounded-md" src={icon ? icon : raxys} alt="icon" />
		<h3 class="text-2xl font-bold flex-1"><slot name="title" /></h3>
	</div>
	<p class="flex grow"><slot name="description" /></p>
	<div class="flex gap-2 justify-end">
		{#if web}
			<LinkIcon url={web} icon="mdi:open-in-app" />
		{/if}
		{#if android}
			<LinkIcon url={android} icon="mdi:google-play" />
		{/if}
		{#if ios}
			<LinkIcon url={ios} icon="ion:ios-appstore" />
		{/if}
	</div>
</div>
