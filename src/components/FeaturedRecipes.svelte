<script>
    import Subtitle from "$components/Subtitle.svelte";
    import RecipeCard from "$components/RecipeCard.svelte";

    export let heading = "";
    export let recipes = [];
    export let gutterBottom = true;
</script>

<style>
    .sidescrollContainer {
        width: 100%;
        display: flex;
        overflow-x: auto;
    }

    .gutterBottom {
        margin-bottom: calc(var(--spacing-unit) * 4);
    }
</style>

<Subtitle>{heading}</Subtitle>
<div class="sidescrollContainer" class:gutterBottom>
    {#each recipes as recipe}
        <RecipeCard
            title={recipe.title}
            href="/recipes/{recipe.id}"
            description={recipe.description}
            image={recipe.image} />
    {/each}
</div>
