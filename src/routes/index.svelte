<script>
	import ProjectCard from './project-card.svelte';
	import SocialBar from './social-bar.svelte';
</script>

<div class="flex flex-col items-center">
	<div
		class="absolute w-full h-full -z-10 -translate-y-[15%] opacity-25 bg-cover bg-center"
		style="background-image: linear-gradient(transparent, transparent 70%, white 80%, white), url(src/img/map.png);"
	/>
	<img class="w-64" src="src/img/raxys.png" alt="raxys" />
	<h1 class="text-4xl font-bold">Raxys Studios</h1>
	<p class="text-center font-medium">Made with honor in North Caucasus</p>
</div>

<div class="flex flex-col items-center">
	<div class="flex flex-row justify-center flex-wrap gap-8 m-8">
		<ProjectCard
			iconUrl="https://raw.githubusercontent.com/raxysstudios/avzag/main/assets/icon.png"
		>
			<slot slot="title">Avzag</slot>
			<slot slot="description">
				Expandable parallel language guide to the languages of the Caucasus in English.
			</slot>
			<SocialBar
				slot="footer"
				telegram="raxysstudios"
				twitter="raxysstudios"
				github="raxysstudios"
				appStoreUrl="raxysstudios"
				googlePlayUrl="raxysstudios"
			/>
		</ProjectCard>
		<ProjectCard
			iconUrl="https://raw.githubusercontent.com/raxysstudios/avdan/main/assets/icon.png"
		>
			<slot slot="title">Avdan</slot>
			<slot slot="description">
				Application to help learn the native languages through the library of authentic cards with
				quality voiceover.
			</slot>
			<SocialBar
				slot="footer"
				github="raxysstudios"
				webAppUrl="https://avzag.app"
				appStoreUrl="raxysstudios"
				googlePlayUrl="raxysstudios"
			/>
		</ProjectCard>

		<ProjectCard>
			<slot slot="title">Mecel</slot>
			<slot slot="description">Mountain implementation of the viral word-guessing game.</slot>
			<SocialBar slot="footer" twitter="raxysstudios" />
		</ProjectCard>

		<ProjectCard
			iconUrl="https://raw.githubusercontent.com/raxysstudios/andax/main/assets/icon.png"
		>
			<slot slot="title">Andax</slot>
			<slot slot="description">Interactive non-linear narratives.</slot>
			<p class="text-sm italic" slot="footer">Coming soon...</p>
		</ProjectCard>
	</div>
</div>
