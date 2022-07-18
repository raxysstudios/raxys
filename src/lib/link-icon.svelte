<script lang="ts">
	import Icon from '@iconify/svelte';

	export let url = '';
	export let icon = '';
</script>

<a href={url} class="p-1 hover:scale-125">
	<Icon {icon} />
</a>
