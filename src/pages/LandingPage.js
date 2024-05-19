import React from 'react';
import './css/LandingPage.css';

const LandingPage = () => {
    return (
        <div>
        <header class="header-bg">
            <div class="header container">
            <a href="./index.html"><img src="./img/bikcraft.svg" alt="Logo Bikcraft"/></a>
                <nav aria-label="primaria">
                    <ul class="header-menu font-1-m cor-0">
                        <li><a href="./bicicletas.html">Bicicletas</a></li>
                        <li><a href="./seguros.html">Seguros</a></li>
                        <li><a href="./contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="introducao-bg">
            <div class="introducao container">
                <div class="introducao-conteudo">
                <h1 class="font-1-xxl cor-0 fadeInDown" data-anime="200">Bicicletas feitas sob medida<span class="cor-p1">.</span></h1>
                <p class="font-2-l cor-5 fadeInDown" data-anime="400">Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikcraft.</p>
                <a class="botao fadeInDown" href="./bicicletas" data-anime="600">Escolha a sua</a>
                </div>
                <div>
                    <img class="fadeInDown" data-anime="600" src="./img/fotos/introducao.jpg" alt="Bicicleta elétrica preta"/>
                </div>
                
            </div>
        </main>

        <article class="bicicletas-lista">
            <h2 class="container font-1-xxl">Escolha a sua <span class="cor-p1">.</span></h2>

            <ul>
                <li>
                    <a href="./bicicletas/magic.html">
                        <img src="./img/bicicletas/magic-home.jpg" alt="bicicleta preta"/>
                        <h3 class="font-1-xl">Magic Might</h3>
                        <span class="font-2-m cor-8">R$: 2499</span>
                    </a>
                </li>
                <li>
                    <a href="./bicicletas/magic.html">
                        <img src="./img/bicicletas/magic-home.jpg" alt="bicicleta preta"/>
                        <h3 class="font-1-xl">Nimbus Stark</h3>
                        <span class="font-2-m cor-8">R$: 4999</span>
                    </a>
                </li>
                <li>
                    <a href="./bicicletas/magic.html">
                        <img src="./img/bicicletas/magic-home.jpg" alt="bicicleta preta"/>
                        <h3 class="font-1-xl">Nébula Cosmic</h3>
                        <span class="font-2-m cor-8">R$: 5999</span>
                    </a>
                </li>
            </ul>
        </article>

        <article class="tecnologia-bg">
            <div class="tecnologia container">
                <div class="tecnologia-conteudo">
                <span class="font-2-l-b cor-5">Tecnologia Avançada</span>
                <h2 class="font-1-xxl cor-0">Você escolhe as suas cores e componentes<span class="cor-p1">.</span></h2>
                <p class="font-2-l cor-5">Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.</p>
                <a class="link" href="./bicicletas.html">Escolha um modelo</a>

                <div class="tecnologia-vantagem">
                    <div>
                        <img src="./img/icones/eletrica.svg" alt=""/>
                        <h3 class="font-1-m cor-0">Motor elétrico</h3>
                        <p class="font-2-s cor-5">Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.</p>
                    </div>
            
                    <div>
                        <img src="./img/icones/rastreador.svg" alt=""/>
                        <h3 class="font-1-m cor-0">Rastreador</h3>
                        <p class="font-2-s cor-5">Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.</p>
                    </div>
                </div>
                </div>

                <div class="tecnologia-imagem">
                    <img src="./img/fotos/tecnologia.jpg" alt=""/>
                </div>
            </div>
        </article>

        <article class="parceiros" aria-label="Nossos Parceiros">
            <h2 class="container font-1-xxl">Nossos parceiros <span class="cor-p1">.</span></h2>

            <ul>
                <li><img src="./img/parceiros/caravan.svg" alt="Caravan"/></li>
                <li class="ranek"><img src="./img/parceiros/ranek.svg" alt="Ranek"/></li>
                <li><img src="./img/parceiros/handel.svg" alt="Handel"/></li>
                <li class="dogs"><img src="./img/parceiros/dogs.svg" alt="Dogs"/></li>
                <li id="lescone" class="icon"><img src="./img/parceiros/lescone.svg" alt="Lescone"/></li>
                <li id="flexblog" class="icon"><img src="./img/parceiros/flexblog.svg" alt="Flexblog"/></li>
                <li class="icon"><img src="./img/parceiros/wildbeast.svg" alt="Wildbeast"/></li>
                <li class="surfbot"><img src="./img/parceiros/surfbot.svg" alt="Surfbot"/></li>
            </ul>
        </article>

        <section class="depoimento" aria-label="Depoimento">
            <div>
                <img src="./img/fotos/depoimento.jpg" alt="Pessoa pedalando em uma bicicleta bikcraft"/>
            </div>
            <div class="depoimento-conteudo">
                <blockquote class="font-1-xl cor-p5">
                    <p>
                        Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta atividade. Recomendo à todos que amo.
                    </p>
                </blockquote>
                <span class="font-1-m-b cor-p4">Ana Júlia</span>
            </div>
        </section>

        <article class="seguros-bg">
            <div class="seguros container">
                <h2 class="font-1-xxl cor-0">Seguros<span class="cor-p1">.</span></h2>
                <div class="seguros-item">
                    <h3 class="font-1-xl cor-6">PRATA</h3>
                    <span class="font-1-xl cor-0">R$: 199 <span class="font-1-xs cor-6">mensal</span></span> 
                    <ul class="font-2-m cor-0">
                        <li>Duas trocas por ano</li>
                        <li>Assistência técnica</li>
                        <li>Suporte 08h às 18h</li>
                        <li>Cobertura estadual</li>
                    </ul>
                    <a class="botao segundario" href="./orcamento.html">Inscreva-se</a>
                </div>

                <div class="seguros-item">
                    <h3 class="font-1-xl cor-p1">Ouro</h3>
                    <span class="font-1-xl cor-0">R$: 199 <span class="font-1-xs cor-6">mensal</span></span> 
                    <ul class="font-2-m cor-0">
                        <li>Cinco trocas por ano</li>
                        <li>Assistência especial</li>
                        <li>Suporte 24h</li>
                        <li>Cobertura nacional</li>
                        <li>Desconto em parceiros</li>
                        <li>Acesso ao Clube Bikcraft</li>
                        <a class="botao" href="./orcamento.html">Inscreva-se</a>
                    </ul>
                    
                </div>
            </div>
        </article >
        
        <footer class="footer-bg">
            <div class="footer container">
                <img src="./img/bikcraft.svg" alt="Bikcraft"/>
                <div class="footer-contato">
                    <h3 class="font-2-l-b cor-0">Contato</h3>
                    <ul class="font-2-m cor-5">
                        <li><a href="tel:+55 21 98878-9908">+55 21 98878-9908</a></li>
                        <li><a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></li>
                        <li>Rua Ali Perto, 42 - Botafogo</li>
                        <li>Rio de Janeiro - RJ</li>
                    </ul> 
                    <div class="footer-redes">
                        <a href="/">
                            <img src="./img/redes/instagram.svg" alt="Instagram"/>
                        </a>
                        <a href="/">
                            <img src="./img/redes/facebook.svg" alt="Facebook"/>
                        </a>
                        <a href="/">
                            <img src="./img/redes/youtube.svg" alt="Youtube"/>
                        </a>
                    </div>
                </div>
                <div class="footer-informacoes">
                    <h3 class="font-2-l-b cor-0">Informações</h3>
                    <nav>
                        <ul class="font-1-m cor-5">
                        <li><a href="./bicicletas.html">Bicicletas</a></li>
                        <li><a href="./seguros.html">Seguros</a></li>
                        <li><a href="./contatos.html">Contato</a></li>
                        <li><a href="./termos.html">Termos e Condições</a></li>
                        </ul>
                    </nav>
                </div>
                <p class="footer-copy font-2-m cor-6">Bikcraft &copy alguns direitos reservados.</p>    
            </div>
        </footer>

        <script src="./js/plugins/simple-anime.js"></script>
        <script src="./js/script.js"></script>
        </div>
    );
}
export default LandingPage;