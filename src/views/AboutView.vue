<template>
  <article>
    <div id="navbar">
      <Navbar></Navbar>
      <SidebarMenu @wheel.prevent></SidebarMenu>
      <SidebarProfile @wheel.prevent></SidebarProfile>
    </div>
    <div class="invisible-frame">
      <Transition name="bounce">
        <div class ="article-content" v-if="shouldShowArticle">
          <div>
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
      </Transition>
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
    SidebarProfile,
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.article-content {
  align-items: center;
  width: auto;
  background-color: #fff;
  box-shadow: 0px 3px 6px #00000029;   
  padding: 40px;
  z-index: 0 !important;
}

#navbar {
  z-index: 2 !important;
}

.invisible-frame {
  padding: 80px;
  height: 1080px;
  margin-top: 1080px;
  width: auto;
}

#madeby{
  bottom: 0;
  left: 0;
  margin-top: 2000px;
  width: 100%;
}


</style>