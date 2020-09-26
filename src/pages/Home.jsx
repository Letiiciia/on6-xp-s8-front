import React from 'react';
import Layout from './Layout';
import { Jumbotron, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Layout>
            <Jumbotron fluid>
                <Container>
                    <h1>Bem vinda ao Reprogramafy</h1>
                    <p className="mt-5">Aqui você pode ver como ficaria a carinha da sua API de músicas num front bem simples, mas feito com muito amor.</p>
                    <hr/>
                    <p>Se a sua API estiver entregando os serviços direitinho você vai conseguir:</p>
                    <p>1. Ver a lista de músicas</p>
                    <p>2. Clicar numa música e ver detalhes dela</p>
                    <p>3. Ver a lista de artistas</p>
                    <p>4. Clicar no nome de um artista e ver as músicas dela ou dele</p>
                    <p>5. Ver a lista de albuns</p>
                    <p>6. Clicar no nome de um album e ver as músicas do álbum</p>
                    <hr/>
                    <p>Divirta-se!!!</p>
                </Container>
            </Jumbotron>
        </Layout>
    )
}

export default Home;