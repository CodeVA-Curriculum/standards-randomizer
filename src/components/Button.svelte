<script>
    export let action = function () {
        console.log("Not loaded yet!");
    }

    

    export let state = "prequery";
    let buttonStyle = "warning";
    let message = "Enter a grade level & subject area!";

    // TODO: Optimize w/ associative array
    $: if(state == "prequery") {
        buttonStyle =  "warning"
        message = "Enter a grade level & subject area!";
    } else if(state == "ready") {
        buttonStyle = "primary"
        message = "Get a Random Pair of Standards!";
    } else if(state == "spinner") {
        buttonStyle = "primary is-loading"
        message = "Loading..."
    } else if(state=="error") {
        buttonStyle = "danger"
        message = "Error! Could not get pair"
    } else if(state == "invalid-pair") {
        buttonStyle = "warning";
        message = "Not a valid pair! Try a different combination";
    }
</script>

<div class='field'>
    <button on:click={action} class='button is-{buttonStyle} is-rounded'>{message}</button>
</div>

<style>
    button {
        padding: 2rem;
        min-width: 20rem;
    }
</style>