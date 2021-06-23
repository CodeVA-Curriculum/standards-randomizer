<script>
    import Standard from './Standard.svelte';
    import Fa from 'svelte-fa';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';
</script>

<div class='section'>
    <div class='columns is-vcentered'>
        <div class='column'>
            <Standard />
        </div>
        <div class='column is-2'>
               <Fa icon={faTimes} size='4x' />
        </div>
        <div class='column'>
            <Standard />
        </div>
    </div>
</div>