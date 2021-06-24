<script>

import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    import AutoComplete from "./AutoComplete.svelte";

    export let addons;
    export let contents;
    export let title;
    let value = "";
    export let validInput;

    let formState = "";

    $: if(value.length > 0 && !contents.includes(value)) {
        formState = "is-danger"
        validInput = null;
    } else if(value.length > 0) {
        formState = ""
        validInput = value;
    } else {
        validInput = null;
    }
    let randomChoice;
    function selectRandom() {
        value = contents[Math.floor(Math.random() * contents.length)]
        console.log("Selected", value);
    }

    // TODO: Add form validation & binding


</script>

<div class='field {addons}'>
    <div class='control'>
        <button class='button is-static'>{title}</button>
    </div>
    <AutoComplete className="control" inputClassName="input {formState} drop-form" dropdownClassName="has-text-left" items={contents} bind:text={value} />
    <div class='control'>
        <button on:click={selectRandom} class='button'><Fa icon={faDice} /></button>
    </div>
</div>

<style>
    .drop-form {
        z-index: 99;
    }
</style>