<script lang="ts">
	import icon from '$lib/assets/raxys-color.png';
	export let iconUrl = '';
</script>

<div class="bg-white shadow-md hover:shadow-lg rounded-sm flex flex-col p-4 gap-4 w-full sm:w-72 ">
	<div class="flex flex-row items-center gap-4">
		<img class="w-12 rounded-md" src={iconUrl ? iconUrl : icon} alt="icon" />
		<h3 class="text-2xl font-bold flex-1"><slot name="title" /></h3>
	</div>
	<p class="flex grow"><slot name="description" /></p>
	{#if $$slots.footer}
		<hr />
		<slot name="footer" />
	{/if}
</div>
