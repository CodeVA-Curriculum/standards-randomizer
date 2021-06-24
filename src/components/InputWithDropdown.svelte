<script>

import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    import AutoComplete from "./AutoComplete.svelte";

    export let addons;
    export let contents;
    export let title;
    export let value = "";

    let active = "";
    if(value.length > 0) {
        active = "is-active";
    }


</script>

<div class='field {addons}'>
    <div class='control'>
        <button class='button is-static'>{title}</button>
    </div>
    <AutoComplete className="control" inputClassName="input drop-form" dropdownClassName="has-text-left" items={contents} bind:selectedItem={value} />
    <!-- <div class="control">
        <input class="input" type="text" bind:value={value}>
    </div> -->
    <div class='control'>
        <button class='button'><Fa icon={faDice} /></button>
    </div>
<!-- <div class='field {addons}'>
    <div class='control'>
        <button class='button is-static'>{title}</button>
    </div>
    <div class="control dropdown {active}">
        <input class="input" type="text" bind:value={value}>
        <div class='dropdown-trigger '>
            <button class='button drop-wrap'>
                <Fa icon={faChevronDown} />
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                {#each contents as item}
                    <div class=dropdown-item>
                        {item}
                    </div>
                {/each} 
            </div>
        </div>
    </div>
    <div class='control'>
        <button class='button'><Fa icon={faDice} /></button>
    </div> -->
</div>