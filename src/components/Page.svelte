<script>
    import Container from '$components/Container.svelte'
    import Title from '$components/Title.svelte'

    export let title = '';
</script>

<Container>
    <header>
        <Title>{title}</Title>
    </header>

    <main>
        <slot></slot>
    </main>

    <!-- TODO: add footer -->
</Container>