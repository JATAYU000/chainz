import React from 'react';
import './css/LandingPage.css';

const LandingPage = () => {
    return (
        <div>
        <header class="header-bg">
            <div class="header container">
            <a href="/"><img height = "45" src="./img/chainz.png" alt="Logo Bikcraft"/></a>
                <nav aria-label="primary">
                    <ul class="header-menu font-1-m cor-0">
                        <li><a href="./bicycles">Bicycles</a></li>
                        <li><a href="./contact">Contact</a></li>
                        <li><a href="./buy">Purchase</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main class="introduction-bg">
            <div class="introduction container">
                <div class="introduction-content">
                <h1 class="font-1-xxl cor-0 fadeInDown" data-anime="200">Rent Your Dream Cycle<span class="cor-p1">.</span></h1>
                <p class="font-2-l cor-5 fadeInDown" data-anime="400">Explore our diverse range of cycles, catering to every rider. From sleek road bikes to sturdy mountain bikes, we have something for everyone to enjoy the ride.</p>
                <a class="botao fadeInDown" href="./bicycles" data-anime="600">CHOOSE</a>
                </div>
                <div>
                    <img class="fadeInDown" data-anime="600" src="./img/fotos/introduction.jpg" alt="cycle elétrica preta"/>
                </div>
                
            </div>
        </main>

        <article class="bicycle-list">
            <h2 class="container font-1-xxl">Popular Picks <span class="cor-p1">.</span></h2>

            <ul>
                <li>
                    <a href="/electric">
                        <img src="./img/cycles/elechome.png" alt="cycle preta"/>
                        <h3 class="font-1-xl">Electric</h3>
                        <span class="font-2-m cor-8">Starting ₹2900</span>
                    </a>
                </li>
                <li>
                    <a href="/geared">
                        <img src="./img/cycles/gearhome.png" alt="cycle preta"/>
                        <h3 class="font-1-xl">Geared</h3>
                        <span class="font-2-m cor-8">Starting ₹2499</span>
                    </a>
                </li>
                <li>
                    <a href="/gearless">
                        <img src="./img/cycles/glhome.png" alt="cycle preta"/>
                        <h3 class="font-1-xl">Gearless</h3>
                        <span class="font-2-m cor-8">Starting ₹1900</span>
                    </a>
                </li>
            </ul>
        </article> 

        <article class="technology-bg">
            <div class="technology container">
                <div class="technology-content">
                <span class="font-2-l-b cor-5">Rent with Ease, Ride with Joy</span>
                <h2 class="font-1-xxl cor-0">Unmatched cycling experience<span class="cor-p1">.</span></h2>
                <p class="font-2-l cor-5">Each rental cycle boasts its distinct identity, tailored to your body and height for optimal comfort and ergonomics throughout your journey. Experience unparalleled customization options, from colors to specifications, ensuring a ride uniquely yours.</p>
                <a class="link" href="/bicycles">Choose a model</a>

                <div class="technology-feature">
                    <div>
                        <img src="./img/icones/eletrica.svg" alt=""/>
                        <h3 class="font-1-m cor-0">Quality</h3>
                        <p class="font-2-s cor-5">Our cycles are impeccably maintained, guaranteeing a worry-free and smooth cycling experience with optimal performance.</p>
                    </div>
            
                    <div>
                        <img src="./img/icones/rastreador.svg" alt=""/>
                        <h3 class="font-1-m cor-0">Tracker</h3>
                        <p class="font-2-s cor-5">We know how precious your Bikcraft is, that's why we added trackers and anti-theft systems to ensure your peace of mind.</p>
                    </div>
                </div>
                </div>

                <div class="technology-imagem">
                    <img src="./img/fotos/technology.jpg" alt=""/>
                </div>
            </div>
        </article>

        <article class="quote" aria-label="Nossos quote">
        </article>

        <section class="anirudh" aria-label="anirudh">
            <div>
                <img src="./img/fotos/anirudh.jpg" alt="Pessoa pedalando em uma cycle bikcraft"/>
            </div>
            <div class="anirudh-content">
                <blockquote class="font-1-xl cor-p5">
                    <p>
                    Life is like riding a bicycle - it's unpredictable, occasionally bumpy, and you might fall flat on your face, but the key is to keep pedaling. Sure, sometimes you'll hit a pothole, or the chain might come off, but those moments of struggle just make the smooth stretches all the more exhilarating. So, saddle up, embrace the wobbliness, and remember, it's not about how many times you fall, but how many times you get back up and keep riding toward the sunset, wind in your hair, and a ridiculous grin plastered across your face.
                    </p>
                </blockquote>
                <span class="font-1-m-b cor-p4">~ Anirudh Ajith</span>
            </div>
        </section>

        
        <footer class="footer-bg">
            <div class="footer container">
            <a href="/"><img height = "45" src="./img/chainz.png" alt="Logo Bikcraft"/></a>
                <div class="footer-contact">
                    <h3 class="font-2-l-b cor-0">Contacts</h3>
                    <ul class="font-2-m cor-5">
                        <li><a href="tel:+91 6996420024">+91 6996420024</a></li>
                        <li><a href="mailto:contact@chainz.com">contact@chainz.com</a></li>
                        <li>1600 Pennsylvania Avenue NW</li>
                        <li>Washington, D.C.</li>
                    </ul> 
                    <div class="footer-socials">
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
                <div class="footer-information">
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

        <script src="./js/plugins/simple-anime.js"></script>
        <script src="./js/script.js"></script>
        </div>
    );
}
export default LandingPage;