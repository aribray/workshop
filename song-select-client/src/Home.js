import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import PlaylistResult from './PlaylistResult';
import Player from './Player';
import { Container } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'a8dd501c1a3a4dc09eea4bbcf7d94053'
});

export default function Home({code}) {
  const accessToken = useAuth(code);
  const [playingTrack, setPlayingTrack] = useState();
  const [playlist, setPlaylist] = useState([]);

  function chooseSong(song) {
    setPlayingTrack(song);
  };

  // sets an access token whenever it changes. Used for all queries
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken])

  useEffect(() => {
    if(!accessToken) return;
    spotifyApi.getPlaylist('58ilAf5C4v7HbblT7gmehG')
      .then(response  => {
        setPlaylist(
          response.body.tracks.items.map(info => {
            return {
              artist: info.track.artists[0].name,
              title: info.track.name,
              uri: info.track.uri,
              songImg: info.track.album.images[1].url
            }
          })
        )
      }).catch(error => {
      console.log('ERROR:', error);
    });
  }, [accessToken]);

  return (
    <Container className="d-flex flex-column py-2" style={{ height: '100vh' }}>

      <h1 style={{textAlign: 'center'}}>Workshop Playlist</h1>

      <div className='flex-grow-1 my-2' style={{ overflowY: 'auto' }}>
        {playlist.map(song => (
          <PlaylistResult
            song={song}
            key={song.uri}
            chooseSong={chooseSong}
          />
        ))}
      </div>

      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
      </div>
    </Container>
  )
}