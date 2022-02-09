<script lang="ts">
	export let iconUrl = 'src/raxys-color.png';
</script>

<div class="bg-white shadow-md hover:shadow-lg rounded-md flex flex-col p-4 gap-4 w-72">
	<div class="flex flex-row items-center gap-4">
		<img class="w-12 rounded-lg" src={iconUrl} alt="icon" />
		<h3 class="text-2xl font-bold"><slot name="title" /></h3>
	</div>
	<p><slot name="description" /></p>
</div>
