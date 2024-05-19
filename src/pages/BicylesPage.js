import './css/LandingPage.css';

const BicyclePage = () => {
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

        </main>
        <article class="bicicletas-lista">
            <h2 class="container font-1-xxl">Popular Picks <span class="cor-p1">.</span></h2>

            <ul>
                <li>
                    <a href="/electric">
                        <img src="./img/bicicletas/magic-home.jpg" alt="bicicleta preta"/>
                        <h3 class="font-1-xl">Electric</h3>
                        <span class="font-2-m cor-8">Starting ₹2900</span>
                    </a>
                </li>
                <li>
                    <a href="/geared">
                        <img src="./img/bicicletas/magic-home.jpg" alt="bicicleta preta"/>
                        <h3 class="font-1-xl">Geared</h3>
                        <span class="font-2-m cor-8">Starting ₹2499</span>
                    </a>
                </li>
                <li>
                    <a href="/gearless">
                        <img src="./img/bicicletas/magic-home.jpg" alt="bicicleta preta"/>
                        <h3 class="font-1-xl">Gearless</h3>
                        <span class="font-2-m cor-8">Starting ₹1900</span>
                    </a>
                </li>
            </ul>
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

        <script src="./js/script.js"></script>
        </body>
    );
    }
export default BicyclePage;


