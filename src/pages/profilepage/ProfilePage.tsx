import React from 'react';
//import Navbar from '../components/menu/NavbarComponent';
import SimpleButton from './SimpleButton';

import image from "../../assets/SuperMarioRunTA.webp";
import './ProfilePage.scss'; // Make sure to adjust the path accordingly
import Navbar from '../../components/menu/NavbarComponent';

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const kg = 95;
  const boy = 190;
  const vki = (95 / ((190 / 100) ** 2)).toFixed(3);

  return (
    <><Navbar isDoctor={false} isPatient={false}>

    </Navbar><div>
        <div className="container">
          <div className="main">
            <div className="sidebar-container">
              <div className="card text-center sidebar">
                <div className="card-body">
                <SimpleButton>İlyas Yakup Pekgüç</SimpleButton>
                  <img src={image} className="profilePic" width="150" alt="Profile" />
                  <div className="mt-3">
                  
                    <p className="contIcerik">Yaş: 22</p>
                    <p>Kilo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Boy</p>
                    <p>{kg} kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {boy}cm</p>
                    <p className="contIcerik">Vucüd kitle indekis: <br /><br /> {vki}</p>
                    <a href="/" id="guncelleButtonu">Güncelle </a>
                    <p> Aktif hastalık</p>
                    <p>Bulunmamaktadır</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="content-container">
              {/* Genel Bilgiler Box */}
              <div className="card-content">
                <h1 className="genelBilgilerInfoBaslik">Genel Bilgiler</h1>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <h5 className="genelBilgilerInfo">İsim Soyisim</h5>
                    </div>
                    <div className="genelBilgilerInfo">İlyas Yakup Pekgüç</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-3">
                      <h5 className="genelBilgilerInfo">Email</h5>
                    </div>
                    <div className="genelBilgilerInfo">lol@gmail.com</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-3">
                      <h5 className="genelBilgilerInfo">Telefon</h5>
                    </div>
                    <div className="genelBilgilerInfo">05457382023</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-3">
                      <h5 className="genelBilgilerInfo">Adress</h5>
                    </div>
                    <div className="genelBilgilerInfo">Ankara</div>
                    <hr />
                  </div>
                </div>
              </div>

              {/* Recent Hastalıklar Box */}
              <div className="card-content">
                <h1 className="genelBilgilerInfo">Recent hastalıklar</h1>
                <div className="card-body">
                  <div className="row">
                    <div className="genelBilgilerInfo">
                      <h5>Hastalık çeşidi</h5>
                    </div>
                    <div className="genelBilgilerInfo">
                      hastalık açıklaması
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default ProfilePage;
