import React from 'react';
import './css/LandingPage.css';
import { useEffect } from 'react';

const DetailsPage = ({index}) => {
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
    useEffect(() => {
        window.scrollTo(0, 0);
      },[] );
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
                        <p class="font-2-xl cor-5">{mycycles[index].price}</p>
                            <h1 class="font-1-xxl cor-0">{mycycles[index].name}<span class="cor-p1">.</span></h1>
                    </div>
                </div>

                <div class="bicicleta container">
                        <div class="bicicleta-imagens">
                            <img src={mycycles[index].paths} alt=""/>
                        </div>

                        <div class="bicicleta-conteudo">
                            <p class="font-2-l cor-5">{mycycles[index].desc}</p>
                            <div class="bicicleta-comprar">
                                <a class="botao" href="/buy">Buy now</a>
                                <span class="font-1-xs cor-6"><img src="../img/icones/entrega.svg" alt=""/>delivery in 5 days</span>
                                <span class="font-1-xs cor-6"><img src="../img/icones/estoque.svg" alt=""/>{mycycles[index].stock} in stock</span>
                            </div>

                        <h2 class="font-1-xs cor-0">Information</h2>
                        <ul class="bicicleta-informacoes">
                            <li>
                                <img src="../img/icones/eletrica.svg" alt=""/>
                                <h3 class="font-1-m cor-0">{mycycles[index].type}</h3>
                                <p class="font-2-xs cor-5">It allows you to travel unimaginable distances with your bike.</p>
                            </li>
                            <li>
                                <img src="../img/icones/velocidade.svg" alt=""/>
                                <h3 class="font-1-m cor-0">{mycycles[index].speed}</h3>
                                <p class="font-2-xs cor-5">The fastest electric bicycle available on the market today.</p>
                            </li>
                            <li>
                                <img src="../img/icones/rastreador.svg" alt=""/>
                                <h3 class="font-1-m cor-0">Tracker</h3>
                                <p class="font-2-xs cor-5">Tracker and anti-theft system to guarantee your peace of mind.</p>
                            </li>
                            <li>
                                <img src="../img/icones/carbono.svg" alt=""/>
                                <h3 class="font-1-m cor-0">{mycycles[index].material}</h3>
                                <p class="font-2-xs cor-5">Greatest possible protection for your Bikcraft with carbon fiber.</p>
                            </li>   
                        </ul>
                        <h2 class="font-1-xs cor-0">DATASHEET</h2>
                        <ul class="bicicleta-ficha font-2-s cor-4">
                            <li>Weight <span>9kg</span></li>
                            <li>Height <span>60 cm</span></li>
                            <li>Width <span>120 cm</span></li>
                            <li>Depth <span>10cm</span></li>
                            <li>Wheel <span>29</span></li>
                        </ul>
                    </div>
                </div>
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

export default DetailsPage;