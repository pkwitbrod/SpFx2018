# Introduction to Modern Front End Development with SPFx

This repository is the source code used in the St. Louis SharePoint Saturday talk titled Introduction to Modern Front End Development with SPFx. I provide no warranty and I really don't know that you should use it in production as an actual quick links web part. 


# Technologies

Below is a list and brief overview of all the technologies used in the repository and demonstration.

## SPFx

"The SharePoint Framework (SPFx) is a page and web part model that provides full support for client-side SharePoint development, easy integration with SharePoint data, and support for open source tooling."*

With the SharePoint Framework, you can use the modern front end stack (see below) on Windows and Mac to build web parts and more.

*From Microsoft  https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview

## TypeScript

Typescript is a superset of JavaScript. It has more features than are supported in most browsers and is strongly typed. It provides support for classes, private fields, interfaces, and several other ES6+ features out of the box. 

In order to use typescript on the web you need to *transpile* it to JavaScript. In SPFx this is handled by Gulp.  

https://www.typescriptlang.org/

> **Patrick Note:** Typescript is useful for easier tooling but it won't solve any systemic issues in your code. Typescript is as useful as you make it. It won't help catch as many bugs as good testing. For more see Eric Elliot's click bait titled article for some great information: https://medium.com/javascript-scene/the-shocking-secret-about-static-types-514d39bf30a3

## NodeJS and NPM

NodeJS as it pertains to SPFx is simply a replacement for IIS. It's used to serve your compiled files to the browser when you are developing locally. It's also used to serve the files to your SharePoint tenant when working with the workbench in your site. 

NPM is the package manager that you use to install front end dependencies.

https://nodejs.org/en/


## Gulp

Gulp as it pertains to SPFx is taken care of out of the box. This is a set of steps used to build your webpart and serve it to sharepoint. 

When you type gulp serve this is what will happen behind the scenes. 

1. If TSlint is enabled (It isn't in this repo but it should be) will check your code for common errors. 
2. Transpile your TypeScript into JS.
3. Transpile your SASS into CSS inline in you JS
4. Combine all files.
5. Serve them to the browser.
6. Listen for any changes and run the previous steps again as needed.

I would argue that gulp is helpful in sharepoint development outside of SPFx as well. In the past I've used this https://www.npmjs.com/package/gulp-spsave to help speed up my development. Even if you implement nothing else Gulp or webpack are useful,

https://gulpjs.com/

## Yeomen

From their website

"Yeoman is a generic scaffolding system allowing the creation of any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects."

"Yeoman by itself doesn't make any decisions. Every decision is made by generators which are basically plugins in the Yeoman environment. There's a lot of publicly available generators and its easy to create a new one to match any workflow. Yeoman is always the right choice for your scaffolding needs."

http://yeoman.io/


## ReactJs

ReactJS is a modern Javascript library for making user interfaces. It's one of my favorites and it's created and maintained by Facebook and used by many companies. Including Microsoft.

The SharePoint workbench uses React as does SharePoint and delve. Here is more info from Facebook. 

React is a JavaScript library for building user interfaces.

* Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
* Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

https://reactjs.org/


# Sass

"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world." 

What that means is that it adds a lot of extra features into CSS. Imports, variables, calculations, and clearer syntax are all benefits. The biggest benefit to beginners, that any CSS is also valid SASS

For example 

```
/*Regular CSS*/
.Hello .world{
	color: red
}

/*SASS*/
.Hello{
  .world{
    color: blue;
  }
}
```

Are both valid. You can dive in as much or as little as you would like.


## Get Started

In order to get started you need to do a few things first. 

If you want to use this in your tenant start here
https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant

If you just want to develop locally follow the steps here. 

https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment

Bassically they are as follows (But please read the article)

1. Install NodeJs and NPM (Add to path if given the option)
2. Install a text editor. (I like Visual Studio Code and Atom)
3. Install Yeomen 
4. Install Gulp
5. Install SharePoint Framework Generator (Optional if you are just using this repo)
6. Make sure Git is installed. 

## Almost there!

Now that you have all that installed

1. Clone the repository 
2. Navigate your cli of choice to the project directory (Make sure you are in the project)
3. In the CLI type npm install to re-install everything you need. 
4. After that completes (it may take a while) type gulp serve.


Play around. You should be running locally. If you want to run in SharePoint you follow the instructions here https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant
 and then create a new custom list and add a field titles 'Url.' Add whatever links you want to it. 

## Also Check out these Links 

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

https://github.com/OlivierCC/spfx-40-fantastics

https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/sharepoint-crud

Intro to SharePoint REST API https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service

Pluralsight for tutorials on anything above. 

TeamTreehouse if you want to code in the browser. 

My twitter  https://twitter.com/pkwitbrod

Valorem https://www.valorem.com/