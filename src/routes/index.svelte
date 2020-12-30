<script>
	import Page from "$components/Page.svelte";
	import Subtitle from "$components/Subtitle.svelte";
	import RecipeCard from '$components/RecipeCard.svelte';
</script>

<style>
	.sidescroll-container {
		width: 100%;
		display: flex;
		overflow-x: scroll;
	}
</style>

<Page title="Recipes">
	<Subtitle>Lunch Recipes</Subtitle>
	<div class="sidescroll-container">
		<RecipeCard title="Lentil Soup" description="A very yummy soup"/>
		<RecipeCard title="Turkey Sandwich" description="A sandwich you can eat every day" />
		<RecipeCard title="Lentil Soup" description="A very yummy soup"/>
		<RecipeCard title="Turkey Sandwich" description="A sandwich you can eat every day" />
	</div>
</Page>
