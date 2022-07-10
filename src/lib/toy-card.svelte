<script lang="ts">
	import loop from '$lib/assets/icons/raxys-loop.png';
	export let link = '';
</script>

<a href={link} class="p-2 relative group max-w-sm">
	<img
		src={loop}
		alt="loop"
		class="absolute top-0 bottom-0 right-0 m-auto w-32 h-32 thm-img opacity-0 group-hover:opacity-10 group-hover:scale-105"
	/>
	<span class="font-['Outfit']"><slot name="title" /></span>
	—
	<slot name="description" />
</a>
