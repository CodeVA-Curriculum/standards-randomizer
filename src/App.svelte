<script>
	export let name;
	import Forms from './components/Forms.svelte';
	import Button from './components/Button.svelte';
	import Results from './components/Results.svelte';
	import StandardParser from './components/StandardParser.svelte'

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
		<Forms bind:results />

		{#if results}
		<div transition:fly="{{ y: 200, duration: 500 }}" class='section'>
			<div class='columns'>
				<div class='column'>
					<Standard content={results.cs} />
				</div>
				<div class='column is-2'>
					<div class='section'>
					   <Fa icon={faTimes} size='4x' />
					</div>
				</div>
				<div class='column'>
					<Standard content={results.other} />
				</div>
			</div>
		</div>
		{/if}
	</div>
</main>

<style type="text/scss" global>
	@import "./main.scss";
</style>