<script lang="ts">
	import LoopedTypewriter from '$lib/looped-typewriter.svelte';
	import RandomLink from '$lib/random-link.svelte';
	import LinkIcon from '$lib/link-icon.svelte';
	import ProjectsGrid from '$lib/projects-grid.svelte';
	import Hero from '$lib/hero.svelte';
</script>

<div class="flex flex-col items-center px-8 pb-8 gap-2 relative overflow-hidden">
	<div
		id="map"
		class="absolute w-full h-full -z-10 opacity-40 bg-cover bg-center invert-0 dark:invert"
	/>
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
<p class="mt-8 mb-4 min-h-[2rem] text-center text-xs whitespace-pre-wrap italic">
	<LoopedTypewriter />
</p>
<RandomLink />

<style>
	* {
		--lbg: #f4f4f5;
		--dbg: #e7e7e4;
		--map: url('$lib/assets/map.png');
	}
	#map {
		background-image: linear-gradient(var(--lbg), transparent 25%, transparent 75%, var(--lbg)),
			linear-gradient(90deg, var(--lbg), transparent 25%, transparent 75%, var(--lbg)), var(--map);
	}
	@media (prefers-color-scheme: dark) {
		#map {
			background-image: linear-gradient(var(--dbg), transparent 25%, transparent 75%, var(--dbg)),
				linear-gradient(90deg, var(--dbg), transparent 25%, transparent 75%, var(--dbg)), var(--map);
		}
	}
</style>
