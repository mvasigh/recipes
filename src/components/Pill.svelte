<style>
    .pill {
        font-size: 0.8rem;
        height: calc(var(--spacing-unit) * 4);
        padding: calc(var(--spacing-unit) * 1) calc(var(--spacing-unit) * 2);
        border-radius: 16px;
        background-color: var(--color-pill);
    }
</style>

<span class="pill">
    <slot></slot>
</span>