import React from 'react'
import Channels from './channels'
import './footer.scss'

export default () => (
    <>
        <footer className="grid-x">
            <div className="cell small-12 large-8">
                <span className="footer-title">Vendas e distribuição:</span><br />
                Vendas para distribuidores e lojistas:<br />
                &#8627; Graça Music (21) 3344-5959 / www.gracamusic.com.br<br />
                Vendas web: www.sg.lojavirtualfc.com.br<br />
                <br />
                <span className="footer-title">Contatos por e-mail:</span><br />
                Agenda: santageracao7@gmail.com ou ivanirantonio.sg@gmail.com<br />
                Assessoria: santageracao7@gmail.com<br />
                Financeiro: admfinanceirosg@gmail.com<br />
                <br />
                <span className="footer-title">Agenda nos Estados Unidos e demais Nações:</span><br />
                santageracao7@gmail.com<br />
                (46) 9912.9620 (Tim) – Ivanir Antônio<br />
                pracirilo.usa@gmail.com<br />
                Skype: pr.cirilo<br />&nbsp;&nbsp;&nbsp;
        </div>
            <div className="cell small-12 large-4">
                <span className="footer-title">Contatos:</span><br />
                (46) 9.9912-9620 (Tim) (WhatsApp)<br />
                Ivanir Antonio<br />
                <br />
                <span className="footer-title">Canais:</span><br />
                <Channels />
            </div>
        </footer>
        <div className="grid-x rights">
            <div className="cell text-center">Santa Geração &copy;</div>
        </div>
    </>
)
