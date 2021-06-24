<script>

import Fa from 'svelte-fa'
    import {faDice, faChevronDown} from '@fortawesome/free-solid-svg-icons';
    export let addons;
    export let contents;
    export let title;

    let active = "";
    if(contents.length > 0) {
        active = "is-active";
    }
</script>

<div class='field {addons}'>
    <div class='control'>
        <button class='button is-static'>{title}</button>
    </div>
    <div class="control dropdown {active}">
        <input class="input" type="text">
        <!-- <div class='dropdown-trigger '>
            <button class='button drop-wrap'>
                <Fa icon={faChevronDown} />
            </button>
        </div> -->
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
    </div>
</div>