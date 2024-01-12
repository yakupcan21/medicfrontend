import "./AdminDoctorsPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import Navbar from "../../components/menu/NavbarComponent.tsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sortImg from '../../assets/sortImg.png';
import penImg from '../../assets/penImg.png';
import axios from "axios";
import { useAuth } from '../../components/AuthContext';
import PatientsPage from "../patientspage/PatientsPage.tsx";

interface ListItem {
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

interface AdminDoctorsPageProps {

}

const AdminDoctorsPage: React.FC<AdminDoctorsPageProps> = () => {
  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');
  const [birthDateInput, setBirthDateInput] = useState('');
  const [departmentInput, setDepartmentInput] = useState('');
  const [hostpitalInput, setHostpitalInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [eMailInput, seteMailInput] = useState('');
  const [phoneNumInput, setPhoneNumInput] = useState('');

  const { userId, isDoctor, isPatient, isAdmin} = useAuth();
  const id= userId ?? '';

  const [warningId, setWarningId] = useState(false);
  const [warningName, setWarningName] = useState(false);
  const [warningSurname, setWarningSurname] = useState(false);
  const [warningBirthDate, setWarningBirthDate] = useState(false);
  const [warningDepartment, setWarningDepartment] = useState(false);
  const [warningHospital, setWarningHospital] = useState(false);
  const [warningTitle, setWarningTitle] = useState(false);
  const [warningPhone, setWarningPhone] = useState(false);
  const [warningeMail, setWarningeMail] = useState(false);
  const [disabledId, setDisabledId] = useState(true);
  const [disabledName, setDisabledName] = useState(true);
  const [disabledSurname, setDisabledSurname] = useState(true);
  const [disabledBirthDate, setDisabledBirthDate] = useState(true);
  const [disabledDepartment, setDisabledDepartment] = useState(true);
  const [disabledHospital, setDisabledHospital] = useState(true);
  const [disabledTitle, setDisabledTitle] = useState(true);
  const [disabledPhoneInput, setDisabledPhoneInput] = useState(true);
  const [disabledeMailInput, setDisabledeMailInput] = useState(true);

  const [data, setData] = useState<ListItem | null>();
  const IdInput = 258754948;
  
  const navigate = useNavigate();

  useEffect(() => {
    if (id == "") {
        navigate("admin/login");
    }
  }, [id]);


  useEffect(() => {
    axios.get(`http://localhost:8081/admin/doctor/${IdInput}`).then((response) => {
      setData(response.data)
      console.log(response.data);
    });
  }, [])


  //***********************************************************ID*********************************************************************
  const updateId = () => {
    setDisabledId(!disabledId);
    setWarningId(false);
    setIdInput('');
  };

  const pushId = () => {
    const idRegex = /^\d+$/;

    if (idInput !== '' && idRegex.test(idInput)) {
      // push id
      setWarningId(false);
      setDisabledId(true);
      setIdInput('');
    } else if (idInput !== '' && !idRegex.test(idInput)) {
      setWarningId(true);
    } else if (idInput === '') {
      setWarningId(false);
      setDisabledId(true);
    }
  };

  //***********************************************************NAME*********************************************************************
  const updateName = () => {
    setDisabledName(!disabledName);
    setWarningName(false);
    setNameInput('');
  };

  const pushName = () => {
    if (nameInput !== '') {
      // push name
      setWarningName(false);
      setDisabledName(true);
      setNameInput('');
    } else {
      setWarningName(true);
    }
  };

  //***********************************************************SURNAME*********************************************************************
  const updateSurname = () => {
    setDisabledSurname(!disabledSurname);
    setWarningSurname(false);
    setSurnameInput('');
  };

  const pushSurname = () => {
    if (surnameInput !== '') {
      // push surname
      setWarningSurname(false);
      setDisabledSurname(true);
      setSurnameInput('');
    } else {
      setWarningSurname(true);
    }
  };

  //***********************************************************BIRTH DATE*********************************************************************
  const updateBirthDate = () => {
    setDisabledBirthDate(!disabledBirthDate);
    setWarningBirthDate(false);
    setBirthDateInput('');
  };

  const pushBirthDate = () => {
    if (birthDateInput !== '') {
      // push birth date
      setWarningBirthDate(false);
      setDisabledBirthDate(true);
      setBirthDateInput('');
    } else {
      setWarningBirthDate(true);
    }
  };

  //***********************************************************DEPARTMENT*********************************************************************
  const updateDepartment = () => {
    setDisabledDepartment(!disabledDepartment);
    setWarningDepartment(false);
    setDepartmentInput('');
  };

  const pushDepartment = () => {
    // Burada gerekli kontrol ve işlemleri yapmalısınız
    // Örneğin, departmentInput'in boş olup olmadığını kontrol edebilirsiniz.
    if (departmentInput !== '') {
      // push department
      setWarningDepartment(false);
      setDisabledDepartment(true);
      setDepartmentInput('');
    } else {
      setWarningDepartment(true);
    }
  };

  //***********************************************************HOSPITAL*********************************************************************
  const updateHospital = () => {
    setDisabledHospital(!disabledHospital);
    setWarningHospital(false);
    setHostpitalInput('');
  };

  const pushHospital = () => {
    // Burada gerekli kontrol ve işlemleri yapmalısınız
    // Örneğin, hostpitalInput'in boş olup olmadığını kontrol edebilirsiniz.
    if (hostpitalInput !== '') {
      // push hospital
      setWarningHospital(false);
      setDisabledHospital(true);
      setHostpitalInput('');
    } else {
      setWarningHospital(true);
    }
  };


  //***********************************************************TITLE*********************************************************************
  const updateTitle = () => {
    setDisabledTitle(!disabledTitle);
    setWarningTitle(false);
    setTitleInput('');
  };

  const pusheTitle = () => {
    const titleRegex = /\bDr\.\b/g;

    if (titleInput != '' && titleRegex.test(titleInput)) {
      //push e mail
      setWarningTitle(false);
      setDisabledTitle(true);
      setTitleInput('');
    } else if (titleInput != '' && !titleRegex.test(titleInput)) {
      setWarningTitle(true);
    } else if (titleInput == '') {
      setWarningTitle(false);
      setDisabledTitle(true);
    }
  };

  //***********************************************************EMAIL*********************************************************************
  const updateeMail = () => {
    setDisabledeMailInput(!disabledeMailInput);
    setWarningeMail(false);
    seteMailInput('');
  };

  const pusheMail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (eMailInput != '' && emailRegex.test(eMailInput)) {
      //push e mail
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

  //***********************************************************PHONENUM*********************************************************************
  const updatePhoneNum = () => {
    setDisabledPhoneInput(!disabledPhoneInput);
    setWarningPhone(false);
    setPhoneNumInput('');
  };

  const pushPhoneNum = () => {
    const phoneNumRegex = /^\+\d{2}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;

    if (phoneNumInput != '' && phoneNumRegex.test(phoneNumInput)) {
      //push phone num
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



  return (
    <div className="admin-doctor-page-main-container">
      <BackgroundMotion />
      <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={true} userId={id}></Navbar>
      <div className="content-panel">
        <Reveal>
          <div className="upper" >
            <div className='informations-header'>Genel Bilgiler</div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateId} style={{ marginLeft: '120px' }} />
              {!disabledId! && <div className='information-update-button' style={{ marginLeft: '150px' }} onClick={pushId}>Düzenle</div>}
              <div className='information-type'>TC Kimlik No</div>
              <input type="text" className="information-input" id={`${disabledId ? 'disabled' : ''}`} placeholder={data?.docId ? data.docId.toString() : ' '} value={idInput} onChange={(e) => setIdInput(e.target.value)} disabled={disabledId} />
              {!warningId && <hr />}
              {warningId && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateName} style={{ marginLeft: '50px' }} />
              {!disabledName! && <div className='information-update-button' style={{ marginLeft: '80px' }} onClick={pushName}>Düzenle</div>}
              <div className='information-type'>İsim</div>
              <input type="text" className="information-input" id={`${disabledName ? 'disabled' : ''}`} placeholder={data?.docName ? data.docName : '  '} value={nameInput} onChange={(e) => setNameInput(e.target.value)} disabled={disabledName} />
              {!warningName && <hr />}
              {warningName && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateSurname} style={{ marginLeft: '80px' }} />
              {!disabledSurname! && <div className='information-update-button' style={{ marginLeft: '110px' }} onClick={pushSurname}>Düzenle</div>}
              <div className='information-type'>Soyisim</div>
              <input type="text" className="information-input" id={`${disabledSurname ? 'disabled' : ''}`} placeholder={data?.docSurname ? data.docSurname : '  '} value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} disabled={disabledSurname} />
              {!warningSurname && <hr />}
              {warningSurname && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateBirthDate} style={{ marginLeft: '130px' }} />
              {!disabledBirthDate! && <div className='information-update-button' style={{ marginLeft: '160px' }} onClick={pushBirthDate}>Düzenle</div>}
              <div className='information-type'>Doğum Tarihi</div>
              <input type="date" className="information-input" id={`${disabledBirthDate ? 'disabled' : ''}`} placeholder={data?.docDateOfBirth ? data.docDateOfBirth : '  '} onChange={(e) => setBirthDateInput(e.target.value)} value={birthDateInput} disabled={disabledBirthDate} />
              {!warningBirthDate && <hr />}
              {warningBirthDate && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateDepartment} style={{ marginLeft: '110px' }} />
              {!disabledDepartment! && <div className='information-update-button' style={{ marginLeft: '140px' }} onClick={pushDepartment}>Düzenle</div>}
              <div className='information-type'>Departman</div>
              <input type="text" className="information-input" id={`${disabledDepartment ? 'disabled' : ''}`} placeholder={data?.docDepartment ? data.docDepartment : '  '} value={departmentInput} onChange={(e) => setDepartmentInput(e.target.value)} disabled={disabledDepartment} />
              {!warningDepartment && <hr />}
              {warningDepartment && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateHospital} style={{ marginLeft: '80px' }} />
              {!disabledHospital && <div className='information-update-button' style={{ marginLeft: '110px' }} onClick={pushHospital}>Düzenle</div>}
              <div className='information-type'>Hastane</div>
              <input type="text" className="information-input" id={`${disabledHospital ? 'disabled' : ''}`} placeholder={data?.docHospital ? data.docHospital : '  '} value={hostpitalInput} onChange={(e) => setHostpitalInput(e.target.value)} disabled={disabledHospital} />
              {!warningHospital && <hr />}
              {warningHospital && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateTitle} style={{ marginLeft: '70px' }} />
              {!disabledTitle && <div className='information-update-button' style={{ marginLeft: '100px' }} onClick={pusheTitle}>Düzenle</div>}
              <div className='information-type'>Ünvan</div>
              <input type="text" className="information-input" id={`${disabledTitle ? 'disabled' : ''}`} placeholder={data?.docTitle ? data.docTitle : '  '} value={titleInput} onChange={(e) => setTitleInput(e.target.value)} disabled={disabledTitle} />
              {!warningTitle && <hr />}
              {warningTitle && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updatePhoneNum} style={{ marginLeft: '160px' }} />
              {!disabledPhoneInput && <div className='information-update-button' style={{ marginLeft: '190px' }} onClick={pushPhoneNum}>Düzenle</div>}
              <div className='information-type'>Telefon Numarası</div>
              <input type="text" className="information-input" id={`${disabledPhoneInput ? 'disabled' : ''}`} placeholder={data?.docPhoneNo ? data.docPhoneNo : '  '} value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)} disabled={disabledPhoneInput} />
              {!warningPhone && <hr />}
              {warningPhone && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" onClick={updateeMail} style={{ marginLeft: '135px' }} />
              {!disabledeMailInput && <div className='information-update-button' style={{ marginLeft: '165px' }} onClick={pusheMail} >Düzenle</div>}
              <div className='information-type'>E-posta Adresi</div>
              <input type="email" className="information-input" id={`${disabledeMailInput ? 'disabled' : ''}`} placeholder={data?.docEmail ? data.docEmail : '  '} value={eMailInput} onChange={(e) => seteMailInput(e.target.value)} disabled={disabledeMailInput} />
              {!warningeMail && <hr />}
              {warningeMail && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div className='elements-buttons'>
              <Link className='information-button' to="/admin/doctors" style={{ width: '130px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px', backgroundColor: '#fd9898'}}>Doktoru Sil</Link>
              <Link className='information-button' to="/admin/doctors" style={{ width: '130px', marginBlockStart: '20px', marginRight: '20px' }}>Geri Dön</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AdminDoctorsPage;
