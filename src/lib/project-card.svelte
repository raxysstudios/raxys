<script lang="ts">
	import LinkIcon from './link-icon.svelte';
	export let icon = '';
	export let web = '';
	export let android = '';
	export let ios = '';
</script>

<div class="card flex flex-col p-4 gap-2 w-full sm:w-72 relative overflow-hidden group">
	<img
		class="w-32 h-32 bottom-0 right-0 origin-bottom-right absolute thm-img opacity-10 group-hover:scale-110"
		src={icon}
		alt="icon"
	/>
	<h3 class="text-2xl font-bold"><slot name="title" /></h3>
	<p class="flex grow"><slot name="description" /></p>
	<div class="flex gap-2">
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
