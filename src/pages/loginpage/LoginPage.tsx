import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.scss'; // Make sure to adjust the path accordingly
import img from "../../assets/resim.png";
import videoSource from "../../assets/plug.mp4";

interface LoginPageProps {

}

const LoginPage: React.FC<LoginPageProps> = () => {
    const [signUp, setSignUp] = useState(false);
  
    const handleToggleSignUp = () => {
      setSignUp(!signUp);
  };  
  

  return (
    <article>
      <div className={`container ${signUp ? 'sign-up-active' : ''}`}>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              {signUp && (
                <div className="video-container">
                  <video className="video-bg" autoPlay muted loop>
                    <source src={videoSource} type="video/mp4" />
                  </video>
                </div>
              )}
              <button className="invert" id="signIn" onClick={handleToggleSignUp}>
                Doktor Girişi
              </button>
            </div>
            <div className="overlay-right">
              {!signUp && (
                <div className="video-container">
                  <video className="video-bg" autoPlay muted loop>
                    <source src={videoSource} type="video/mp4" />
                  </video>
                </div>
              )}
              <button className="invert" id="signUp" onClick={handleToggleSignUp}>
                Hasta Girişi
              </button>
            </div>
          </div>
        </div>
        <form className="sign-up" action="#">
          <img src={img} className="logo" alt="Logo" />
          <h2>Hasta Girişi</h2>
          <h3>
            Acil Sağlık Yardımı ve Acil İhbarlarınız için
            <br /> Lütfen 112'yi arayınız.
          </h3>
          <div className="register-container">
            <div className="register">
              <input type="text" placeholder="TC Kimlik Numarası:" />
              <div className="name-container">
                <input type="text" placeholder="Ad:" />
                <input type="text" placeholder="Soyad:" />
              </div>
              <input type="text" placeholder="Doğum Tarihi:" />
              <input type="text" placeholder="Telefon No:" />
              <div className="register_2">
                <input type="text" placeholder="Şifre:" />
                <input type="checkbox" id="KVKK" name="KVKK" />
                <label htmlFor="KVKK">KVKK Metni</label>
              </div>
            </div>
          </div>
          <Link to="/profile">
            <button className="giris">Giriş Yap</button>
          </Link>
        </form>
        <form className="sign-in" action="#">
          <img src={img} className="logo" alt="Logo" />
          <h2>Doktor Girişi</h2>
          <h3>
            Acil Sağlık Yardımı ve Acil İhbarlarınız için
            <br /> Lütfen 112'yi arayınız.
          </h3>
          <div className="register-container">
            <div className="register">
              <input type="text" placeholder="TC Kimlik Numarası:" />
              <div className="name-container">
                <input type="text" placeholder="Ad:" />
                <input type="text" placeholder="Soyad:" />
              </div>
              <input type="text" placeholder="Doğum Tarihi:" />
              <input type="text" placeholder="Telefon No:" />
              <div className="register_2">
                <input type="text" placeholder="Şifre:" />
                <input type="checkbox" id="KVKK" name="KVKK" />
                <label htmlFor="KVKK">KVKK Metni</label>
              </div>
            </div>
          </div>
          <button className="giris">Giriş Yap</button>
        </form>
      </div>
    </article>
  );
};

export default LoginPage;
