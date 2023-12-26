<template>
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <div class="video-container" v-if="signUp">
              <video class="video-bg" autoplay muted loop>
                <source :src="videoSource" type="video/mp4">
              </video>
            </div>
            <button class="invert" id="signIn" @click="signUp = !signUp">Doktor Girişi</button>
          </div>
          <div class="overlay-right">
            <div class="video-container" v-if="!signUp">
              <video class="video-bg" autoplay muted loop>
                <source :src="videoSource" type="video/mp4">
              </video>
            </div>
              <button class="invert" id="signUp" @click="signUp = !signUp">Hasta Girişi</button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#">
        <img :src="img" class="logo" />
          <h2>Hasta Girişi</h2>
          <h3>Acil Sağlık Yardımı ve Acil İhbarlarınız için<br> Lütfen 112'yi arayınız.</h3>
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
                <input type="checkbox" id="KVKK" name="KVKK">
                <label for="KVKK">KVKK Metni</label>
              </div>
          </div>
      </div>
      <router-link :to="{path:'/profile'} ">
        <button class="giris">Giriş Yap</button>
            </router-link>
       
      </form>
      <form class="sign-in" action="#">
        <img :src="img" class="logo" />
          <h2>Doktor Girişi</h2>
          <h3>Acil Sağlık Yardımı ve Acil İhbarlarınız için<br> Lütfen 112'yi arayınız.</h3>
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
              <input type="checkbox" id="KVKK" name="KVKK">
              <label for="KVKK">KVKK Metni</label>
          </div>
        </div>
      </div>
        <button class="giris">Giriş Yap</button>
      </form>
    </div>
  </article>
</template>

<script>
  export default {
    data: () => {
      return {
        signUp: false,
        img: require('../assets/resim.png'),
        videoSource: require('../assets/plug.mp4')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
                0 10px 10px rgba(0, 0, 0, .2);
    background: linear-gradient(to bottom, #efefef, #c5c6f1);

    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100vh;
      overflow: hidden;
      transition: transform .5s ease-in-out;
      z-index: 100;
    }

    .overlay {
      position: relative;
      left: -100%;
      height: 100vh;
      width: 200%;
      background: linear-gradient(to bottom right, #d6d8e2, #c5c6f1);
      color: #fff;
      transform: translateX(0);
      transition: transform .5s ease-in-out;
    }

    @mixin overlays($property) {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      padding: 70px 40px;
      width: calc(50% - 80px);
      height: calc(100% - 140px);
      text-align: center;
      transform: translateX($property);
      transition: transform .5s ease-in-out;
    }

    .overlay-left {
      @include overlays(-20%);
    }

    .overlay-right {
      @include overlays(0);
      right: 0;
      z-index: 2;
    }
  }

  h2 {
    margin: 0;
    color: rgb(219, 58, 58);
  }
  h3{
    margin: 0;
    color: rgb(227, 73, 73);
    font-size: 13px;
    letter-spacing: 1px;
  }

  p {
    margin: 20px 0 30px;
  }

  a {
    color: #222;
    text-decoration: none;
    margin: 15px 0;
    font-size: 1rem;
  }

  button.giris {
    border-radius: 20px;
    border: 2px solid #edeef3;
    background-color: #3c5eda;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;

    &:active {
      transform: scale(.9);
    }

    &:focus {
      outline: none;
    }
    &:span{
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }

    &:span:after {
      content: '\00bb';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }

    &:hover span {
      padding-right: 25px;
    }

    &:hover span:after {
      opacity: 1;
      right: 0;
    }

  &:hover {
    box-shadow: 1px 5px 6px 1px rgb(233, 223, 223),1px 1px 2px 1px rgba(236, 223, 223, 0.984); 
  }
}

  button.invert {
    position:absolute;
    margin-top: 75%;
    border-radius: 20px;
    border: 2px solid #f8f4f4;
    background-color: #db1c1c;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .1s ease-in;

    &:active {
      transform: scale(.9);
    }

    &:focus {
      outline: none;
    }
    &:span{
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }

    &:span:after {
      content: '\00bb';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }

    &:hover span {
      padding-right: 25px;
    }

    &:hover span:after {
      opacity: 1;
      right: 0;
    }

  &:hover {
    box-shadow: 1px 5px 6px 1px rgb(233, 223, 223),1px 1px 2px 1px rgba(236, 223, 223, 0.984); 
  }
 
  }

  form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: center;
    background: linear-gradient(to bottom, #efefef, #c5c6f1);
    transition: all .5s ease-in-out;

    div {
      font-size: 1rem;
    }

    input {
      background-color: #eee;
      border: none;
      padding: 15px 15px;
      margin: 6px 0;
      width: calc(100% - 30px);
      border-radius: 15px;
      border-bottom: 1px solid #ddd;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
                        0 -1px 1px #fff, 
                        0 1px 0 #fff;
      overflow: hidden;

      &:focus {
        outline: none;
        background-color: #fff;
        box-shadow: 0px 0px 4px #382d9a; 
      }
    }
  }

  .sign-in {
    left: 0;
    z-index: 2;
  }

  .sign-up {
    left: 0;
    z-index: 1;  
  }

  .sign-up-active {
    .sign-in {
      transform: translateX(100%);
    }

    .sign-up {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: show .5s;
    }

    .overlay-container {
      transform: translateX(-100%);
    }

    .overlay {
      transform: translateX(50%);
    }

    .overlay-left {
      transform: translateX(0);
    }

    .overlay-right {
      transform: translateX(20%);
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
      z-index: 1;
    }
    49% {
      opacity: 0;
      z-index: 1;
    }
    50% {
      opacity: 1;
      z-index: 10;
    }
  }
  .name-container {
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin-right: auto;
  margin-left: auto;
}
.name-container input:first-child {
  margin-right: 10px;
}
.register_2 {
  display: flex;
  align-items: center;
  width: 430px;
  margin-right: auto;
  margin-left: auto;
  
}

.register_2 input[type="checkbox"] {
  position: relative;
  height: 25px;
  width: 25px;
  
  border-radius: 50%;
  cursor: pointer;
  margin-left: 10px;
  
}
.register_2 label {
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
}

.logo {
  height: 200px;
  margin-bottom: 20px;
}


</style>