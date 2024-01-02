import Navbar from "../../components/menu/NavbarComponent.tsx";
import "./AboutPage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";

function AboutPage() {
    return (
        <div className="about-page-main-container">
            <BackgroundMotion />
            <Navbar isDoctor={true} isPatient={false} />
            <div className="invisible-frame">
                <Reveal>
                    <div className="article-content">
                        <div>
                            <h1>Akciğer Sağlığı ve Bakımı</h1>
                            <p>
                                Akciğerler, solunum sistemimizin önemli bir parçasıdır. Bu hayati organlar, vücudumuza oksijen alımını sağlar
                                ve karbon dioksit gibi atık maddelerin dışarı atılmasına yardımcı olur. Akciğer sağlığına dikkat etmek, genel
                                sağlığımızı korumak için kritik bir öneme sahiptir.
                            </p>
                            <h2>Akciğer Sağlığınızı Korumanın Yolları</h2>
                            <p>
                                <strong>1. Temiz Hava:</strong> Temiz hava solumak, akciğer sağlığı için önemlidir. Dışarıda zaman geçirmek ve
                                kirli iç hava ortamlarından kaçınmak akciğerlerinizi korur.
                            </p>
                            <p>
                                <strong>2. Düzenli Egzersiz:</strong> Egzersiz yapmak, akciğer fonksiyonlarını artırabilir. Düzenli yürüyüş,
                                koşu veya egzersiz programları, akciğer sağlığını destekler.
                            </p>
                            <p>
                                <strong>3. Sigara İçmemek:</strong> Sigara içmek, akciğer hastalıklarına yol açabilir. Sigara içiyorsanız, bir
                                an önce bırakmak sağlığınız için önemlidir.
                            </p>
                            <h2>Akciğer İle İlgili Hastalıklar</h2>
                            <p>
                                Akciğerler, bir dizi hastalığa duyarlıdır. Astım, KOAH ve zatürre gibi durumlar akciğer sağlığını olumsuz
                                etkileyebilir. Belirtileri fark ettiğinizde bir sağlık profesyoneli ile görüşmek önemlidir.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default AboutPage;
