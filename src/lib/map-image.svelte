<div
	id="map"
	class="absolute w-full h-full -z-10 opacity-40 bg-cover bg-center invert-0 dark:invert"
/>

<style>
	* {
		--lbg: #f1f5f9;
		--dbg: #e0d6c8;
		--map: url('$lib/assets/map.png');
	}
	#map {
		background-image: linear-gradient(var(--lbg), transparent 25%, transparent 75%, var(--lbg)),
			linear-gradient(90deg, var(--lbg), transparent 25%, transparent 75%, var(--lbg)), var(--map);
	}
	@media (prefers-color-scheme: dark) {
		#map {
			background-image: linear-gradient(var(--dbg), transparent 25%, transparent 75%, var(--dbg)),
				linear-gradient(90deg, var(--dbg), transparent 25%, transparent 75%, var(--dbg)), var(--map);
		}
	}
</style>
