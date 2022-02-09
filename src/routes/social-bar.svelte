<script lang="ts">
	export let telegram = '';
	export let twitter = '';
	export let googlePlayUrl = '';
	export let appStoreUrl = '';
	export let github = '';
</script>

<div class="flex flex-row">
	{#if telegram}
		<a href={'https://t.me/' + telegram}>GitHub</a>
	{/if}
	{#if twitter}
		<a href={'https://twitter.com/' + twitter}>GitHub</a>
	{/if}
	{#if googlePlayUrl}
		<a href={googlePlayUrl}>GitHub</a>
	{/if}
	{#if appStoreUrl}
		<a href={appStoreUrl}>GitHub</a>
	{/if}
	{#if github}
		<a href={'https://github.com/' + github}>GitHub</a>
	{/if}
</div>
