import Navbar from "../../components/menu/NavbarComponent.tsx";
import "./AboutPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";
import { useAuth } from '../../components/AuthContext';

import BackgroundMotion from "../../components/BackgroundMotion.tsx";
import { useNavigate } from "react-router";
import { useEffect } from "react";

interface AboutPageProps {

}

const AboutPage: React.FC<AboutPageProps> = () => {
    const { userId, isDoctor, isPatient, isAdmin} = useAuth();
    const id= userId ?? '';

    const navigate = useNavigate();

    useEffect(() => {
      if (id == "") {
          navigate("/");
      }
    }, [id]);

    return (
        <div className="about-page-main-container">
            <BackgroundMotion />
            <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} userId={id} />
            <div className="invisible-frame">
                <Reveal>
                    <div className="article-content">
                        <div>
                            <h1>Yapay Zeka Destekli Akciğer Görüntüleme Projemiz: Tıp Dünyasına Yenilik ve Eğitimde Devrim!</h1>
                            <p>
                                Sağlık sektörü, teknolojik gelişmelerle birlikte büyük bir dönüşüm yaşıyor. Bu değişimden biri olan yapay zeka destekli akciğer görüntüleme projemiz, hem doktorlara önemli bir yardım sağlıyor hem de tıp fakültelerinde eğitim süreçlerine çığır açıyor. Detaylı bir bakışla, projemizin nasıl bir devrim niteliğinde olduğunu inceleyelim!
                            </p>
                            <h2>Akciğer Görüntülerini Anlama Sanatı: Yapay Zekanın Gücü</h2>
                            <p>
                                Geliştirdiğimiz yapay zeka algoritması, akciğer görüntülerini değerlendirirken inanılmaz bir hassasiyetle çalışır. Her bir pikseli analiz ederek, doktorlara detaylı bilgiler sunar. Bu, sadece hızlı teşhis koymakla kalmaz, aynı zamanda hastaların tedavi süreçlerini optimize etme fırsatı sağlar.
                            </p>
                            <p>
                                Projemizin temel amacı, özellikle intern doktorlara kılavuzluk ederek onları daha tecrübeli hale getirmektir. Yapay zeka, benzer vakalardan elde edilen verilere dayanarak analiz yapar ve doktorlara, daha önce karşılaşılan durumlarla ilgili kapsamlı bilgi sunarak doğru teşhise ulaşmalarında yardımcı olur.
                            </p>
                            <h2>İntern Doktorlara Yol Gösteren Yapay Zeka</h2>
                            <p>
                                Projemiz, intern doktorlara bir rehberlik sunarak, akciğer görüntülerini değerlendirme konusundaki becerilerini artırmalarına yardımcı oluyor. Yapay zeka, hastalıkları tanımlamak, olası komplikasyonları öngörmek ve tedavi seçenekleri konusunda önerilerde bulunmak gibi bir dizi görevde doktorları destekler. Bu, intern doktorların, deneyimli meslektaşlarının bilgi birikiminden hızla öğrenmelerine olanak tanır.
                            </p>
                            <h2>Eğitimde Yeni Bir Çağ: Akciğer Görüntüleme Teknolojisi</h2>
                            <p>
                                Projemizin sadece klinik uygulamalarda değil, aynı zamanda tıp fakültelerinde de devrim yaratmayı hedeflediğini belirtmek önemlidir. Yapay zeka destekli eğitim programlarımız, öğrencilere daha önce hiç olmadığı kadar gerçekçi ve pratik deneyimler sunuyor. Öğrenciler, farklı akciğer vakalarını analiz ederek, yapay zekanın sunduğu değerli bilgilerle teorik bilgilerini pekiştirme şansına sahip olacaklar.
                            </p>
                            <p>
                                Tıp fakültelerindeki eğitim programlarımız, öğrencilerin yapay zeka teknolojileriyle tanışmalarını, bu teknolojileri doğru ve etkili bir şekilde kullanmalarını sağlar. Bu, mezun olan doktorların modern tıbbın gereksinimlerine daha iyi uyum sağlamalarına yardımcı olur.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AboutPage;
