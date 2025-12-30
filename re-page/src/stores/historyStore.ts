import {defineStore} from 'pinia'

export interface HistoryEntry {
    year:number,
    title:string,
    img1:string,
}

export const useHistoryStore = defineStore('history', {
    state: ()=> ({
        history: [
            {year:1996,title:'Resident Evil',
                img1:'https://game.capcom.com/residentevil/pc/img/about/history/title_logo-one-re.png',
            },
            { year: 1998, title: "Resident Evil 2", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re2-re.png" },
            { year: 1999, title: "Resident Evil 3: Nemesis", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re3-re.png" },
            { year: 2000, title: "Resident Evil Code: Veronica", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-code-re.png" },
            { year: 2002, title: "Resident Evil (Remake)", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-one_remake-re.png" },
            { year: 2002, title: "Resident Evil 0", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-zero-re.png" },
            { year: 2003, title: "Resident Evil Outbreak", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-out-re.png" },
            { year: 2005, title: "Resident Evil Outbreak File #2", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-out2-re.png" },
            {
                year:2005,
                title:'Resident Evil 4',
                img1:'https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re4-re.png'
            },
             { year: 2009, title: "Resident Evil 5", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re5-re.png" },
            { year: 2012, title: "Resident Evil Revelations", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-rev-re.png" },
            { year: 2012, title: "Resident Evil 6", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re6-re.png" },
            { year: 2015, title: "Resident Evil Revelations 2", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-rev2-re.png" },
            { year: 2017, title: "Resident Evil 7: Biohazard", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re7-re.png" },
            { year: 2019, title: "Resident Evil 2 Remake", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re2_remake-re.png" },
            { year: 2020, title: "Resident Evil 3 Remake", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re3_remake-re.png" },
            { year: 2021, title: "Resident Evil Village", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-village-re.png" },
            {
                year:2023,
                title:'Resident Evil 4 Remake',
                img1: 'https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re4_remake-re.png' 
            }
        ] as HistoryEntry[]
    })
})
