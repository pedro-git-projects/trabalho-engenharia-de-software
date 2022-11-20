<svelte:head>
	<title>Portfólio - Pedro Martins</title>
	<meta name="portfólio" content="Pedro Martins's portfólio" />
</svelte:head>

<script>
	import atari from "../../../lib/projects/atari.jpg";
	import js from "../../../lib/projects/js.jpeg";
	import ts from "../../../lib/projects/ts.png";
	import c from "../../../lib/projects/c.jpg";
	import cpp from "../../../lib/projects/cpp.jpg";
	import go from "../../../lib/projects/go.jpg";
	import wa from "../../../lib/projects/wa.png";
	import ProjectCard from "../../../components/ProjectCard.svelte";

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
			<div class="row mt-4">
				<ProjectCard 
					image={cpp}
					title="Happy Little Accidents"
					description="Drawing game developed with Qt and Websockets"
  					link="https://github.com/pedro-git-projects/happy-little-accidents"
 				 />

  				<ProjectCard
	  				image={go}
	  				title="Cthullhu Online"
	  				description="Aplicação web FullStack para criar investigadores para Call of Cthullu"
   				/>

				<ProjectCard
	   				image={c}
	   				title="Motor de Raycsating"
	   				description="Motor de raycasting escrito com C e a biblioteca SDL2 para renderizar ambientes em pseudo 3D"
					link="https://github.com/pedro-git-projects/raycasting"
				/>

   				<ProjectCard
	   				image={wa}
	   				title="Consumo de API com Rust e WSAM"
	   				description="Aplicação escrita com YEW que consome uma API Rest para renderizar uma imagem aleatória de gatinho"
					link="https://github.com/pedro-git-projects/engenharia-de-software-pivotal-tracker"
				/>

				<ProjectCard
	   				image={ts}
	   				title="Gerenciador de Finanças Pessoais"
	   				description="API RESTful de Gerenciador de finanças pessoais escrita em Typescript, testada com Jest, autenticada com JWT e com persistência via MongoDB"
					link="https://github.com/pedro-git-projects/raycasting"
				/>

			<ProjectCard
	   				image={atari}
	   				title="Programas para MOS 6502"
	   				description="Coleção de preogramas escritos em assembly para o MOS 6502, em particular sua variação 6507 utilizada no ATARI 2600"
					link="https://github.com/pedro-git-projects/6502_assembly"
			/>

			<ProjectCard
	   				image={js}
	   				title="Aprendizagem de Máquina para Direção Automática"
	   				description="Rede neural que busca otimizar a distância viajada por um carro sem colisão "
					link="https://github.com/pedro-git-projects/rede-neural-direcao-automatica-js"
				/>



			</div>
			<BackToTop/>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>

