import SpotifyWebApi from "spotify-web-api-node";


const scopes = [
  "user-read-private",
  "user-library-read",
  // user-library-modify *research how to use this safely so access token is not compromised
].join(",");

const params ={
  scope: scopes, 

};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,

});

// lib/spotify.js
// ... (existing code)

// From GPT-4
// export const fetchPlaylists = async (userId) => {
//   try {
//     const response = await spotifyApi.getUserPlaylists(userId);
//     return response.body.items;
//   } catch (error) {
//     console.error('Error fetching playlists:', error);
//     return [];
//   }
// };


export default spotifyApi;

export { LOGIN_URL };