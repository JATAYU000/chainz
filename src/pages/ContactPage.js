import React from 'react';
import './css/LandingPage.css';
import { Resend } from 'resend';

// const resend = new Resend('re_ftUBipqh_22DiEhZuEzssc5L1SggdgpXe');


const ContactPage = () => {
    // const resend = new Resend('re_ftUBipqh_22DiEhZuEzssc5L1SggdgpXe');
    const handleSubmit = async (e) => {
        // await resend.emails.send({
        //     from: 'Chainz <onboarding@resend.dev>',
        //     to: ['shrivaths44kunju@gmail.com'],
        //     subject: 'Hello World',
        //     html: '<strong>It works!</strong>',
        //     headers: {'Access-Control-Allow-Origin': 'true'}
        //   });
        //   console.log('Email sent');
    };
    return (
        <div id="contato">
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
                    <p class="font-2-l-b cor-5">RESPONSES WITHIN 24HOURS</p>
                        <h1 class="font-1-xxl cor-0">Our Contact<span class="cor-p1">.</span></h1>
                </div>
            </div>

            <div class="contato container">
                <section class="contato-dados" aria-label="Endereço">
                    <h2 class="font-1-m cor-0">Online Contacts</h2>
                    <div class="contato-endereco font-2-s cor-4">
                        <p>1600 Pennsylvania Avenue NW</p>
                        <p>Washington, D.C</p>
                    </div>
                    <address class="contato-meios font-2-s cor-4">
                        <a href="mailto:contact@chainz.com">contact@chainz.com</a>
                        <a href="mailto:admin@chainz.com">admin@chainz.com</a>
                        <a href="tel: +91 6996420024">+91 6996420024</a>
                    </address>

                    <div class="contato-redes">
                        <a href="/">
                            <img src="./img/redes/instagram-p.svg" alt="Instagram"/>
                        </a>
                        <a href="/">
                            <img src="./img/redes/facebook-p.svg" alt="Facebook"/>
                        </a>
                        <a href="/">
                            <img src="./img/redes/youtube-p.svg" alt="Youtube"/>
                        </a>
                    </div>
                </section>
                <section class="contato-formulario" aria-label="contato-formulario">
                    <div class="form" >
                        <div>
                            <label for="nome">Name</label>
                            <input id="nome" type="text" name="nome" placeholder="Munna"/>
                        </div>
                        <div>
                            <label for="telefone">Phone</label>
                            <input id="telefone" type="text" name="telefone" placeholder="+91 5958747556"/>
                        </div>
                        <div class="col-2">
                            <label for="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="munnabhai@gmail.com"/>
                        </div>
                        <div class="col-2">
                            <label for="mensagem">Message</label>
                            <textarea id="mensagem" rows="5" name="mensagem" placeholder="What's your query?"></textarea>
                        </div>
                        <button class="botao col-2" onClick={handleSubmit}><a href = "/" >Send Message</a></button>
                    </div>
                </section>
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
                        <li>Washington, D.C</li>
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
        </div>
    );
}
export default ContactPage;