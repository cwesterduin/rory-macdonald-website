require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const categories =
  [
    {name: 'hand', defaultImg: 'the don'},
    {name: 'water', defaultImg: 'the flood'},
    {name: 'cloud', defaultImg: 'the valley of golden souls'},
    {name: 'portrait', defaultImg: 'the libertine'}
  ]

let repositories = [
	{"name": "close encounter", "series": "portrait", "framed":"true", "size": "[ 19, 16 ]", "date": "2020", "medium": "oil on board", "available": "490" },
	{"name": "the pearl of tassis", "series": "water", "framed":"true", "size": "[ 54, 50 ]", "date": "2020", "medium": "oil on board", "available": "sold" },
	{"name": "the flood",  "series": "water", "framed":"true", "size": "[134,125]", "date": "2020", "medium": "oil on linen","available": "6200" },
	{"name": "the libertine",  "series": "portrait", "framed":"true", "size": "[113,91]", "date": "2020", "medium": "oil on linen","available": "5000" },
	{"name": "the renegade",  "series": "portrait", "framed":"true", "size": "[50,47]", "date": "2020", "medium": "oil on board","available": "sold" },
	{"name": "always keep a sapphire in your mind", "series": "portrait", "framed": "true", "size": "[ 19, 16 ]", "date": "2020", "medium": "oil on board", "available": "490" },
	{"name": "waiting for the ferry man",  "series": "water", "framed":"true", "size": "[134,125]", "date": "2020", "medium": "oil on linen","available": "6200" },
	{"name": "lifeboat",  "series": "water", "size": "[50,60]", "framed":"true", "date": "2020", "medium": "oil on board","available": "1800" },
	{"name": "the dove",  "series": "hand", "size": "[30,36]", "framed":"true", "date": "2020", "medium": "oil on board","available": "1000" },
	{"name": "study",  "series": "portrait", "size": "[16,14]", "framed":"true", "date": "2020", "medium": "oil on board","available": "450" },
	{"name": "above the void",  "series": "hand", "framed":"true", "size": "[50,60]", "date": "2019", "medium": "oil on canvas","available": "1800" },
	{"name": "vanguard",  "series": "cloud", "framed":"true", "size": "[43,122]", "date": "2020", "medium": "oil on board","available": "3000"},
	{"name": "cloud nine",  "series": "cloud", "framed":"true", "size": "[43,122]", "date": "2020", "medium": "oil on board","available": "3000"},
	{"name": "the spirit of a dreamer",  "series": "cloud", "framed":"true", "size": "[54,50]", "date": "2020", "medium": "oil on board","available": "1700" },
	{"name": "the valley of golden souls", "framed":"true",  "series": "cloud", "size": "[40,43]", "date": "2020", "medium": "oil on board","available": "1300" },
	{"name": "hitch",  "series": "cloud", "framed":"true", "size": "[16,14]", "date": "2020", "medium": "oil on board","available": "450" },
	{"name": "minister for holes",  "series": "cloud", "framed":"true", "size": "[30,36]", "date": "2020", "medium": "oil on board","available": "1000"},
	{"name": "the don",  "series": "hand", "framed":"true", "size": "[30,25]", "date": "2019", "medium": "oil on board","available": "800" },
  {"name": "first flight",  "series": "hand", "framed":"true", "size": "[30,25]", "date": "2019", "medium": "oil on board","available": "800" },
  {"name": "perch",  "series": "hand", "framed":"true", "size": "[16,14]", "date": "2019", "medium": "oil on board","available": "450" },
	{"name": "up on high",  "series": "hand", "framed":"true", "size": "[19,16]", "date": "2019", "medium": "oil on board","available": "sold" },
  {"name": "the vanquishing point",  "series": "hand", "framed":"true", "size": "[19,16]", "date": "2019", "medium": "oil on board","available": "sold" },
	{"name": "el primo", "series": "hand", "framed":"true", "size": "[30,25]", "date": "2019", "medium": "oil on board","available": "800" },
	{"name": "rise",  "series": "hand", "framed":"true", "size": "[16,14]", "date": "2019", "medium": "oil on board", "available": "450"},
	{"name": "arise",  "series": "hand", "framed":"true", "size": "[25,30]", "date": "2019", "medium": "oil on board","available": "800" },
  {"name": "nightswimmer",  "series": "water", "framed":"true", "size": "[19,16]", "date": "2020", "medium": "oil on board","available": "450" }
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
  repositories.forEach((image,index) => {
    createPage({
      path: `/studio-paintings/${image.name.replace(/ /g,"-")}`,
      component: require.resolve('./src/templates/available-painting.js'),
      context: {
        image: {
        image: image,
        next: repositories[index+1]
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
