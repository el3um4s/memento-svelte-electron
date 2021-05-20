<script>
    export let title = null;
    export let content = [];
</script>

<h3>{title}</h3>
{#if content.length > 0}
    <ul>
        {#each content as c}
            <li>{c}</li>
        {/each}
    </ul>
{/if}

<style>
    li {
        white-space: pre-wrap;
    }
</style>