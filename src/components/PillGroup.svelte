<script>
    import { headerCase } from "change-case";
    import Pill from "$components/Pill.svelte";

    export let pills;
</script>

<style>
    .pillGroup {
        margin-top: calc(var(--spacing-unit) * 2);
        margin-bottom: calc(var(--spacing-unit) * 2);
        list-style-type: none;
        display: flex;
    }

    .pillGroup li {
        margin: 0;
        padding: 0;
    }

    .pillGroup li:not(:last-child) {
        margin-right: calc(var(--spacing-unit) * 1);
    }
</style>

<ul class="pillGroup">
    {#each pills as pill}
        <li>
            <Pill>{headerCase(pill)}</Pill>
        </li>
    {/each}
</ul>
