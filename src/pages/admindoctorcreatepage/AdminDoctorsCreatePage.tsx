import "./AdminDoctorsCreatePage.scss";
import { Reveal } from "../../components/Reveal.tsx";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import Navbar from "../../components/menu/NavbarComponent.tsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sortImg from '../../assets/sortImg.png';
import penImg from '../../assets/penImg.png';
import { useAuth } from '../../components/AuthContext';


interface ListItem {
  doctorId: string;
  doctorName: string;
  doctorSurName: string;
  doctorBirthDate: Date;
  doctorDepartment: string;
  doctorHospital: string;
  doctorTitle: string;
  doctorEMail: string;
  doctorPhoneNum: string;
}

interface AdminDoctorsCreatePageProps {

}

const AdminDoctorsCreatePage: React.FC<AdminDoctorsCreatePageProps> = () => {
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

  const navigate = useNavigate();

  useEffect(() => {
    if (id == "") {
        navigate("admin/login");
    }
  }, [id]);

  const [warningId, setWarningId] = useState(false);
  const [warningName, setWarningName] = useState(false);
  const [warningSurname, setWarningSurname] = useState(false);
  const [warningBirthDate, setWarningBirthDate] = useState(false);
  const [warningDepartment, setWarningDepartment] = useState(false);
  const [warningHospital, setWarningHospital] = useState(false);
  const [warningTitle, setWarningTitle] = useState(false);
  const [warningPhone, setWarningPhone] = useState(false);
  const [warningeMail, setWarningeMail] = useState(false);


  const pushDoctor = () => {
    const phoneNumRegex = /^\+\d{2}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const titleRegex = /\bDr\.\b/g;
    const idRegex = /^\d+$/;


    if (idInput != '' && nameInput != '' && surnameInput != '' && birthDateInput != '' && departmentInput != '' && hostpitalInput != '' && titleInput != '' && phoneNumInput != '' && eMailInput != '') {
      // push doctor
    } else{
      if (idInput == '' || !idRegex.test(idInput)) {
        setWarningId(true);
      }
      if (nameInput === '') {
        setWarningName(true);
      }
      if (surnameInput === '') {
        setWarningSurname(true);
      }
      if (birthDateInput === '') {
        setWarningBirthDate(true);
      }
      if (departmentInput === '') {
        setWarningDepartment(true);
      }
      if (hostpitalInput === '') {
        setWarningHospital(true);
      }
      if (titleInput == '' || !titleRegex.test(titleInput)) {
        setWarningTitle(true);
      }
      if (phoneNumInput == '' || !phoneNumRegex.test(phoneNumInput)) {
        setWarningPhone(true);
      }
      if (eMailInput == '' || !emailRegex.test(eMailInput)) {
        setWarningeMail(true);
      }
    }
  }

  return (
    <div className="admin-doctor-create-page-main-container">
      <BackgroundMotion />
      <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={true} userId={id}></Navbar>
      <div className="content-panel">
        <Reveal>
          <div className="upper" >
            <div className='informations-header'>Genel Bilgiler</div>
            <div>
            <img src={penImg} className="pen-icon" style={{ marginLeft: '125px' }} />
              <div className='information-type'>TC Kimlik No</div>
              <input type="text" className="information-input" placeholder={'TC Kimlik No'} value={idInput} onChange={(e) => setIdInput(e.target.value)}  />
              {!warningId && <hr />}
              {warningId && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '50px' }} />
              <div className='information-type'>İsim</div>
              <input type="text" className="information-input" placeholder={'İsim'} value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
              {!warningName && <hr />}
              {warningName && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '80px' }} />
              <div className='information-type'>Soyisim</div>
              <input type="text" className="information-input" placeholder={'Soyisim'} value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} />
              {!warningSurname && <hr />}
              {warningSurname && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '130px' }} />
              <div className='information-type'>Doğum Tarihi</div>
              <input type="date" className="information-input" placeholder={'Doğum Tarihi'} onChange={(e) => setBirthDateInput(e.target.value)} value={birthDateInput}/>
              {!warningBirthDate && <hr />}
              {warningBirthDate && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '110px' }} />
              <div className='information-type'>Departman</div>
              <input type="text" className="information-input" placeholder={'Bölüm'} value={departmentInput} onChange={(e) => setDepartmentInput(e.target.value)}/>
              {!warningDepartment && <hr />}
              {warningDepartment && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '80px' }} />
              <div className='information-type'>Hastane</div>
              <input type="text" className="information-input" placeholder={'Hastane'} value={hostpitalInput} onChange={(e) => setHostpitalInput(e.target.value)}/>
              {!warningHospital && <hr />}
              {warningHospital && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '70px' }} />
              <div className='information-type'>Ünvan</div>
              <input type="text" className="information-input"placeholder={'Ünvan'} value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
              {!warningTitle && <hr />}
              {warningTitle && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '160px' }} />
              <div className='information-type'>Telefon Numarası</div>
              <input type="text" className="information-input" placeholder={'Telefon Numarası'} value={phoneNumInput} onChange={(e) => setPhoneNumInput(e.target.value)}/>
              {!warningPhone && <hr />}
              {warningPhone && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div>
              <img src={penImg} className="pen-icon" style={{ marginLeft: '135px' }} />
              <div className='information-type'>E-posta Adresi</div>
              <input type="email" className="information-input" placeholder={'E-posta Adresi'} value={eMailInput} onChange={(e) => seteMailInput(e.target.value)} />
              {!warningeMail && <hr />}
              {warningeMail && <hr style={{ border: '1px solid #DC5353', boxShadow: '0px 3px 6px #DC5353' }} />}
            </div>
            <div className='elements-buttons'>
              <div className='information-button' style={{ width: '160px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px', backgroundColor: '#B1E572'}} onClick={pushDoctor}>Doktoru Oluştur</div>
              <Link className='information-button' to="/admin/doctors" style={{ width: '130px', marginBlockStart: '20px', marginRight: '20px' }}>Geri Dön</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AdminDoctorsCreatePage;
