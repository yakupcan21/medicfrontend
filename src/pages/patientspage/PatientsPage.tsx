import React, { useState } from 'react';
import './PatientsPage.scss';
import Navbar from '../../components/menu/NavbarComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';
import sortImg from '../../assets/sortImg.png';
import { Link } from 'react-router-dom';

interface ListItem {
  patientName: string;
  patientId: string;
  lastVisit: Date;
  reportNum: number;
}

interface PatientsPageProps {
  map(arg0: (item: any, index: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  data: ListItem[];
  isDoctor: boolean;
  isPatient: boolean;
}



const PatientsPage: React.FC<PatientsPageProps> = () => {
  const isDoctor = true;
  const isPatient = false;
  const [visibleItems, setVisibleItems] = useState(10);


  const data: ListItem[] = [
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },
    { patientName: 'Buğra Burak Başer', patientId: '25*******58', lastVisit: new Date('2023-01-01'), reportNum: 5 },




    // Add more items as needed
  ];

  const turkishDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul' };


  const loadMoreItems = () => {
    // Increase the number of visible items by 10
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };



  return (
    <div className='report-page-main-container'>
      <Navbar isDoctor={true} isPatient={false} />
      <BackgroundMotion />
      <div className="content-panel">
        <Reveal children={undefined}>
          <div className="displayed-container">
            <div className='upper-bar-container'>
              <div className='information-heading' style={{ flex: '2', minWidth: '100px', }}>Hasta İsmi <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Hasta TC No <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Son Ziyaret Tarihi <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Rapor Sayısı <img src={sortImg} className="sort-icon"></img></div>
              <div className='information-heading' style={{ flex: '1', minWidth: '100px', boxShadow: 'none' }}></div>
            </div>
            <div className='elements-container'>
              {data.slice(0, visibleItems).map((item, index) => (
                <div key={index}>
                  <div className='information-rows'>
                    <div className='information-items' style={{ flex: '2', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.patientName}</div>
                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patientId}</div>
                    <div className='information-items' style={{ flex: '2', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.lastVisit.toLocaleString('tr-TR', turkishDateOptions)}</div>
                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patientId}</div>
                    <div className='information-items' style={{ flex: '1', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>
                      <Link to="/reports" className='information-button' style={{ width: '100%' }}>Görüntüle</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='elements-buttons'>
              <div className='information-button' style={{ width: '200px', marginBlockStart: '20px'  }} onClick={loadMoreItems}>Daha Fazla Sonuç Göster</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PatientsPage;
