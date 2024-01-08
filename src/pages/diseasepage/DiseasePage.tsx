import Navbar from "../../components/menu/NavbarComponent.tsx";
import "./DiseasePage.scss";
import { Reveal } from "../../components/Reveal";
import "../../components/BackgroundMotion.scss";

import BackgroundMotion from "../../components/BackgroundMotion.tsx";

interface DiseasePageProps {
    isDoctor: boolean;
    isPatient: boolean;
    isAdmin: boolean;
}

const DiseasePage: React.FC<DiseasePageProps> = (props) => {
    const { isDoctor, isPatient, isAdmin } = props;

    return (
        <div className="disease-page-main-container">
            <BackgroundMotion />
            <Navbar isDoctor={isDoctor} isPatient={isPatient} isAdmin={isAdmin} />
            <div className="invisible-frame">
                <Reveal>
                    <div className="article-content">
                        <div>
                            <h1>Akciğer Sağlığı: Hastalıklar, Korunma Yolları ve Sağlıklı Yaşam Rehberi</h1>

                            <p>
                                Akciğerler, solunum sistemimizin temel organlarıdır ve sağlıklı bir yaşam sürdürebilmemiz için kritik bir rol oynarlar. Ancak, çeşitli faktörler nedeniyle akciğer hastalıkları ortaya çıkabilir. Bu makalede, olası akciğer hastalıklarıyla birlikte korunma yollarını keşfedecek ve sağlıklı bir akciğer fonksiyonu için alınabilecek önlemleri inceleyeceğiz.
                            </p>

                            <h2>Akciğer Hastalıkları: Bir Genel Bakış</h2>

                            <p>
                                <strong>1. Astım:</strong> Astım, solunum yollarının iltihaplanması sonucu ortaya çıkan bir hastalıktır. Akciğer hava yollarının daralmasıyla karakterizedir, bu da nefes almada zorluğa neden olabilir. Astım atakları, tetikleyicilere maruz kaldığında ortaya çıkar.
                            </p>

                            <p>
                                <strong>2. Kronik Obstrüktif Akciğer Hastalığı (KOAH):</strong> Sigara içimi, hava kirliliği ve diğer solunum irritanları, KOAH'a neden olan faktörler arasında yer alır. Bu hastalık, akciğer hava yollarının daralması ve zarar görmesi sonucu solunum güçlüğüne yol açar.
                            </p>

                            <p>
                                <strong>3. Zatürre:</strong> Bakteri, virüs veya mantar enfeksiyonlarına bağlı olarak akciğerlerin iltihaplanması sonucu ortaya çıkan zatürre, solunum sıkıntısı, öksürük ve ateş gibi belirtilerle kendini gösterir.
                            </p>

                            <p>
                                <strong>4. Akciğer Kanseri:</strong> En ölümcül akciğer hastalıklarından biri olan akciğer kanseri, genellikle sigara içimi ile ilişkilidir. Erken teşhis, bu hastalığın tedavi şansını artırabilir.
                            </p>

                            <h2>Korunma Yolları</h2>

                            <p>
                                <strong>1. Sigara İçmemek:</strong> Sigara içmek, birçok akciğer hastalığına neden olan en önemli faktördür. Sigara içenlerin mümkünse bir an önce bırakmaları, akciğer sağlığı açısından kritik bir adımdır.
                            </p>

                            <p>
                                <strong>2. Temiz Hava:</strong> Temiz hava solumak, akciğer sağlığı için önemlidir. Hava kirliliğinden kaçının, iç mekanlarda iyi havalandırma sağlayın ve doğal ortamlarda zaman geçirin.
                            </p>

                            <p>
                                <strong>3. Düzenli Egzersiz:</strong> Egzersiz yapmak, akciğer fonksiyonlarını artırabilir. Aerobik egzersizler, akciğer kapasitesini artırarak solunum sistemini güçlendirir.
                            </p>

                            <p>
                                <strong>4. Sağlıklı Beslenme:</strong> Vitamin ve mineral açısından zengin bir beslenme, genel sağlığınızı destekler ve bağışıklık sistemini güçlendirir. Bu da akciğer sağlığını olumlu yönde etkiler.
                            </p>

                            <p>
                                <strong>5. Düzenli Kontroller:</strong> Sağlık profesyonelleriyle düzenli kontroller yapmak, potansiyel sorunları erken teşhis etmek açısından önemlidir. Akciğer fonksiyon testleri ve görüntüleme yöntemleri, sağlıklı akciğerleri sürdürmek için kullanışlı araçlardır.
                            </p>

                            <h2>Sağlıklı Yaşam Rehberi</h2>

                            <p>
                                Sağlıklı bir yaşam sürmek, akciğer sağlığınızı korumanın yanı sıra genel sağlığınızı da olumlu yönde etkiler. Düzenli egzersiz, dengeli beslenme, stresten uzak durma ve düzenli uyku, sağlıklı bir yaşam tarzının temel taşlarıdır. Ayrıca, su tüketimi ve düzenli doktor kontrolleriyle de vücudunuzu desteklemeyi ihmal etmeyin.
                            </p>

                            <p>
                                Unutmayın, sağlıklı akciğerler, enerjik ve aktif bir yaşamın anahtarıdır. Yukarıda belirtilen korunma yollarını takip ederek ve sağlıklı yaşam rehberine uyarak, akciğer sağlığınızı güçlendirebilir ve hayat kalitenizi artırabilirsiniz.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default DiseasePage;
