import React, { useEffect, useState } from 'react';
import './ReportPage.scss';
import Navbar from '../../components/menu/NavbarComponent';
import BackgroundMotion from '../../components/BackgroundMotion';
import { Reveal } from '../../components/Reveal';
import sortImg from '../../assets/sortImg.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';
import { useReport } from '../../components/reportContext';

interface Patient {
    patientId: number;
    patientName: string;
    patientSurname: string;
    patientDateOfBirth: string;
    patientPhoneNo: string;
}

interface ListItem {
    rapDate: string;
    rapNum: number;
    doctorName: string;
    patient: Patient;
}

interface ReportPageProps {

}

const ReportPage: React.FC<ReportPageProps> = () => {
    const { userId, isDoctor, isPatient, isAdmin} = useAuth();
    const id= userId ?? '';

    const navigate = useNavigate();

    useEffect(() => {
      if (id == "") {
          navigate("/");
      }
    }, [id]);

    const [visibleItems, setVisibleItems] = useState(10);
    const [data, setData] = useState<ListItem[] | null>();

    const { sendId } = useReport();
    const patientIdInput= sendId  ?? '';
    useEffect(() => {
        console.log("selam")
        console.log(patientIdInput)
        let apiUrl = 'http://localhost:8081/reports/seeAllReports';
        if(isPatient){
            apiUrl = `http://localhost:8081/reports/reportsByPatient/${id}`;
        }
        if (patientIdInput != '') {
            apiUrl = `http://localhost:8081/reports/reportsByPatient/${patientIdInput}`;
        }

        axios.get(apiUrl).then((response) => {
            setData(response.data);
            console.log(response.data);
        });

    }, [patientIdInput]);



    const loadMoreItems = () => {
        // Increase the number of visible items by 10
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    };



    return (
        <div className='report-page-main-container'>
            <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} userId={id} />
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
                            {data ? data.slice(0, visibleItems).map((item, index) => (
                                <div key={index}>
                                    <div className='information-rows'>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.rapDate}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.rapNum}</div>
                                        <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.doctorName}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.patient.patientId}</div>
                                        <div className='information-items' style={{ flex: '1', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>
                                            <Link to={isDoctor === true ? `/doctor/reports/${item.rapNum}` : `/patient/reports/${item.rapNum}`} className='information-button' style={{ width: '100%' }}>Görüntüle</Link>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
                        </div>
                        <div className='elements-buttons'>
                            {!isDoctor && <>
                                <div className='information-button' style={{ width: '200px', marginBlockStart: '20px' }} onClick={loadMoreItems}>Daha Fazla Sonuç Göster</div>
                            </>
                            }
                            {isDoctor && <>
                                <div className='information-button' style={{ width: '200px', marginLeft: '37%', marginBlockStart: '20px' }} onClick={loadMoreItems}>Daha Fazla Sonuç Göster</div>
                                <Link to={isDoctor === true ? "/doctor/reports/create" : ""} className='information-button' style={{ width: '130px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px' }}>Rapor Oluştur</Link>
                            </>
                            }
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>

    );
};

export default ReportPage;
