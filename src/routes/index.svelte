<script>
	import ProjectCard from '$lib/project-card.svelte';
	import SocialBar from '$lib/social-bar.svelte';
</script>

<div class="flex flex-col items-center mb-8 mx-8 gap-4">
	<div
		id="map"
		class="absolute w-full h-full -z-10 -translate-y-1/4 opacity-40 bg-cover bg-center"
	/>
	<div class="flex flex-col items-center">
		<img class="w-64" src="raxys.png" alt="raxys" />
		<h1 class="text-4xl font-bold">Raxys Studios</h1>
		<p class="text-center font-medium">Made with honor in North Caucasus</p>
	</div>
	<SocialBar telegram="raxysstudios" twitter="raxysstudios" github="raxysstudios" joint />
	<p class="max-w-xl indent-14 text-justify">
		They shall be my finest warriors, these men who give themselves to me. Like clay I shall mould
		them and in the furnace of war forge them. They will be of iron will and steely muscle. In great
		armour shall I clad them and with the mightiest guns will they be armed. They will be untouched
		by plague or disease, no sickness will blight them. They will have tactics, strategies and
		machines such that no foe can best them in battle.
	</p>
</div>

<hr />
<div class="flex flex-row justify-center flex-wrap gap-8 m-8">
	<ProjectCard iconUrl="https://raw.githubusercontent.com/raxysstudios/avzag/main/assets/icon.png">
		<slot slot="title">Avzag</slot>
		<slot slot="description">
			Expandable parallel language guide to the languages of the Caucasus in English.
		</slot>
		<SocialBar
			slot="footer"
			github="raxysstudios/avzag"
			webAppUrl="https://avzag.app"
			googlePlayUrl="https://play.google.com/store/apps/details?id=com.alkaitagi.avzag"
			appStoreUrl="https://apps.apple.com/ru/app/avzag-languages-of-caucasus/id1603226004"
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
			webAppUrl="https://raxysstudios.github.io/avdan/"
			appStoreUrl="https://apps.apple.com/ru/app/avdan-%D1%8F%D0%B7%D1%8B%D0%BA%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B0%D1%83%D0%B4%D0%B8%D0%BE-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B8/id1604826853"
			googlePlayUrl="https://play.google.com/store/apps/details?id=com.alkaitagi.avdan"
		/>
	</ProjectCard>

	<ProjectCard>
		<slot slot="title">Mecel</slot>
		<slot slot="description">Mountain implementation of the viral word-guessing game.</slot>
		<SocialBar
			slot="footer"
			github="alkaitagi/mecel"
			webAppUrl="https://alkaitagi.github.io/mecel/"
		/>
	</ProjectCard>

	<ProjectCard iconUrl="https://raw.githubusercontent.com/raxysstudios/andax/main/assets/icon.png">
		<slot slot="title">Andax</slot>
		<slot slot="description">Interactive non-linear narratives.</slot>
		<p class="text-sm italic" slot="footer">Coming soon...</p>
	</ProjectCard>
</div>

<style>
	#map {
		--bg: rgb(241 245 249);
		background-image: linear-gradient(transparent 80%, var(--bg) 90%, var(--bg)),
			linear-gradient(-160deg, transparent 60%, var(--bg) 70%, var(--bg)), url('map.png');
	}
</style>
