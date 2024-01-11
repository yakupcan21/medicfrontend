// DoctorView.tsx

import React, { useEffect, useState } from 'react';
import './ReportsViewPage.scss';
import Navbar from "../../components/menu/NavbarComponent.tsx";
import BackgroundMotion from "../../components/BackgroundMotion.tsx";


interface Patient {
    patientId: number;
    patientName: string;
    patientSurname: string;
    patientDateOfBirth: string;
    patientPhoneNo: string;
}

interface Report {
    findings: string;
}

interface ListItem {
    rapDate: string;
    rapNum: number;
    doctorName: string;
    patient: Patient;
}


interface ReportsViewPageProps {
    isDoctor: boolean;
    isPatient: boolean;
    isAdmin: boolean;
}


import plug1Img from '../../assets/plug1.png';
import plug2Img from '../../assets/plug2.png';
import plug3Img from '../../assets/plug3.png';
import plug4Img from '../../assets/plug4.png';
import sortImg from '../../assets/sortImg.png';
import { Link } from 'react-router-dom';
import { Reveal } from '../../components/Reveal.tsx';
import axios from 'axios';

const ReportsViewPage: React.FC<ReportsViewPageProps> = (props) => {
    const { isDoctor, isPatient, isAdmin } = props;
    const PatientIdInput = 258754948;
    const [indexOfActivePicture, setIndexOfActivePicture] = useState(0);
    const [activePicture, setActivePicture] = useState<string>(plug1Img);
    const pictures = [plug1Img, plug2Img, plug3Img, plug4Img];
    const [data, setData] = useState<ListItem[] | null>();
    const [report, setReport] = useState<Report[] | null>();

    useEffect(() => {
        axios.get(`http://localhost:8081/reports/reportsByPatient/${PatientIdInput}`).then((response) => {
            setData(response.data)
            console.log(response.data);
        });

    }, [])

useEffect(() => {
    if (data && data.length > 0) {
        axios.get(`http://localhost:8081/createReport/createReportsByRapNum/${data[0].rapNum}`).then((response) => {
            setReport(response.data)
            console.log(response.data);
        });
    }
}, [data])

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
                            {data && data.slice(0, 1).map((item, index) => (
                                <div key={index}>
                                    <div className='information-rows'>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.rapDate}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.rapNum}</div>
                                        <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.doctorName}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patient.patientId}</div>
                                        <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.patient.patientName} {item.patient.patientSurname}</div>

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
                                    {report && report.slice(0, 1).map((item, index) => (
                                        <div key={index}>
                                            <div></div>
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