<script lang="ts">
	import ProjectCard from '$lib/project-card.svelte';
	import SocialBar from '$lib/social-bar.svelte';

	import raxys from '$lib/assets/raxys.png';
	import map from '$lib/assets/map.png';
	import quotes from '$lib/assets/quotes.json';
	import LoopedTypewriter from '$lib/looped-typewriter.svelte';
</script>

<div class="flex flex-col items-center px-8 pb-8 gap-4 relative" style="">
	<div
		class="absolute w-full h-full -z-10 opacity-40 bg-cover bg-center"
		style="background-image: linear-gradient(rgb(241 245 249), transparent 25%, transparent 75%, rgb(241 245 249)), url({map})"
	/>
	<div class="flex flex-col items-stretch text-center">
		<img class="w-64" src={raxys} alt="raxys" />
		<h1 class="text-4xl font-bold">Raxys Studios</h1>
		<p class="font-medium">
			Made with honor in
			<span class="whitespace-nowrap">North Caucasus</span>
		</p>
	</div>
	<SocialBar telegram="raxysstudios" twitter="raxysstudios" github="raxysstudios" joint />
	<p class="max-w-xl indent-7 text-justify italic">
		"The Circassians nobly represent in the Caucasus that chivalrous and warlike spirit that shed so
		much brilliance on the peoples of the Middle Ages. Courage, intelligence, beauty: nature gave
		them a noble dignity, which has never been refuted and which they combined with the most
		chivalrous feelings and with an ardent love of national freedom."
		<span class="whitespace-nowrap"> — Xavier Hommaire de Hell</span>
	</p>
</div>

<hr />
<div class="flex flex-row justify-center flex-wrap gap-8 p-8">
	<ProjectCard iconUrl="https://raw.githubusercontent.com/raxysstudios/avzag/main/assets/icon.png">
		<slot slot="title">Avzag</slot>
		<slot slot="description">
			Expandable parallel language guide to the languages of the Caucasus in English.
		</slot>
		<SocialBar
			slot="footer"
			github="raxysstudios/avzag"
			webAppUrl="https://avzag.raxys.app"
			googlePlayUrl="https://play.google.com/store/apps/details?id=com.alkaitagi.avzag"
			appStoreUrl="https://apps.apple.com/app/avzag-languages-of-caucasus/id1603226004"
		/>
	</ProjectCard>
	<ProjectCard iconUrl="https://raw.githubusercontent.com/raxysstudios/avdan/main/assets/icon.png">
		<slot slot="title">Avdan</slot>
		<slot slot="description">
			Application to help learn the native languages through the library of authentic cards with
			quality voiceover.
		</slot>
		<SocialBar
			slot="footer"
			github="raxysstudios/avdan"
			webAppUrl="https://avdan.raxys.app"
			googlePlayUrl="https://play.google.com/store/apps/details?id=com.alkaitagi.avdan"
			appStoreUrl="https://apps.apple.com/app/avdan-native-language-cards/id1604826853"
		/>
	</ProjectCard>

	<ProjectCard>
		<slot slot="title">Mecel</slot>
		<slot slot="description">Mountain implementation of the viral word-guessing game.</slot>
		<SocialBar slot="footer" github="raxysstudios/mecel" webAppUrl="https://mecel.raxys.app/" />
	</ProjectCard>

	<ProjectCard
		iconUrl="https://raw.githubusercontent.com/raxysstudios/andax/icon-update/assets/icon.png"
	>
		<slot slot="title">Andax</slot>
		<slot slot="description">Interactive non-linear narratives.</slot>
		<p class="text-sm italic" slot="footer">Coming soon...</p>
	</ProjectCard>
</div>

<hr />

<p class="min-h-[2rem] m-8 text-center text-xs whitespace-pre-wrap italic">
	<LoopedTypewriter strings={quotes} />
</p>
