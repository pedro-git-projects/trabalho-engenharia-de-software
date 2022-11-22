<svelte:head>
	<title>Portfólio - Pedro Henrique</title>
	<meta name="portfólio" content="Pedro Henrique's portfólio" />
</svelte:head>

<script>
	import pivotal from "../../../lib/projects/pivotal.jpg";
	import gatinho from "../../../lib/projects/gatinho.jpg";
	import backend from "../../../lib/projects/backend.jpg";
	import sql from "../../../lib/projects/sql.jpg";
	import mapa from "../../../lib/projects/mapa.jpg";
	import unieuro from "../../../lib/projects/unieuro.jpg";
	import direito from "../../../lib/projects/direito.jpg";
	import c from "../../../lib/projects/c.jpg";
	import cpp from "../../../lib/projects/cpp.jpg";
	import go from "../../../lib/projects/go.jpg";
	import ntt from "../../../lib/projects/ntt.jpg";
	import fsf from "../../../lib/projects/fsf.svg";
	import gc from "../../../lib/projects/gc.jpg";
	import parque from "../../../lib/projects/parque.jpg";

	import ProjectCard from "../../../components/ProjectCard.svelte";

	import Thumbnail from "../../../components/Thumbnail.svelte";
	import { PedroHenrique } from "../../../components/programmer.js";
	import BackToTop from "../../../components/BackToTop.svelte";

	const anchors = ["Sobre", "Educação", "Habilidades", "Projetos"];

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<h1>{PedroHenrique.name}</h1>
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


<Thumbnail image={PedroHenrique.picture}/>

<section class="container mt-2">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[0]}">{anchors[0]}</h2>
			<hr>
			<p>
				Pedro Henrique é uma pessoa simples, casado, com filho, onde todos os dias trabalha para ser um marido e um pai exemplar, dando o melhor de si para que não falte nada no seu lar. 
			</p>
			<br>
			<br>

			<p>
				Trabalho no Ministério da Agricultura, como Técnico Orçamentário e especialista em convênios. 
			</p>
			<br>
			<br>
			<p>
				Hobies:
				<ul>
					<li>Futebol</li>
					<li>UFC</li>
					<li>Games Online</li>
					<li>Cerveja artesanal</li>
					<li>Barista</li>
				</ul>

			<br>
			<br>

			<div class="text-center">
				<figure class="figure">
					<img src="{mapa}" class="figure-img img-fluid rounded" alt="fsf">
					<figcaption class="figure-caption">Logo do Ministério da Agricultura.</figcaption>
				</figure>
			</div>

			<p>
				Na área da informatica os maiores interesses foi pela área de banco de dados e segurança da informação.
				<br>
				<br>

			<p>
				Onde projeta após se formar fazer uma pós graduação na na área analista de dados e tirar alguns certificados relevantes como <i>(No)SQL</i>, <i>Power Bi</i>, <i>Oracle</i>, <i>My SQL</i> e <i>Python</i>.
				<br>
				<br>
			<p>

			</p>

				
			<div class="text-center mb-4">
				<figure class="figure">
					<img src="{sql}" class="figure-img img-fluid rounded" alt="fsf">
					<figcaption class="figure-caption">Logo do SQL Server.</figcaption>
				</figure>
			</div>

			
			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-5">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[1]}">{anchors[1]}</h2>
			<hr>
			<p>Em 2011 Pedro Henrique obteve seu diploma de bacharel em <b>Direito</b> emitido pela <b>UniEuro</b>.</p>
			<p>Em 2019 concluiu o curso tecnologo de <b>secretário escolar</b>.</p>
			<figure class="figure text-center">
					<img src="{direito}" class="figure-img img-fluid rounded" alt="fsf">
					<figcaption class="figure-caption">Balança da Justiça</figcaption>
				</figure>

				<p>
				Durante seu tempo no direito, tinha predileção na área de direito penal e processo penal, apesar de nunca ter se interessado por tirar a OAB, sempre auxiliou seus colegas de turma na ardua missão de ser advogado.
				</p>

				<div class="container">
					<div class="row">
						<div class="col">
							<figure class="figure text-center">
								<img src="{unieuro}" class="figure-img img-fluid rounded" alt="fsf">
								<figcaption class="figure-caption">Logo da UniEuro.</figcaption>
								</figure>
						</div>
					</div>
				</div>
			<BackToTop/>
		</div>
	</div>
</section>


<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[2]}">{anchors[2]}</h2>
			<hr>
			<h4>Frontend:</h4>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>Bootstrap</li>
			</ul>

			<h4>Backend:</h4>
			<ul>
				<li>JavaScript</li>
			</ul>

			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[3]}">{anchors[3]}</h2>
			<hr>
			<div class="row mt-4">
				<ProjectCard 
		image={pivotal}
		title="Tutorial Pivoto"
		description="Trablho de como mexer no Pivoto"
  link="https://github.com/PedroRochaDF/Pivotal-Tutorial"
  />

  <ProjectCard
	  image={gatinho}
	  title="Projeto Gatinho"
	  description="Site que mostra fotos de gatinhos aleatórios toda vez que é atualizado"
      link="https://github.com/PedroRochaDF/Trabalho-Gatinho"
   />

   <ProjectCard
	   image={backend}
	   title="Trabalho Backend"
	   description="É uma api de backend onde é um Tinder para Animal"
	link="https://github.com/Alisson3366/projeto-de-back-end"
	/>


			</div>
			<div class="mt-2">
				<BackToTop/>
			</div>		
		</div>
	</div>
</section>

<style>
	:global() .p-3:hover {
		color: #d79921;
	}

	:global() .p-3 {
		color: #fbf1c7;
	}

	:global(.dark) .p-3:hover {
		color: #ff79c6;
	}

	:global(.dark) .p-3 {
		color: #f8f8f2;
	}

	section {
		min-height: 100vh;
	}
</style>

