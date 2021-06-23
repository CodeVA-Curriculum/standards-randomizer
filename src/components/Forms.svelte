<script>
    import Fa from 'svelte-fa'
    import {faDice} from '@fortawesome/free-solid-svg-icons';
</script>

<div class='columns has-text-centered'>
    <div class='column field has-addons has-addons-right'>
        <div class='control'>
            <button class='button is-static'>Grade</button>
        </div>
        <div class="control">
            <input class="input" type="text">
        </div>
        <div class='control'>
            <button class='button'><Fa icon={faDice} /></button>
        </div>
    </div>
    <div class='column field has-addons has-addons-left'>
        <div class='control'>
            <button class='button is-static'>Subject</button>
        </div>
        <div class="control">
            <input class="input" type="text">
        </div>
        <div class='control'>
            <button class='button'><Fa icon={faDice} /></button>
        </div>
    </div>
</div>