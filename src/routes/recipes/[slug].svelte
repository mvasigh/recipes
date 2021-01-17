<script context="module">
    function getRecipeId(path) {
        let pathParts = path.split("/");
        return pathParts[pathParts.length - 1];
    }

    export async function load({ fetch, page }) {
        let id = getRecipeId(page.path);
        let recipes = await fetch("/data.json").then((res) => res.json());

        // What if the recipe ID doesn't exist?
        // TODO: Redirect to a 404 page

        let recipe = recipes[id];

        return {
            props: { recipe },
        };
    }
</script>

<script>
    import Page from "$components/Page.svelte";
    import PillGroup from "$components/PillGroup.svelte";
    import IngredientList from "$components/IngredientList.svelte";
import DirectionsList from "../../components/DirectionsList.svelte";

    export let recipe;
</script>

<style>
    .description {
        font-family: var(--font-family-body);
        font-weight: 400;
        font-size: 1rem;
    }

    .sectionTitle {
        font-size: 2rem;
        margin: calc(var(--spacing-unit) * 4) 0;
    }

    figure {
        margin: calc(var(--spacing-unit) * 6) 0;
        height: 400px;
        width: 100%;
        overflow: hidden;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
</style>

<Page title={recipe.title}>
    <!-- Description, categories and other meta information -->
    <p class="description">{recipe.description}</p>
    <PillGroup pills={recipe.categories} />

    <!-- Splash image -->
    <figure><img src={`/${recipe.image}`} alt="" /></figure>

    <!-- Ingredients -->
    <h3 class="sectionTitle" id="ingredients">Ingredients</h3>
    <IngredientList ingredients={recipe.ingredients} />
    
    <!-- Directions -->
    <h3 class="sectionTitle" id="directions">Directions</h3>
    <DirectionsList directions={recipe.directions} />
</Page>
