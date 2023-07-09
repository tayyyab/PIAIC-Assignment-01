function make_album(artist, title, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album;
    if (tracks > 0) {
        album = {
            artist: artist,
            title: title,
            tracks: tracks
        };
    }
    else {
        album = {
            artist: artist,
            title: title
        };
    }
    return album;
}
console.log(make_album('Gary Jules', 'Trading Snakeoil for Wolftickets'));
console.log(make_album('Atif Aslam', 'Main Agar', 3));
console.log(make_album('Atif Aslam', 'Adat'));
