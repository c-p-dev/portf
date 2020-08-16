<template>
  <div id="app">
    <Header/>
    <Homepage/>
    <Aboutme/>
    <Experience/>
    <!--  <Projects/>
    asd
    <ContactMe/> -->
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Homepage from "./components/Hompage.vue";
import Aboutme from "./components/Aboutme.vue"; 
import Experience from "./components/Experience.vue";
// import Projects from "./components/Projects.vue";
// import ContactMe from "./components/ContactMe.vue"
export default {
  name: "App",
  components: {
    Header,
    Homepage,
    Aboutme,
    Experience,
    // Projects,
    // ContactMe
  },
  
};
</script>

<style lang="scss">



#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
