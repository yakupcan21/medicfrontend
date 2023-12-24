<template>
  <article>
    <Navbar></Navbar>
    <SidebarMenu></SidebarMenu>
    <SidebarProfile></SidebarProfile>
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
import Navbar from '../components/menu/NavbarComponent.vue';
import SidebarMenu from '../components/menu/SidebarMenuComponent.vue';
import SidebarProfile from '../components/menu/SidebarProfileComponent.vue';

export default {
  components: {
    Navbar,
    SidebarMenu,
    SidebarProfile
},
  data: () => {
    return {
      signUp: true,
      backgroundColor: "#EEEEEE",
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


</style>