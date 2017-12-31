# gatsby-contentful-netlify-example
A quick example on how to generate a static site with [Gatsby](https://www.gatsbyjs.org/), using [Contentful](https://www.contentful.com/) as a backend, and deploying automatically on [Netlify](https://www.netlify.com/).

For an overview of the project please take a look at the companion article [Making a Static Website with Gatsby, Contentful, and Netlify](https://medium.com/@erkkapynnonen/making-a-static-website-with-gatsby-contentful-and-netlify-c7372798fda) on Medium, and dive deeper by reading the [Gatsby Docs](https://www.gatsbyjs.org/docs/)

*Please note that this repository is a quick, highly unoptimized example for explaining the general idea, and not a production-ready skeleton you should use for bootstrapping your own project. Chances are this repository won't be updated in the future.*

## Key takeaways
* Programmatical page generation using Gatsby's createPage API (see `gatsby-node.js`)
* Making GraphQL queries in Gatsby (see `src/pages/index.js`, `src/templates/subpage.js`)

## Requirements
* Some knowledge in React and modern JavaScript in general
* Accounts in Netlify, Contentful and a git provider (GitHub, Bitbucket, Gitlab)

## Additional resources
Tech
* [Gatsby](https://www.gatsbyjs.org/)
* [Contentful](https://www.contentful.com/)
* [Netlify](https://www.netlify.com/)
* [gatsby-source-contentful](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-contentful)

Articles
* [Why I created my blog with Gatsby and Contentful | GatsbyJS](https://www.gatsbyjs.org/blog/2017-11-09-why-i-created-my-blog-with-gatsby-and-contentful/)
* [Gatsby + Contentful + Netlify (and Algolia) | GatsbyJS](https://www.gatsbyjs.org/blog/2017-12-06-gatsby-plus-contentful-plus-netlify/)
* [Gatsby Contentful](https://using-contentful.netlify.com/)
* [Setting Up a Continuous Deployment Pipeline with Gatsby.js, Contentful and Netlify | halfelectronic.com](https://www.halfelectronic.com/post/setting-up-gatsby-js-contentful-and-netlify/)