<script>
	import Page from "$components/Page.svelte";
	import FeaturedRecipes from '$components/FeaturedRecipes.svelte';

	const recipes = [
		{
			title: 'Chunky Lentil Soup',
			description: 'A hearty lentil soup packed with veggies',
		},
		{
			title: 'Turkey Sandwich',
			description: 'Reliable classic that you can eat every day'
		},
		{
			title: 'Yogurt Bowl',
			description: 'No cooking involved! Just some yogurt and fruit'
		},
		{
			title: 'Bowl of Cereal',
			description: 'Only two ingredients, ready made'
		}
	]
</script>

<Page title="Recipes">
	<FeaturedRecipes heading="Lunch" recipes={recipes} />
	<FeaturedRecipes heading="Iranian Food" recipes={recipes} />
	<FeaturedRecipes heading="Dinner" recipes={recipes} />
	<FeaturedRecipes heading="Tex-Mex" recipes={recipes} />
</Page>
