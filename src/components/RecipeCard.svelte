<script>
    export let title = '';
    export let description = '';
    export let image = '';
</script>

<style>
    .card {
        min-width: 300px;
        width: 300px;
    }

    figure {
        height: 200px;
        width: 300px;
        overflow: hidden;
        margin-bottom: calc(var(--spacing-unit));
    }

    .card:not(:last-of-type) {
        margin-right: calc(var(--spacing-unit) * 4);
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    .title {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .description {
        font-size: 1rem;
    }
</style>

<div class="card">
    <figure>
        <img src="/lentil_soup.jpg" alt={title} />
    </figure>
    <p class="title">{title}</p>
    <p class="description">{description}</p>
</div>