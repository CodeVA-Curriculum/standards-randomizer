<script>
    import {Collapse} from 'svelma';
    export let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. a) Lorum ipsum, b) Lorum ipsum c) Lorum ipsum";

    let body = ""
    let hidden = [];

    $: parse(text);

    function parse(text) {
        let parts = text.split(/\s([a-z][)])\s/)
        body = parts[0];
        // for(let i=1;i<parts.length-1; i++) {
        //     hidden[i] = [... parts[i], parts[i+1]]
        // }
        for(let i=2;i<parts.length;i+=2) {
            hidden.push(parts[i]);
        }
        if(hidden.length > 0) {
            body += "...";
        }
    }
</script>
<div class='standard-parser'>
    <p class='block'>
        {body}
        {#if hidden.length > 0 }
        <span class='has-text-right'>
            <Collapse open={false}>
                <a slot="trigger">
                Read More...
                </a>
                <ol class="has-text-left block" type="a">
                {#each hidden as item}
                    <li>{item}</li>
                {/each}
                </ol>
            </Collapse>
        </span>
        {/if}
    </p>
</div>

<style>
    ol {
        list-style-position: inside;
    }
</style>