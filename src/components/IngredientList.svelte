<script>
    import pluralize from "pluralize";

    export let ingredients = [];

    const fractions = new Map([
        [0.25, "¼"],
        [0.5, "½"],
        [0.75, "¾"],
        [0.33, "⅓"],
        [0.67, "⅔"],
    ]);

    function formatAmountAndUnit({ amount, unit }) {
        let amountStr = fractions.get(amount) ?? amount.toString();

        if (!unit) return `${amountStr} `;

        return `${amountStr} ${unit} `;
    }

    function formatName({ name, amount, unit }) {
        if (amount > 1 && !unit) {
            return pluralize(name);
        }
        return name;
    }
</script>

<style>
    .secondary {
        font-size: 0.8rem;
        color: var(--color-text-secondary);
    }

    ul {
        margin-left: calc(var(--spacing-unit) * 4);
    }

    ul li:not(:last-child) {
        margin-bottom: calc(var(--spacing-unit));
    }
</style>

<ul>
    {#each ingredients as ingredient}
        <li>
            {#if ingredient.amount}{formatAmountAndUnit(ingredient)}{/if}
            {formatName(ingredient)}
            {#if ingredient.optional}<span class="secondary">(optional)</span>{/if}
            {#if ingredient.flexible}<span class="secondary">(to taste)</span>{/if}
        </li>
    {/each}
</ul>
