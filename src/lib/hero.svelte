<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import raxys from '$lib/assets/icons/raxys.png';
</script>

<div data-tilt id="chains" class="relative group cursor-pointer select-none">
	<img class="drop-shadow-lg thm-img" src={raxys} alt="raxys" />
	<div class="thm-img absolute top-0 w-64 h-64 opacity-0 scale-50 group-hover:opacity-40">
		<img class="left-[35%] top-[35%]" src={raxys} alt="raxys" />
		<img class="-left-[35%] -top-[35%]" src={raxys} alt="raxys" />
		<img class="left-[35%] -top-[35%]" src={raxys} alt="raxys" />
		<img class="-left-[35%] top-[35%]" src={raxys} alt="raxys" />
		<img class="-left-[70%] top-0" src={raxys} alt="raxys" />
		<img class="left-[70%] top-0" src={raxys} alt="raxys" />
	</div>
</div>

<style>
	* {
		@apply w-64 h-64;
	}
	#chains {
		transform: perspective(1000px);
		transform-style: preserve-3d;
	}
	#chains > div > img {
		@apply absolute;
	}
	#chains > div > img:nth-child(even) {
		transform: translateX(32px);
	}
	#chains > div > img:nth-child(odd) {
		transform: translateX(-32px);
	}
	#chains:hover > div > img {
		transform: translate(0);
	}
	#chains:hover > img {
		transform: translateZ(64px) scale(0.5);
	}
	#chains:active > img {
		transform: translateZ(0px) scale(0.5);
	}
</style>
