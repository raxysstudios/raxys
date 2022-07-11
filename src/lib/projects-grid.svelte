<script>
	import ProjectCard from './project-card.svelte';
	import ToyCard from './toy-card.svelte';

	import bazur from '$lib/assets/icons/bazur.png';
	import avdan from '$lib/assets/icons/avdan.png';
	import tulim from '$lib/assets/icons/tulim.png';
</script>

<h3 class="text-center opacity-50">Flagship Products</h3>

<div class="flex flex-col items-stretch justify-center sm:flex-row gap-4 p-8">
	<ProjectCard
		icon={bazur}
		web="https://bazur.raxys.app"
		android="https://play.google.com/store/apps/details?id=com.alkaitagi.avzag"
		ios="https://apps.apple.com/app/bazur-languages-of-caucasus/id1603226004"
	>
		<slot slot="title">Bazur</slot>
		<slot slot="description">
			Expandable parallel dictionary for the languages of the Caucasus in English.
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
		icon={tulim}
		web="https://tulim.raxys.app/"
		android="https://play.google.com/store/apps/details?id=com.alkaitagi.andax"
		ios="https://apps.apple.com/tt/app/tulim-interactive-stories/id1601086187"
	>
		<slot slot="title">Tulim</slot>
		<slot slot="description">Interactive non-linear narratives.</slot>
	</ProjectCard>
</div>

<h3 class="text-center opacity-50">Utils & Toys</h3>

<div class="flex flex-col p-4 items-center">
	<ToyCard link="https://mecel.raxys.app/">
		<slot slot="title">Mecel</slot>
		<slot slot="description">Mountain implementation of the viral word-guessing game.</slot>
	</ToyCard>
	<ToyCard link="https://yaziv.raxys.app/">
		<slot slot="title">Yaziv</slot>
		<slot slot="description">Script converter for the languages of Caucasus.</slot>
	</ToyCard>
</div>
