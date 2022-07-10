<script lang="ts">
	import loop from '$lib/assets/icons/raxys-loop.png';
	export let link = '';
</script>

<a href={link} class="flex flex-col p-4 gap-2 items-stretch sm:text-center relative group">
	<img
		src={loop}
		alt="loop"
		class="absolute top-0 bottom-0 right-0 sm:left-0 m-auto w-32 h-32 thm-img opacity-0 group-hover:opacity-10 group-hover:scale-105"
	/>
	<h2><slot name="title" /></h2>
	<p><slot name="description" /></p>
</a>
