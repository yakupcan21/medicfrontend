// DoctorView.tsx

import React, { useState } from 'react';
import './ReportsViewPage.scss';
import Navbar from "../../components/menu/NavbarComponent.tsx";
import BackgroundMotion from "../../components/BackgroundMotion.tsx";


interface ListItem {
    date: Date;
    reportId: string;
    doctorName: string;
    patientId: string;
    patientName: string;
    reportText: string;
}


interface ReportsViewPageProps {
    isDoctor: boolean;
    isPatient: boolean;
    isAdmin: boolean;
}

import resimImg from '../../assets/resim.png'
import personImg from '../../assets/person.png';
import plug1Img from '../../assets/plug1.png';
import plug2Img from '../../assets/plug2.png';
import plug3Img from '../../assets/plug3.png';
import plug4Img from '../../assets/plug4.png';
import sortImg from '../../assets/sortImg.png';
import { Link } from 'react-router-dom';
import { Reveal } from '../../components/Reveal.tsx';

const ReportsViewPage: React.FC<ReportsViewPageProps> = (props) => {
    const { isDoctor, isPatient, isAdmin } = props;

    const [indexOfActivePicture, setIndexOfActivePicture] = useState(0);
    const [activePicture, setActivePicture] = useState<string>(plug1Img);
    const pictures = [plug1Img, plug2Img, plug3Img, plug4Img];

    const data: ListItem[] = [
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58', patientName: 'Ahmer Ergül', reportText: 'Buraya Rapor Metni Gelecek' },
    ];
    const turkishDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul' };

    const changeActivePicture = (index: number) => {
        setActivePicture(pictures[index]);
        setIndexOfActivePicture(index);
    };
    return (
        <div className='reports-view-page-main-container'>
            <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} />
            <BackgroundMotion />
            <div className="content-panel">
                <Reveal>
                    <div className="displayed-container">
                        <div className='upper-bar-container'>
                            <div className='information-heading' style={{ flex: '1', minWidth: '50px', }}>Tarih <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Rapor No <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Doktor İsmi <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Hasta TC No <img src={sortImg} className="sort-icon"></img></div>
                            <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Hasta İsmi <img src={sortImg} className="sort-icon"></img></div>
                        </div>
                        <div className='elements-container'>
                            {data.slice(0, 1).map((item, index) => (
                                <div key={index}>
                                    <div className='information-rows'>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.date.toLocaleString('tr-TR', turkishDateOptions)}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.reportId}</div>
                                        <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.doctorName}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patientId}</div>
                                        <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.patientName}</div>

                                    </div>
                                </div>
                            ))}
                            <div className='report-display'>
                                <div className='report-picture-container'>
                                    <div className="report-picture">
                                        <img src={activePicture} alt="Active Picture" />
                                        <div className="report-pictures">
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

                                </div>
                                <div className='report-text-container'>
                                    {data.slice(0, 1).map((item, index) => (
                                        <div key={index}>
                                            <div>{item.reportText}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='elements-buttons'>
                                <Link to={isDoctor === true ? "/doctor/reports" : "/patient/reports"} className='information-button' style={{ width: '130px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px' }}>Geri Dön</Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default ReportsViewPage;