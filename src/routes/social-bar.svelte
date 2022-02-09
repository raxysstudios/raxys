<script lang="ts">
	export let telegram = '';
	export let twitter = '';
	export let googlePlayUrl = '';
	export let appStoreUrl = '';
	export let github = '';
</script>

<div class="flex flex-row gap-3">
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
	<span class="flex-grow" />
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
	{#if github}
		<a href={'https://github.com/' + github}>
			<span class="iconify" data-icon="mdi:github" data-inline="false" />
		</a>
	{/if}
</div>

<style class="postcss">
	.iconify {
		font-size: 24px;
	}
	a:hover {
		@apply scale-125;
	}
</style>
