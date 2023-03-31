<template>
    <div id="projects">
    <div class="projects-head">
      <!-- <h1>projects</h1> -->
    <h1>my projects</h1>
    <p id="little">This is a list of all the projects I've worked on and some that I am still working on.</p>
    </div>
    <div class="my-projects">
      <section>
        <h1><a href="https://tictactoe.adedevs.repl.co/" target="_blank">tic-tac-toe game</a></h1>
        <p>A tic-tac-toe game against an AI built off the mini-max algorithm. The games will always either in a win for the AI or a tie.</p>
      </section>
      <section>
        <h1><a href="https://kryptyktodo.netlify.app/" target="_blank">task tracker</a></h1>
        <p>A to-do-list app built using VueJS which implements the CRUD functionalities and uses a JSON server as a backend locally. <a id="special" href="https://github.com/AdeDevs/TaskTracker" target="_blank">Source Code</a></p>
      </section>
      <section>
        <h1><a href="https://kryptykhamburger.web.app/" target="_blank">hamburger menu</a></h1>
        <p>A simple webpage of a responsive hamburger menu(this one is a personal favourite because I had been putting learning and building it off for so long).</p>
      </section>
      <section>
        <h1><a href="https://kryptykcalculator.web.app/" target="_blank">calculator</a></h1>
        <p>A simple calculator singluar webpage built with ReactJS. Completes simple operations</p>
      </section>
      <section>
        <h1><a href="https://kryptykreducer.web.app/" target="_blank">quotes</a></h1>
        <p>A single webpage that shows "CRID" in effect which just stores the data saved to current page data, once reloaded all data is lost. There's the option to create and delete a "quote", there's also a like increment and decrement counter.</p>
      </section>
      <section>
        <h1><a href="https://kryptyktac.web.app/" target="_blank">tic-tac-toe </a></h1>
        <p>A traditional tic-tac-toe game where human players can play against each other, this was built with Vanilla Javascript and HTML</p>
      </section>
      <section>
        <h1><a href="https://gimmikgallery.web.app/" target="_blank">Gallery</a></h1>
        <p>A simple Gallery app that uses the <a href="https://randomuser.me/" target="_blank">randomuser.me</a> API to shuffle though random images from the API</p>
      </section>
      <section>
        <h1><a href="">Github Clone</a></h1>
        <p>A Github landing page replica with most of the same functionalities as the original Github landing page</p>
      </section>
      <section>
        <h1><a href="">R p g</a></h1>
        <p>{{lorem}}</p>
      </section>
      <section>
        <h1><a href="">To-do list app</a></h1>
        <p>A mobile to-do-list app built using FLUTTER that shows "CRUD" in effect. There's the option to create and delete a task, option to remoce and to undo a mistake</p>
      </section>
    </div>    
  </div>
</template>

<script>
export default {
    name: "MyProjects"
}
</script>