<script>
    export let directions = [];

    function formatTime(time) {
        if (time > 1) {
            return `(${time} mins)`;
        }

        return `(${time} min)`;
    }
</script>

<style>
    .secondary {
        font-size: 0.8rem;
        color: var(--color-text-secondary);
    }

    ol {
        margin-left: calc(var(--spacing-unit) * 4);
    }

    ol li:not(:last-child) {
        margin-bottom: calc(var(--spacing-unit) * 3);
    }
</style>

<ol>
    {#each directions as { text, time }}
        <li>
            {text}
            {#if time}<span class="secondary">{formatTime(time)}</span>{/if}
        </li>
    {/each}
</ol>
