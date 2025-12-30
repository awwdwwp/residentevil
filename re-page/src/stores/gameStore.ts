import { defineStore } from 'pinia'

interface Game {
  id: number
  title: string
  image: string
  platforms: string[]
}

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [
      {
        id: 1,
        title: 'Resident Evil Requiem',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-requiem.jpg?t=202512180000",
        platforms: ['PC', 'PS5', 'Xbox Series X/S']
      },
      {
        id: 2,
        title: 'Resident Evil 4 Remake',
        image: "https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-re4.jpg",
         //"https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
        platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X/S']
      },
      {
        id: 3,
        title: 'Resident Evil Village',
        image: "https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-village.jpg",
        //"https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg",
        platforms: ['PC', 'PS5', 'PS4', 'Xbox Series X/S']
      },
      {
        id: 4,
        title: 'Resident Evil 3 Remake',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-re3.jpg",
        platforms: ['PC', 'PS5', 'PS4', 'Xbox One']
      },
      {
        id: 5,
        title: 'Resident Evil 2 Remake',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-re2.jpg", 
        //"https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg",
        platforms: ['PC', 'PS5', 'PS4', 'Xbox One']
      },
      {
        id: 6,
        title: 'Resident Evil 7 Biohazard',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-re7.jpg",
        platforms: ['PC', 'PS5', 'PS4', 'Xbox One']
      },
      {
        id: 7,
        title: 'Resident Evil 6',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-6.jpg",
        platforms: ['PC', 'PS4', 'Xbox One']
      },
      {
        id: 8,
        title: 'Resident Evil Revelations 2',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-rev2.jpg",
        platforms: ['PC', 'PS4', 'PS3', 'Xbox One', 'Switch']
      },
      {
        id: 9,
        title: 'Resident Evil Revelations',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-rev.jpg",
        platforms: ['PC', 'PS4', 'PS3', 'Xbox One', 'Switch', '3DS']
      },
      {
        id: 10,
        title: 'Resident Evil 5',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-5.jpg",
        platforms: ['PC', 'PS4', 'PS3', 'Xbox One']
      },
      {
        id: 11,
        title: 'Resident Evil 4',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-4.jpg",
        platforms: ['PC', 'PS4', 'PS3', 'Xbox', 'Switch']
      },
      {
        id:12,
        title:'Resident Evil 0',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-0.jpg",
        platforms:['PC', 'PS3', 'Xbox 360', 'Switch']
      },
      {
        id: 13,
        title: 'Resident Evil (2002 Remaster)',
        image:"https://game.capcom.com/residentevil/pc/img/lineup/en/lineup-1.jpg",
        platforms: ['PC', 'PS4', 'PS3', 'Xbox One']
      }
    ] as Game[]
  }),
   getters: {
    previewGames: (state) => state.games.slice(0, 3),

    getGameById: (state) => {
      return (id: number) => state.games.find(g => g.id === id)
    }
  }
})