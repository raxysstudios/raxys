<script lang="ts">
	export let telegram = '';
	export let twitter = '';
	export let github = '';
	export let googlePlayUrl = '';
	export let appStoreUrl = '';
</script>

<div id="bar" class="flex flex-row justify-between">
	{#if telegram || twitter}
		<div>
			{#if telegram}
				<a href={'https://t.me/' + telegram}>
					<span class="iconify" data-icon="mdi:telegram" data-inline="false" />
				</a>
			{/if}
			{#if twitter}
				<a href={'https://twitter.com/' + twitter}>
					<span class="iconify" data-icon="mdi:twitter" data-inline="false" />
				</a>
			{/if}
		</div>
	{/if}
	{#if github}
		<a href={'https://github.com/' + github}>
			<span class="iconify" data-icon="mdi:github" data-inline="false" />
		</a>
	{/if}
	{#if googlePlayUrl || appStoreUrl}
		<div>
			{#if googlePlayUrl}
				<a href={googlePlayUrl}>
					<span class="iconify" data-icon="mdi:google-play" data-inline="false" />
				</a>
			{/if}
			{#if appStoreUrl}
				<a href={appStoreUrl}>
					<span class="iconify" data-icon="ion:ios-appstore" data-inline="false" />
				</a>
			{/if}
		</div>
	{/if}
</div>

<style class="postcss">
	#bar > div {
		@apply flex flex-row gap-3;
	}

	.iconify {
		font-size: 24px;
	}
	a:hover {
		@apply scale-125;
	}
</style>
