# underscores-wp-theme

> Create an [Underscores](https://github.com/Automattic/_s) based WordPress theme with [grunt-init][]. It'll ask you for some basic info and the template files you'd like for your Underscores based theme

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

### Linux/Mac Users

```
git clone git@github.com:sennza/underscores-wp-theme.git ~/.grunt-init/underscores-wp-theme
```

### Windows Users

```
git clone git@github.com:sennza/underscores-wp-theme.git %USERPROFILE%/.grunt-init/underscores-wp-theme
```

## Demo
![Underscores WP Theme](http://www.sennza.com.au/wp-content/uploads/2013/10/underscores-wp-theme.gif "Underscores WP Theme")

## Usage

At the command-line, cd into an empty directory, for your theme. e.g. wp-content/themes/yourtheme run this command and follow the prompts.

```
grunt-init underscores-wp-theme
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

Install the NPM modules required to actually process your newly-created project by running:

```
npm install
```

Run Grunt so it can generate your style.css

```
grunt
```
