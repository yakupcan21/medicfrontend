import React, { useEffect, useState } from 'react';
import './PatientsPage.scss';
import Navbar from '../../components/menu/NavbarComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';
import sortImg from '../../assets/sortImg.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ListItem {
  patientName: string;
  patientSurname: string;
  patientId: string;
  reportLastVisit: string;
  reportCount: number;
}

interface PatientsPageProps {
  isDoctor: boolean;
  isPatient: boolean;
  isAdmin: boolean;
}

const PatientsPage: React.FC<PatientsPageProps> = (props) => {
  const { isDoctor, isPatient, isAdmin } = props;
  const [visibleItems, setVisibleItems] = useState(10);
  const [data, setData] = useState<ListItem[] | null>();

  useEffect(() => {
    axios.get('http://localhost:8081/patients/seeAllPatients').then((response) => {
      setData(response.data)
      console.log(response.data);
    });
    updatePatientReports();
  }, [])

  const turkishDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul' };


  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const updatePatientReports = () => {
    axios.put('http://localhost:8081/patients/updatePatientReports', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  
  return (
    <div className='patients-page-main-container'>
      <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} />
      <BackgroundMotion />
      <div className="content-panel">
        <Reveal>
          <div className="displayed-container">
            <div className='upper-bar-container'>
              <div className='information-heading' style={{ flex: '2', minWidth: '100px', }}>Hasta İsmi <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Hasta TC No <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Son Ziyaret Tarihi <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Rapor Sayısı <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '1', minWidth: '100px', boxShadow: 'none' }}></div>
            </div>
            <div className='elements-container'>
              {data ? data.slice(0, visibleItems).map((item, index) => (
                <div key={index}>
                  <div className='information-rows'>
                    <div className='information-items' style={{ flex: '2', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.patientName} {item.patientSurname}</div>
                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patientId}</div>
                    <div className='information-items' style={{ flex: '2', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.reportLastVisit}</div>
                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.reportCount}</div>
                    <div className='information-items' style={{ flex: '1', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>
                      <Link to={isDoctor === true ? '/doctor/reports' : ''} className='information-button' style={{ width: '100%' }}>Görüntüle</Link>
                    </div>
                  </div>
                </div>
              )) : null}
            </div>
            <div className='elements-buttons'>
              <div className='information-button' style={{ width: '200px', marginBlockStart: '20px' }} onClick={loadMoreItems}>Daha Fazla Sonuç Göster</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PatientsPage;
