import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Musica from '../components/Musica';
import Musicas from '../pages/Musicas';
import Albuns from '../pages/Albuns';
import Album from '../components/Album';
import Artistas from '../pages/Artistas';
import Artista from '../components/Artista';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact> <Home/> </Route> 
                <Route path="/musicas" exact> <Musicas/> </Route> 
                <Route path="/musicas/:id" exact> <Musica/> </Route> 
                <Route path="/albuns" exact> <Albuns/> </Route> 
                <Route path="/albuns/:album_nome" exact> <Album/> </Route> 
                <Route path="/artistas" exact> <Artistas/> </Route> 
                <Route path="/artistas/:id" exact> <Artista/> </Route> 
            </Switch>
        </Router>
    )
}

export default Routes