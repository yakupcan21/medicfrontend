<template>
  <article>
    <div class="container" :class="{'sign-up-active' : signUp}">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
          </div>
          <div class="overlay-right">
            <h2>Hello, Friend!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      <form class="sign-in" action="#">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  </article>

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

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
    0 10px 10px rgba(190, 46, 46, 0.2);
  background: linear-gradient(to bottom, #b6a8f5, #ccc);
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .5s ease-in-out;
    z-index: 100;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #8360ed, #eadbef);
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
  }

  h2 {
  margin: 0;
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

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform .1s ease-in;

}

button:active {
  transform: scale(.9);
}
button:focus{
  outline: none;

}

button.invert {
  background-color: transparent;
  border-color: #fff;
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
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all .5s ease-in-out;
   
  }

form div{
  font-size: 1rem;
}
form input{
  background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .4), 
      0 -1px 1px #fff, 
      0 1px 0 #fff;
    overflow: hidden;
}
form input:focus {
  outline: none;
  background-color: #fff;
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active .sign-in {
  transform: translateX(100%);
}

.sign-up-active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.5s;
}

.sign-up-active .overlay-container {
  transform: translateX(-100%);
}

.sign-up-active .overlay {
  transform: translateX(50%);
}

.sign-up-active .overlay-left {
  transform: translateX(0);
}

.sign-up-active .overlay-right {
  transform: translateX(20%);
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
</style>