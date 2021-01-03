<script>
    export let gutterBottom = true;
</script>

<style>
    h2 {
        font-weight: 700;
        font-size: 2.2rem;
    }

    .gutterBottom {
        margin-bottom: calc(var(--spacing-unit) * 3);
    }
</style> 

<h2 class:gutterBottom>
    <slot></slot>
</h2>