<script>
	import ProjectCard from './project-card.svelte';

	import avzag from '$lib/assets/icons/avzag.png';
	import avdan from '$lib/assets/icons/avdan.png';
	import andax from '$lib/assets/icons/andax.png';
	import ToyCard from './toy-card.svelte';
</script>

<h3 class="text-center opacity-50">Flagship projects</h3>

<div class="flex flex-col items-stretch justify-center sm:flex-row gap-4 p-8">
	<ProjectCard
		icon={avzag}
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
		icon={avdan}
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
		icon={andax}
		web="https://andax.raxys.app/"
		android="https://play.google.com/store/apps/details?id=com.alkaitagi.andax"
		ios="https://apps.apple.com/tt/app/andax-interactive-stories/id1601086187"
	>
		<slot slot="title">Andax</slot>
		<slot slot="description">Interactive non-linear narratives.</slot>
	</ProjectCard>
</div>

<h3 class="text-center opacity-50">Utils & toys</h3>

<div class="flex flex-col gap-2 p-6 items-center">
	<ToyCard link="https://mecel.raxys.app/">
		<slot slot="title">Mecel</slot>
		<slot slot="description">mountain implementation of the viral word-guessing game.</slot>
	</ToyCard>
	<ToyCard>
		<slot slot="title">[Soon]</slot>
		<slot slot="description">script converter for the languages of Caucasus.</slot>
	</ToyCard>
</div>
