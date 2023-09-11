---
id: contributing
title: How To Contribute
sidebar_label: How To Contribute
slug: /guides/contributing
---

We're so thrilled that you want to help out with the UWindsor Computer Science Student Wiki Project! This article will contain everything you need to know to start updating existing articles, writing your own articles, and using GitHub to get your code merged into the main codebase!

## Setting up Your Local Environment

### Prerequisites

You'll need to install some prerequisite software before contributing to the wiki (git, nodejs, yarn). Full instructions can be found on [the wiki's README](https://github.com/UWindsorCSS/wiki#how-to-install).

### Running the Development Server

Once you've installed all the prerequisites, you're ready to run the wiki locally! Simply run `yarn start` in your terminal, and the wiki should automatically open up from the address [http://localhost:3000/wiki/](http://localhost:3000/wiki/). You can now edit the content of any article and see it automatically change in the browser!

## Updating Existing Articles

The simplest way to contribute is to add to or update an existing article. To do this, simply find the relevant `.md` file for the corresponding article you'd like to update, and edit the contents. That's it! After you edit the content you should be able to see it change in the browser.  
If the article you're updating contains a "Last Updated" date at the start of it, make sure to update it with the current date! Make sure to also follow the [style guide](/resources/guides/style) and [article requirements](https://github.com/uwindsorcss/wiki/blob/master/REQUIREMENTS.md) when updating an article.

## Creating New Articles

Creating new articles is a bit more complex than updating existing ones, but if you follow the pattern of other articles, you'll catch on quickly.

The first thing you need to consider is where your article should be located on the wiki, and where it should be located in the actual code. Luckily, the layout of files and folders in the wiki codebase usually follows the layout of the site itself. So, if you wanted to create a new `guide` article, you'd create a new `.md` file under `resources/guides`.

When opening up any of the existing markdown files, you'll probably notice that each one starts off with a section that looks like this:

```md
---
id: contributing
title: How To Contribute
sidebar_label: How To Contribute
slug: /guides/contributing
---
```

Including this top section before beginning your article is vital if you want it to show up on the wiki. Each field is fairly self explanatory, but here's a quick rundown anyways:

-   **id**: This is a descriptive string that uniquely identifies your article. It's useful for sidebars.
-   **title**: The title of your article, this is automatically rendered as an `h1` at the beginning of your article.
-   **sidebar_label**: Self explanatory, shows up on the sidebar to link to your article.
-   **slug**: This refers to what is appended to the url when going to your article. Slugs are expected to adhere to a format featuring all lowercase letters and hyphens between words. For example, if you're creating a guide about "Topic A", you might make the slug `/guides/topic-a`. File names should follow the same naming scheme.

Once you have this section completed, you now need to edit the relevant `XXXX.sidebars.js` file to create a link for it in the sidebar of whatever section you're writing the article for. For example, if you're creating a new guide you would update `resources-sidebars.js`. Look for items near where you'd like to place your article:

```js
items: [
    ...
    "guides/style-guide",
    "guides/contributing",
    ...
],
```

Here, you can see that to add a new guide, you'll need to add an item here. If your article has an id of "someID", you'll add the following:

```js
"guides/someID",
```

If, say, you wanted to add an article about CSS, you'll notice the sidebars file is a bit different:

```js
    indexNav: [
        {
            type: "doc",
            id: "about",
        },
        {
            type: "doc",
            id: "meet-the-board",
        },
    ],
```

Here, to add a new article, say with id of "meetRyan", you would add the following to the list:

```js
{
    type: "doc",
    id: "meet-ryan",
},
```

The name of the game here is following the pattern of what's already there. If you do this, you'll be doing the right thing most of the time. Once this is all done, you can finish writing your article and it should appear on your local wiki! Remember of course to follow the [style guide](/resources/guides/style) and [article requirements](https://github.com/uwindsorcss/wiki/blob/master/REQUIREMENTS.md) when creating an article. All sections also have an index page which lists all of the articles in that section. Look for an `index.md` in the section folder you're working on, and add your article to it! For example, for adding a careers-related article, add a link in `careers/index.md`.

## Running Prettier

To keep our code formatted the same throughout our codebase, we use something called [prettier](https://prettier.io/). This will auto-format your code to follow our formatting. If you're using VSCode, you should install the prettier plugin to have it automatically format your code as you save each file. However, you could and should manually run prettier before committing and pushing your code, via the following command:

```bash
yarn prettier --write .
```

## Working With GitHub

Before contributing to this wiki, you should have a basic understanding of Git and GitHub. Fireship has a [short video](https://www.youtube.com/watch?v=HkdAHXoRtos) that may be helpful if you don't. You will also need to have a [GitHub](https://github.com/) account to contribute, so if you don't have one you should make one.

The process of contributing may seem daunting at first if you've never done it before, but once you get the hang of it, it will come naturally. The process is essentially:

1. [Create a fork](https://github.com/uwindsorcss/wiki/fork) of the wiki repository to your personal account.
2. Clone your fork to your local machine.
3. Make any changes/contributions on your local machine.
4. Commit and push those changes to your fork.
5. Create a pull request to request your changes be merged into the main wiki codebase.

When creating your pull request, you may receive comments and suggested changes to make before a CSS developer will merge your code. If this happens, you should make the suggested changes locally and then commit and push them to your fork. The pull request will automatically be updated.

## Giving Yourself Credit

To thank everyone for their contributions to the wiki, we've created [a page dedicated to showcasing all of our contributors](/resources/contributors). Make sure you add yourself to this list so you can be recognized for your work! Feel free to add your GitHub, personal website, and/or your email address as well.

## More Resouces

Check out the [Docusaurus documentation](https://docusaurus.io/docs) for more information on how Docusaurus works!
