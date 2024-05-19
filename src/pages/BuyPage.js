import React from 'react';
import './css/LandingPage.css';

const BuyPage = () => {
    const mycycles = [
        {
            "name": "Gunsrose",
            "paths": "./img/cycles/Gunsrose.png",
            "price": "₹ 4999",
            "desc" : "description",
            "stock": "50",
            "speed": "50 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "PhantomX",
            "paths": "./img/cycles/Phantom X.png",
            "price": "₹ 2499",
            "desc" : "description",
            "stock": "50",
            "speed": "45 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Cyclotron",
            "paths": "./img/cycles/cyclotron.png",
            "price": "₹ 3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Scott",
            "paths": "./img/cycles/SCOTT.png",
            "price": "₹ 3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Sunway",
            "paths": "./img/cycles/Sunway.png",
            "price": "₹ 4999",
            "desc" : "description",
            "stock": "50",
            "speed": "50 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Super Cross",
            "paths": "./img/cycles/Supercross.png",
            "price": "₹ 2499",
            "desc" : "description",
            "stock": "50",
            "speed": "45 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Red Fox",
            "paths": "./img/cycles/basket.png",
            "price": "₹ 3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Marble RX",
            "paths": "./img/cycles/aesthetic.png",
            "price": "₹ 3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Whitebone",
            "paths": "./img/cycles/whitebone.png",
            "price": "₹ 4999",
            "desc" : "description",
            "stock": "50",
            "speed": "50 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "RACE",
            "paths": "./img/cycles/RACE.png",
            "price": "₹ 2499",
            "desc" : "description",
            "stock": "50",
            "speed": "45 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Stryder",
            "paths": "./img/cycles/Stryder.png",
            "price": "₹ 3999",
            "desc" : "description",
            "stock": "50",
            "speed": "40 Km/h",
            "type" : "Shimano Gear",
            "material" : "Carbon Fiber",
        },
        {
            "name": "Orbea",
            "paths": "./img/cycles/orbea.png",
            "price": "₹ 3999",
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
                        <label for="nimbus">{mycycles[0].name}<span>{mycycles[0].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[0].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[0].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[0].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[0].paths} alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="magic" id="magic"/>
                        <label for="magic">{mycycles[1].name}<span>{mycycles[1].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[1].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[1].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[1].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[1].paths} alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="nebula" id="nebula"/>
                        <label for="nebula">{mycycles[2].name}<span>{mycycles[2].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[2].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[2].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[2].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[2].paths} alt="Bicicleta Preta"/>
                        </div>
                        <input type="radio" name="produto" value="n" id="n"/>
                        <label for="n">{mycycles[3].name}<span>{mycycles[3].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[3].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[3].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[3].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[3].paths} alt="Bicicleta Preta"/>
                        </div>
                        

                    </div>   
                

                    <div class="orcamento-conteudo" id="orcamento-seguro">
                        <h2 class="font-1-xs cor-5">Choose the cycle</h2>

                        <input type="radio" name="produto" value="nimbus2" id="nimbus2"/>
                        <label for="nimbus2">{mycycles[4].name}<span>{mycycles[4].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[4].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[4].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[4].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[4].paths} alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="magic2" id="magic2"/>
                        <label for="magic2">{mycycles[5].name}<span>{mycycles[5].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[5].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[5].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[5].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[5].paths} alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="nebula2" id="nebula2"/>
                        <label for="nebula2">{mycycles[6].name}<span>{mycycles[6].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[6].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[6].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[6].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[6].paths} alt="Bicicleta Preta"/>
                        </div>
                        <input type="radio" name="produto" value="nebula21" id="nebula21"/>
                        <label for="nebula21">{mycycles[7].name}<span>{mycycles[7].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[7].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[7].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[7].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[7].paths} alt="Bicicleta Preta"/>
                        </div>
                        

                    </div>
                    
                    
                    <div class="orcamento-conteudo" id="orcamento-geared">
                        <h2 class="font-1-xs cor-5">Choose the cycle</h2>

                        <input type="radio" name="produto" value="nimbus3" id="nimbus3"/>
                        <label for="nimbus3">{mycycles[8].name}<span>{mycycles[8].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[8].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[8].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[8].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[8].paths} alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="magic3" id="magic3"/>
                        <label for="magic3">{mycycles[9].name}<span>{mycycles[9].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[9].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[9].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[9].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[9].paths} alt="Bicicleta Preta"/>
                        </div>

                        <input type="radio" name="produto" value="nebula3" id="nebula3"/>
                        <label for="nebula3">{mycycles[10].name}<span>{mycycles[10].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[10].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[10].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[10].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[10].paths} alt="Bicicleta Preta"/>
                        </div>
                        <input type="radio" name="produto" value="ne3" id="ne3"/>
                        <label for="ne3">{mycycles[11].name}<span>{mycycles[11].price}</span></label>
                        <div class="orcamento-detalhes">
                            <ul class="font-1-xs cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[11].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[11].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[11].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <img src={mycycles[11].paths} alt="Bicicleta Preta"/>
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