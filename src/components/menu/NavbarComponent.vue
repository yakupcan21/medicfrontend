<template>
  <article>
    <div class="navbar">
      <div class="navbar-menu-icon" @click.prevent="toggleMenu">☰</div>
      <div class="navbar-bold-font" @click="navigate('Home')">anasayfa</div>
      <div id="navbar-right-align">
        <div @click="navigate('about')">hakkında</div>
        <img @click="toggleModal" :src="questionImg" class="navbar-question-icon" />

        <img @click.prevent="toggleProfile" :src="peopleFill" class="navbar-avatar-icon" />
      </div>
    </div>
    <Teleport to="body">
          <div v-if="showModal" class="modal">
            <p>Hello from the modal!</p>
            <button @click="toggleModal">Close</button>
          </div>
        </Teleport>
  </article>
</template>
  
<script>
  import { store, mutations } from '@/store.js'
  import { ref } from 'vue'

  const showModal = ref(false)
  export default {
    data: () => {
      return {
        questionImg: require('@/assets/questionImg.png'),
        peopleFill: require('@/assets/peopleFill.png'),

      };
    },
    computed: {
      isMenuActive() {
        return store.isNavOpen
      },
      isProfileActive(){
        return store.isProfileOpen
      }
    },
    methods: {
      toggleMenu() {
        mutations.toggleNav()

      },
      toggleProfile() {
        mutations.toggleProfile()
      },
      toggleModal(){
        showModal.value = !showModal.value
      },
      navigate(page) {
        console.log("Navigating to " + page);
      },
    }
  };
</script>
  
<style lang="scss" scoped>

  .navbar {
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box; /* Provided background style */
    background: #FFFFFF 0% 0% no-repeat padding-box; /* Fallback background style */
    color: #000000;
    display: flex;
    align-items: center;
    text-align: left;
    font: normal normal normal 20px/28px 'Segoe UI';
    letter-spacing: 0px;
    box-shadow: 0px 3px 6px #00000029; 
    opacity: 1;
  }
  
  #navbar-white-bar{
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
  
  #navbar-white-bar div {
    width: fixed;
    height: fixed; 
    margin-top: 15px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  
  
  #navbar-white-bar-avatar {
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
  
  
  #navbar-black-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Siyah arka plan (0.7 opaklık) */
    }
  
  .navbar-bold-font {
    font: normal normal bold 20px/28px 'Segoe UI';
  }
  #navbar-right-align {
    display: flex;
    margin-left: auto !important;
    margin-right: 20px !important;
    cursor: default !important;
    align-items: center;
    font: normal normal normal 20px/28px 'Segoe UI';
    color: #000000;
    letter-spacing: 0px;
  }
  
  .navbar-question-icon {
    width: 20px;
    height: 20px;
    background-size: cover;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  
  .navbar-menu-icon {
    margin-left: 20px !important;
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
  
  .navbar div {
    margin-left: 10px;
    margin-right: 10px;
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