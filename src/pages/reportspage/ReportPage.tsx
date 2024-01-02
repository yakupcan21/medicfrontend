import React, { useState } from 'react';
import './ReportPage.scss';
import Navbar from '../../components/menu/NavbarComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';
import sortImg from '../../assets/sortImg.png';
import { Link } from 'react-router-dom';

interface ListItem {
    date: Date;
    reportId: string;
    doctorName: string;
    patientId: string;
}

interface ReportPageProps {
    map(arg0: (item: any, index: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
    data: ListItem[];
    isDoctor: boolean;
    isPatient: boolean;
}



const ReportPage: React.FC<ReportPageProps> = () => {
    const isDoctor = true;
    const isPatient = false;
    const [visibleItems, setVisibleItems] = useState(10);


    const data: ListItem[] = [
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58' },       

        // Add more items as needed
    ];
    const turkishDateOptions = {year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul'};


    const loadMoreItems = () => {
        // Increase the number of visible items by 10
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    };



    return (
        <div className='report-page-main-container'>
            <Navbar isDoctor={true} isPatient={false} />
            <BackgroundMotion />
            <div className="content-panel">
                <Reveal>
                    <div className="displayed-container">
                        <div className='upper-bar-container'>
                            <div className='information-heading' style={{ flex: '1', minWidth: '50px', }}>Tarih <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Rapor No <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Doktor İsmi <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Hasta TC No <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '1', minWidth: '100px', boxShadow: 'none' }}></div>
                        </div>
                        <div className='elements-container'>
                            {data.slice(0, visibleItems).map((item, index) => (
                                <div key={index}>
                                    <div className='information-rows'>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.date.toLocaleString('tr-TR', turkishDateOptions)}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.reportId}</div>
                                        <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.doctorName}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patientId}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '110px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>
                                            <Link to="/reportId" className='information-button' style={{ width: '100%' }}>Görüntüle</Link>                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='elements-buttons'>
                            <div className='information-button' style={{ width: '200px', marginLeft: '37%', marginBlockStart: '20px' }} onClick={loadMoreItems}>Daha Fazla Sonuç Göster</div>
                            {isDoctor && <Link to="/doctorview" className='information-button' style={{ width: '130px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px' }}>Rapor Oluştur</Link>  
                            }
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default ReportPage;
