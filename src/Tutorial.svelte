<script>
    import articleStore from "./article-store.js";
    import Point from "./Point.svelte";
</script>

<article>
    {#each $articleStore as a}
        <Point title={a.title} content={a.content}></Point>
    {/each}
</article>

<style>
    article {
        text-align: left;
    }
</style>