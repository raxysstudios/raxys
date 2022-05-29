<script lang="ts">
	import ProjectCard from '$lib/project-card.svelte';
	import LoopedTypewriter from '$lib/looped-typewriter.svelte';
	import LangsRibbon from '$lib/langs-ribbon.svelte';

	import raxys from '$lib/assets/raxys.png';
	import map from '$lib/assets/map.png';
	import RandomLink from '$lib/random-link.svelte';
	import LinkIcon from '$lib/link-icon.svelte';
</script>

<div class="flex flex-col items-center px-4 pb-4 gap-2 relative" style="">
	<div
		class="absolute w-full h-full -z-10 opacity-40 bg-cover bg-center"
		style="background-image: linear-gradient(rgb(241 245 249), transparent 25%, transparent 75%, rgb(241 245 249)), url({map})"
	/>
	<div class="flex flex-col items-stretch text-center">
		<img class="w-64 drop-shadow-lg" src={raxys} alt="raxys" />
		<h1 class="text-4xl font-bold">Raxys Studios</h1>
		<p class="font-medium">
			Made with honor in
			<span class="whitespace-nowrap">North Caucasus</span>
		</p>
	</div>
	<div class="flex gap-2">
		<LinkIcon url="https://t.me/raxysstudios" icon="mdi:telegram" />
		<LinkIcon url="https://github.com/raxysstudios" icon="mdi:github" />
		<LinkIcon url="https://twitter.com/raxysstudios" icon="mdi:twitter" />
	</div>
	<p class="max-w-xl indent-6 text-justify italic">
		"The Circassians nobly represent in the Caucasus that chivalrous and warlike spirit that shed so
		much brilliance on the peoples of the Middle Ages. Courage, intelligence, beauty: nature gave
		them a noble dignity, which has never been refuted and which they combined with the most
		chivalrous feelings and with an ardent love of national freedom."
		<span class="whitespace-nowrap"> — Xavier Hommaire de Hell</span>
	</p>
</div>

<hr />
<div class="flex flex-row justify-center flex-wrap gap-4 p-4">
	<ProjectCard
		icon="https://raw.githubusercontent.com/raxysstudios/avzag/main/assets/icon.png"
		web="https://avzag.raxys.app"
		android="https://play.google.com/store/apps/details?id=com.alkaitagi.avzag"
		ios="https://apps.apple.com/app/avzag-languages-of-caucasus/id1603226004"
	>
		<slot slot="title">Avzag</slot>
		<slot slot="description">
			Expandable parallel language guide to the languages of the Caucasus in English.
		</slot>
	</ProjectCard>
	<ProjectCard
		icon="https://raw.githubusercontent.com/raxysstudios/avdan/main/assets/icon.png"
		web="https://avdan.raxys.app"
		android="https://play.google.com/store/apps/details?id=com.alkaitagi.avdan"
		ios="https://apps.apple.com/app/avdan-native-language-cards/id1604826853"
	>
		<slot slot="title">Avdan</slot>
		<slot slot="description">
			Application to help learn the native languages through the library of authentic cards with
			quality voiceover.
		</slot>
	</ProjectCard>
	<ProjectCard
		icon="https://raw.githubusercontent.com/raxysstudios/andax/main/assets/icon.png"
		web="https://andax.raxys.app/"
		android="https://play.google.com/store/apps/details?id=com.alkaitagi.andax"
		ios="https://apps.apple.com/tt/app/andax-interactive-stories/id1601086187"
	>
		<slot slot="title">Andax</slot>
		<slot slot="description">Interactive non-linear narratives.</slot>
	</ProjectCard>
	<ProjectCard web="https://mecel.raxys.app/">
		<slot slot="title">Mecel</slot>
		<slot slot="description">Mountain implementation of the viral word-guessing game.</slot>
	</ProjectCard>
</div>

<hr />
<LangsRibbon />
<hr />
<p class="mt-4 mb-2 min-h-[2rem] text-center text-xs whitespace-pre-wrap italic">
	<LoopedTypewriter />
</p>
<RandomLink />
