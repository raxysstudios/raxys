<script lang="ts">
	export let iconUrl = 'static/raxys-color.png';
</script>

<div class="bg-white shadow-md hover:shadow-lg rounded-sm flex flex-col p-4 gap-4 w-72">
	<div class="flex flex-row items-center gap-4">
		<img class="w-12 rounded-md" src={iconUrl} alt="icon" />
		<h3 class="text-2xl font-bold flex-1"><slot name="title" /></h3>
	</div>
	<p class="flex grow"><slot name="description" /></p>
	{#if $$slots.footer}
		<hr />
		<slot name="footer" />
	{/if}
</div>
