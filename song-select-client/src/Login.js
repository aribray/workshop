import React from 'react';
import { Container } from 'react-bootstrap';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id={YOUR_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20user-read-email%20user-read-private%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{minHeight: "100vh"}}
    >
      <a className="btn btn-success btn-lrg" href={AUTH_URL}>Login To Spotify</a>
    </Container>
  )
}
