function make_album(artist: string, title: string, tracks: number = 0) : Object {
    let album: Object;
    if (tracks > 0 ) {
        album = {
            artist: artist,
            title: title,
            tracks: tracks
        }
    } else {
        album = {
            artist: artist,
            title: title
        }
    }
    

    return album;
}

console.log(make_album('Gary Jules','Trading Snakeoil for Wolftickets'));
console.log(make_album('Atif Aslam','Main Agar', 3));
console.log(make_album('Atif Aslam','Adat'));
