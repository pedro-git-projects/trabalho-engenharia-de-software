<svelte:head>
	<title>Portfólio - Pedro Martins</title>
	<meta name="portfólio" content="Pedro Martins's portfólio" />
</svelte:head>

<script>
	import Thumbnail from "../../../components/Thumbnail.svelte";
	import { pedroMartins } from "../../../components/programmer.js";
	import BackToTop from "../../../components/BackToTop.svelte";

	const anchors = ["Sobre", "Experiência", "Educação", "Habilidades", "Projetos"];

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<h1>{pedroMartins.name}</h1>
<hr>
<span class="mt-2"></span>

<div class="container-fluid">
{#each anchors as anchor}
<a href="#anchor-{anchor}" class="p-3" on:click={scrollIntoView}>
	{anchor}
</a>
{/each}
</div>
<span class="mb-4"></span>


<Thumbnail image={pedroMartins.picture}/>

<section class="container mt-2">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[0]}">{anchors[0]}</h2>
			<p>{pedroMartins.description}</p>
			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-2">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[1]}">{anchors[1]}</h2>
			<p>{pedroMartins.description}</p>
			<BackToTop/>
		</div>
	</div>
</section>


<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[2]}">{anchors[2]}</h2>
			<p>{pedroMartins.description}</p>
			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[3]}">{anchors[3]}</h2>
			<p>{pedroMartins.description}</p>
			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[4]}">{anchors[4]}</h2>
			<p>{pedroMartins.description}</p>
			<BackToTop/>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>

