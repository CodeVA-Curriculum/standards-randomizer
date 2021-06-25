<script>
    export let content = {
        name: "XX.XX",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. a) l;kajsdlf b) l;aj;lskdf c) lkjasldf;kfjd",
        content_area: {
            name: "No Subject"
        }
    };

    import {onMount} from 'svelte';
    import StandardParser from './StandardParser.svelte'

    let color = "is-primary"
    $: if(content.content_area.name == "COMPUTER SCIENCE") {
        color = "is-primary"
    } else {
        color = "is-warning"
    }
</script>

<div class='standard card'>
    <!-- <header class="card-header p-2">
            <h3 class='has-text-weight-semibold is-size-6'>{content.content_area.name}</h3>
    </header> -->
    <div class='card-content has-text-left'>
        <div class="tags are-large has-addons">
            <span class="tag is-dark">{content.name}</span>
            <span class="tag {color}">{content.content_area.name}</span>
          </div>
       
        <p><StandardParser text={content.description} /></p>
    </div>
</div>

<style type='text/scss'>
    
</style>
