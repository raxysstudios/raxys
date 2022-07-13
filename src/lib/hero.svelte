<script lang="ts">
	import VanillaTilt from 'vanilla-tilt';
	import raxys from '$lib/assets/icons/raxys.png';
</script>

<div data-tilt id="parent" class="relative group cursor-pointer select-none">
	<img class="thm-img rotate-45" src={raxys} alt="raxys" />
	<img class="thm-img rotate-45" src={raxys} alt="raxys" />
	<div
		id="back"
		class="absolute top-0 opacity-0 scale-50 thm-img group-hover:opacity-40 group-active:opacity-100"
	>
		<img
			class="left-1/3 group-active:rotate-90 top-1/3 translate-x-1/4 translate-y-1/4"
			src={raxysOrn}
			alt="raxys"
		/>
		<img
			class="-left-1/3 group-active:rotate-90 -top-1/3 -translate-x-1/4 -translate-y-1/4"
			src={raxysOrn}
			alt="raxys"
		/>
		<img
			class="left-1/3 rotate-90 group-active:rotate-0 -top-1/3 translate-x-1/4 -translate-y-1/4"
			src={raxysOrn}
			alt="raxys"
		/>
		<img
			class="-left-1/3 rotate-90 group-active:rotate-0 top-1/3 -translate-x-1/4 translate-y-1/4"
			src={raxysOrn}
			alt="raxys"
		/>
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
		transform: translateZ(64px) rotate(0) scale(0.5);
	}
	#parent:hover > img:last-of-type {
		transform: translateZ(64px) rotate(90deg) scale(0.5);
	}
	#parent:active > img {
		transform: translateZ(0) rotate(90deg) scale(0.5);
	}
	#parent:active > img:last-of-type {
		transform: translateZ(0) rotate(0) scale(0.5);
	}
</style>
