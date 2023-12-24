<template>
  <article>
    <div class="sidebar-menu">
      <transition name="slide">
        <div v-if="isPanelOpen" >
          <div class="navbar-black-background" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
          <div class="navbar-white-bar" >
            <div @click="navigate('menuItem1')">Doktorlar</div>
            <div @click="navigate('menuItem2')">Birimler</div>
            <div @click="navigate('menuItem3')">Hastalıklardan Nasıl Korunulur?</div>
            <div @click="navigate('menuItem4')">Yapay Zeka ve Akciğer Hastalıkları</div>
            <div class="navbar-button" id="navbar-return" @click="closeSidebarPanel">Geri Dön</div>
          </div>
        </div>
      </transition>
    </div>
  </article>
</template>
  
<script>
  import { store, mutations } from '@/store.js'

  export default {
    methods: {
      closeSidebarPanel: mutations.toggleNav,
      navigate(page) {
        console.log("Navigating to " + page);
      },
    }, 
    computed: {
      isPanelOpen() {
          return store.isNavOpen
      }
    }
  };
</script>
  
<style lang="scss" scoped>

  .slide-enter-active,
  .slide-leave-active
  {
    transition: opacity 0.2s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
  
  .navbar-white-bar{
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 0px 3px 6px #00000029;
    z-index: 1 !important; /* Menü önce gelmeli */
    align-items: center;
    text-align: center;
    font: normal normal normal 20px/28px 'Segoe UI';
    color: #000000;
    letter-spacing: 0px;
    display: flex;
    flex-direction: column;
  }
  
  .navbar-white-bar div {
    width: fixed;
    height: fixed; 
    margin-top: 15px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  
  .navbar-button {
    width: 40%;
    background: #aec2ff; /* Arkaplan rengi */
    box-shadow: 0px 3px 6px #00000029;  /* Gölge efekti */
    border-radius: 39px; /* Kenar yuvarlaklığı */
    opacity: 1; /* Opaklık */
    cursor: pointer; /* Fare imleci */
  }

  .navbar-button:hover {
    box-shadow: inset 0px 3px 6px #00000029; /* :hover durumunda outer (dış) gölge efekti */
  }
  
  #navbar-return {
    margin-top: auto !important; /* Üst boşluk */
    margin-bottom: 20px !important; /* Alt boşluk */
  }
  
  
  .navbar-black-background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7); /* Siyah arka plan (0.7 opaklık) */
  }
  
</style>