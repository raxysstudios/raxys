<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import raxys from '$lib/assets/icons/raxys.png';
</script>

<div
	data-tilt
	data-tilt-scale="1.25"
	id="chains"
	class="relative group cursor-pointer select-none"
	style="transform: perspective(1000px); transform-style: preserve-3d;"
>
	<img
		class="drop-shadow-lg thm-img group-hover:shadow-none opacity-100 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<img
		class="thm-img absolute left-[18%] top-[18%] opacity-0 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<img
		class="thm-img absolute -left-[18%] -top-[18%] opacity-0 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<img
		class="thm-img absolute left-[18%] -top-[18%] opacity-0 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<img
		class="thm-img absolute -left-[18%] top-[18%] opacity-0 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<img
		class="thm-img absolute -left-[36%] top-0 opacity-0 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<img
		class="thm-img absolute left-[36%] top-0 opacity-0 group-hover:opacity-40 group-hover:scale-50"
		src={raxys}
		alt="raxys"
	/>
	<div id="main" class="absolute top-0">
		<img
			class="drop-shadow-lg thm-img opacity-0 group-hover:opacity-100 group-hover:scale-50"
			src={raxys}
			alt="raxys"
		/>
	</div>
</div>

<style>
	img {
		@apply w-64;
	}
	#main {
		transform: translateZ(64px);
	}
	#chains:active > #main {
		transform: translateZ(0px) !important;
	}
</style>
