import {defineStore} from 'pinia'

interface Character {
    id:number
    name:string
    description:string
    images:string[]
    
}

export const useCharacterStore = defineStore('characterStore',{
    state: () => ({
        characters: [
      {
        id: 1,
        name: 'Leon S. Kennedy',
        images:[ 'https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/leon1.webp',
          'https://static.wikia.nocookie.net/residentevil/images/0/03/RE4R_Leon_and_Ashley_in_the_Castle.jpeg/revision/latest/scale-to-width-down/1000?cb=20230302171059'
        ],
        description: 'Rookie cop from Raccoon City.'
      },
      {
        id: 2,
        name: 'Claire Redfield',
        images: ['https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/claire1.webp',
          'https://static.wikia.nocookie.net/residentevil/images/c/ce/2015-03-18_00044.jpg/revision/latest/scale-to-width-down/1000?cb=20150322184649'
        ],
        description: 'Searching for her brother Chris.'
      },
      {
        id: 3,
        name: 'Jill Valentine',
        images: ['https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/jill1.webp',
          'https://static.wikia.nocookie.net/residentevil/images/5/59/DI_Jill_House.png/revision/latest/scale-to-width-down/1000?cb=20230807160354'
        ],
        description: 'Member of S.T.A.R.S.'
      },
      {
        id: 4,
        name: 'Chris Redfield',
        images: ['https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/chris1.webp',
          'https://static.wikia.nocookie.net/residentevil/images/0/08/20120410_bio6_ss13.jpg/revision/latest?cb=20120512001222'
        ],
        description: 'BSAA agent and combat expert.'
      },
      {
        id: 5,
        name: 'Ada Wong',
        images: ['https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/ada1.webp',
          'https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/ada2.webp'
        ],
        description: 'Mysterious spy.'
      },
      {
        id: 6,
        name: 'Albert Wesker',
        images: ['https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/wesker1.webp',
          'https://raw.githubusercontent.com/awwdwwp/re_assets/refs/heads/main/wesker2.webp'
        ],
        description: 'Former S.T.A.R.S. captain turned villain.'
      }
    ] as Character[]
    }),
    getters: {
        previewCharacters: (state) => state.characters.slice(0,4)
    },
    actions: {
        getCharacterById(id: number) {
            return this.characters.find(c => c.id === id)
        }
    }
})