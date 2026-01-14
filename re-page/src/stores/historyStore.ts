import {defineStore} from 'pinia'

export interface HistoryEntry {
    year:number,
    title:string,
    img1:string,
    story:string
    related:RelatedTitles[]
}
export interface RelatedTitles {
    release:string
    platform:string
    title:string
}

export const useHistoryStore = defineStore('history', {
    state: ()=> ({
        history: [
            {year:1996,title:'Resident Evil',
                img1:'https://game.capcom.com/residentevil/pc/img/about/history/title_logo-one-re.png',
                story: 'A series of grotesque murders occur in the Arklay Mountains outside of Raccoon City in the US Midwest. The police send in the S.T.A.R.S. Bravo Team to investigate, but all contact is lost. Alpha Team arrive in the mountains a while later, but are soon ambushed by a pack of ravenous dog-like creatures. Chris Redfield and Jill Valentine run into a nearby mansion, where they must fight untold horrors to survive.',
                related: [
  { release: "3/30/1996", platform: "PlayStation", title: "Resident Evil" },
  { release: "8/31/1997", platform: "Sega Saturn", title: "Resident Evil" },
  { release: "9/17/1997", platform: "PC", title: "Resident Evil" },
  { release: "9/30/1997", platform: "PlayStation", title: "Resident Evil: Director's Cut" },
  { release: "9/14/1998", platform: "PlayStation", title: "Resident Evil: Director's Cut DualShock ver." },
  { release: "1/19/2006", platform: "Nintendo DS", title: "Resident Evil: Deadly Silence" },
  { release: "5/28/2009", platform: "PlayStation Portable", title: "Resident Evil: Director's Cut" },
  { release: "5/28/2009", platform: "PlayStation 3", title: "Resident Evil: Director's Cut" },
  { release: "6/26/2024", platform: "GOG.com", title: "Resident Evil" },
  { release: "11/26/2024", platform: "PlayStation 4", title: "Resident Evil Director’s Cut" },
  { release: "11/26/2024", platform: "PlayStation 5", title: "Resident Evil Director’s Cut" }
]
            },
            { year: 1998, title: "Resident Evil 2", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re2-re.png",
                story:'Several months after the Mansion Incident of Resident Evil... An engineered virus leaks from Umbrella\'s secret underground facility, and is spread throughout the city by rats. Leon S. Kennedy enters Raccoon City to start his new job as a cop, while college student Claire Redfield turns up to look for her brother. However, the two are greeted by a hellscape that puts their survival skills to the test...',
                related: [
  { release: "1/21/1998", platform: "PlayStation", title: "Resident Evil 2" },
  { release: "11/11/1998", platform: "game.com", title: "Resident Evil 2" },
  { release: "2/28/1999", platform: "PC", title: "Resident Evil 2" },
  { release: "10/31/1999", platform: "NINTENDO64", title: "Resident Evil 2" },
  { release: "12/25/2000", platform: "Dreamcast", title: "Resident Evil 2" },
  { release: "1/14/2003", platform: "Nintendo GameCube", title: "Resident Evil 2" },
  { release: "11/19/2009", platform: "PlayStation 3", title: "Resident Evil 2" },
  { release: "11/19/2009", platform: "PlayStation Portable", title: "Resident Evil 2" },
  { release: "11/19/2009", platform: "PlayStation Vita", title: "Resident Evil 2" },
  { release: "8/26/2024", platform: "GOG.com", title: "Resident Evil 2" }
]
             },
            { year: 1999, title: "Resident Evil 3: Nemesis", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re3-re.png",
                story:'Having survived the Mansion Incident, Jill Valentine of S.T.A.R.S. prepares to expose Umbrella, only to find the company has taken control of the entire city. Meanwhile, hours before Leon and Claire arrive during Resident Evil 2... The T-Virus leaks from an underground lab and spreads throughout the city. To prevent the truth about the virus from getting out, Umbrella unleashes Nemesis to hunt down and kill S.T.A.R.S. members. If Jill wants to escape the city alive, she must face the monster head on.',
                related: [
  { release: "11/11/1999", platform: "PlayStation", title: "Resident Evil 3: Nemesis" },
  { release: "11/17/2000", platform: "Dreamcast", title: "Resident Evil 3: Nemesis" },
  { release: "4/16/2001", platform: "PC", title: "Resident Evil 3: Nemesis" },
  { release: "1/14/2003", platform: "Nintendo GameCube", title: "Resident Evil 3: Nemesis" },
  { release: "12/3/2009", platform: "PlayStation 3", title: "Resident Evil 3: Nemesis" },
  { release: "12/3/2009", platform: "PlayStation Portable", title: "Resident Evil 3: Nemesis" },
  { release: "12/3/2009", platform: "PlayStation Vita", title: "Resident Evil 3: Nemesis" },
  { release: "9/23/2024", platform: "GOG.com", title: "Resident Evil 3" }
]
             },
            { year: 2000, title: "Resident Evil Code: Veronica", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-code-re.png" ,
                story:'Several months after the Raccoon City Incident, Claire Redfield heads to Europe in search of her missing brother, Chris. She infiltrates Umbrella\'s research facility in Paris, but is captured and imprisoned on Rockfort Island. The game follows Chris and Claire, also covering the Ashford family and their involvement with Umbrella, as well as the return of Albert Wesker. As the story progresses, it transitions from the island to Antarctica.',
                related: [
  { release: "2/29/2000", platform: "Dreamcast", title: "Resident Evil CODE: Veronica" },
  { release: "3/22/2001", platform: "Dreamcast", title: "Resident Evil CODE: Veronica X" },
  { release: "8/21/2001", platform: "PlayStation 2", title: "Resident Evil CODE: Veronica X" },
  { release: "12/3/2003", platform: "Nintendo GameCube", title: "Resident Evil CODE: Veronica X" },
  { release: "9/27/2011", platform: "Xbox 360", title: "Resident Evil CODE: Veronica X" },
  { release: "9/27/2011", platform: "PlayStation 3", title: "Resident Evil CODE: Veronica X" },
  { release: "5/10/2017", platform: "PlayStation 4", title: "Resident Evil CODE: Veronica X" },
  { release: "2/21/2019", platform: "Xbox One", title: "Resident Evil CODE: Veronica X" }
]
            },
            { year: 2002, title: "Resident Evil (Remake)", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-one_remake-re.png",
                story:'A series of grotesque murders occur in the Arklay Mountains outside of Raccoon City in the US Midwest. The police send in the S.T.A.R.S. Bravo Team to investigate, but all contact is lost. Alpha Team arrive in the mountains a while later, but are soon ambushed by a pack of ravenous dog-like creatures. Chris Redfield and Jill Valentine run into a nearby mansion, where they must fight untold horrors to survive.',
                related: [
                    {release:'4/30/2002', platform:'Nintendo GameCube', title:'Resident Evil'},
                    {release:'6/23/2009',platform:	'Wii',	title:'Resident Evil'},
                    {release: 1/20/2015, platform:	'PlayStation 3',	title:'Resident Evil HD Remaster'},
                    {release: 1/20/2015, platform:	'Xbox 360',	title:'Resident Evil HD Remaster'},
                    {release: 1/20/2015, platform:	'PlayStation 4',	title:'Resident Evil HD Remaster'},
                    {release: 1/20/2015, platform:	'Xbox One',	title:'Resident Evil HD Remaster'},
                    {release: 1/20/2015, platform:	'Steam',	title:'Resident Evil HD Remaster'},
                    {release: 5/21/2019, platform:	'Nintendo Switch',	title:'Resident Evil HD Remaster'}
                ] },
            { year: 2002, title: "Resident Evil 0", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-zero-re.png",
                story:'The night before the Mansion Incident of Resident Evil... The S.T.A.R.S. Bravo Team flies into the Arklay Mountains to investigate a series of grotesque murders. However, their helicopter crashes, leaving rookie Rebecca Chambers to survey the area, where she finds a stopped train. On board she encounters Billy Coen, a death-row inmate who\'s on the run.',
                related: [
  { release: "11/10/2002", platform: "Nintendo GameCube", title: "Resident Evil 0" },
  { release: "12/1/2009", platform: "Wii", title: "Resident Evil Archives: Resident Evil 0" },
  { release: "1/19/2016", platform: "PlayStation 3", title: "Resident Evil 0 HD Remaster" },
  { release: "1/19/2016", platform: "PlayStation 4", title: "Resident Evil 0 HD Remaster" },
  { release: "1/19/2016", platform: "Xbox 360", title: "Resident Evil 0 HD Remaster" },
  { release: "1/19/2016", platform: "Xbox One", title: "Resident Evil 0 HD Remaster" },
  { release: "1/19/2016", platform: "Steam", title: "Resident Evil 0 HD Remaster" },
  { release: "5/21/2019", platform: "Nintendo Switch", title: "Resident Evil 0 HD Remaster" }
]
             },
            { year: 2003, title: "Resident Evil Outbreak", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-out-re.png" ,
                story:'This online game details the events of Resident Evil 2 and Resident Evil 3: Nemesis from the viewpoint of everyday citizens of Raccoon City. It includes several different scenarios. It was a typical night at J\'s bar. Some uninvited guests crashed the party. Our race for survival was just beginning. (Taken from the Outbreak scenario in Resident Evil Outbreak.)',
                related: [
  { release: "3/31/2004", platform: "PlayStation 2", title: "Resident Evil: Outbreak" }
]
            },
            { year: 2005, title: "Resident Evil Outbreak File #2", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-out2-re.png",
                story:'This online game details the events of Resident Evil 2 and Resident Evil 3: Nemesis from the viewpoint of everyday citizens of Raccoon City.It includes several different scenarios.We were foolish enough to think the zoo might provide refuge,but all that greeted us were approaching footsteps that shook the earth. (Taken from the Wild Things scenario in Resident Evil Outbreak File #2.)',
                related: [
  { release: "4/26/2005", platform: "PlayStation 2", title: "Resident Evil Outbreak: File 2" }
]
             },
            {
                year:2005,
                title:'Resident Evil 4',
                img1:'https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re4-re.png',
                story:'Details of the infamous Raccoon City Incident reach the general public, which leads to the fall of Umbrella. One survivor of that incident Leon S. Kennedy is now an agent working directly for the U.S. president. He heads to Europe on a mission to save the president\'s daughter, but ends up mired in yet another bio-terrorism crisis.',
                related: [
  { release: "1/11/2005", platform: "Nintendo GameCube", title: "Resident Evil 4" },
  { release: "10/25/2005", platform: "PlayStation 2", title: "Resident Evil 4" },
  { release: "3/2/2007", platform: "Windows", title: "Resident Evil 4" },
  { release: "6/25/2007", platform: "Wii", title: "Resident Evil 4" },
  { release: "7/12/2009", platform: "iOS", title: "Resident Evil 4 Mobile edition" },
  { release: "9/20/2011", platform: "PlayStation 3", title: "Resident Evil 4" },
  { release: "9/20/2011", platform: "Xbox 360", title: "Resident Evil 4" },
  { release: "4/24/2013", platform: "Android", title: "Resident Evil 4 Mobile edition" },
  { release: "2/27/2014", platform: "Steam", title: "Resident Evil 4" },
  { release: "8/30/2016", platform: "PlayStation 4", title: "Resident Evil 4" },
  { release: "8/30/2016", platform: "Xbox One", title: "Resident Evil 4" },
  { release: "5/21/2019", platform: "Nintendo Switch", title: "Resident Evil 4" },
  { release: "10/21/2021", platform: "Oculus Quest 2", title: "Resident Evil 4" }
]
            },
             { year: 2009, title: "Resident Evil 5", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re5-re.png",
                story:'The fall of Umbrella does little to curtail the proliferation of biological weapons, which are now sold in black markets around the world. Mansion Incident survivor Chris Redfield is now part of the BSAA, a bio-terrorism response group. He heads to the Kijuju Autonomous Zone in Africa to put a stop to a biological weapons dealer, but discovers a large-scale bio-terrorist plot involving none other than Albert Wesker...',
                related: [
  { release: "3/13/2009", platform: "PlayStation 3", title: "Resident Evil 5" },
  { release: "3/13/2009", platform: "Xbox 360", title: "Resident Evil 5" },
  { release: "9/18/2009", platform: "Steam", title: "Resident Evil 5" },
  { release: "2/17/2010", platform: "PlayStation 3", title: "Lost in Nightmares (DLC)" },
  { release: "2/17/2010", platform: "Xbox 360", title: "Lost in Nightmares (DLC)" },
  { release: "3/3/2010", platform: "PlayStation 3", title: "Desperate Escape (DLC)" },
  { release: "3/3/2010", platform: "Xbox 360", title: "Desperate Escape (DLC)" },
  { release: "3/9/2010", platform: "PlayStation 3", title: "Resident Evil 5 Gold Edition" },
  { release: "3/9/2010", platform: "Xbox 360", title: "Resident Evil 5 Gold Edition" },
  { release: "3/26/2015", platform: "Steam", title: "Resident Evil 5 Gold Edition" },
  { release: "5/19/2016", platform: "Android TV", title: "Resident Evil 5" },
  { release: "6/28/2016", platform: "PlayStation 4", title: "Resident Evil 5" },
  { release: "6/28/2016", platform: "Xbox One", title: "Resident Evil 5" },
  { release: "10/29/2019", platform: "Nintendo Switch", title: "Resident Evil 5" }
]
              },
            { year: 2012, title: "Resident Evil Revelations", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-rev-re.png",
                story:'A story that chronicles the early days of the BSAA, before they\'re seen in Resident Evil 5. Chris Redfield goes missing during his mission, so Jill Valentine, now part of the BSAA, heads out to find him. She\'s led to a mysterious luxury cruise ship afloat in the Mediterranean Sea. There she finds not only a bevy of traps and creatures, but also the signs of a larger terrorist plot...',
                related: [
  { release: "1/26/2012", platform: "Nintendo 3DS", title: "Resident Evil: Revelations" },
  { release: "5/21/2013", platform: "PlayStation 3", title: "Resident Evil: Revelations" },
  { release: "5/21/2013", platform: "Xbox 360", title: "Resident Evil: Revelations" },
  { release: "5/21/2013", platform: "Steam", title: "Resident Evil: Revelations" },
  { release: "5/21/2013", platform: "WiiU", title: "Resident Evil: Revelations" },
  { release: "8/29/2017", platform: "PlayStation 4", title: "Resident Evil: Revelations" },
  { release: "8/29/2017", platform: "Xbox One", title: "Resident Evil: Revelations" },
  { release: "11/28/2017", platform: "Nintendo Switch", title: "Resident Evil: Revelations" }
]
             },
            { year: 2012, title: "Resident Evil 6", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re6-re.png",
                story:'Several years after the Raccoon City Incident... In light of the continuing global bio-terrorist attacks, the U.S. president prepares to reveal the truth about Raccoon City to the public. But a large-scale attack at the speech venue prevents that from happening. Leon S. Kennedy is a key suspect in the president\'s assassination, and has to contend with a zombie horde in Tall Oaks. Meanwhile, Chris Redfield pursues a bio-terrorist in Lanshiang, China. Jake is a mercenary being chased by a mysterious B.O.W. in the war-torn Edonia Republic, while the enigmatic Ada Wong works behind the scenes. All characters\' paths and fates eventually coalesce as they deal with the ever-growing chaos around them.',
                related: [
  { release: "10/2/2012", platform: "PlayStation 3", title: "Resident Evil 6" },
  { release: "10/2/2012", platform: "Xbox 360", title: "Resident Evil 6" },
  { release: "3/22/2013", platform: "Steam", title: "Resident Evil 6" },
  { release: "3/29/2016", platform: "PlayStation 4", title: "Resident Evil 6" },
  { release: "3/29/2016", platform: "Xbox One", title: "Resident Evil 6" },
  { release: "10/29/2019", platform: "Nintendo Switch", title: "Resident Evil 6" }
]
             },
            { year: 2015, title: "Resident Evil Revelations 2", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-rev2-re.png",
                story:'A story that takes place between Resident Evil 5 and Resident Evil 6. Claire Redfield and Moira Burton are abducted at a party and forced to participate in a sinister experiment on a remote island. BSAA advisor Barry Burton heads to the island to rescue them, and encounters a young girl named Natalia Korda. The two pairs fight for their lives as Alex Wesker, successor to Umbrellas legacy, puts her wicked plan into action.',
                related: [
  { release: "2/24/2015", platform: "PlayStation 3", title: "Resident Evil Revelations 2 Episode1" },
  { release: "2/24/2015", platform: "PlayStation 4", title: "Resident Evil Revelations 2 Episode1" },
  { release: "2/24/2015", platform: "Xbox 360", title: "Resident Evil Revelations 2 Episode1" },
  { release: "2/24/2015", platform: "Xbox One", title: "Resident Evil Revelations 2 Episode1" },
  { release: "2/24/2015", platform: "Steam", title: "Resident Evil Revelations 2 Episode1" },

  { release: "3/3/2015", platform: "PlayStation 3", title: "Resident Evil Revelations 2 Episode2" },
  { release: "3/3/2015", platform: "PlayStation 4", title: "Resident Evil Revelations 2 Episode2" },
  { release: "3/3/2015", platform: "Xbox 360", title: "Resident Evil Revelations 2 Episode2" },
  { release: "3/3/2015", platform: "Xbox One", title: "Resident Evil Revelations 2 Episode2" },
  { release: "3/3/2015", platform: "Steam", title: "Resident Evil Revelations 2 Episode2" },

  { release: "3/10/2015", platform: "PlayStation 3", title: "Resident Evil Revelations 2 Episode3" },
  { release: "3/10/2015", platform: "PlayStation 4", title: "Resident Evil Revelations 2 Episode3" },
  { release: "3/10/2015", platform: "Xbox 360", title: "Resident Evil Revelations 2 Episode3" },
  { release: "3/10/2015", platform: "Xbox One", title: "Resident Evil Revelations 2 Episode3" },
  { release: "3/10/2015", platform: "Steam", title: "Resident Evil Revelations 2 Episode3" },

  { release: "3/17/2015", platform: "PlayStation 3", title: "Resident Evil Revelations 2 Episode4" },
  { release: "3/17/2015", platform: "PlayStation 4", title: "Resident Evil Revelations 2 Episode4" },
  { release: "3/17/2015", platform: "Xbox 360", title: "Resident Evil Revelations 2 Episode4" },
  { release: "3/17/2015", platform: "Xbox One", title: "Resident Evil Revelations 2 Episode4" },
  { release: "3/17/2015", platform: "Steam", title: "Resident Evil Revelations 2 Episode4" },

  { release: "3/17/2015", platform: "PlayStation 3", title: "Resident Evil Revelations 2" },
  { release: "3/17/2015", platform: "PlayStation 4", title: "Resident Evil Revelations 2" },
  { release: "3/17/2015", platform: "Xbox 360", title: "Resident Evil Revelations 2" },
  { release: "3/17/2015", platform: "Xbox One", title: "Resident Evil Revelations 2" },
  { release: "3/17/2015", platform: "Steam", title: "Resident Evil Revelations 2" },

  { release: "8/18/2015", platform: "PlayStation Vita", title: "Resident Evil Revelations 2" },
  { release: "11/28/2017", platform: "Nintendo Switch", title: "Resident Evil Revelations 2" }
]
             },
            { year: 2017, title: "Resident Evil 7: Biohazard", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re7-re.png",
                story:'Three years after his wife disappears, Ethan Winters receives an email from her. Following the lead in the message, he drives down to Louisiana and arrives at a rundown residence. Ethan searches the property for any trace of his wife, but is suddenly attacked and knocked out... He awakes to find himself at the mercy of the crazed Baker family and their house of horrors.',
                related: [
  { release: "6/14/2016", platform: "PlayStation 4", title: "Resident Evil 7 Teaser: Beginning Hour" },
  { release: "2016/10/13", platform: "PlayStation VR", title: "KITCHEN" },
  { release: "12/9/2016", platform: "Xbox One", title: "Resident Evil 7 Teaser: Beginning Hour" },
  { release: "12/19/2016", platform: "Steam", title: "Resident Evil 7 Teaser: Beginning Hour" },
  { release: "1/24/2017", platform: "PlayStation 4", title: "Resident Evil 7: Biohazard" },
  { release: "1/24/2017", platform: "PlayStation VR", title: "Resident Evil 7: Biohazard" },
  { release: "1/24/2017", platform: "Xbox One", title: "Resident Evil 7: Biohazard" },
  { release: "1/24/2017", platform: "Steam", title: "Resident Evil 7: Biohazard" },
  { release: "1/24/2017", platform: "Windows", title: "Resident Evil 7: Biohazard" },
  { release: "1/31/2017", platform: "PlayStation 4", title: "Banned Footage Vol.1" },
  { release: "2/14/2017", platform: "PlayStation 4", title: "Banned Footage Vol.2" },
  { release: "2/21/2017", platform: "Xbox One", title: "Banned Footage Vol.1" },
  { release: "2/21/2017", platform: "Xbox One", title: "Banned Footage Vol.2" },
  { release: "2/21/2017", platform: "Steam", title: "Banned Footage Vol.1" },
  { release: "2/21/2017", platform: "Steam", title: "Banned Footage Vol.2" },
  { release: "12/12/2017", platform: "PlayStation 4", title: "Resident Evil 7: Biohazard Gold Edition" },
  { release: "12/12/2017", platform: "Xbox One", title: "Resident Evil 7: Biohazard Gold Edition" },
  { release: "12/12/2017", platform: "Steam", title: "Resident Evil 7: Biohazard Gold Edition" },
  { release: "12/14/2017", platform: "PlayStation 4", title: "End of Zoe" },
  { release: "12/14/2017", platform: "PlayStation VR", title: "End of Zoe" },
  { release: "12/14/2017", platform: "Xbox One", title: "End of Zoe" },
  { release: "12/14/2017", platform: "Steam", title: "End of Zoe" },
  { release: "12/14/2017", platform: "Windows", title: "End of Zoe" },
  { release: "12/14/2017", platform: "PlayStation 4", title: "Not a Hero" },
  { release: "12/14/2017", platform: "PlayStation VR", title: "Not a Hero" },
  { release: "12/14/2017", platform: "Xbox One", title: "Not a Hero" },
  { release: "12/14/2017", platform: "Steam", title: "Not a Hero" },
  { release: "12/14/2017", platform: "Windows", title: "Not a Hero" },
  { release: "6/14/2022", platform: "PlayStation 5", title: "Resident Evil 7 Biohazard" },
  { release: "6/14/2022", platform: "Xbox Series X|S", title: "Resident Evil 7 Biohazard" },
  { release: "12/16/2022", platform: "Nintendo Switch", title: "Resident Evil 7 Biohazard Cloud" },
  { release: "7/2/2024", platform: "Mac/iOS", title: "Resident Evil 7: Biohazard" }
]
             },
            { year: 2019, title: "Resident Evil 2 Remake", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re2_remake-re.png",
                story:'A reimagining of the original Resident Evil 2 game released in 1998. Making use of new technology available 20 years after the original game, the remake incorporates new ideas while respecting the source material. It is widely considered the pinnacle of remakes and has won many awards.',
                related: [
  { release: "1/11/2019", platform: "PlayStation 4", title: "Resident Evil 2 1-Shot Demo" },
  { release: "1/11/2019", platform: "Xbox One", title: "Resident Evil 2 1-Shot Demo" },
  { release: "1/11/2019", platform: "Steam", title: "Resident Evil 2 1-Shot Demo" },

  { release: "1/25/2019", platform: "PlayStation 4", title: "Resident Evil 2" },
  { release: "1/25/2019", platform: "Xbox One", title: "Resident Evil 2" },
  { release: "1/25/2019", platform: "Steam", title: "Resident Evil 2" },

  { release: "12/12/2019", platform: "PlayStation 4", title: "Resident Evil 2 R.P.D. Demo" },
  { release: "12/12/2019", platform: "Xbox One", title: "Resident Evil 2 R.P.D. Demo" },
  { release: "12/12/2019", platform: "Steam", title: "Resident Evil 2 R.P.D. Demo" },

  { release: "6/14/2022", platform: "PlayStation 5", title: "Resident Evil 2" },
  { release: "6/14/2022", platform: "Xbox Series X|S", title: "Resident Evil 2" },

  { release: "11/11/2022", platform: "Nintendo Switch", title: "Resident Evil 2 Cloud" },
  { release: "1/16/2024", platform: "Windows", title: "Resident Evil 2" },
  { release: "12/10/2024", platform: "Mac/iOS", title: "Resident Evil 2" }
]

             },
            { year: 2020, title: "Resident Evil 3 Remake", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re3_remake-re.png" ,
                story:'A reimagining of the original Resident Evil 3: Nemesis game released in 1999. This game links together with the story of Resident Evil 2 and delves deeper into the dramatic events of the Raccoon City Incident. The 4-vs-1 asymmetrical survival game "Resident Evil Resistance" is included with the game.',
                related: [
  { release: "3/19/2020", platform: "PlayStation 4", title: "Resident Evil 3: Raccoon City Demo" },
  { release: "3/19/2020", platform: "Xbox One", title: "Resident Evil 3: Raccoon City Demo" },
  { release: "3/20/2020", platform: "Steam", title: "Resident Evil 3: Raccoon City Demo" },
  { release: "4/3/2020", platform: "PlayStation 4", title: "Resident Evil 3" },
  { release: "4/3/2020", platform: "Xbox One", title: "Resident Evil 3" },
  { release: "4/3/2020", platform: "Steam", title: "Resident Evil 3" },
  { release: "6/14/2022", platform: "PlayStation 5", title: "Resident Evil 3" },
  { release: "6/14/2022", platform: "Xbox Series X|S", title: "Resident Evil 3" },
  { release: "11/18/2022", platform: "Nintendo Switch", title: "Resident Evil 3 Cloud" },
  { release: "2/13/2024", platform: "Windows", title: "Resident Evil 3 for Windows" },
  { release: "3/18/2025", platform: "Mac/iOS", title: "Resident Evil 3" }
]
            },
            { year: 2021, title: "Resident Evil Village", img1: "https://game.capcom.com/residentevil/pc/img/about/history/title_logo-village-re.png" ,
                story:'Several years after the tragic Baker House Incident...Ethan Winters, his wife Mia, and their daughter Rose are enjoying a peaceful life under BSAA protection. Things end in tragedy, however, when BSAA captain Chris Redfield pays a visit. To save his daughter, Ethan must once again step into a nightmare...',
                related: [
  { release: "1/22/2021", platform: "PlayStation 5", title: "Maiden" },
  { release: "5/2/2021", platform: "PlayStation 5", title: "Resident Evil Village Gameplay Demo" },
  { release: "5/2/2021", platform: "PlayStation 4", title: "Resident Evil Village Gameplay Demo" },
  { release: "5/2/2021", platform: "Xbox One", title: "Resident Evil Village Gameplay Demo" },
  { release: "5/2/2021", platform: "Steam", title: "Resident Evil Village Gameplay Demo" },
  { release: "5/7/2021", platform: "PlayStation 5", title: "Resident Evil Village" },
  { release: "5/7/2021", platform: "PlayStation 4", title: "Resident Evil Village" },
  { release: "5/7/2021", platform: "Xbox One", title: "Resident Evil Village" },
  { release: "5/7/2021", platform: "Steam", title: "Resident Evil Village" },
  { release: "5/7/2021", platform: "Stadia", title: "Resident Evil Village" },
  { release: "10/20/2022", platform: "PlayStation 5", title: "Resident Evil Village Gold Edition Gameplay Demo" },
  { release: "10/20/2022", platform: "PlayStation 4", title: "Resident Evil Village Gold Edition Gameplay Demo" },
  { release: "10/20/2022", platform: "Xbox Series X|S", title: "Resident Evil Village Gold Edition Gameplay Demo" },
  { release: "10/20/2022", platform: "Xbox One", title: "Resident Evil Village Gold Edition Gameplay Demo" },
  { release: "10/20/2022", platform: "Steam", title: "Resident Evil Village Gold Edition Gameplay Demo" },
  { release: "10/27/2022", platform: "PlayStation 5", title: "Resident Evil Village Gold Edition" },
  { release: "10/27/2022", platform: "PlayStation 4", title: "Resident Evil Village Gold Edition" },
  { release: "10/27/2022", platform: "Xbox Series X|S", title: "Resident Evil Village Gold Edition" },
  { release: "10/27/2022", platform: "Xbox One", title: "Resident Evil Village Gold Edition" },
  { release: "10/27/2022", platform: "Steam", title: "Resident Evil Village Gold Edition" },
  { release: "10/27/2022", platform: "Mac", title: "Resident Evil Village" },
  { release: "10/27/2022", platform: "Nintendo Switch", title: "Resident Evil Village Cloud" },
  { release: "2/22/2023", platform: "PlayStation VR2", title: "Resident Evil Village VR Mode Gameplay Demo" },
  { release: "2/22/2023", platform: "PlayStation VR2", title: "Resident Evil Village VR Mode" },
  { release: "10/30/2023", platform: "iOS", title: "Resident Evil Village" }
]
            },
            {
                year:2023,
                title:'Resident Evil 4 Remake',
                img1: 'https://game.capcom.com/residentevil/pc/img/about/history/title_logo-re4_remake-re.png' ,
                story:'A remake of the original Resident Evil 4 from 2005.This updated masterpiece preserves the essence of the original while also modernizing the gameplay, restructuring the story, and upgrading the graphics of one of the most popular entries in the series.',
                related: [
  { release: "3/10/2023", platform: "PlayStation 5", title: "Resident Evil 4 Chainsaw Demo" },
  { release: "3/10/2023", platform: "PlayStation 4", title: "Resident Evil 4 Chainsaw Demo" },
  { release: "3/10/2023", platform: "Xbox Series X|S", title: "Resident Evil 4 Chainsaw Demo" },
  { release: "3/10/2023", platform: "Steam", title: "Resident Evil 4 Chainsaw Demo" },
  { release: "3/24/2023", platform: "PlayStation 5", title: "Resident Evil 4" },
  { release: "3/24/2023", platform: "PlayStation 4", title: "Resident Evil 4" },
  { release: "3/24/2023", platform: "Xbox Series X|S", title: "Resident Evil 4" },
  { release: "3/24/2023", platform: "Steam", title: "Resident Evil 4" },
  { release: "4/7/2023", platform: "PlayStation 5", title: "The Mercenaries" },
  { release: "4/7/2023", platform: "PlayStation 4", title: "The Mercenaries" },
  { release: "4/7/2023", platform: "Xbox Series X|S", title: "The Mercenaries" },
  { release: "4/7/2023", platform: "Steam", title: "The Mercenaries" },
  { release: "9/21/2023", platform: "PlayStation 5", title: "Separate Ways" },
  { release: "9/21/2023", platform: "PlayStation 4", title: "Separate Ways" },
  { release: "9/21/2023", platform: "Xbox Series X|S", title: "Separate Ways" },
  { release: "9/21/2023", platform: "Steam", title: "Separate Ways" },
  { release: "12/8/2023", platform: "PlayStation VR2", title: "Resident Evil 4 VR Mode" },
  { release: "12/20/2023", platform: "Mac/iOS", title: "Resident Evil 4" },
  { release: "2/9/2024", platform: "PlayStation 5", title: "Resident Evil 4 Gold Edition" },
  { release: "2/9/2024", platform: "PlayStation 4", title: "Resident Evil 4 Gold Edition" },
  { release: "2/9/2024", platform: "PlayStation 4", title: "Resident Evil 4 Gold Edition" },
  { release: "2/9/2024", platform: "Steam", title: "Resident Evil 4 Gold Edition" }
]
            }
        ] as HistoryEntry[]
    })
})
