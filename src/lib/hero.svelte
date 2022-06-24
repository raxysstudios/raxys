<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import raxys from '$lib/assets/icons/raxys.png';
</script>

<div data-tilt id="parent" class="relative group cursor-pointer select-none">
	<img class="drop-shadow-lg thm-img" src={raxys} alt="raxys" />
	<div
		id="back"
		class="absolute top-0 w-64 h-64 opacity-0 scale-50 thm-img group-hover:opacity-40 group-active:opacity-100"
	>
		<img class="left-[33.5%] top-[33.5%]" src={raxys} alt="raxys" />
		<img class="-left-[33.5%] -top-[33.5%]" src={raxys} alt="raxys" />
		<img class="left-[33.5%] -top-[33.5%]" src={raxys} alt="raxys" />
		<img class="-left-[33.5%] top-[33.5%]" src={raxys} alt="raxys" />
	</div>
</div>

<style>
	* {
		@apply w-64 h-64;
	}
	#parent {
		transform: perspective(1000px);
		transform-style: preserve-3d;
	}
	img {
		@apply absolute;
	}
	#parent > div > img:nth-child(even) {
		transform: translateX(32px);
	}
	#parent > div > img:nth-child(odd) {
		transform: translateX(-32px);
	}
	#parent:hover > #back > img {
		transform: translate(0);
	}
	#parent:hover > img {
		transform: translateZ(64px) scale(0.5);
	}
	#parent:active > img {
		transform: translateZ(0px) scale(0.5);
	}
</style>
