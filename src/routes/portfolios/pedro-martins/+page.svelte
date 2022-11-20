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
	import ntt from "../../../lib/projects/ntt.jpg";
	import fsf from "../../../lib/projects/fsf.svg";
	import gc from "../../../lib/projects/gc.jpg";
	import parque from "../../../lib/projects/parque.jpg";

	import ProjectCard from "../../../components/ProjectCard.svelte";

	import Thumbnail from "../../../components/Thumbnail.svelte";
	import { pedroMartins } from "../../../components/programmer.js";
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
			<hr>
			<p>
				Pedro é um entusiasta de softaware livre e cypherpunk, apoiando organizações como a <i>Free Softaware Foundation</i> e fazendo uso de software livre sempre que possível. 
				<br>
				Suas distros GNU + Linux de preferência são <i>Arch</i> e <i>Funtoo</i>.
			</p>

			<div class="text-center">
				<figure class="figure">
					<img src="{fsf}" class="figure-img img-fluid rounded" alt="fsf">
					<figcaption class="figure-caption">Logo da Free Softaware Foundation.</figcaption>
				</figure>
			</div>

			<p>
				Em relação à tecnologias ele se interessa, de forma maios prática, por desenvolimento de software e mais teórica em teoria de linguagens de programação, compiladores e interpretadores.
				<br>
				<br>
				Assim sendo, não é de se surpreender que já tenha experimentado uma gama de linguagens, dentre elas <i>common lisp</i>, <i>Clojure</i>, <i>C</i>, <i>C++</i>, <i>Rust</i>, <i>Go</i>, <i>Java</i> e <i>TypeScript</i> para citar algumas.
				<br>
				<br>
				Nas linguagens de programação dois aspectos lhe interessam de forma mais intensa:

			</p>
			<ul>
				<li>Modelo de memória</li>
				<li>Expressividade</li>
			</ul>

			<p>
				Em relação ao primeiro tópico: Sabemos que hoje a maior parte das linguagens utilizam um coletor de lixo em tempo de execução para administrar a memória do programa.
				<br>
				<br>
				Entretanto em linguagens como <i>C</i> e <i>Zig</i> esta responsabilidade é do programador. Como esta abordagem mostrou-se historicamente propensa a erros, outras alternativas também foram consideradas, como o padrão de programação <i>RAII</i> em <i>C++</i> e o sistema de <i>borrow checker</i> em <i>Rust</i>, este último podendo ser descrito como <i>RAII</i> em tempo de compilação.
			</p>

			<p>
				Em se tratando do segundo tópico, sabemos que todas as linguagens que utilizamos são turing-completas, entretanto, ser turing completa é uma exigência muito baixa para uma linguagem. Determinadas linguagens permitem que nos expressemos de maneiras sucintas e extremamente criativas.

				<br>
				<br>

				Este é o caso por exemplo da meta-programação em <i>lisp</i>, que permite a criação natural de DSLs. O que também pode ser obtido em linguagens como <i>C</i>, <i>C++</i> e <i>Rust</i> com graus diferentes de dificuldade.

				<br>
				<br>

				A presença ou ausência de polimorfismo em tempo de execução com o uso de generics e polimorfismo em tempo de compilação com sobrecargas também é algo que pode alterar drasticamente a ergonomia de uma linguagem e entender as motivações, falhas e concessões no desenvolvimento das linguagens de programação é algo que é central para Pedro em sua jornada tecnologica.
			</p>

			<p>
				Por fim Pedro tem diversos projetos pessoais os quais envolvem computação gráfica, programação de aplicações gráficas para desktop, aplicações de terminal e aplicações Web.
			</p>
			<p>
				Entretanto, sua experiência profissional até o momento foi em desenvolvimento backend, trabalhando para a multinacional japonesa <i>NTT Data</i> como desenolvedor backend utilizando <i>Spring Boot</i>, <i>Camunda Modeler</i>, <i>Grafana</i> e <i>AWS CLI</i>.
			</p>

			<div class="text-center mb-4">
				<figure class="figure">
					<img src="{ntt}" class="figure-img img-fluid rounded" alt="fsf">
					<figcaption class="figure-caption">Prédio da NTT Data em São Paulo.</figcaption>
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
			<p>Em 2015 Pedro obteve seu diploma <b>C1</b> de Inglês emitido pela <b>University of Cambridge</b>.</p>
			<p>Em 2019 seu diploma de bacharel em filosofia pela <b>Univesidade de Brasília</b>.</p>
			<p>Ainda no mesmo ano foi aprovado para ingressar no programa de mestado em filosofia da <b>City University of New York</b>.</p>
			<p>Tendo desistido do programa de pós graduação por conta do Coronavírus, atualmente Pedro é aluno do <b>Instituto de Educação Superior de Brasília</b> no curso de análise e desenvolvimento de sistemas.</p>
			<figure class="figure text-center">
					<img src="{gc}" class="figure-img img-fluid rounded" alt="fsf">
					<figcaption class="figure-caption">Graduate Center da CUNY.</figcaption>
				</figure>

				<p>
				Durante seu tempo na filosofia, sua área de concentração era lógica formal, tendo desempenhado pesquisa em <i>lógicas contrafactuais</i>, <i>lógicas não-monotônicas</i> e <i>lógica algébrica abstrata</i>.

				Duas destas pesquisas tendo sido indicadas para o <i>prêmio destaque do programa de iniciação científica do Distrito Federal</i>. E tendo sido apresentadas em grandes eventos como a <i>Semana Nacional da Tecnologia</i>. 
				</p>

				<div class="container">
					<div class="row">
						<div class="col">
							<figure class="figure text-center">
								<img src="{parque}" class="figure-img img-fluid rounded" alt="fsf">
								<figcaption class="figure-caption">Apresentação no parque da cidade.</figcaption>
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
				<li>SCSS</li>
				<li>SCSS</li>
				<li>Bootstrap</li>
				<li>Bootstrap</li>
				<li>Svelte</li>
				<li>React</li>
				<li>Yew</li>
			</ul>

			<h4>Backend:</h4>
			<ul>
				<li>Java</li>
				<li>SpringBoot</li>
				<li>JavaScript</li>
				<li>Typescript</li>
				<li>Express</li>
				<li>Go</li>
				<li>C++</li>
				<li>Crow</li>
				<li>Rust</li>
				<li>Rocket</li>
			</ul>

			<h4>Databases:</h4>
			<ul>
				<li>MariaDB</li>
				<li>MySQL</li>
				<li>SQLite</li>
				<li>PostgreSQL</li>
				<li>MongoDB</li>
				<li>GraphQL</li>
			</ul>

			<h4>Desktop:</h4>
			<ul>
				<li>Qt</li>
				<li>Fyne</li>
				<li>SDL2</li>
			</ul>

			<h4>Mobile:</h4>
			<ul>
				<li>Qt</li>
				<li>SDL2</li>
			</ul>

			<h4>Tools:</h4>
			<ul>
				<li>Linux</li>
				<li>BSD</li>
				<li>CMake</li>
				<li>GDB</li>
				<li>Make</li>
				<li>Maven</li>
				<li>Gradle</li>
				<li>ShellScript</li>
				<li>KVM</li>
				<li>VirtualBox</li>
				<li>GIT</li>
				<li>Jira</li>
				<li>Pivotal Tracker</li>
				<li>Vim</li>
				<li>QtCreator</li>
				<li>SpringToolSuite</li>
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
			<div class="mt-2">
				<BackToTop/>
			</div>		
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>

