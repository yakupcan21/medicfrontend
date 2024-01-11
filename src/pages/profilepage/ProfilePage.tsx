import React, { useEffect, useState } from 'react';
import './ProfilePage.scss';
import Navbar from '../../components/menu/NavbarComponent';
import Profile from '../../components/ProfileComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';
import penImg from '../../assets/penImg.png';
import axios from 'axios';


interface Doctor {
  docId: number;
  docName: string;
  docSurname: string;
  docDateOfBirth: string;
  docPhoneNo: string;
  docEmail: string;
  docPassword: string;
  docAge: number;
  docHeight: number;
  docWeight: number;
  docBmi: number;
  docTitle: string;
  docDepartment: string;
  docHospital: string;
}

interface Patient {
  patientId: number;
  patientName: string;
  patientSurname: string;
  patientDateOfBirth: string;
  patientPhoneNo: string;
  patientEmail: string;
  patientAge: number;
  patientHeight: number;
  patientWeight: number;
  patientBmi: number;
  reportCount: number;
  reportLastVisit: string;
}

interface ProfilePageProps {
  isDoctor: boolean;
  isPatient: boolean;
  isAdmin: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { isDoctor, isPatient, isAdmin } = props;

  const [eMailInput, seteMailInput] = useState<string>('');
  const [phoneNumInput, setPhoneNumInput] = useState<string>('');
  const [passWordInputOld, setPassWordInputOld] = useState<string>('');
  const [passWordInputNewFirst, setPassWordInputNewFirst] = useState<string>('');
  const [passWordInputNewSecond, setPassWordInputNewSecond] = useState<string>('');
  const [warningPhone, setWarningPhone] = useState(false);
  const [warningeMail, setWarningeMail] = useState(false);
  const [warningOldPassWord, setWarningOldPassWord] = useState(false);
  const [warningNewPassWordFirst, setWarningNewPassWordFirst] = useState(false);
  const [warningNewPassWordSecond, setWarningNewPassWordSecond] = useState(false);
  const [disabledPhoneInput, setDisabledPhoneInput] = useState(true);
  const [disabledeMailInput, setDisabledeMailInput] = useState(true);
  const [disabledPassWordInput, setDisabledPassWordInput] = useState(true);

  const [data, setData] = useState<Patient[] | null>();
  const [data2, setData2] = useState<Doctor | null>();
  const PatientIdInput = 258754948;
  const DoctorIdInput = 258754948;

  useEffect(() => {
    axios.get(`http://localhost:8081/patients/patient/${PatientIdInput}`).then((response) => {
      setData(response.data)
      console.log(response.data);
    });
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8081/doctors/doctor/${DoctorIdInput}`).then((response) => {
      setData2(response.data)
      console.log(response.data);
    });
  }, [])

  const profileName = "Buğra Burak Başer";
  const profileSNum = "28*******85";
  const profileDateOfBirth = "29/12/2000";
  const [profileEMail, setProfileEMail] = useState<string>("bugraburakbaser@gmail.com");
  const [profilePhoneNum, setProfilePhoneNum] = useState<string>("+90 537 271 35 91");
  const [profilePassWord, setProfilePassWord] = useState<string>("1234");

  const updateeMail = () => {
    setDisabledeMailInput(!disabledeMailInput);
    setWarningeMail(false);
    seteMailInput('');
  };

  const pusheMail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (eMailInput != '' && emailRegex.test(eMailInput)) {
      setProfileEMail(eMailInput);
      setWarningeMail(false);
      setDisabledeMailInput(true);
      seteMailInput('');
    } else if (eMailInput != '' && !emailRegex.test(eMailInput)) {
      setWarningeMail(true);
    } else if (eMailInput == '') {
      setWarningeMail(false);
      setDisabledeMailInput(true);
    }



  };

  const updatePhoneNum = () => {
    setDisabledPhoneInput(!disabledPhoneInput);
    setWarningPhone(false);
    setPhoneNumInput('');
  };

  const pushPhoneNum = () => {
    const phoneNumRegex = /^\+\d{2}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;

    if (phoneNumInput != '' && phoneNumRegex.test(phoneNumInput)) {
      setProfilePhoneNum(phoneNumInput);
      setWarningPhone(false);
      setDisabledPhoneInput(true);
      setPhoneNumInput('');
    } else if (phoneNumInput != '' && !phoneNumRegex.test(phoneNumInput)) {
      setWarningPhone(true);
    } else if (phoneNumInput == '') {
      setWarningPhone(false);
      setDisabledPhoneInput(true);
    }


  };

  const updatePassWord = () => {
    setDisabledPassWordInput(!disabledPassWordInput);
    setWarningOldPassWord(false);
    setWarningNewPassWordFirst(false);
    setWarningNewPassWordSecond(false);

    setPassWordInputOld('');
    setPassWordInputNewFirst('');
    setPassWordInputNewSecond('');
  };

  const pushPassWord = () => {
    const PassWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;

    setWarningOldPassWord(false);
    setWarningNewPassWordFirst(false);
    setWarningNewPassWordSecond(false);

    if (passWordInputOld == profilePassWord) {
      if (PassWordRegex.test(passWordInputNewFirst)) {
        if (PassWordRegex.test(passWordInputNewSecond) && passWordInputNewFirst == passWordInputNewSecond) {
          setProfilePassWord(passWordInputNewSecond);

          setWarningNewPassWordFirst(false);
          setDisabledPassWordInput(true);
          setWarningOldPassWord(false);
          setDisabledPassWordInput(true);

          setPassWordInputOld('');
          setPassWordInputNewFirst('');
          setPassWordInputNewSecond('');
        } else if (!PassWordRegex.test(passWordInputNewSecond)) {
          if (PassWordRegex.test(passWordInputNewFirst)) {
            setWarningNewPassWordFirst(false);
          }
          setWarningNewPassWordSecond(true);

        }
      } else {
        setWarningNewPassWordFirst(true);
        if (!(passWordInputNewFirst == passWordInputNewSecond)) {
          setWarningNewPassWordSecond(true);
        }

      }
    } else {
      setWarningOldPassWord(true);
    }
  };

  return (
    <div className="profile-page-main-container">
      <BackgroundMotion />
      <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} />
      <div className="left-panel">
        <Reveal>
          <div className="profile-component-profile-page-position">
            <Profile isDoctor={isDoctor} isPatient={isPatient} />
          </div>
        </Reveal>
      </div>
      <div className="right-panel">
        <div className="content-container">
          <Reveal>
            <div className="upper" >
              {isPatient && (<>
                {data && data.slice(0, 1).map((item, index) => (<>
                  <div className='informations-header'>Genel Bilgiler</div>
                  <div>
                    <div className='information-type'>İsim Soyisim</div>
                    <input type="text" className="information-input" id='disabled' placeholder={item.patientName + " " + item.patientSurname} disabled={true} />
                    <hr />
                  </div>
                  <div>
                    <div className='information-type'>TC Kimlik No</div>
                    <input type="text" className="information-input" id='disabled' placeholder={String(item.patientId)} disabled={true} />
                    <hr />
                  </div>
                  <div>
                    <div className='information-type'>Doğum Tarihi</div>
                    <input type="text" className="information-input" id='disabled' placeholder={item.patientDateOfBirth} disabled={true} />
                    <hr />
                  </div>

                  <div>
                    <img src={penImg} className="pen-icon" onClick={updatePhoneNum} style={{ marginLeft: '160px' }} />
                    {!disabledPhoneInput && <div className='information-update-button' style={{ marginLeft: '190px' }} onClick={pushPhoneNum}>Düzenle</div>}
                    <div className='information-type'>Telefon Numarası</div>
                    <input type="text" className="information-input" id={`${disabledPhoneInput ? 'disabled' : ''}`} placeholder={item.patientPhoneNo} value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)} disabled={disabledPhoneInput} />
                    {!warningPhone && <hr />}
                    {warningPhone && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                  </div>
                  <div>
                    <img src={penImg} className="pen-icon" onClick={updateeMail} style={{ marginLeft: '135px' }} />
                    {!disabledeMailInput && <div className='information-update-button' style={{ marginLeft: '165px' }} onClick={pusheMail} >Düzenle</div>}
                    <div className='information-type'>E-posta Adresi</div>
                    <input type="email" className="information-input" id={`${disabledeMailInput ? 'disabled' : ''}`} placeholder={item.patientEmail} value={eMailInput} onChange={(e) => seteMailInput(e.target.value)} disabled={disabledeMailInput} />
                    {!warningeMail && <hr />}
                    {warningeMail && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                  </div>
                  <div>
                    <img src={penImg} className="pen-icon" onClick={updatePassWord} style={{ marginLeft: '67px' }} />
                    {!disabledPassWordInput && <div className='information-update-button' style={{ marginLeft: '98px' }} onClick={pushPassWord} >Düzenle</div>}
                    <div className='information-type' >Parola</div>
                    {disabledPassWordInput && <>
                      <input type="text" className="information-input" id='disabled' placeholder="••••••••••••" disabled={true} />
                      <hr />
                    </>
                    }
                    {!disabledPassWordInput && <>
                      {warningOldPassWord && <div className='information-input-info' >Parola Yanlış</div>}
                      <input type="password" className="information-input" placeholder="Eski Parola" value={passWordInputOld} onChange={(e) => setPassWordInputOld(e.target.value)} disabled={disabledPassWordInput} />
                      {!warningOldPassWord && <hr />}
                      {warningOldPassWord && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                      {warningNewPassWordFirst && <div className='information-input-info' style={{ marginLeft: '98px' }} >Geçersiz Parola</div>}
                      <input type="password" className="information-input" placeholder="Yeni Parola" value={passWordInputNewFirst} onChange={(e) => setPassWordInputNewFirst(e.target.value)} disabled={disabledPassWordInput} />
                      {!warningNewPassWordFirst && <hr />}
                      {warningNewPassWordFirst && <> <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} /></>}
                      {warningNewPassWordSecond && <div className='information-input-info' style={{ marginLeft: '98px' }} >Parolalar Uyuşmuyor</div>}
                      <input type="password" className="information-input" placeholder="Yeni Parolalınızı Tekrar Giriniz" value={passWordInputNewSecond} onChange={(e) => setPassWordInputNewSecond(e.target.value)} disabled={disabledPassWordInput} />
                      {!warningNewPassWordSecond && <hr />}
                      {warningNewPassWordSecond && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                    </>
                    }
                  </div>
                </>
                ))}
              </>)}
              {isDoctor && (<>
                {data2 && (<>
                  <div className='informations-header'>Genel Bilgiler</div>
                  <div>
                    <div className='information-type'>İsim Soyisim</div>
                    <input type="text" className="information-input" id='disabled' placeholder={data2.docName + " " + data2.docSurname} disabled={true} />
                    <hr />
                  </div>
                  <div>
                    <div className='information-type'>TC Kimlik No</div>
                    <input type="text" className="information-input" id='disabled' placeholder={String(data2.docId)} disabled={true} />
                    <hr />
                  </div>
                  <div>
                    <div className='information-type'>Doğum Tarihi</div>
                    <input type="text" className="information-input" id='disabled' placeholder={data2.docDateOfBirth} disabled={true} />
                    <hr />
                  </div>

                  <div>
                    <img src={penImg} className="pen-icon" onClick={updatePhoneNum} style={{ marginLeft: '160px' }} />
                    {!disabledPhoneInput && <div className='information-update-button' style={{ marginLeft: '190px' }} onClick={pushPhoneNum}>Düzenle</div>}
                    <div className='information-type'>Telefon Numarası</div>
                    <input type="text" className="information-input" id={`${disabledPhoneInput ? 'disabled' : ''}`} placeholder={data2.docPhoneNo} value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)} disabled={disabledPhoneInput} />
                    {!warningPhone && <hr />}
                    {warningPhone && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                  </div>
                  <div>
                    <img src={penImg} className="pen-icon" onClick={updateeMail} style={{ marginLeft: '135px' }} />
                    {!disabledeMailInput && <div className='information-update-button' style={{ marginLeft: '165px' }} onClick={pusheMail} >Düzenle</div>}
                    <div className='information-type'>E-posta Adresi</div>
                    <input type="email" className="information-input" id={`${disabledeMailInput ? 'disabled' : ''}`} placeholder={data2.docEmail} value={eMailInput} onChange={(e) => seteMailInput(e.target.value)} disabled={disabledeMailInput} />
                    {!warningeMail && <hr />}
                    {warningeMail && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                  </div>
                  <div>
                    <img src={penImg} className="pen-icon" onClick={updatePassWord} style={{ marginLeft: '67px' }} />
                    {!disabledPassWordInput && <div className='information-update-button' style={{ marginLeft: '98px' }} onClick={pushPassWord} >Düzenle</div>}
                    <div className='information-type' >Parola</div>
                    {disabledPassWordInput && <>
                      <input type="text" className="information-input" id='disabled' placeholder="••••••••••••" disabled={true} />
                      <hr />
                    </>
                    }
                    {!disabledPassWordInput && <>
                      {warningOldPassWord && <div className='information-input-info' >Parola Yanlış</div>}
                      <input type="password" className="information-input" placeholder="Eski Parola" value={passWordInputOld} onChange={(e) => setPassWordInputOld(e.target.value)} disabled={disabledPassWordInput} />
                      {!warningOldPassWord && <hr />}
                      {warningOldPassWord && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                      {warningNewPassWordFirst && <div className='information-input-info' style={{ marginLeft: '98px' }} >Geçersiz Parola</div>}
                      <input type="password" className="information-input" placeholder="Yeni Parola" value={passWordInputNewFirst} onChange={(e) => setPassWordInputNewFirst(e.target.value)} disabled={disabledPassWordInput} />
                      {!warningNewPassWordFirst && <hr />}
                      {warningNewPassWordFirst && <> <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} /></>}
                      {warningNewPassWordSecond && <div className='information-input-info' style={{ marginLeft: '98px' }} >Parolalar Uyuşmuyor</div>}
                      <input type="password" className="information-input" placeholder="Yeni Parolalınızı Tekrar Giriniz" value={passWordInputNewSecond} onChange={(e) => setPassWordInputNewSecond(e.target.value)} disabled={disabledPassWordInput} />
                      {!warningNewPassWordSecond && <hr />}
                      {warningNewPassWordSecond && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
                    </>
                    }
                  </div>
                </>
                )}
              </>)}
            </div>
          </Reveal>
        </div>
      </div>

    </div >
  );
};

export default ProfilePage;
