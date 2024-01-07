import "./AdminPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import Navbar from "../../components/menu/NavbarComponent.tsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import sortImg from '../../assets/sortImg.png';

interface ListItem {
    doctorTitle: string;
    doctorName: string;
    doctorId: string;
    doctorDepartment: string;
    doctorHospital: string;
    doctorUserId: string;
}

interface AdminPageProps {
}

const AdminPage: React.FC<AdminPageProps> = () => {
    const [visibleItems, setVisibleItems] = useState(10);

    const data: ListItem[] = [
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},
        {doctorTitle: 'Prof. Dr.', doctorName: 'Buğra Burak Başer', doctorId: '25*******58', doctorDepartment: 'Göğüs Hastalıkları', doctorHospital: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi', doctorUserId: '987654321'},


        // Add more items as needed
    ];



    const turkishDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul' };


    const loadMoreItems = () => {
        // Increase the number of visible items by 10
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    };


    return (
        <div className="admin-page-main-container">
            <BackgroundMotion />
            <Navbar isDoctor={false} isPatient={false} isAdmin={true}></Navbar>
            <div className="content-panel">
            <Reveal>
                <div className="displayed-container">
                    <div className='upper-bar-container'>
                        <div className='information-heading' style={{ flex: '2', minWidth: '100px', }}>Doktor İsmi <img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Doktor TC No <img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Bölüm<img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Hastane <img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '1', minWidth: '100px', boxShadow: 'none' }}></div>
                    </div>
                    <div className='elements-container'>
                        {data.slice(0, visibleItems).map((item, index) => (
                            <div key={index}>
                                <div className='information-rows'>
                                    <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.doctorTitle} {item.doctorName}</div>
                                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.doctorId}</div>
                                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.doctorDepartment}</div>
                                    <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.doctorHospital}</div>
                                    <div className='information-items' style={{ flex: '1', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>
                                        <Link to={`/admin/doctors/${item.doctorUserId}`} className='information-button' style={{ width: '100%' }}>Görüntüle</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
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

export default AdminPage;
