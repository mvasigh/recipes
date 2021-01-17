<script>
    export let title = '';
    export let description = '';
    export let image = '';
    export let href = '';
</script>

<style>
    :root {
        --card-width: 400px;
    }

    .card {
        max-width: var(--card-width);
    }

    figure {
        height: 200px;
        max-width: var(--card-width);
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

<a href={href} class="card">
    <figure>
        <img src={image} alt={title} />
    </figure>
    <p class="title">{title}</p>
    <p class="description">{description}</p>
</a>