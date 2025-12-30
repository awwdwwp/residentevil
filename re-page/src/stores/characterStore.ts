import {defineStore} from 'pinia'

interface Character {
    id:number
    name:string
    image:string
    description:string
}

export const useCharacterStore = defineStore('characterStore',{
    state: () => ({
        characters: [
      {
        id: 1,
        name: 'Leon S. Kennedy',
        image: 'https://static.wikia.nocookie.net/residentevil/images/6/6d/RE_Requiem_-_Leon_Gun.jpeg/revision/latest/scale-to-width-down/1000?cb=20251212070936',
        description: 'Rookie cop from Raccoon City.'
      },
      {
        id: 2,
        name: 'Claire Redfield',
        image: 'https://static.wikia.nocookie.net/residentevil/images/1/1f/Claire_Coffee.jpg/revision/latest?cb=20210712030348',
        description: 'Searching for her brother Chris.'
      },
      {
        id: 3,
        name: 'Jill Valentine',
        image: 'https://static.wikia.nocookie.net/residentevil/images/a/ad/Resident_Evil_3_remake_official_screenshot_1.jpg/revision/latest/scale-to-width-down/1000?cb=20191210154401',
        description: 'Member of S.T.A.R.S.'
      },
      {
        id: 4,
        name: 'Chris Redfield',
        image: 'https://static.wikia.nocookie.net/residentevil/images/0/01/BSAA_Chris_in_Death_Island.jpg/revision/latest/scale-to-width-down/1000?cb=20230219161916',
        description: 'BSAA agent and combat expert.'
      },
      {
        id: 5,
        name: 'Ada Wong',
        image: 'https://static.wikia.nocookie.net/residentevil/images/9/93/Captura_de_tela_2022-10-23_145659.png/revision/latest/scale-to-width-down/1000?cb=20221023175948',
        description: 'Mysterious spy.'
      },
      {
        id: 6,
        name: 'Albert Wesker',
        image: 'https://static.wikia.nocookie.net/residentevil/images/a/a8/RE4make_Albert_Wesker_%288%29.jpg/revision/latest/scale-to-width-down/1000?cb=20231017010107',
        description: 'Former S.T.A.R.S. captain turned villain.'
      }
    ] as Character[]
    }),
    getters: {
        previewCharacters: (state) => state.characters.slice(0,4)
    },
    actions: {
        addCharacter(character: Character) {
            this.characters.push(character)
        },
        getCharacterById(id: number) {
            return this.characters.find(c => c.id === id)
        }
    }
})