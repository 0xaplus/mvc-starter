[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](https://www.npmjs.com/package/mvc-starter)

## Installation

```
$ npm install mvc-starter -g 
```

#### For example, the following creates an Express app with mvc architecture in the current working directory:

```sh
$ mvc-starter
```

Say you want the files to be in a new directory(new-app):

Create the new directory
```sh
$ mkdir new-app
```

Change working directory to new-app
```sh
$ cd new-app
```
then run the command:
```sh
$ mvc-starter
```

```
  |____new-app
  |      |____config
  |      |    |____db.js
  |      |
  |      |____controllers
  |      |    |____appController.js
  |      |
  |      |____models
  |      |    |___appModel.js
         |
         |_____server.js
         |
         |
         |_____package.json
```

Let's keep it simple for now, if you find and issues or you want to contribute. Please feel free to do so.
More updates are coming!
