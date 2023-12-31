import React, { useEffect, useRef, useState } from 'react';
import './ProfilePage.scss'; // Make sure to adjust the path accordingly
import Navbar from '../../components/menu/NavbarComponent';
import Profile from '../../components/ProfileComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';
import penImg from '../../assets/penImg.png';
import { color } from 'framer-motion';

interface ProfilePageProps { }

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const [eMailInput, seteMailInput] = useState<string>('');
  const [phoneNumInput, setPhoneNumInput] = useState<string>('');
  const [warningPhone, setWarningPhone] = useState(false);
  const [warningeMail, setWarningeMail] = useState(false);

  const profileName = "Buğra Burak Başer";
  const profileSNum = "28*******85";
  const profileDateOfBirth = "29/12/2000";
  const [profileEMail, setProfileEMail] = useState<string>("bugraburakbaser@gmail.com");
  const [profilePhoneNum, setProfilePhoneNum] = useState<string>("+90 537 271 35 91");

  const updateeMail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(eMailInput != '' && emailRegex.test(eMailInput)){
      setProfileEMail(eMailInput);
      setWarningeMail(false);
    } else if (eMailInput != '' && !emailRegex.test(phoneNumInput)) {
      setWarningeMail(true);
    }
    seteMailInput('');
};

const updatePhoneNum = () => {
  const phoneNumRegex = /^\+\d{2}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;

  if(phoneNumInput != '' && phoneNumRegex.test(phoneNumInput)){
    setProfilePhoneNum(phoneNumInput);
    setWarningPhone(false);
  } else if (phoneNumInput != '' && !phoneNumRegex.test(phoneNumInput)) {
    setWarningPhone(true);
  }
  
  setPhoneNumInput('');
};


  return (
    <>
      <BackgroundMotion />
      <Navbar isDoctor={false} isPatient={true} />
      <div className="container">
        <div className="left-panel">
          <div className="profile-component-profile-page-position">
            <Profile isDoctor={false} isPatient={true} />
          </div>
        </div>
        <div className="right-panel">
          <div className="content-container">
            <div className="upper" >
              <div className='informations-header'>Genel Bilgiler</div>

                <div>
                  <div className='information-type'>İsim Soyisim</div>
                  <input type="text" className="information-input" id='disabled' placeholder={profileName} disabled={true} />
                  <hr />
                </div>
                <div>
                  <div className='information-type'>TC Kimlik No</div>
                  <input type="text" className="information-input" id='disabled' placeholder={profileSNum} disabled={true} />
                  <hr />
                </div>
                <div>
                  <div className='information-type'>Doğum Tarihi</div>
                  <input type="text" className="information-input" id='disabled' placeholder={profileDateOfBirth} disabled={true} />
                  <hr />
                </div>
                <div>
                  <div className='information-type'>Telefon Numarası</div>
                  <input type="text" className="information-input" placeholder={profilePhoneNum} value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)} />
                  <img src={penImg} className="pen-icon" onClick={updatePhoneNum}/>
                  {!warningPhone && <hr />}
                  {warningPhone && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353'}} />}
                </div>
                <div>
                  <div className='information-type'>E-posta Adresi</div>
                  <input type="text" className="information-input" placeholder={profileEMail} value={eMailInput} onChange={(e) => seteMailInput(e.target.value)} />
                  <img src={penImg} className="pen-icon" onClick={updateeMail}/>
                  {!warningeMail && <hr />}
                  {warningeMail && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353'}} />}
                </div>
                <div>
                  <div className='information-type'>Parola</div>
                  <input type="text" className="information-input" placeholder="*************" />
                  <img src={penImg} className="pen-icon"/>
                  {!warningeMail && <hr />}
                  {warningeMail && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353'}} />}
                </div>
            </div>
            <Reveal>
              <div className="bottom">
                <div className='informations-header'>Geçmiş Hastalıklar</div>
                <div className='information-type'>Hastalık Çeşidi</div>
                <div className='information-statement'>Hastalık açıklaması</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
