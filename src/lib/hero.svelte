<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import raxysOrn from '$lib/assets/icons/raxys-orn.png';
	import raxys from '$lib/assets/icons/raxys.png';
</script>

<div data-tilt id="parent" class="relative group cursor-pointer select-none">
	<img class="drop-shadow-lg thm-img group-hover:opacity-0" src={raxys} alt="raxys" />
	<img class="thm-img opacity-0 group-hover:opacity-100" src={raxysOrn} alt="raxys" />
	<div
		id="back"
		class="absolute top-0 opacity-0 scale-50 thm-img group-hover:opacity-40 group-active:opacity-100"
	>
		<img class="left-1/3 top-1/3 translate-x-1/4 translate-y-1/4" src={raxysOrn} alt="raxys" />
		<img class="-left-1/3 -top-1/3 -translate-x-1/4 -translate-y-1/4" src={raxysOrn} alt="raxys" />
		<img class="left-1/3 -top-1/3 translate-x-1/4 -translate-y-1/4" src={raxysOrn} alt="raxys" />
		<img class="-left-1/3 top-1/3 -translate-x-1/4 translate-y-1/4" src={raxysOrn} alt="raxys" />
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
	#parent:hover > #back > img {
		@apply translate-x-0 translate-y-0;
	}
	#parent:hover > img {
		transform: translateZ(64px) scale(0.5);
	}
	#parent:active > img {
		transform: translateZ(0px) scale(0.5);
	}
</style>
