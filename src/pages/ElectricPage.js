import './css/LandingPage.css';
import { useNavigate } from "react-router-dom";

const ElectricPage = ({index,setIndex}) => {
    const navigate = useNavigate();
    const handleClick1 = () => {
        setIndex(0);
        navigate("/details");
    }
    const handleClick2 = () => {
        setIndex(1);
        navigate("/details");
    }
    const handleClick3 = () => {
        setIndex(2);
        navigate("/details");
    }
    const handleClick4 = () => {
        setIndex(3);
        navigate("/details");
    }
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
        <body id="bicicleta">
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
                    <p class="font-2-l-b cor-5">CHOOSE THE BEST ONE FOR YOU.</p>
                        <h1 class="font-1-xxl cor-0">The Only Limitation Is Your Wallet<span class="cor-p1">.</span></h1>
                </div>
            </div>
                    <div class="bicicletas container">
                        <div class="bicicletas-imagem">
                            <img src={mycycles[0].paths} alt="Bicicleta Preta"/>
                            <span class="font-2-m cor-0">{mycycles[0].price}</span>
                        </div>
                        <div class="bicicletas-conteudo">
                            <h2 class="font-1-xl">{mycycles[0].name}</h2>
                            <p class="font-2-s cor-8">{mycycles[0].desc}</p>
                            <ul class="font-1-m cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[0].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[0].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[0].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <a class="botao seta" onClick = {handleClick1} >About</a>
                        </div>
                    </div>
            
            <div class="bicicletas-bg">
                <div class="bicicletas container">
                <div class="bicicletas-imagem">
                            <img src={mycycles[1].paths} alt="Bicicleta Preta"/>
                            <span class="font-2-m cor-0">{mycycles[1].price}</span>
                        </div>
                        <div class="bicicletas-conteudo">
                            <h2 class="font-1-xl cor-0">{mycycles[1].name}</h2>
                            <p class="font-2-s cor-5">{mycycles[1].desc}</p>
                            <ul class="font-1-m cor-5">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[1].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[1].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[1].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <a class="botao seta" onClick = {handleClick2} >About</a>
                        </div>
                </div>
        </div>

            <div class="bicicletas container">
            <div class="bicicletas-imagem">
                            <img src={mycycles[2].paths} alt="Bicicleta Preta"/>
                            <span class="font-2-m cor-0">{mycycles[2].price}</span>
                        </div>
                        <div class="bicicletas-conteudo">
                            <h2 class="font-1-xl">{mycycles[2].name}</h2>
                            <p class="font-2-s cor-8">{mycycles[2].desc}</p>
                            <ul class="font-1-m cor-8">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[2].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[2].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[2].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <a class="botao seta" onClick = {handleClick3} >About</a>
                        </div>
            </div>
            <div class="bicicletas-bg">
            <div class="bicicletas container">
            <div class="bicicletas-imagem">
                            <img src={mycycles[3].paths} alt="Bicicleta Preta"/>
                            <span class="font-2-m cor-0">{mycycles[3].price}</span>
                        </div>
                        <div class="bicicletas-conteudo">
                            <h2 class="font-1-xl cor-0">{mycycles[3].name}</h2>
                            <p class="font-2-s cor-5">{mycycles[3].desc}</p>
                            <ul class="font-1-m cor-5">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>{mycycles[3].type}</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>{mycycles[3].material}</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>{mycycles[3].speed}</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Tracker </li>
                            </ul>
                            <a class="botao seta" onClick = {handleClick4} >About</a>
                        </div>
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

        <script src="./js/script.js"></script>
        </body>
    );
    }
export default ElectricPage;