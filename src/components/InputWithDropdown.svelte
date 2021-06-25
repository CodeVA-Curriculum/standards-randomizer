<script>
    import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    import AutoComplete from "./AutoComplete.svelte";

    // Class modifier
    export let addons;

    // Results of API call for grades or subjects
    export let contents = [];

    // Contents of dropdown list
    export let list = [];
    export let validate; // object containing pairs mapped to one another


    export let title;
    let value = "";
    export let validInput; // exposed to parent

    let formState = "";

    function checkInput() {
        return value.length > 0 && list.length > 0 && list.includes(value);
    }

    $: if(checkInput()) {
        formState = ""
        validInput = value;
    } else if(list.length > 0 && !list.includes(value)) {
        if(value.length == 0) {
            formState = '';
        } else {
            formState = "is-danger"
        }
        validInput = null;
    } else {
        validInput = value;
    }

    // Randomize input
    function selectRandom() {
        if(list.length > 0) {
            value = list[Math.floor(Math.random() * list.length)]
            
        } else {
            console.log("Could not select random standard! No connection to server")
            // TODO: Make this visible
        }
    }

</script>

<div class='field {addons}'>
    <div class='control'>
        <button class='button is-static'>{title}</button>
    </div>
    <AutoComplete className="control" inputClassName="input {formState} drop-form" dropdownClassName="has-text-left" items={list} bind:text={value} />
    <div class='control'>
        <button on:click={selectRandom} class='button'><Fa icon={faDice} /></button>
    </div>
</div>

<style>
    .drop-form {
        z-index: 99;
    }
</style>