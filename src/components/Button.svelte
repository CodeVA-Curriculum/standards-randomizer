<script>
    export let action= function () {
        console.log("Not loaded yet!");
    }
</script>

<div class='field'>
    <button on:click={action} class='button is-primary is-rounded'>Get a Random Pair of Standards!</button>
</div>

<style>
    button {
        padding: 2rem;
    }
</style>