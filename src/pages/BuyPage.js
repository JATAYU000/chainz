import React from 'react';
import './css/LandingPage.css';

const BuyPage = () => {
    const mycycles = [
        {
            "name": "Gunsrose",
            "path": "./img/bicicletas/nimbus.jpg",
            "price": "4999",
            "desc" : "description",
            "stock": "50",
            "speed": "50 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "PhantumX",
            "path": "./img/bicicletas/magic.jpg",
            "price": "2499",
            "desc" : "description",
            "stock": "50",
            "speed": "45 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Cyclotron",
            "path": "./img/bicicletas/nebula.jpg",
            "price": "3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Scott",
            "path": "./img/bicicletas/nebula.jpg",
            "price": "3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Sunway",
            "path": "./img/bicicletas/nimbus.jpg",
            "price": "4999",
            "desc" : "description",
            "stock": "50",
            "speed": "50 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Super Cross",
            "path": "./img/bicicletas/magic.jpg",
            "price": "2499",
            "desc" : "description",
            "stock": "50",
            "speed": "45 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Red Fox",
            "path": "./img/bicicletas/nebula.jpg",
            "price": "3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Marble RX",
            "path": "./img/bicicletas/nebula.jpg",
            "price": "3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },


    ]

    return (
        <div id="orcamento">
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

        <main>
            <div class="titulo-bg">
                <div class="titulo container">
                    <p class="font-2-l-b cor-5">FILL YOUR DETAILS</p>
                    <h1 class="font-1-xxl cor-0">Purchase Made Easy<span class="cor-p1">.</span></h1>
                </div>
            </div>

            <form class="orcamento container" action="/">
                <div class="orcamento-produto">
                    <h2 class="font-1-xs cor-5">Electric or Geared or Gearless?</h2>

                    <input type="radio" name="tipo" value="bikcraft" id="bikcraft"/>
                    <label for="bikcraft">Electric</label>

                    
                    <input type="radio" name="tipo" value="geared" id="geared"/>
                    <label for="geared">Geared</label>

                    <input type="radio" name="tipo" value="seguro" id="seguro"/>
                    <label for="seguro">Gearless</label>
                    

                    <div class="orcamento-conteudo" id="orcamento-bikcraft">
                        <h2 class="font-1-xs cor-5">Choose the cycle</h2>

                        <input type="radio" name="produto" value="nimbus" id="nimbus"/>
                        <label for="nimbus">Gunsrose<span>R$ 4999</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>50km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="magic" id="magic"/>
                        <label for="magic">PhantumX<span>R$ 2499</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>45km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/magic.jpg" alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="nebula" id="nebula"/>
                        <label for="nebula">Cyclotron <span>R$ 3999</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>40km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta branca"/>
                        </div>
                        <input type="radio" name="produto" value="n" id="n"/>
                        <label for="n">Scott<span>R$ 3999</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>40km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta branca"/>
                        </div>
                        

                    </div>   
                

                    <div class="orcamento-conteudo" id="orcamento-seguro">
                        <h2 class="font-1-xs cor-5">Choose the cycle</h2>

                        <input type="radio" name="produto" value="nimbus2" id="nimbus2"/>
                        <label for="nimbus2">Sunway <span>R$ 4999</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>50km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="magic2" id="magic2"/>
                        <label for="magic2">Super Cross <span>R$ 2499</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>45km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/magic.jpg" alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="nebula2" id="nebula2"/>
                        <label for="nebula2">Red Fox <span>R$ 3999</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>40km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta branca"/>
                        </div>
                        <input type="radio" name="produto" value="nebula21" id="nebula21"/>
                        <label for="nebula21">Marble RX <span>R$ 3999</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>40km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta branca"/>
                        </div>
                        

                    </div>
                    
                    
                    <div class="orcamento-conteudo" id="orcamento-geared">
                        <h2 class="font-1-xs cor-5">Choose the cycle</h2>

                        <input type="radio" name="produto" value="nimbus3" id="nimbus3"/>
                        <label for="nimbus3">RACE <span>R$ 4999</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>50km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="magic3" id="magic3"/>
                        <label for="magic3">White Bone <span>R$ 2499</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>45km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/magic.jpg" alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="nebula3" id="nebula3"/>
                        <label for="nebula3">Stryder <span>R$ 3999</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>40km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta branca"/>
                        </div>
                        <input type="radio" name="produto" value="ne3" id="ne3"/>
                        <label for="ne3">Orbea <span>R$ 3999</span></label>

                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>40km / h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta branca"/>
                        </div>
                        

                    </div>
                </div>

                <div class="orcamento-dados form">
                    <h2 class="font-1-xs cor-9 col-2">PERSONAL DATA</h2>
                    <div>
                        <label for="nome">Name</label>
                        <input id="nome" type="text" name="nome"/>
                    </div>
                    <div>
                        <label for="sobrenome">Surname</label>
                        <input id="sobrenome" type="text" name="sobrenome"/>
                    </div>
                    <div class="col-2">
                        <label for="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" placeholder="000.000.000-00"/>
                    </div>
                    <div class="col-2">
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email"/>
                    </div>

                    <h2 class="font-1-xs cor-9 col-2">DELIVERY</h2>

                    <div>
                        <label for="cep">Pincode</label>
                        <input id="cep" type="text" name="cep"/>
                    </div>
                    <div>
                        <label for="numero">Number</label>
                        <input id="numero" type="text" name="numero"/>
                    </div>
                    <div>
                        <label for="logradouro">Building</label>
                        <input id="logradouro" type="text" name="logradouro"/>
                    </div>
                    <div>
                        <label for="bairro">Street</label>
                        <input id="bairro" type="text" name="bairro"/>
                    </div>
                    <div>
                        <label for="cidade">City</label>
                        <input id="cidade" type="text" name="cidade"/>
                    </div>
                    <div>
                        <label for="estado">State</label>
                        <input id="estado" type="text" name="estado"/>
                    </div>

                    <button class="botao col-2">Solicitar orçamento</button>
                </div>
            </form>
        </main>

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
export default BuyPage;