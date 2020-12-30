<script>
    export let gutterBottom = true;
</script>

<style>
    h1 {
        font-weight: 700;
        font-size: 3.2rem;
    }

    .gutterBottom {
        margin-bottom: calc(var(--spacing-unit) * 3);
    }
</style> 

<h1 class:gutterBottom>
    <slot></slot>
</h1>