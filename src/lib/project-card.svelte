<script lang="ts">
	import LinkIcon from './link-icon.svelte';
	export let icon = '';
	export let web = '';
	export let android = '';
	export let ios = '';
</script>

<div
	class="card flex flex-col p-4 gap-2 w-full sm:w-72 relative overflow-hidden group hover:-translate-y-1"
>
	<img
		class="w-32 h-32 bottom-0 right-0 origin-bottom-right absolute thm-img opacity-10 group-hover:scale-110"
		src={icon}
		alt="icon"
	/>
	<h2><slot name="title" /></h2>
	<p class="flex grow"><slot name="description" /></p>
	<div class="flex gap-2 opacity-40 group-hover:opacity-100">
		{#if web}
			<LinkIcon url={web} icon="ic:round-open-in-browser" />
		{/if}
		{#if android}
			<LinkIcon url={android} icon="tabler:brand-google-play" />
		{/if}
		{#if ios}
			<LinkIcon url={ios} icon="ri:app-store-line" />
		{/if}
	</div>
</div>
