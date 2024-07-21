require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const categories =
  [
    {name: '2024', defaultImg: 'the voyager'},
    {name: '2023', defaultImg: 'the river of dreams'},
    {name: '2022', defaultImg: 'this charming man'},
    {name: '2021', defaultImg: 'free spirit'},
    {name: '2020', defaultImg: 'waiting for the ferry man'},
    {name: '2019', defaultImg: 'first flight'}
  ]

let repositories = [
	{"name": "this charming man (2024)",  "series": "2024", "framed":"false", "size": "[160, 116]", "date": "2024", "medium": "oil on linen","available": "11500" },
	{"name": "the river of acheron",  "series": "2024", "framed":"false", "size": "[60, 50]", "date": "2024", "medium": "oil on board","available": false },
	{"name": "dandy in the underworld",  "series": "2024", "framed":"true", "size": "[60, 47]", "date": "2024", "medium": "oil on board","available": "3000" },
	{"name": "dragon heart",  "series": "2024", "framed":"true", "size": "[60, 47]", "date": "2024", "medium": "oil on board","available": "3000" },
	{"name": "self portrait if my father had been french",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2024", "medium": "oil on board","available": "950" },
	{"name": "self portrait if my father had been dutch",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2024", "medium": "oil on board","available": "950" },
	{"name": "self portrait if my father had been a monk",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2024", "medium": "oil on board","available": "950" },
	{"name": "self portrait if my father had been a nudist",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2024", "medium": "oil on board","available": "950" },
	{"name": "blood from a stone",  "series": "2024", "framed":"true", "size": "[30, 20]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the devotee",  "series": "2024", "framed":"true", "size": "[30, 20]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the general",  "series": "2024", "framed":"true", "size": "[30, 20]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the diplomat",  "series": "2024", "framed":"true", "size": "[30, 20]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the blue madonna",  "series": "2024", "framed":"true", "size": "[30, 20]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the three ages",  "series": "2024", "framed":"true", "size": "[300]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the blessed",  "series": "2024", "framed":"true", "size": "[30]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the embrace",  "series": "2024", "framed":"true", "size": "[30]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "the reckoning",  "series": "2024", "framed":"true", "size": "[30, 20]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "shifting sands",  "series": "2024", "framed":"true", "size": "[40, 30]", "date": "2024", "medium": "oil on linen","available": false },
	{"name": "hot head",  "series": "2024", "framed":"false", "size": "[19, 16]", "date": "2024", "medium": "oil on board","available": false },
	{"name": "the voyager",  "series": "2024", "framed":"false", "size": "[40, 35]", "date": "2024", "medium": "oil on board","available": false },
	{"name": "the passenger",  "series": "2024", "framed":"false", "size": "[36, 30]", "date": "2024", "medium": "oil on board","available": false },
	{"name": "the lady of the lake",  "series": "2023", "framed":"false", "size": "[60, 50]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "saint florian",  "series": "2023", "framed":"true", "size": "[113, 91]", "date": "2023", "medium": "oil on linen","available": "7500" },
	{"name": "saint christina",  "series": "2023", "framed":"true", "size": "[113, 91]", "date": "2023", "medium": "oil on linen","available": "7500" },
	{"name": "the river of dreams",  "series": "2023", "framed":"true", "size": "[113, 105]", "date": "2023", "medium": "oil on linen","available": "8500" },
	{"name": "the last judgement",  "series": "2023", "framed":"true", "size": "[145, 105]", "date": "2023", "medium": "oil on linen","available": false },
	{"name": "the duke",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1800" },
	{"name": "a king's harvest",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "the patron saint of gluttony",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1500" },
	{"name": "the patron saint of envy",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1500" },
	{"name": "the patron saint of sloth",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1500" },
	{"name": "the patron saint of wrath",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "the patron saint of avarice",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1500" },
	{"name": "the patron saint of hubris",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1500" },
	{"name": "the patron saint of lust",  "series": "2023", "framed":"true", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": "1500" },
	{"name": "the annunciation i",  "series": "2023", "framed":"false", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "the annunciation ii",  "series": "2023", "framed":"false", "size": "[36,30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "saint balthazar",  "series": "2023", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "saint jerome",  "series": "2023", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "saint kaspar",  "series": "2023", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "the virgin mary",  "series": "2023", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "magi i",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": "750" },
	{"name": "magi ii",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": "750" },
	{"name": "magi iii",  "series": "2024", "framed":"true", "size": "[19, 16]", "date": "2023", "medium": "oil on board","available": "750" },
	{"name": "the romantic minotaur",  "series": "2023", "framed":"false", "size": "[35, 40]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "the silver siren",  "series": "2023", "framed":"false", "size": "[36, 30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "waiting for the wind",  "series": "2023", "framed":"false", "size": "[36, 30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "the holy hour",  "series": "2023", "framed":"false", "size": "[36, 30]", "date": "2023", "medium": "oil on board","available": false },
	{"name": "la vie en rose",  "series": "2022", "framed":"false", "size": "[30,25]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "the nightswimmers l",  "series": "2022", "framed":"false", "size": "[113,91]", "date": "2022", "medium": "oil on linen","available": false },
	{"name": "the nightswimmers r",  "series": "2022", "framed":"false", "size": "[113,91]", "date": "2022", "medium": "oil on linen","available": false },
	{"name": "eau de vie",  "series": "2022", "framed":"false", "size": "[30,25]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "flying high",  "series": "2022", "framed":"false", "size": "[66,60]", "date": "2022", "medium": "oil on linen","available": false },
	{"name": "george and the dragon",  "series": "2022", "framed":"false", "size": "[50,60]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "la donna rosa",  "series": "2022", "framed":"false", "size": "[91,84]", "date": "2022", "medium": "oil on linen","available": false },
	{"name": "lady falconer",  "series": "2022", "framed":"false", "size": "[30,25]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "the dragon king",  "series": "2022", "framed":"false", "size": "[30,25]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "the fall",  "series": "2022", "framed":"false", "size": "[113,105]", "date": "2022", "medium": "oil on linen","available": false },
	{"name": "the spirit of a romanticist",  "series": "2022", "framed":"true", "size": "[66,60]", "date": "2022", "medium": "oil on linen","available": false },
	{"name": "this charming man",  "series": "2022", "framed":"false", "size": "[30,25]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "adrift",  "series": "2022", "framed":"false", "size": "[30,36]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "the admiral",  "series": "2022", "framed":"false", "size": "[30,36]", "date": "2022", "medium": "oil on board","available": false },
	{"name": "the expeditionist",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "charity",  "series": "2022", "framed":"true", "size": "[91,84]", "date": "2022", "medium": "oil on linen","available": "4500" },
	{"name": "across the sea",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "in the balance",  "series": "2021", "framed":"true", "size": "[40, 35]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "out of the blue",  "series": "2021", "framed":"true", "size": "[66,60]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "free spirit",  "series": "2021", "framed":"true", "size": "[66,60]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "if hearts could fly",  "series": "2021", "framed":"true", "size": "[56,50]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "il portale",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": "1200" },
	{"name": "old soak",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "spa",  "series": "2021", "framed":"false", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "fishing for pearls",  "series": "2021", "framed":"false", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "madame de chardonnay",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "the incredible disappearing man",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "the golden siren",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "the water of venus",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "moon tower",  "series": "2021", "framed":"true", "size": "[19,16]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "like a thief in the night",  "series": "2021", "framed":"true", "size": "[30,25]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "close encounter", "series": "2020", "framed":"true", "size": "[ 19, 16 ]", "date": "2020", "medium": "oil on board", "available": false },
	{"name": "the pearl of tassis ii", "series": "2021", "framed":"true", "size": "[ 91, 84 ]", "date": "2021", "medium": "oil on linen", "available": false },
	{"name": "the flood",  "series": "2020", "framed":"true", "size": "[134,125]", "date": "2020", "medium": "oil on linen","available": "6000" },
	{"name": "the libertine",  "series": "2020", "framed":"true", "size": "[113,91]", "date": "2020", "medium": "oil on linen","available": "5000" },
	{"name": "holding the line",  "series": "2021", "framed":"true", "size": "[134,125]", "date": "2021", "medium": "oil on linen","available": "7500" },
	{"name": "flagship",  "series": "2021", "framed":"true", "size": "[30,36]", "date": "2021", "medium": "oil on board","available": false},
	{"name": "nightswimming",  "series": "2021", "framed":"true", "size": "[66,60]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "a safe place",  "series": "2021", "framed":"true", "size": "[36,30]", "date": "2021", "medium": "oil on board","available": "1800"},
	{"name": "the renegade",  "series": "2020", "framed":"true", "size": "[50,47]", "date": "2020", "medium": "oil on board","available": false },
	{"name": "always keep a sapphire in your mind", "series": "2020", "framed": "true", "size": "[ 19, 16 ]", "date": "2020", "medium": "oil on board", "available": false },
	{"name": "waiting for the ferry man",  "series": "2020", "framed":"true", "size": "[134,125]", "date": "2020", "medium": "oil on linen","available": false },
	{"name": "taking the plunge",  "series": "2021", "framed":"true", "size": "[56,50]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "rearguard",  "series": "2021", "framed":"true", "size": "[36,30]", "date": "2021", "medium": "oil on board","available": "1800"},
	{"name": "raft of the minutia",  "series": "2021", "framed":"true", "size": "[30,36]", "date": "2021", "medium": "oil on board","available": false },
	{"name": "lifeboat",  "series": "2020", "size": "[50,60]", "framed":"true", "date": "2020", "medium": "oil on board","available": false },
	{"name": "the dove",  "series": "2020", "size": "[30,36]", "framed":"true", "date": "2020", "medium": "oil on board","available": false },
	{"name": "study",  "series": "2020", "size": "[16,14]", "framed":"true", "date": "2020", "medium": "oil on board","available": false },
	{"name": "above the void",  "series": "2019", "framed":"true", "size": "[50,60]", "date": "2019", "medium": "oil on canvas","available": false },
	{"name": "vanguard",  "series": "2020", "framed":"true", "size": "[43,122]", "date": "2020", "medium": "oil on board","available": "4200" },
	{"name": "cloud nine",  "series": "2020", "framed":"true", "size": "[43,122]", "date": "2020", "medium": "oil on board","available": "4200"},
	{"name": "the spirit of a dreamer",  "series": "2020", "framed":"true", "size": "[54,50]", "date": "2020", "medium": "oil on board","available": "2500" },
	{"name": "the valley of golden souls", "framed":"true",  "series": "2020", "size": "[40,43]", "date": "2020", "medium": "oil on board","available": "2200" },
	{"name": "hitch",  "series": "2020", "framed":"true", "size": "[16,14]", "date": "2020", "medium": "oil on board","available": false },
	{"name": "minister for holes",  "series": "2020", "framed":"true", "size": "[30,36]", "date": "2020", "medium": "oil on board","available": "1800"},
	{"name": "the don",  "series": "2019", "framed":"true", "size": "[30,25]", "date": "2019", "medium": "oil on board","available": false },
 	{"name": "first flight",  "series": "2019", "framed":"true", "size": "[30,25]", "date": "2019", "medium": "oil on board","available": false },
	{"name": "the pearl of tassis", "series": "2020", "framed":"true", "size": "[ 54, 50 ]", "date": "2020", "medium": "oil on board", "available": false },
	{"name": "perch",  "series": "2019", "framed":"true", "size": "[16,14]", "date": "2019", "medium": "oil on board","available": false },
	{"name": "up on high",  "series": "2019", "framed":"true", "size": "[19,16]", "date": "2019", "medium": "oil on board","available": false },
	{"name": "the vanquishing point",  "series": "2019", "framed":"true", "size": "[19,16]", "date": "2019", "medium": "oil on board","available": false },
	{"name": "el primo", "series": "2019", "framed":"true", "size": "[30,25]", "date": "2019", "medium": "oil on board","available": false },
	{"name": "rise",  "series": "2019", "framed":"true", "size": "[16,14]", "date": "2019", "medium": "oil on board", "available": "750"},
	{"name": "arise",  "series": "2019", "framed":"true", "size": "[25,30]", "date": "2019", "medium": "oil on board","available": false },
	{"name": "nightswimmer",  "series": "2020", "framed":"true", "size": "[19,16]", "date": "2020", "medium": "oil on board","available": "false" }
]
exports.createPages = async ({
  actions: {
    createPage
  }
}) => {
  // Create a page for each painting.
  repositories.forEach((image,index) => {
    createPage({
      path: `/painting/${image.name.replace(/ /g,"-")}`,
      component: require.resolve('./src/templates/painting.js'),
      context: {
        image,
        repositories
      }
    });
  });
  let availables = repositories.filter(item => item.available)
  availables.forEach((image,index) => {
    createPage({
      path: `/studio-paintings/${image.name.replace(/ /g,"-")}`,
      component: require.resolve('./src/templates/available-painting.js'),
      context: {
				image: {
				image: image, 
				next: repositories[index+1],
				prev: repositories[index-1]
      }
      }
    });
  });
  // Create a page for each painting.
  categories.forEach(category => {
    createPage({
      path: `/painting/${category.name.replace(/ /g,"-")}`,
      component: require.resolve('./src/templates/category.js'),
      context: {
        category
        }
      }
    );
  });

};
