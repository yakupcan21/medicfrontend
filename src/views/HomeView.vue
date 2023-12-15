<template>

  <div class="split-container">

    <div class="left-half">
    <video class="video-bg" autoplay muted loop>
      <source :src="videoSource" type="video/mp4">
      
    </video>
    </div>

    <div class="right-half">
      <img :src="img" class="logo" />
      
      <h1>Acil Sağlık Yardımı ve Acil İhbarlarınız için<br> Lütfen 112'yi arayınız.</h1>
      <h2><strong>Hasta Girişi</strong></h2>
    

      <div class="register-container">
        <div class="register">
        <input type="text" placeholder="TC Kimlik Numarası:" />
        <div class="name-container">
          <input type="text" placeholder="Ad:" />
          <input type="text" placeholder="Soyad:" />
        </div>
        <input type="text" placeholder="Doğum Tarihi:" />
        <input type="text" placeholder="Telefon No:" />
        <div class="register_2">
          <input type="text" placeholder="Şifre:" />
          <div class="register_3">
            <input type="checkbox" id="KVKK" name="KVKK" />
            <label for="KVKK">KVKK Metni</label>
          </div>
        </div>
      
      <button>Giriş Yap</button>
    </div>
        </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      img: require('../assets/indir.png'),
      videoSource: require('../assets/plug.mp4')
    }
  },
}
</script>

<style>

body {
  margin: 0;
}
.split-container {
  display: flex;
  height: 100vh; /* Set full height of the viewport */
}

.left-half {
  flex: 1.5; /* Take up all available space */
  border-bottom-right-radius: 150px;
  overflow: hidden;
}

.video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.right-half {
  flex: 1; /* Take up all available space */
  padding: 20px; /* Add padding as needed */
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.logo {
  height: 100px;
  width: 300px;
  margin: 0 auto;
  display: block;
  padding-top: 20px;
}

.register {
  text-align: center;
  margin-top: 40px;

}

.register input {
  width: 400px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  border: 2px solid #e54848;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

.register input:focus {
  outline: none;
  border: 2px solid #e54848;
  box-shadow: 0px 0px 4px #c61c1c; 
}

.register button {
  width: 150px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
  border: 2px solid #e54848;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  background-color: #e54848;
  color: white;
  cursor: pointer;
  margin-top: 20px;
}

.register button:hover {
  
  color: #fefbfb;
  transition: 0.5s;
  border: 2px solid #812828;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  
}
h1{
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 15px;
  color: #e54848;
  
  margin-top: 20px;
}

h2{
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 15px;
  color: #e54848;
  
}

.name-container {
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin-right: auto;
  margin-left: auto;
}

.name-container input:first-child {
  width: 200px;
  margin-right: 10px;
}

.register_2 {
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin-right: auto;
  margin-left: auto;
}
.register_3 {
  background-color: #e54848;
  display: flex;
  justify-content: space-between;
  width: 90px;
  border-radius: 10px;
  border: 2px solid #e54848;
  font-size: 14px;
  height: 40px;
  align-items: center;
  
}

.register_3 input {
  margin-right: auto;
  margin-left: 3px;
  margin-top: 20px;
  cursor: pointer;
}

.register_3 label {
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin-right: 20px;
}

.register_2 input:first-child {
  width: 400px;
  margin-right: 10px;
  
}
</style>