require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const categories = require("./static/data/categories.json")
let paintings = require("./static/data/paintings.json")

exports.createPages = async ({
                               actions: {
                                 createPage
                               }
                             }) => {
  // Create a page for each painting.
  paintings.forEach((image, index) => {
    createPage({
      path: `/painting/${image.name.replace(/ /g, "-")}`,
      component: require.resolve("./src/templates/painting.js"),
      context: {
        image,
        paintings
      }
    })
  })
  const availables = paintings.filter(item => item.available)
  availables.forEach((image, index) => {
    createPage({
      path: `/studio-paintings/${image.name.replace(/ /g, "-")}`,
      component: require.resolve("./src/templates/available-painting.js"),
      context: {
        image: {
          image: image,
          next:  availables[index + 1] ? `/studio-paintings/${availables[index + 1].name.replace(/ /g, "-")}` : null,
          prev: availables[index - 1] ? `/studio-paintings/${availables[index - 1].name.replace(/ /g, "-")}` : null,
          text: image.available === "sold" ? "sold" : `£${image.available}`
        }
      }
    })
  })
  const sales = paintings.filter(item => item.sale)
  sales.forEach((image, index) => {
    createPage({
      path: `/sale/${image.name.replace(/ /g, "-")}`,
      component: require.resolve("./src/templates/available-painting.js"),
      context: {
        image: {
          image: image,
          next: sales[index + 1] ? `/sale/${sales[index + 1].name.replace(/ /g, "-")}` : null,
          prev: sales[index - 1] ? `/sale/${sales[index - 1].name.replace(/ /g, "-")}` : null,
          text: `was £${image.available} now £${image.sale}`
        }
      }
    })
  })
  // Create a page for each painting.
  categories.forEach(category => {
    const path = category.series ? `/painting/${category.name.replace(/ /g, "-")}` : `/${category.name.replace(/ /g, "-")}`
    createPage({
        path: path,
        component: require.resolve("./src/templates/category.js"),
        context: {
          category
        }
      }
    )
  })


}
