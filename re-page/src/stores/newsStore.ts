import {defineStore} from 'pinia'

export interface Article {
    id:number
    title:string
    date:string
    category: 'Game' | 'Collaboration' | 'Movie' | 'RE NET' 
    content:string
    image:string
}
export type ArticleCategory = 
  | 'Game'
  | 'Collaboration'
  | 'Movie'
  | 'RE NET'

  export type NewsCategory = 'All' | ArticleCategory

export const useNewsStore = defineStore('news', {
    state: () => ({
        selectedCategory: 'All' as NewsCategory,
        articles: [
      {
        id: 1,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news1.jpg?raw=true",
        title: 'Resident Evil Portal maintenance info',
        date: 'Jan.14.2026',
        category: 'RE NET',
        content: `
Thank you for using Resident Evil Portal.

We are going to be performing maintenance...

[Maintenance Period]
January 21, 2026 (Wed) 13:30 ~ 16:30 (JST)

Note:
The ending time is an estimate...
        `,
      },

      {
        id: 2,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news2.jpg?raw=true",
        title: 'Resident Evil Showcase | January 15, 2026',
        date: 'Jan.13.2026',
        category: 'Game',
        content: `
Resident Evil Showcase | January 15, 2026
January 15, 2026 at 2:00 PM (PST)

Don't miss the 12-minute Resident Evil Showcase special,
featuring all the latest info on Resident Evil Requiem!
Airing January 15, 2026!

- The date and time of the event may change without prior notice.
- Some of the games included in the show aren't suitable for children.
- This content will be age restricted. Age verification will be required to view this content.
        `,
      },

      {
        id: 3,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news3.jpg?raw=true",
        title: 'A new arcade game project based on Resident Evil 2 has started!',
        date: 'Sep.27.2025',
        category: 'Game',
        content: `
A new arcade game project based on Resident Evil 2 was announced
by Bandai Namco Experience at the Capcom booth at Tokyo Game Show 2025.

Here's the teaser trailer that was shown on stage!

Bandai Namco, having developed a wide range of gun-shooting titles,
initiated a project to create the ultimate gun-shooting game using
the iconic survival horror series Resident Evil.

The game features nonstop shooting action against waves of creatures,
with immersive elements such as air blasts and vibrating floors,
allowing players to experience fear with their entire body.

[Location Test Information]
• Winter 2025: North America location test
• Spring 2026: Japan location test

Further updates will be shared via the official
Bandai Namco Amusement Unit X account (@bnam_jp).
        `,
      },

      {
        id: 4,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news4.jpg?raw=true",
        title:
          'Dead by Daylight Adds New Outfits for Nemesis, Ada Wong & More!',
        date: 'Feb.12.2025',
        category: 'Collaboration',
        content: `
Since Dead by Daylight first brought Resident Evil into The Fog in 2021,
it has become one of the most popular collaborations.

New outfits are being added for iconic characters including:
- The Nemesis (Nemesis Origin Outfit)
- Albert Wesker (New Dawn Outfit)
- Jill Valentine (B.S.A.A Operative Outfit)
- Leon S. Kennedy (DSO Agent Outfit)
- Ada Wong (Separate Ways Outfit)
- Rebecca Chambers (S.T.A.R.S Medic Outfit)

These outfits span across multiple Resident Evil titles and eras,
bringing fresh customization options for fans.

Additionally, the return of the 2v8 Game Mode allows The Nemesis
and The Mastermind to team up, creating chaotic new scenarios
for players to enjoy.
        `,
      },{
        id: 5,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news5.jpg?raw=true",
        title: 'BABYMETAL x Resident Evil 30th Anniversary Collaboration!',
        date: 'Nov.04.2025',
        category: 'Collaboration',
        content: `
On November 1st, the “BABYMETAL WORLD TOUR 2025–2026 SPECIAL ARENA SHOW IN US INTUIT DOME” was held in Los Angeles.
At the venue, a surprise heavy metal announcement was made about a once-in-a-lifetime merchandise collaboration between BABYMETAL and Resident Evil! To start things off, special collaboration artwork will be revealed in 2026, with many different pieces of merchandise planned throughout the collaboration.

This epic combination of the one and only world-famous metal dance group BABYMETAL and the iconic videogame series Resident Evil is sure to knock everyone's socks off as Resident Evil celebrates its 30th anniversary next year!

*Please note, no music collaborations or in-game collaborations are planned.
        `,
      },

      {
        id: 6,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news6.jpg?raw=true",
        title: 'The Puzzles & Survival x Resident Evil Collaboration Begins',
        date: 'Mar.30.2023',
        category: 'Collaboration',
        content: `
Welcome to Primal Conquest: Dino Era
2024-07-31

Dear Chief,

After countless days and nights of hard work and anticipation, we are thrilled to announce that Primal Conquest: Dino Era is now officially online! We cordially invite you to embark on this brand-new adventure journey and fully enjoy the fun of the game.

To celebrate this moment and thank everyone for their enthusiastic support and patience, we have specially prepared a gift for you, which can be claimed using the following gift code!

Gift Code: WELCOME
Redemption Method: [More - Settings - Chest]

Please note that each player can only redeem once.

We look forward to your joining and wish you a delightful gaming experience in Primal Conquest: Dino Era! Every exploration and adventure of yours is our motivation to keep moving forward and improving. If you encounter any issues in the game or have any feedback and suggestions, please contact our Customer Service by [More - Settings - Help - Contact CS].

Thank you once again for your support! Let's embark on this incredible journey together!
        `,
      },

      {
        id: 7,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news7.jpg?raw=true",
        title: 'Fortnite Resident Evil Outfits: Leon & Claire',
        date: 'Mar.17.2023',
        category: 'Collaboration',
        content: `
“You got to keep moving forward.”

Raccoon City survivors Leon S. Kennedy and Claire Redfield know how to hold their own. Step out of the horrors of Raccoon City and drop into MEGA City instead with these new entrants to the Gaming Legends Series — available in the Item Shop starting now!

“We Will Beat This”: Leon S. Kennedy Outfit and Accessories
A rookie R.P.D. officer turned elite operative, getting rid of Leon S. Kennedy isn’t easy. Included with his Outfit is the compact Attaché Case Back Bling. Also in the Shop is a combat knife preferred by R.P.D. veterans, Leon’s Combat Knife Pickaxe. Fortnite Leon S. Kennedy Outfit and Accessory Items

Scarlet Hero: Claire Redfield Outfit and Accessories
A tough young woman on a search for her brother, Claire Redfield may have luck on the Island. It’s no secret the R.P.D. had some weird doors: equip the R.P.D. Keys Back Bling included with her Outfit! The Umbrella Parasol Pickaxe is also available in the Shop. Fortnite Claire Redfield Outfit and Accessory Items Finish your next match in one piece with the new Raccoon City Survivors Set!
        `,
      },

      {
        id: 8,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news8.jpg?raw=true",
        title: 'Resident Evil: Death Island Coming Summer 2023',
        date: 'Feb.08.2023',
        category: 'Movie',
        content: `
Based on Resident Evil, the hit survival-horror game that sold over 130 million copies worldwide, Death Island is a new CG animated film and sequel to Resident Evil: Vendetta.

Synopsis:
D.S.O. agent Leon S. Kennedy is on a mission to rescue Dr. Antonio Taylor from kidnappers, when a mysterious woman thwarts his pursuit. Meanwhile, B.S.A.A. agent Chris Redfield is investigating a zombie outbreak in San Francisco, where the cause of the infection cannot be identified. The only thing the victims have in common is that they all visited Alcatraz Island recently. Following that clue, Chris and his team head to the island, where a new horror awaits them.

Characters:
■Leon S. Kennedy
After surviving Raccoon City as a rookie police officer, he was recruited by the U.S. Government to become an agent in the D.S.O. His resilience makes him one of the government’s most formidable weapons against bioterrorism.

■Chris Redfield
A former member of Raccoon City’s S.T.A.R.S. and survivor of the Mansion Incident, Redfield is a founding member of the B.S.A.A. His skills, decisiveness, strength and compassion are legendary among his colleagues.

Film Title: Resident Evil: Death Island (A.K.A. Biohazard: Death Island)
Release: Summer 2023
Based upon CAPCOM’s video game “Resident Evil”
Director: Eiichiro Hasumi (Assassination Classroom)
Screenplay: Makoto Fukami (Psycho Pass)
Production: TMS Entertainment
CG Production: Quebico
Distribution: Kadokawa Animation (Japan), Sony Pictures Worldwide Acquisitions (Rest of the world)
copyright: ©2023 CAPCOM / DEATH ISLAND FILM PARTNERS
        `,
      },

      {
        id: 9,
        image:"https://github.com/awwdwwp/re_assets/blob/75dcfc9a8eb04924cee9d6badcde6ba41faf6e89/news/news-information.jpg?raw=true",
        title: 'Closure of Resident Evil.net Game Link Web Page',
        date: 'Mar.14.2025',
        category: 'RE NET',
        content: `
Thank you for using Resident Evil Portal.

This is to inform you that service will be ending for Resident Evil Re:Verse, which comes packaged with a purchase of Resident Evil Village for PlayStation®5, PlayStation®4, Xbox Series X|S, Xbox One, or Steam. The application and all of its related DLC will no longer be available for download or purchase.

We are incredibly grateful for your warm support for Resident Evil Re:Verse, and we deeply apologize for bringing you this disappointing news.

Please check the link below for more details, including a schedule for all developments until service ends for Resident Evil Re:Verse.
https://www.residentevil.com/reverse/us/topic/topic_250206.html

Once Resident Evil Re:Verse reaches end of service, you will no longer be able to access the RE NET link web page for this game.

■ Web Pages Due for Closure
Resident Evil Re:Verse
Resident Evil.net game link web page: OVERVIEW and GLOBAL STATS

■ Impact on Players
The RE NET game link web page for Resident Evil Re:Verse will close once game service ends. The following pages will no longer be accessible to players.
- Resident Evil.net game link web page: OVERVIEW
- Resident Evil.net game link web page: GLOBAL STATS

Additionally, the data for Re:Verse in MY PROFILE > PLAY DATA will no longer be viewable after service ends.

Thank you for your continued support of the Resident Evil Portal.
        `,
      },
    ] as Article[],
    
    }),
    getters: {
        filteredArticles(state) {
            if (state.selectedCategory === 'All') return state.articles
            return state.articles.filter(a => a.category === state.selectedCategory)
        },
        latestArticles(state) {
            return state.articles.slice(0,3)
        }
    }
})