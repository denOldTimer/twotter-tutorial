# THE TWOTTER_TUTORIAL

### DISCLAIMER::

This is a repo based upon the youtube video:

- from: **The Earth Is Square**
- author: **Mitchell Romney**
- youtube video: [Learn Vue 3 for Beginners - Full 2020 Tutorial Course](https://www.youtube.com/watch?v=ZqgiuPt5QZo&list=TLPQMDcwMzIwMjG9_NuKaYa-iQ&index=3)

You can STALK him via the following links:

- [Twitter :](https://www.twitter.com/_mitchellromney/)
- [Instagram :](https://www.instagram.com/_mitchellromney/)
- [Twitch :](https://www.twitch.tv/itssushix/)
- [Github :](https://github.com/MitchellRomney)

Resources:

- [Vue.js 3.0 Documentation :](https://v3.vuejs.org/guide/introduction.html)
- [NodeJs :](https://nodejs.org)
- [IDE Webstorm :](https://www.jetbrains.com/webstorm/)
- [IDE VSCode :](https://code.visualstudio.com/)

Video chapters:

- Setting Up
  - Chapter 1 : Course Introduction
  - Chapter 2 : Project Setup
- The Basics
  - Chapter 3 : Building Single File Components
  - Chapter 4 : Template Conditionals, Loops, & Styles
  - Chapter 5 : Forms & Handeling User Input
  - Chapter 6 : Dynamic Styling, SCSS & Global Styles
- Lets Get Advanced
  - Chapter 7 : The vue 3 Composition API
  - Chapter 8 : Routing With Vue Router 4
  - Chapter 9 : Global State Management with Veux 4
  - Chapter 10 : Deploying to Heroku

**_Cudos to Mitchell for creating the video !_**

:+1: @[MitchellRomney](https://github.com/MitchellRomney)

DISCLAIMER:  
Full rights for the content and video belong to Earth Is Square and Mitchell Romney.

This repo:

- [twotter-tutorial](https://github.com/denOldTimer/twotter-tutorial)
- author : denOldTimer
- was created for two resons:
  - TO follow along with the video and recreate for learning purposes
  - TO try and create a repo that has different branches for different stages {Chapters}
    - My Notes on that you can reade the [NOTES.MD](NOTES.md) file
- my environment:
  - Device: Asus Gaming Laptop from yester year.
  - OS: Unbuntu Linux 20.04 Desktop
  - IDE : VS Code

**SO LETS GET ON WITH IT !**

## Setup : Chapter One : Course Introduction

basic understanding of HTML, CSS, JAVASCRIPT

## Setup : Chapter Two : Project Setup.

This is where I did it differently:

1. Created th e github repo
2. Go to your root projects directory: for example `sudo cd /home/projects/vuejs`
3. run the command `vue ui`
4. click `Create` to create a new project
5. click the green button `Create a new Project here`
6. Fill out the form :
   - name: twotter-tutorial
   - package manager: npm (my preference) can choose yarn
   - override target folder -> off
   - scaffold project without beginner instructions -> off
   - initialize git -> off ( do that later)
   - click the green button `Next ->`
7. Select preset `Vue 3`as this is a vue 3 tutorial
   - click the green button `Create Project`

**!! WAIT** until the project is created before continuing to the next step

8. Repo: **DO NOT CLONE YOUR REPO**
9. Initialize your local git
   - Open your terminal: `ctrl + alt + t`
   - First create your local repo: `git init`
   - Add two files: `git add .gitignore README.md`
   - Commit to your local repo: `git commit -m 'init repo`
   - **NEXT** change the local branch fom master to main
     - THis is a github preference
     - `git branch -M main`
   - Next link your local repo to that on github.
     - `git remote add origin git@github.com:<your username>/twotter-tutorial`
   - Last push your local's first commit the two files to remote repo:
     - `git push -u origin main`

**DOWNLOAD** **[release 1.0.0](https://github.com/denOldTimer/releases/1.0.0)**

## Basics : Chapter 3 : Building Single File Components

- data : The function that returns a data object for the component instance
- computed: Computed properties to be mixed into the component instance
- methods: Methods to be mixed into the component instance
- life cycle hook: mounted
- watch

DATA links: { [data], [props], [computed], [methods], [watch], [emits] }  
Lifecycle hooks : { [beforeCreated], [created], [beforeMount], [mounted],  
 [beforeUpdate], [updated], [activated], [deactivated], [beforeUnmount], [unmounted],  
 [errorCaptured], [renderTracked], [renderTriggered] }

[data]: https://v3.vuejs.org/api/options-data.html#data-2
[props]: https://v3.vuejs.org/api/options-data.html#props
[computed]: https://v3.vuejs.org/api/options-data.html#computed
[methods]: https://v3.vuejs.org/api/options-data.html#methods
[watch]: https://v3.vuejs.org/api/options-data.html#watch
[emits]: https://v3.vuejs.org/api/options-data.html#emits
[beforecreated]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforecreate
[created]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#created
[beforemount]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforemount
[mounted]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#mounted
[beforeupdate]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforeupdate
[updated]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#updated
[activated]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#activated
[deactivated]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#deactivated
[beforeunmount]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#beforeunmount
[unmounted]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#unmounted
[errorcaptured]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#errorcaptured
[rendertracked]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#rendertracked
[rendertriggered]: https://v3.vuejs.org/api/options-lifecycle-hooks.html#rendertriggered

## Basics : Chapter 3 : Templates Condistionals, loops & events

1. Refactoring behind the scenes
