<script>
	export let name;
	import Forms from './components/Forms.svelte';
	import Button from './components/Button.svelte';
	import Results from './components/Results.svelte';

	import Standard from './components/Standard.svelte';
    import Fa from 'svelte-fa';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';

	import { fly } from 'svelte/transition';

	// this object becomes non-null when we get results
	let results;
	
</script>

<main class='section'>
	<div class='container has-text-centered'>
		<h1 class='title'>CS + Anything</h1>
		
		<!-- The form sends the request and validates the user's input -->
		<div class='section'>
		<Forms bind:results />
		</div>
		{#if results}
		<div transition:fly="{{ y: 200, duration: 500 }}" class='section'>
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
		{/if}
		
	</div>
</main>

<style type="text/scss" global>
	@import "./main.scss";
</style>