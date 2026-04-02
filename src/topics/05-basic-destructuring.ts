interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 50, 
    songDuration: 36, 
    song: "Highs And Lows", 
    details: {
        author: 'Hillsong', 
        year: 2021
    }
}

//const { song:anotherSong, details } = audioPlayer;

// const { author, year, } = details


// console.log(`Song: ${ anotherSong }`)
// console.log(`Details: ${ author } ${ year }`)

const [, , trunks = 'not found']: string[] = ['Goku', 'Vegeta'];


console.log('Trunks: ', trunks)





export {}