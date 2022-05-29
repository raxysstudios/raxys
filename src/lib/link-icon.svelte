<script lang="ts">
	export let url = '';
	export let icon = '';
</script>

<a href={url} class="p-1 hover:scale-125">
	<span class="iconify" data-icon={icon} data-inline="false" />
</a>
