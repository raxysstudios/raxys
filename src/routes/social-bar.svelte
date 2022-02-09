<script lang="ts">
	export let telegram = '';
	export let twitter = '';
	export let github = '';
	export let webAppUrl = '';
	export let googlePlayUrl = '';
	export let appStoreUrl = '';
	export let joint = false;
</script>

<div id="bar" class="flex flex-row gap-3 {$$props.class}">
	{#if telegram}
		<a href={'https://t.me/' + telegram} target="_blank">
			<span class="iconify" data-icon="mdi:telegram" data-inline="false" />
		</a>
	{/if}
	{#if twitter}
		<a href={'https://twitter.com/' + twitter} target="_blank">
			<span class="iconify" data-icon="mdi:twitter" data-inline="false" />
		</a>
	{/if}
	{#if github}
		<a href={'https://github.com/' + github} target="_blank">
			<span class="iconify" data-icon="mdi:github" data-inline="false" />
		</a>
	{/if}
	{#if !joint}
		<span class="flex-1" />
	{/if}
	{#if webAppUrl}
		<a href={webAppUrl} target="_blank">
			<span class="iconify" data-icon="mdi:open-in-app" />
		</a>
	{/if}
	{#if googlePlayUrl}
		<a href={googlePlayUrl} target="_blank">
			<span class="iconify" data-icon="mdi:google-play" data-inline="false" />
		</a>
	{/if}
	{#if appStoreUrl}
		<a href={appStoreUrl} target="_blank">
			<span class="iconify" data-icon="ion:ios-appstore" data-inline="false" />
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
