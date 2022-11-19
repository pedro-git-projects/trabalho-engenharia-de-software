<svelte:head>
	<title>Portfólio - Pedro Martins</title>
	<meta name="portfólio" content="Pedro Martins's portfólio" />
</svelte:head>

<script>
	import Thumbnail from "../../../components/Thumbnail.svelte";
	import { pedroMartins } from "../../../components/programmer.js";

	const anchors = ["sobre", "experiência", "educacao", "habilidades", "premiacoes"];

	const handleAnchorClick = (event) => {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);

		window.scrollTo({
			top: anchor.offsetTop,
			behavior: "smooth"
		});
	};
</script>

<h1>{pedroMartins.name}</h1>
<hr>
<span class="mt-2"></span>

<div class="container-fluid">
{#each anchors as anchor}
<a href="#anchor-{anchor}" class="p-3" on:click={handleAnchorClick}>
	{anchor}
</a>
{/each}
</div>
<span class="mb-4"></span>


<Thumbnail image={pedroMartins.picture}/>


{#each anchors as anchor}
<h2 id="anchor-{anchor}">{anchor}</h2>
{/each}
