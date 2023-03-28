import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ token }, dispatch] = useDataLayerValue();
  
  //Roda o código baseado em uma condição
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcNhZHqlBTQAp').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
    });
      })
    }

  }, []);

  return (
    <div className='app'>
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
