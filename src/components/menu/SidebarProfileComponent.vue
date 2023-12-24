<template>
  <article>
    <div class="sidebar-menu">
      <transition name="slide">
        <div v-if="isPanelOpen">
          <div class="navbar-black-background" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
          <div id="navbar-white-bar-avatar">
            <img :src="peopleFill" class="navbar-avatar-icon" id="navbar-big-avatar"/>
            <div>Buğra Burak Başer</div>
            <div id="navbar-link" @click="navigate('profile')">Profili Düzenle</div>
            <div id="navbar-avatar-buttons">
              <div class="navbar-button" id="navbar-logout" @click="navigate('logout')">Çıkış Yap</div>
              <div class="navbar-button" id="navbar-return" @click="closeSidebarPanel">Geri Dön</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </article>
</template>
  
  <script>
  import { store, mutations } from '@/store.js'

  export default {
    data: () => {
      return {
        peopleFill: require('@/assets/peopleFill.png'),
      };
    },
    methods: {
      closeSidebarPanel: mutations.toggleProfile,
      navigate(page) {
        console.log("Navigating to " + page);
      },
    },
    computed: {
      isPanelOpen() {
          return store.isProfileOpen
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
  

  #navbar-white-bar-avatar {
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0 !important;
    width: 250px;
    height: 350px;
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
  
  #navbar-white-bar-avatar div {
    width: fixed;
    height: fixed; 
    margin-top: 10px;
  }
  
  #navbar-avatar-buttons {
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex;
  
    cursor: default !important;
    margin-top: auto !important; /* Üst boşluk */
    margin-bottom: 0 !important; /* Alt boşluk */
  }
  
  
  #navbar-avatar-buttons div{
    width: fixed;
    height: fixed; 
    margin-top: 10px;
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
  
  #navbar-logout {
    margin-top: auto !important; /* Üst boşluk */
    margin-bottom: 20px !important; /* Alt boşluk */
    margin-left: 20px;
    margin-right: 10px;
    background: #ffabab !important;
  
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

  .navbar-avatar-icon {
    width: 30px;
    height: 30px; 
    border-radius: 50%; 
    background: #F8F8F8 0% 0% no-repeat padding-box;
    background-size: cover;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: inset 0px 3px 6px #00000029;
    border: 1px solid #e1e1e1;
    cursor: pointer;
  }
  
  #navbar-big-avatar{
    margin-top: 4%;
    width: 50%;
    height: auto; 
    cursor: default;
  }
  
  
  #navbar-link{
    text-decoration: underline; /* Altı çizili stil */
    cursor: pointer;
  }
  
</style>