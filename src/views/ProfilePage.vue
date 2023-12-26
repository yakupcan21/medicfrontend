<template>
  <div>
    <!-- Navbar -->
    <Navbar id="nav"></Navbar>
    <!-- Main Container -->
    <div class="container">
      <!-- Main Content -->
      <div class="main">
        <!-- Sidebar -->
        <div class="sidebar-container">
          <div class="card text-center sidebar">
            <div class="card-body">
              <img :src="image" class="profilePic" width="150">
              <div class="mt-3">
                <h3>İlyas Yakup Pekgüç</h3>
                <p>Yaş: 22</p>
                <p> Kilo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boy</p>
                <p> {{ kg }} kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ boy }}cm</p> 
                <p>Vucüd kitle indekis: <br><br> {{ vki }}</p>
                <router-link to="/" id="guncelleButtonu">Güncelle </router-link>
                <p>Aktif hastalık</p>
                <p>Bulunmamaktadır</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="content-container">
          <!-- Genel Bilgiler Box -->
          <div class="card mb-3 content">
            <h1 class="m-3 pt-3">Genel Bilgiler</h1>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <h5>İsim Soyisim</h5>
                </div>
                <div class="genelBilgilerInfo">İlyas Yakup Pekgüç</div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-3">
                  <h5>Email</h5>
                </div>
                <div class="genelBilgilerInfo">lol@gmail.com</div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-3">
                  <h5>Telefon</h5>
                </div>
                <div class="genelBilgilerInfo">05457382023</div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-3">
                  <h5>Adress</h5>
                </div>
                <div class="genelBilgilerInfo">Ankara</div>
              </div>
            </div>
          </div>

          <!-- Recent Hastalıklar Box -->
          <div class="card mb-3 content">
            <h1 class="m-3">Recent hastalıklar</h1>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <h5>Hastalık çeşidi</h5>
                </div>
                <div class="genelBilgilerInfo">
                  hastalık açıklaması
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import image from "../assets/SuperMarioRunTA.webp"
    import Navbar from '../components/menu/NavbarComponent.vue';
    
    export default {
      components: {
          Navbar
      },
        data: function () {
            return {
                image: image,
                kg: 95,
                boy: 190,
                vki: (95/((190/100)^2)).toFixed(3)
            }
        }
    }
</script>

<style scoped>
body {
  margin-top: 20px;
  background-color: lightgray;
}


.main {
  display: flex;
}

.sidebar-container {
  width: 25%;
  padding: 15px;
}

.sidebar {
  background-color: #333;
  color: white;
  height: 100%;
  border-radius: 10px;
}

.sidebar a {
  margin-left: 10px;
  display: block;
  color: white;
  padding-bottom: 30px;
  font-size: 16px;
  text-decoration: none;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.content-container {
  width: 75%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.content-box {
  margin-bottom: 20px;
  background-color: whitesmoke;
}

.profilePic{
  margin-top: 50px;
  height: 200px;
  width: 200px;
}

h1{
  text-align: left;
}

h5{
  text-align: left;
  font-weight: bold;
  font-size: 20px;
}

.genelBilgilerInfo{
  font-size: 20px;
}

.container{
  background-color: #565656;
  margin-top: 60px;
}

.content {
  background-color: white; /* Set your desired gray background color */
  margin-bottom: 20px; /* Adjust the margin as needed */
  padding: 15px; /* Adjust the padding as needed */
  border-radius: 10px;
}

#guncelleButtonu{
  color: red;
}


</style>
