import {defineStore} from 'pinia'

interface Movie {
    id:number,
    title:string,
    year:string,
    image:string
}
export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
            { id: 1, title: 'Resident Evil: Degeneration', year: '2008',image: "https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-movie-cg.jpg" },
            { id: 2, title: 'Resident Evil: Damnation', year: '2012' , image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-movie-cg2.jpg"},
            { id: 3, title: 'Resident Evil: Vendetta', year: '2017' , image: "https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-movie-cg3.jpg"},
            { id: 4, title: 'Resident Evil: Infinite Darkness (Series)', year: '2021', image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-movie-infinite-darkness.jpg" },
            { id: 5, title: 'Resident Evil: Death Island', year: '2023', image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-movie-di.jpg" }
        ] as Movie[]
    }),
    getters: {
        previewMovies: (state) => state.movies.slice(0,3)
    }
})