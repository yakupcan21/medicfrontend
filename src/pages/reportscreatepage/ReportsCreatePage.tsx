import React, { useRef, useState } from "react";
import './ReportsCreatePage.scss';
import Navbar from "../../components/menu/NavbarComponent.tsx";
import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import axios from "axios";
import { Link } from 'react-router-dom';

interface ListItem {
    date: Date;
    reportId: string;
    doctorName: string;
    patientId: string;
    patientName: string;
    reportText: string;
}

interface ReportsCreatePageProps {
    data: ListItem[];
}

import uploadImg from '../../assets/uploadImg.png'
import plug1Img from '../../assets/plug1.png';
import plug2Img from '../../assets/plug2.png';
import plug3Img from '../../assets/plug3.png';
import plug4Img from '../../assets/plug4.png';
import { Reveal } from "../../components/Reveal.tsx";

const ReportsCreatePage: React.FC<ReportsCreatePageProps> = () => {
    const [isReportMenu, setIsReportMenu] = useState(false);
    const [indexOfActivePicture, setIndexOfActivePicture] = useState(0);
    const [activePicture, setActivePicture] = useState<string>(plug1Img);
    const pictures = [plug1Img, plug2Img, plug3Img, plug4Img];
    const [selectedDate, setSelectedDate] = useState('');
    const [inputPatientId, setInputPatientId] = useState('');
    const [inputPatientName, setInputPatientName] = useState('');
    const [inputPatientSurName, setInputPatientSurName] = useState('');

    const data: ListItem[] = [
        { date: new Date('2023-01-01'), reportId: '987654321', doctorName: 'Prof. Dr. Buğra Burak Başer', patientId: '25*******58', patientName: 'Ahmer Ergül', reportText: 'Buraya Rapor Metni Gelecek' },
    ];

    const changeActivePicture = (index: number) => {
        setActivePicture(pictures[index]);
        setIndexOfActivePicture(index);
    };

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            // Dosya yükleme işlemleri burada gerçekleştirilebilir.
            // Örneğin, Axios kullanarak bir API'ye dosyaları gönderebilirsiniz.
        }
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };
    const today = new Date().toISOString().split("T")[0];

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Europe/Istanbul',
    };
    const turkishDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul' };

    const toggleReportMenu = () => {
        setIsReportMenu(!isReportMenu);
    };
    return (
        <div className='reports-create-page-main-container'>
            <Navbar isDoctor={true} isPatient={false} isAdmin={false} />
            <BackgroundMotion />
            <div className="content-panel">
                <Reveal>
                    <div className="displayed-container">
                        <div className='upper-bar-container'>
                            <div className='information-heading' style={{ boxShadow: 'none' }}>Rapor Oluşturma ve Yapay Zeka Destek Sayfası</div>
                        </div>
                        {!isReportMenu &&
                            <div className='elements-container'>
                                <div className='report-display'>
                                    <div className='report-picture-container'>
                                        <form style={{ zIndex: '10', display: 'flex' }}>
                                            <input
                                                type="file"
                                                className='information-input'
                                                id='file-input-control'
                                                style={{ display: "flex" }}
                                                multiple
                                                name='files'
                                                accept='image/*'
                                                hidden
                                                onChange={handleFileUpload}
                                            />
                                            <div className='information-update-button' style={{ width: '150px', marginBottom: '10px', position: 'relative', color: 'black', cursor: 'pointer' }}>
                                                Dosyaları Yükle
                                            </div>
                                        </form>
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
                                    <div className="information-create" >
                                        <div className='informations-header' style={{ marginTop: '30px' }}>Hasta Bilgileri</div>
                                        <div className='information-create-inputs'>
                                            <div className='information-type' style={{ marginTop: '0px' }}>Hasta TC Kimlik Numarası</div>
                                            <input type="text" className='information-input' placeholder="TC Kimlik Numarası:" required />
                                            <hr />
                                            <div className='information-type'>Hasta Adı Soyadı</div>
                                            <div className="dubbled-container">
                                                <input type="text" className='information-input' placeholder="Ad:" required />
                                                <input type="text" className='information-input' placeholder="Soyad:" required />
                                            </div>
                                            <div className="dubbled-container">
                                                <hr style={{ width: '100%', marginRight: '5px' }} />
                                                <hr style={{ width: '100%', marginLeft: '5px' }} />
                                            </div>
                                            <div className='information-type'>Rapor Tarihi</div>
                                            <input className='information-input' type="date" value={selectedDate} onChange={handleDateChange} max={today} required />                                    <hr />
                                        </div>
                                        <div className="information-button" style={{ width: '150px', marginTop: '20px' }} onClick={toggleReportMenu}>Raporlamaya Geç</div>
                                    </div>
                                </div>
                                <div className='elements-buttons'>
                                    <Link to="/reports" className='information-button' style={{ width: '130px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px' }}>Geri Dön</Link>
                                </div>
                            </div>
                        }
                        {isReportMenu &&
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
                                        <input className="information-input" style={{ backgroundColor: "inherit!important", height: '100%' }}></input>
                                    </div>
                                </div>
                                <div className='elements-buttons'>
                                    <div className='information-button' style={{ width: '130px', marginLeft: 'auto', marginBlockStart: '20px', marginRight: '20px' }} onClick={toggleReportMenu}>Geri Dön</div>
                                </div>
                            </div>
                        }
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default ReportsCreatePage;
