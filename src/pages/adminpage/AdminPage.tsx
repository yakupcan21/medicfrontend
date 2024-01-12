import "./AdminPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import Navbar from "../../components/menu/NavbarComponent.tsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sortImg from '../../assets/sortImg.png';
import axios from "axios";
import { useAuth } from '../../components/AuthContext';
import { useNavigate } from "react-router-dom";

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
  

interface AdminPageProps {
}

const AdminPage: React.FC<AdminPageProps> = () => {
    const [visibleItems, setVisibleItems] = useState(10);
    const navigate = useNavigate();

    const { userId, isDoctor, isPatient, isAdmin} = useAuth();
    const id = userId ?? '';
    

    useEffect(() => {
        if (id == "") {
            navigate("admin/login");
        }
      }, [id]);

    const [data, setData] = useState<ListItem[] | null>();

    useEffect(() => {
      axios.get('http://localhost:8081/admin/seeAllDoctors').then((response) => {
        setData(response.data)
        console.log(response.data);
      });
    }, [])



    const turkishDateOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'Europe/Istanbul' };


    const loadMoreItems = () => {
        // Increase the number of visible items by 10
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    };


    return (
        <div className="admin-page-main-container">
            <BackgroundMotion />
            <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={true} userId={id}></Navbar>
            <div className="content-panel">
            <Reveal>
                <div className="displayed-container">
                    <div className='upper-bar-container'>
                        <div className='information-heading' style={{ flex: '2', minWidth: '100px', }}>Doktor İsmi <img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '1', minWidth: '50px' }}>Doktor TC No <img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Bölüm<img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '2', minWidth: '100px' }}>Hastane <img src={sortImg} className="sort-icon"></img></div>
                        <div className='information-heading' style={{ flex: '1', minWidth: '100px', boxShadow: 'none' }}></div>
                    </div>
                    <div className='elements-container'>
                        {data && data.slice(0, visibleItems).map((item, index) => (
                            <div key={index}>
                                <div className='information-rows'>
                                    <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.docTitle} {item.docName} {item.docSurname}</div>
                                    <div className='information-items' style={{ flex: '1', minWidth: '50px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.docId}</div>
                                    <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>{item.docDepartment}</div>
                                    <div className='information-items' style={{ flex: '2', minWidth: '100px', backgroundColor: index % 2 === 0 ? '' : '#dfe5ec' }}>{item.docHospital}</div>
                                    <div className='information-items' style={{ flex: '1', minWidth: '100px', backgroundColor: index % 2 === 0 ? '#dfe5ec' : '' }}>
                                        <Link to={`/admin/doctors/${item.docId}`} className='information-button' style={{ width: '100%' }}>Görüntüle</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='elements-buttons'>
                        <div className='information-button' style={{ width: '200px', marginLeft:'38%', marginBlockStart: '20px' }} onClick={loadMoreItems}>Daha Fazla Sonuç Göster</div>
                        <Link className='information-button' to="/admin/doctors/create" style={{ width: '160px', marginLeft:'auto', marginBlockStart: '20px', marginRight: '20px' }}>Yeni Kayıt Oluştur</Link>
                    </div>
                </div>
            </Reveal>
            </div>
        </div>
    );
};

export default AdminPage;
