import Navbar from "../../components/menu/NavbarComponent.tsx";
import "./HomePage.scss";
import { Reveal } from "../../components/Reveal.tsx";
import "../../components/BackgroundMotion.scss";
import Profile from "../../components/ProfileComponent.tsx";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";

interface AboutPageProps {
    isDoctor: boolean;
    isPatient: boolean;
    isAdmin: boolean;
}

const AboutPage: React.FC<AboutPageProps> = (props) => {
    const { isDoctor, isPatient, isAdmin } = props;
    return (
        <div className="home-page-main-container">
            <Reveal>
                <div className="profile-component-home-page-position">
                    <Profile isDoctor={isDoctor} isPatient={isPatient} />
                </div>
            </Reveal>
            <BackgroundMotion />
            <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} />

            <div className="invisible-frame">
                <Reveal>
                    <div className="article-content" v-if="shouldShowArticle">
                        <div>
                            <h1>Akciğer Sağlığı ve Bakımı: Önemli Bilgiler ve İpuçları</h1>
                            <p>
                                Akciğerler, solunum sistemimizin kilit parçalarından biridir ve sağlıklı bir yaşam için önemli bir rol oynarlar. Bu önemli
                                organların doğru bakımı ve korunması, genel sağlığımızı etkileyen kritik bir unsurdur. İşte akciğer sağlığınızı korumanın ve
                                bakımının anahtar noktaları:
                            </p>
                            <h2>Akciğer Sağlığınızı Korumanın Yolları</h2>
                            <p>
                                <strong>1. Temiz Hava:</strong> Akciğer sağlığı için temiz hava solumak çok önemlidir. Dışarıda zaman geçirmek, doğal ve
                                temiz havayı soluyarak akciğerlerinizi temizler. İç mekanlarda da havanın kalitesine dikkat etmek, tütün dumanı ve diğer
                                kirleticilerden kaçınmak akciğerlerinizi korur.
                            </p>
                            <p>
                                <strong>2. Düzenli Egzersiz:</strong> Fiziksel aktivite, akciğer fonksiyonlarını artırabilir. Düzenli yürüyüş, koşu,
                                yüzme veya egzersiz programları, akciğer sağlığını destekler. Solunum yollarını güçlendirerek akciğer kapasitesini
                                artırmak için egzersiz yapmak önemlidir.
                            </p>
                            <p>
                                <strong>3. Sigara İçmemek:</strong> Sigara içmek, akciğer sağlığını ciddi şekilde tehdit eder. Sigara içenlerde
                                akciğer kanseri, KOAH ve diğer solunum problemleri riski önemli ölçüde artar. Eğer sigara içiyorsanız, bir an önce
                                bırakmak, akciğer sağlığınızı korumanın en etkili yollarından biridir.
                            </p>
                            <h2>Akciğer İle İlgili Hastalıklar</h2>
                            <p>
                                Akciğerler, çeşitli hastalıklara karşı hassas olabilir. Bu hastalıklar arasında yer alan astım,
                                KOAH (Kronik Obstrüktif Akciğer Hastalığı), zatürre gibi durumlar, akciğer sağlığını olumsuz etkileyebilir.
                                Belirtileri fark ettiğinizde, bir sağlık profesyoneli ile görüşmek önemlidir. Erken teşhis ve tedavi, bu tür
                                hastalıkların etkilerini azaltmada önemli bir rol oynar.
                            </p>
                            <p>
                                Akciğer sağlığına verilen önem, genel sağlığımızın temelini oluşturur. Yukarıdaki önlemleri alarak ve düzenli
                                sağlık kontrolleri yaptırarak, uzun vadeli akciğer sağlığınızı koruyabilir ve yaşam kalitenizi artırabilirsiniz.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AboutPage;
