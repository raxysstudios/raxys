<script>
	import ProjectCard from './project-card.svelte';
</script>

<div class="flex flex-col items-center">
	<div
		class="absolute w-full h-full -z-10 -translate-y-[15%] opacity-25 bg-cover bg-center"
		style="background-image: linear-gradient(transparent, transparent 80%, white 90%, white), url(src/map.png);"
	/>
	<img class="w-64" src="src/raxys.png" alt="raxys" />
	<h1 class="text-4xl font-bold">Raxys Studios</h1>
	<p class="text-center font-medium">Made with honor in North Caucasus</p>
</div>

<div class="flex flex-col items-center">
	<div class="flex flex-row justify-center flex-wrap gap-8 m-8">
		<ProjectCard
			iconUrl="https://raw.githubusercontent.com/raxysstudios/avzag/main/assets/icon.png"
		>
			<span slot="title">Avzag</span>
			<span slot="description">
				Expandable parallel language guide to the languages of the Caucasus in English.
			</span>
		</ProjectCard>
		<ProjectCard
			iconUrl="https://raw.githubusercontent.com/raxysstudios/avdan/main/assets/icon.png"
		>
			<slot slot="title">Avdan</slot>
			<slot slot="description">
				Application to help learn the native languages through the library of authentic cards with
				quality voiceover.
			</slot>
		</ProjectCard>

		<ProjectCard>
			<slot slot="title">Mecel</slot>
			<slot slot="description">Mountain word-guessing game.</slot>
		</ProjectCard>
	</div>
</div>
