<script context="module">
	export async function load({ fetch }) {
		const recipes = await fetch("/data.json").then((res) => res.json());
		const categories = Object.values(recipes).reduce((acc, recipe) => {
			if (!recipe.categories) {
				return acc;
			}

			for (let category of recipe.categories) {
				if (!acc[category]) {
					acc[category] = [];
				}
				acc[category].push(recipe);
			}

			return acc;
		}, {});

		return {
			props: {
				recipes: {
					all: recipes,
					byCategory: categories,
				},
			},
		};
	}
</script>

<script>
	import { headerCase } from "change-case";
	import Page from "$components/Page.svelte";
	import FeaturedRecipes from "$components/FeaturedRecipes.svelte";

	export let recipes;
</script>

<Page title="Recipes">
	{#each Object.keys(recipes.byCategory) as category}
		<FeaturedRecipes
			heading={headerCase(category)}
			recipes={recipes.byCategory[category]} />
	{/each}
</Page>
