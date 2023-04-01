export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://spotify-clone-one-jet.vercel.app/';
const clientId = '4391660d63fa4e8a8e509e351c4e7047';
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    'user-modify-playback-state',
    'user-read-playback-state',
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        //#accessToken=mysupersecretkey&name=isaac
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
    )}&response_type=token&show_dialog=true`
