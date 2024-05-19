import React from 'react';
import './css/LandingPage.css';

const DetailsPage = () => {
    return (
        <div>
            <header class="header-bg">
                <div class="header container">
                <a href="/"><img height = "45" src="./img/chainz.png" alt="Logo Bikcraft"/></a>
                    <nav aria-label="primaria">
                        <ul class="header-menu font-1-m cor-0">
                        <li><a href="./bicycles">Bicycles</a></li>
                        <li><a href="./contact">Contact</a></li>
                        <li><a href="./buy">Purchase</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main  class="titulo-bg">
                <div>
                    <div class="titulo container">
                        <p class="font-2-xl cor-5">R$ 2499</p>
                            <h1 class="font-1-xxl cor-0">Magic Might<span class="cor-p1">.</span></h1>
                    </div>
                </div>

                <div class="bicicleta container">
                        <div class="bicicleta-imagens">
                            <img src="../img/bicicleta/nimbus2.jpg" alt=""/>
                            <img src="../img/bicicleta/nimbus1.jpg" alt=""/>
                            <img src="../img/bicicleta/nimbus3.jpg" alt=""/>
                        </div>

                        <div class="bicicleta-conteudo">
                            <p class="font-2-l cor-5">A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                            <div class="bicicleta-comprar">
                                <a class="botao" href="../orcamento.html">Comprar agora</a>
                                <span class="font-1-xs cor-6"><img src="../img/icones/entrega.svg" alt=""/>entrega em 5 dias</span>
                                <span class="font-1-xs cor-6"><img src="../img/icones/estoque.svg" alt=""/>18 em estoque</span>
                            </div>

                        <h2 class="font-1-xs cor-0">Informações</h2>
                        <ul class="bicicleta-informacoes">
                            <li>
                                <img src="../img/icones/eletrica.svg" alt=""/>
                                <h3 class="font-1-m cor-0">Motor Elétrico</h3>
                                <p class="font-2-xs cor-5">Permite você viajar distâncias inimaginaveis com a sua bike.</p>
                            </li>
                            <li>
                                <img src="../img/icones/velocidade.svg" alt=""/>
                                <h3 class="font-1-m cor-0">40 km/h</h3>
                                <p class="font-2-xs cor-5">A mais rápida bicicleta elétrica disponível hoje no mercado.</p>
                            </li>
                            <li>
                                <img src="../img/icones/rastreador.svg" alt=""/>
                                <h3 class="font-1-m cor-0">Rastreador</h3>
                                <p class="font-2-xs cor-5">Rastreador e sistema anti-furto para garantir o seu sossego.</p>
                            </li>
                            <li>
                                <img src="../img/icones/carbono.svg" alt=""/>
                                <h3 class="font-1-m cor-0">Fibra de Carbono</h3>
                                <p class="font-2-xs cor-5">Maior proteção possível para a sua Bikcraft com fibra de carbono.</p>
                            </li>   
                        </ul>
                        <h2 class="font-1-xs cor-0">Ficha Técnica</h2>
                        <ul class="bicicleta-ficha font-2-s cor-4">
                            <li>Peso <span>9kg</span></li>
                            <li>Altura <span>60 cm</span></li>
                            <li>Largura <span>120 cm</span></li>
                            <li>Profundidade <span>10cm</span></li>
                            <li>Marchas <span>16 </span></li>
                            <li>Roda <span>29</span></li>
                        </ul>
                    </div>
                </div>
            </main>

            <article class="bicicletas-lista container">
                <h2 class=" font-1-xxl">Escolha a sua <span class="cor-p1">.</span></h2>

                <ul>
                    <li>
                        <a href="./bicicletas/magic.html">
                            <img src="../img/bicicletas/magic.jpg" alt="bicicleta preta"/>
                            <h3 class="font-1-xl">Magic Might</h3>
                            <span class="font-2-m cor-8">R$: 2499</span>
                        </a>
                    </li>
                    <li>
                        <a href="./bicicletas/nebula.html">
                            <img src="../img/bicicletas/nebula.jpg" alt="bicicleta preta"/>
                            <h3 class="font-1-xl">Nébula Cosmic</h3>
                            <span class="font-2-m cor-8">R$: 3999</span>
                        </a>
                    </li>
                </ul>
            </article>

            <article class="seguro-bg">
                <div class="seguro container">
                    <div class="seguro-imagem">
                        <img src="../img/fotos/seguros.jpg" alt="Pessoa parada em cima de uma bicicleta"/>
                    </div>
                    <div class="seguro-conteudo">
                        <h2 class="font-1-xxl cor-0">Pedalhe mais tranquilo com nosso <span class="cor-p1">seguro</span>.</h2>
                        <p class="font-2-l cor-5">Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite diversos benefícios.</p>
                        <a class="botao" href="../seguros.html">Conheça mais </a>
                    </div>
                </div>
            </article>

            <footer class="footer-bg">
            <div class="footer container">
            <a href="/"><img height = "45" src="./img/chainz.png" alt="Logo Bikcraft"/></a>
                <div class="footer-contato">
                    <h3 class="font-2-l-b cor-0">Contacts</h3>
                    <ul class="font-2-m cor-5">
                        <li><a href="tel:+91 6996420024">+91 6996420024</a></li>
                        <li><a href="mailto:contact@chainz.com">contact@chainz.com</a></li>
                        <li>1600 Pennsylvania Avenue NW</li>
                        <li>Washington, D.C.</li>
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
                    <h3 class="font-2-l-b cor-0">Information</h3>
                    <nav>
                        <ul class="font-1-m cor-5">
                        <li><a href="/bicycles">Bicycle</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/buy">Purchase</a></li>
                        </ul>
                    </nav>
                </div>
                <p class="footer-copy font-2-m cor-6">Made by me. All rigths reserved.</p>    
            </div>
        </footer>
        </div>
    );
}

export default DetailsPage;