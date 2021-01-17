<script>
    export let gutterBottom = true;
</script>

<style>
    h1 {
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 1;
    }

    .gutterBottom {
        margin-bottom: calc(var(--spacing-unit) * 3);
    }
</style> 

<h1 class:gutterBottom>
    <slot></slot>
</h1>