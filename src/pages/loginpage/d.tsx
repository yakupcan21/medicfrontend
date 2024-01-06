import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginPage.scss"; // Make sure to adjust the path accordingly
import img from "../../assets/resim.png";
import videoSource from "../../assets/plug.mp4";
import user_icon from "../../assets/login.png";
import password_icon from "../../assets/padlock.png";
interface LoginPageProps { }

const LoginPage: React.FC<LoginPageProps> = () => {
  const [signUp, setSignUp] = useState(false);
  const [isNewAccount, setIsNewAccountDoctor] = useState(false);
  const [isNewAccountPatient, setIsNewAccountPatient] = useState(false);

  const [idInput, setIdInput] = useState<string>('');
  const [passWordInput, setPassWordInput] = useState<string>('');

  const handleToggleSignUp = () => {
    setSignUp(!signUp);
    setIsNewAccountDoctor(false);
    setIsNewAccountPatient(false);
  };

  const handleToggleNewAccount = () => {
    setIsNewAccountDoctor(!isNewAccount);

  };
  const handleToggleNewAccountPatient = () => {
    setIsNewAccountPatient(!isNewAccountPatient);

  };

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <article>
      <div className={`container ${signUp ? 'sign-up-active' : ''}`}>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              {signUp && (
                <div className="video-container-left">
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
                <div className="video-container-right">
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
        {isNewAccount ? (
            <form className="sign-in" action="#" style={{ display: signUp ? 'none' : 'block' }}>
              <img src={img} alt="logo" className="logo" />
              <h2>Doktor Yeni Kayıt </h2>
              <h3 className='info'>
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
              <button className="yeni-kayıt" >
                Kayıt Ol
              </button>
            </form>
          ) : isNewAccountPatient ? (
            <form className="sign-up" action="#" style={{ display: signUp ? 'block' : 'none' }}>
              <img src={img} alt="logo" className="logo" />
              <h2>Hasta Yeni Kayıt </h2>
              <h3 className='info'>
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
              <button className="yeni-kayıt" >
                Kayıt Ol
              </button>
            </form>
          ): (
              <>
                <form className="sign-up" action="#" style={{ display: signUp ? 'block' : 'none' }}>
                  <img src={img} alt="logo" className="logo" />
                  <h2>Hasta Girişi</h2>
                  <h3 className='info'>
                    Acil Sağlık Yardımı ve Acil İhbarlarınız için
                    <br /> Lütfen 112'yi arayınız.
                  </h3>
                  <div className="register-container">
                    <div className="register">
                      <input type="text" placeholder="TC Kimlik Numarası:" value={idInput}/>
                      <div className="register_2">
                        <input type="text" placeholder="Şifre:" value={passWordInput} />
                        <input type="checkbox" id="KVKK" name="KVKK" />
                        <label htmlFor="KVKK">KVKK Metni</label>
                      </div>
                    </div>
                  </div>
                  <Link to="/profile">
                    <button className="giris">Giriş Yap</button>
                  </Link>
                  <br />
                  <p className='new-account'>
                    Yeni kayıt oluşturmak için{" "}
                    <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }} onClick={handleToggleNewAccountPatient}>
                      tıklayınız
                    </span>.
                  </p>
                </form>
               <form className="sign-in" action="#" style={{ display: signUp ? 'none' : 'block' }}>
                  <img src={img} alt="logo" className="logo" />
                  <h2>Doktor Girişi</h2>
                  <h3 className='info'>
                    Acil Sağlık Yardımı ve Acil İhbarlarınız için
                    <br /> Lütfen 112'yi arayınız.
                  </h3>
                  <div className="register-container-doctor">
                    <div className="register-doctor">
                      <div className={`floating-label ${isFocused || inputValue ? 'focused' : ''}`}>
                        <img src={user_icon} alt="user_icon" className="user_icon" />
                        <input
                          type="text"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          onChange={(e) => setIdInput(e.target.value)}
                          value={idInput}
                          required 
                        />
                        <label htmlFor="tcKimlik">TC Kimlik No:</label>
                      </div>
                      <div className="register_2">
                        <div className={`floating-label ${isFocused || inputValue ? 'focused' : ''}`}>
                          <input
                            type="text"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChange={(e) => setPassWordInput(e.target.value)}
                            value={passWordInput}
                            required  
                          />
                          <label className='sifre' htmlFor="sifre">Şifre:</label>
                        </div>
                        <input type="checkbox" id="KVKK" name="KVKK" />
                        <label htmlFor="KVKK">KVKK Metni</label>
                      </div>
                    </div>
                  </div>
                  <button className="giris">Giriş Yap</button>
                  <br />
                  <p className='new-account'>
                    Yeni kayıt oluşturmak için{" "}
                    <span style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }} onClick={handleToggleNewAccount}>
                      tıklayınız
                    </span>.
                  </p>
                </form>
              </>
            )}
      </div>
    </article>
  );
};

export default LoginPage;