import React from 'react';
//import Navbar from '../components/menu/NavbarComponent';
import './ProfilePage.scss'; // Make sure to adjust the path accordingly
import Navbar from '../../components/menu/NavbarComponent';
import Profile from '../../components/ProfileComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';

interface ProfilePageProps { }

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const kg = 95;
  const boy = 190;
  const vki = (95 / ((190 / 100) ** 2)).toFixed(3);

  return (
    <>
      <Navbar isDoctor={false} isPatient={true} />
      <BackgroundMotion />
      <div className="container">
        <div className="left-panel">
          <div className="profile-component-profile-page-position">
            <Profile isDoctor={false} isPatient={true} />
          </div>
        </div>
        <div className="right-panel">
          <div className="content-container">
            <div className="upper">
              <h1>Genel Bilgiler</h1>
              <div>
                <div>
                  <div>
                    <h5>İsim Soyisim</h5>
                  </div>
                  <div className="genelBilgilerInfo">İlyas Yakup Pekgüç</div>
                </div>
                <hr />
                <div>
                  <div>
                    <h5>Email</h5>
                  </div>
                  <div className="genelBilgilerInfo">lol@gmail.com</div>
                </div>
                <hr />
                <div>
                  <div>
                    <h5>Telefon</h5>
                  </div>
                  <div className="genelBilgilerInfo">05457382023</div>
                </div>
                <hr />
                <div>
                  <div>
                    <h5>Adress</h5>
                  </div>
                  <div className="genelBilgilerInfo">Ankara</div>
                </div>
                <hr />
                <div>
                  <div>
                    <h5>TC Kimlik No</h5>
                  </div>
                  <div className="genelBilgilerInfo">26*******71</div>
                </div>
                <hr />
                <div>
                  <div>
                    <h5>TC Kimlik No</h5>
                  </div>
                  <div className="genelBilgilerInfo">26*******71</div>
                </div>
                <hr />
              </div>
            </div>
            <Reveal>
              <div className="bottom">
                <h1>Recent hastalıklar</h1>
                <div>
                  <div>
                    <div>
                      <h5>Hastalık çeşidi</h5>
                    </div>
                    <div className="genelBilgilerInfo">
                      hastalık açıklaması
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
