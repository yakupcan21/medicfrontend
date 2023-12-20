<template>
  <article>
    <div class="navbar">
      <div class="menu-icon" @click="toggleMenu">☰</div>
      <div class="bold-font" @click="navigate('Home')">anasayfa</div>
      <div class="right-align">
        <div @click="navigate('about')">hakkında</div>
        <img @click="navigate('question')" :src="questionImg" class="icon" />
        <img @click="toggleAvatar" :src="peopleFill" class="avatar-icon" />
      </div>
    </div>
    <div v-if="isMenuOpen" class="menu open">
      <div id="white-bar">
        <div @click="navigate('menuItem1')">Doktorlar</div>
        <div @click="navigate('menuItem2')">Birimler</div>
        <div @click="navigate('menuItem3')">Hastalıklardan Nasıl Korunulur?</div>
        <div @click="navigate('menuItem4')">Yapay Zeka ve Akciğer Hastalıkları</div>
        <div class="button" id="return" @click="toggleMenu">Geri Dön</div>
      </div>
      <div id="black-background"></div>
    </div>
    <div v-if="isAvatar" class="menu open">
      <div id="white-bar-avatar">
        <img :src="peopleFill" class="avatar-icon" id="big-avatar"/>
        <div>Buğra Burak Başer</div>
        <div id="link" @click="navigate('profile')">Profili Düzenle</div>
        <div id="avatar-buttons">
          <div class="button" id="logout" @click="navigate('logout')">Çıkış Yap</div>
          <div class="button" id="return" @click="toggleAvatar">Geri Dön</div>
        </div>
      </div>
      <div id="black-background"></div>
    </div>
    <div class ="article-content">
      <div v-show="shouldShowArticle">
        <h1>Akciğer Sağlığı ve Bakımı</h1>
        <p>
          Akciğerler, solunum sistemimizin önemli bir parçasıdır. Bu hayati organlar, vücudumuza oksijen alımını sağlar
          ve karbon dioksit gibi atık maddelerin dışarı atılmasına yardımcı olur. Akciğer sağlığına dikkat etmek, genel
          sağlığımızı korumak için kritik bir öneme sahiptir.
        </p>
        <h2>Akciğer Sağlığınızı Korumanın Yolları</h2>
        <p>
          <strong>1. Temiz Hava:</strong> Temiz hava solumak, akciğer sağlığı için önemlidir. Dışarıda zaman geçirmek ve
          kirli iç hava ortamlarından kaçınmak akciğerlerinizi korur.
        </p>
        <p>
          <strong>2. Düzenli Egzersiz:</strong> Egzersiz yapmak, akciğer fonksiyonlarını artırabilir. Düzenli yürüyüş,
          koşu veya egzersiz programları, akciğer sağlığını destekler.
        </p>
        <p>
          <strong>3. Sigara İçmemek:</strong> Sigara içmek, akciğer hastalıklarına yol açabilir. Sigara içiyorsanız, bir
          an önce bırakmak sağlığınız için önemlidir.
        </p>
        <h2>Akciğer İle İlgili Hastalıklar</h2>
        <p>
          Akciğerler, bir dizi hastalığa duyarlıdır. Astım, KOAH ve zatürre gibi durumlar akciğer sağlığını olumsuz
          etkileyebilir. Belirtileri fark ettiğinizde bir sağlık profesyoneli ile görüşmek önemlidir.
        </p>
      </div>
    </div>
    <div id="madeby">Made by Burak</div>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      isMenuOpen: false,
      isAvatar: false,
      signUp: true,
      backgroundColor: "#EEEEEE",
      questionImg: require('../assets/questionImg.png'),
      peopleFill: require('../assets/peopleFill.png'),
      scrollPosition: 0, 
      hasShownArticle: false, 
    };
  },
  computed: {
    shouldShowArticle() {
      if(this.hasShownArticle == false){
        return this.scrollPosition > 800;
      } else{
        return this.scrollPosition > 0;
      }
 
    },
  },
  mounted() {
    document.body.style.backgroundColor = this.backgroundColor;
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleAvatar() {
      this.isAvatar = !this.isAvatar;
    },
    navigate(page) {
      console.log("Navigating to " + page);
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;

      if (this.scrollPosition > 800 && !this.hasShownArticle) {
        this.hasShownArticle = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  overflow: visible;
  align-items: center;
}

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

.article-content {
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  align-items: center;
  height: 380px;
  margin-top: 1080px;
  width: 1500px;
  background-color: #fff; /* Beyaz arka plan */
  box-shadow: 0px 3px 6px #00000029;   padding: 50px;
  z-index: -1; /* Arkada olmasını sağlar */
}

#madeby{
  bottom: 0;
  left: 0;
  margin-top: 2000px;
  width: 100%;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 1s ease;
  transition: transform 1s ease-out;
  transform: translateX(-100%);
}

.menu.open {
  transform: translateX(0); /* Menüyü ekrana getir */
}

#white-bar{
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

#white-bar div {
  width: fixed;
  height: fixed; 
  margin-top: 15px;
  margin-bottom: 5px;
  cursor: pointer;
}


#white-bar-avatar {
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

#white-bar-avatar div {
  width: fixed;
  height: fixed; 
  margin-top: 10px;
  cursor: pointer;
}

#avatar-buttons {
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;

  cursor: default !important;
  margin-top: auto !important; /* Üst boşluk */
  margin-bottom: 0 !important; /* Alt boşluk */
}


#avatar-buttons div{
  width: fixed;
  height: fixed; 
  margin-top: 10px;
  cursor: pointer;
}

.button {
  width: 40%;
  background: #aec2ff; /* Arkaplan rengi */
  box-shadow: 0px 3px 6px #00000029;  /* Gölge efekti */
  border-radius: 39px; /* Kenar yuvarlaklığı */
  opacity: 1; /* Opaklık */
  cursor: pointer; /* Fare imleci */
}

#logout {
  margin-top: auto !important; /* Üst boşluk */
  margin-bottom: 20px !important; /* Alt boşluk */
  margin-left: 20px;
  margin-right: 10px;
  background: #ffabab !important;

}

#return {
  margin-top: auto !important; /* Üst boşluk */
  margin-bottom: 20px !important; /* Alt boşluk */
}

.button:hover {
  box-shadow: inset 0px 3px 6px #00000029; /* :hover durumunda outer (dış) gölge efekti */
}

#black-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Siyah arka plan (0.7 opaklık) */
  z-index: 0 !important; /* Arkada olmalı, menüden sonra gelecek */
}

.bold-font {
  font: normal normal bold 20px/28px 'Segoe UI';
}
.right-align {
  display: flex;
  margin-left: auto !important;
  margin-right: 20px !important;
  cursor: default !important;
  align-items: center;
  font: normal normal normal 20px/28px 'Segoe UI';
  color: #000000;
  letter-spacing: 0px;
}

.icon {
  width: 20px;
  height: 20px;
  background-size: cover;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.menu-icon {
  margin-left: 20px !important;
}

.navbar div {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.avatar-icon {
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

#big-avatar{
  margin-top: 4%;
  width: 50%;
  height: auto; 
}


#link{
  text-decoration: underline; /* Altı çizili stil */
}

</style>