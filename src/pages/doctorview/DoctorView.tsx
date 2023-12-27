// DoctorView.tsx

import React, { useState } from 'react';
import './DoctorView.scss';

interface DoctorViewProps {}

import resimImg from '../../assets/resim.png'
import personImg from '../../assets/person.png';
import plug1Img from '../../assets/plug1.png';
import plug2Img from '../../assets/plug2.png';
import plug3Img from '../../assets/plug3.png';
import plug4Img from '../../assets/plug4.png';

const DoctorView: React.FC<DoctorViewProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const [indexOfActivePicture, setIndexOfActivePicture] = useState(0);
  const [activePicture, setActivePicture] = useState<string>(plug1Img);
  const questionImg = resimImg;
  const peopleFill = personImg;
  const pictures = [plug1Img, plug2Img, plug3Img, plug4Img];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAvatar = () => {
    setIsAvatar(!isAvatar);
  };

  const navigate = (page: string) => {
    console.log(`Navigating to ${page}`);
    // Add your navigation logic here
  };

  const changeActivePicture = (index: number) => {
    setActivePicture(pictures[index]);
    setIndexOfActivePicture(index);
  };
  return (
    <article>
      <div className="navbar">
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className="navbar-bold-font" onClick={() => navigate('Home')}>
          anasayfa
        </div>
        <div id="navbar-right-align">
          <div onClick={() => navigate('about')}>hakkında</div>
          <img onClick={() => navigate('question')} src={questionImg} className="navbar-question-icon" alt="question" />
          <img onClick={toggleAvatar} src={peopleFill} className="navbar-avatar-icon" alt="avatar" />
        </div>
      </div>
      {isMenuOpen && (
        <div>
          <div id="navbar-white-bar">
            <div onClick={() => navigate('menuItem1')}>Doktorlar</div>
            <div onClick={() => navigate('menuItem2')}>Birimler</div>
            <div onClick={() => navigate('menuItem3')}>Hastalıklardan Nasıl Korunulur?</div>
            <div onClick={() => navigate('menuItem4')}>Yapay Zeka ve Akciğer Hastalıkları</div>
            <div className="navbar-button" id="navbar-return" onClick={toggleMenu}>
              Geri Dön
            </div>
          </div>
          <div id="navbar-black-background"></div>
        </div>
      )}
      {isAvatar && (
        <div>
          <div id="navbar-white-bar-avatar">
            <img src={peopleFill} className="navbar-avatar-icon" id="navbar-big-avatar" alt="big-avatar" />
            <div>Buğra Burak Başer</div>
            <div id="navbar-link" onClick={() => navigate('profile')}>
              Profili Düzenle
            </div>
            <div id="navbar-avatar-buttons">
              <div className="navbar-button" id="navbar-logout" onClick={() => navigate('logout')}>
                Çıkış Yap
              </div>
              <div className="navbar-button" id="navbar-return" onClick={toggleAvatar}>
                Geri Dön
              </div>
            </div>
          </div>
          <div id="navbar-black-background"></div>
        </div>
      )}
      <div className="content-wrapper">
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Rapor No</th>
                <th>Doktor İsmi</th>
                <th>Hasta TC No</th>
                <th>Hasta İsmi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01.01.2021</td>
                <td>1</td>
                <td>Dr. Ali</td>
                <td>12345678910</td>
                <td>Ahmet</td>
              </tr>
            </tbody>
          </table>
          <div id="vue-slider">
            <div className="picture">
              <img src={activePicture} alt="Active Picture" />
            </div>
            <div className="pictures">
              {pictures.map((picture, index) => (
                <div key={index}>
                  <img
                    src={picture}
                    onMouseOver={() => changeActivePicture(index)}
                    className={index === indexOfActivePicture ? 'active' : ''}
                    alt={`Picture ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="content-right">
            <p>BULGULAR:</p>
            {/* Add your content here */}
          </div>
          <div className="back-button" id="navbar-return" onClick={toggleMenu}>
            Geri Dön
            </div>
        </div>
      </div>
    </article>
  );
};

export default DoctorView;