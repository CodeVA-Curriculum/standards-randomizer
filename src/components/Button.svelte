<script>
    export let action= function () {
        console.log("Not loaded yet!");
    }

    export let state = "prequery";
</script>

<div class='field'>
    {#if state == "prequery"}
        <button on:click={action} class='button is-primary is-rounded'>Get a Random Pair of Standards!</button>
    {:else if state=="spinner"}
        <button on:click={action} class='button is-primary is-rounded'>Loading</button>
    {:else if state=="error"}
        <button on:click={action} class='button is-primary is-rounded'>Get a Random Pair of Standards!</button>
    {/if}
</div>

<style>
    button {
        padding: 2rem;
    }
</style>