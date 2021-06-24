<script>

import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    import AutoComplete from "./AutoComplete.svelte";

    export let addons;
    export let contents;
    export let title;
    export let value = "";

    let state = "danger";

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
    <div class='control'>
        <button class='button'><Fa icon={faDice} /></button>
    </div>
</div>