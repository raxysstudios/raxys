<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import raxys from '$lib/assets/icons/raxys.png';
</script>

<div data-tilt id="chains" class="relative group cursor-pointer select-none">
	<img class="drop-shadow-lg thm-img" src={raxys} alt="raxys" />
	<div class="thm-img absolute top-0 w-64 h-64 opacity-0 group-hover:opacity-40">
		<img class="left-0 top-0 group-hover:scale-50" src={raxys} alt="raxys" />
		<img class="left-[18%] top-[18%] group-hover:scale-50" src={raxys} alt="raxys" />
		<img class="-left-[18%] -top-[18%] group-hover:scale-50" src={raxys} alt="raxys" />
		<img class="left-[18%] -top-[18%] group-hover:scale-50" src={raxys} alt="raxys" />
		<img class="-left-[18%] top-[18%] group-hover:scale-50" src={raxys} alt="raxys" />
		<img class="-left-[36%] top-0 group-hover:scale-50" src={raxys} alt="raxys" />
		<img class="left-[36%] top-0 group-hover:scale-50" src={raxys} alt="raxys" />
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
	#chains:hover > img {
		transform: translateZ(64px) scale(0.5);
	}
	#chains:active > img {
		transform: translateZ(0px) scale(0.5);
	}
</style>
