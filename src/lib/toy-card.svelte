<script lang="ts">
	import loop from '$lib/assets/icons/raxys-loop.png';
	export let link = '';
</script>

<a href={link} class="flex flex-col text-center p-4 relative group sm:max-w-sm">
	<img
		src={loop}
		alt="loop"
		class="absolute top-0 bottom-0 right-0 left-0 m-auto w-24 h-24 thm-img opacity-0 group-hover:opacity-10 group-hover:scale-105"
	/>
	<h3><slot name="title" /></h3>
	<slot name="description" />
</a>
