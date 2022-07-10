<script lang="ts">
	import LoopedTypewriter from '$lib/looped-typewriter.svelte';
	import RandomLink from '$lib/random-link.svelte';
	import LinkIcon from '$lib/link-icon.svelte';
	import ProjectsGrid from '$lib/projects-grid.svelte';
	import Hero from '$lib/hero.svelte';
	import MapImage from '$lib/map-image.svelte';
</script>

<div class="flex flex-col items-center px-8 pb-8 gap-2 relative overflow-hidden">
	<MapImage />
	<div class="flex flex-col items-center text-center">
		<Hero />
		<h1>Raxys Studios</h1>
		<h3>
			Made with honor in
			<span class="whitespace-nowrap">North Caucasus</span>
		</h3>
	</div>
	<div class="flex gap-2">
		<LinkIcon url="https://t.me/raxysstudios" icon="mdi:telegram" />
		<LinkIcon url="https://github.com/raxysstudios" icon="mdi:github" />
		<LinkIcon url="https://twitter.com/raxysstudios" icon="mdi:twitter" />
	</div>
	<p class="max-w-xl indent-6 text-justify text-sm italic">
		“The Circassians nobly represent in the Caucasus that chivalrous and warlike spirit that shed so
		much brilliance on the peoples of the Middle Ages. Courage, intelligence, beauty: nature gave
		them a noble dignity, which has never been refuted and which they combined with the most
		chivalrous feelings and with an ardent love of national freedom.”
		<span class="whitespace-nowrap"> — Xavier Hommaire de Hell</span>
	</p>
</div>

<ProjectsGrid />

<p class="mt-16 mb-4 min-h-[2rem] text-center text-xs whitespace-pre-wrap italic">
	<LoopedTypewriter />
</p>
<RandomLink />
