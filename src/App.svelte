<script>
	export let name;
	import Forms from './components/Forms.svelte';
	import Button from './components/Button.svelte';
	import Results from './components/Results.svelte';
</script>

<main class='section'>
	<div class='container has-text-centered'>
		<h1 class='title'>CS + Anything</h1>
		<Forms />
		<Button />
		<Results />
	</div>
</main>

<style type="text/scss" global>
	@import "./main.scss";
</style>