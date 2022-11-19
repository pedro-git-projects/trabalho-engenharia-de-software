<svelte:head>
	<title>Portfólio - Pedro Martins</title>
	<meta name="portfólio" content="Pedro Martins's portfólio" />
</svelte:head>

<script>
	import Title from "../../../components/Title.svelte";
	import Thumbnail from "../../../components/Thumbnail.svelte";
	import { pedroMartins } from "../../../components/programmer.js";
</script>

<Title titulo={pedroMartins.name}/>
<Thumbnail image={pedroMartins.picture}/>




