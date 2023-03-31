<template>
    <div class="links">
    <h1>
      <a href="https://linktr.ee/adedevs" target="_blank">{{ name }}</a>
    </h1>
    <section>
      <ul>
        <li><a href="https://docs.google.com/document/d/1NWXrOx77kMAUol-TsPX9lmA7CawSGAR1mSC4Bp9viSk/edit?usp=sharing">CV</a></li>
      </ul>
    </section>
  </div>
  <div class="my-summary">
    <section>
      <section class="socials">
        <a href="https://www.github.com/adedevs" target="_blank"
          ><img src="../assets/github.png" alt=" logo" srcset=""
        /></a>
        <a href="https://twitter.com/adedevs" target="_blank"
          ><img src="../assets/twitter.png" alt=" logo" srcset=""
        /></a>
        <a href="https://www.instagram.com/coldsoda99/" target="_blank"
          ><img src="../assets/instagram.png" alt=" logo" srcset=""
        /></a>
      </section>

      <section class="info">
        <div class="ade">
          <h1 id="name">i am adeyemi akinyemi</h1>
          <p>
            i am adeyemi akinyemi, an entry-level professional frontend devloper with
            grad certificate from
            <a href="https://thealtschool.com/" target="_blank"
              >AltSchoolAfrica</a
            >
          </p>
          <p>
            during my freetime i am a
            <a href="https://www.tiktok.com/@shegavemeptsds">gamer</a>
             <a href="https://bit.ly/3hCbN9t" @click="photographer"
              >Photographer</a
            >
             <a href="https://drive.google.com/drive/folders/1RrwGQqwh9v0gFPCr1g_8tVdvhGRSmW0i?usp=share_link" target="_blank">Writer</a>
          </p>
          <p>
            My personal
            <a href="https://spoti.fi/3WrzZdp" target="_blank">Playlist</a> for
            when i work or study
          </p>
        </div>
        <!-- <div class="potrait">
          <img src="../assets/1671184972421.jpg" alt="my potrait" srcset="" />
        </div> -->
      </section>
    </section>
  </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            name: "Adeyemi"
        }
    }
}
</script>

<style scoped>
@import '../styles/home.css'
</style>