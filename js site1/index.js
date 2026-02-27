function togglesidebar() {
    const sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle("active")
}

function toggledropdown() {
    const dropdown = document.getElementById("dropdown")
    dropdown.classList.toggle("active")
}

const ad = [
    "Telefon", "Noutbuk", "Planşet", "Televizor", "Qulaqlıq",
    "Smart Saat", "Kamera", "Printer", "Monitor", "Klaviatura",
    "Mouse", "Powerbank", "Router", "Modem", "Kondisioner",
    "Soyuducu", "Paltaryuyan", "Qabyuyan", "Mikrodalğa", "Soba",
    "Ventilyator", "Tozsoran", "Fen", "Ütü", "Blender",
    "Mikser", "Şirəçəkən", "Qəhvə Aparatı", "Çaydan", "Termos",
    "Lampa", "Proyektor", "Dinamik", "Mikrofon", "Gamepad",
    "PlayStation", "Xbox", "VR Eynək", "Drone", "GPS",
    "Avto Kamera", "Sensor", "Ağıllı Ev", "Şəbəkə Kabeli",
    "USB Flash", "Xarici Disk", "SSD", "RAM", "Ana Plata"
];

const desc = [
    "Android smartfon", "İş üçün noutbuk", "Təhsil üçün planşet", "4K smart TV", "Bluetooth qulaqlıq",
    "Fitness saatı", "Foto kamera", "Rəngli printer", "Full HD monitor", "Mexaniki klaviatura",
    "Optik mouse", "Sürətli powerbank", "WiFi router", "İnternet modem", "Split kondisioner",
    "No Frost soyuducu", "Avtomatik paltaryuyan", "Enerji qənaətli qabyuyan", "Digital mikrodalğa", "Qaz sobası",
    "Səssiz ventilyator", "Güclü tozsoran", "Saç feni", "Buxarlı ütü", "Mətbəx blenderi",
    "Əl mikseri", "Şirəçəkən aparat", "Qəhvə maşını", "Elektrik çaydanı", "İstilik saxlayan termos",
    "LED lampa", "Mini proyektor", "Bluetooth dinamik", "Studya mikrofonu", "Oyun gamepad-i",
    "PS konsol", "Xbox konsol", "Virtual reallıq eynəyi", "Kamera drone", "Navigasiya cihazı",
    "Avtomobil kamerası", "Hərəkət sensoru", "Smart home sistemi", "Ethernet kabel",
    "32GB flash", "1TB disk", "Sürətli SSD", "Operativ yaddaş", "Ana plata"
];

const price = [
    1200, 2800, 900, 2200, 150,
    300, 1800, 600, 700, 250,
    120, 90, 180, 130, 3200,
    3500, 2400, 2600, 800, 1100,
    200, 450, 140, 230, 160,
    170, 210, 900, 120, 100,
    60, 750, 180, 260, 200,
    1800, 1900, 2200, 3000, 400,
    350, 90, 1500, 40,
    35, 420, 650, 300, 550
];

const date = [
    "2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05",
    "2025-01-06", "2025-01-07", "2025-01-08", "2025-01-09", "2025-01-10",
    "2025-01-11", "2025-01-12", "2025-01-13", "2025-01-14", "2025-01-15",
    "2025-01-16", "2025-01-17", "2025-01-18", "2025-01-19", "2025-01-20",
    "2025-01-21", "2025-01-22", "2025-01-23", "2025-01-24", "2025-01-25",
    "2025-01-26", "2025-01-27", "2025-01-28", "2025-01-29", "2025-01-30",
    "2025-02-01", "2025-02-02", "2025-02-03", "2025-02-04", "2025-02-05",
    "2025-02-06", "2025-02-07", "2025-02-08", "2025-02-09", "2025-02-10",
    "2025-02-11", "2025-02-12", "2025-02-13", "2025-02-14",
    "2025-02-15", "2025-02-16", "2025-02-17", "2025-02-18", "2025-02-19"
];

const img =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_voZPdPQkimLRXMlKSsSJbiOaQr3LIien2Q&s",
    "https://techbar.az/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-at-11.17.08-AM.jpeg",
    "https://texnomart.az/wp-content/uploads/2021/12/texnomart-Samsung-Tab-S6-Lite-4-64GB-Pink-mqj0zgh6cn7vo4f9splt.jpg",
    "https://images.philips.com/is/image/philipsconsumer/29b25a5f38fe4026aeb2b143006ab81c?wid=700&hei=700&$pnglarge$",
    "https://maqazin.az/uploads/news/09c7a1fe324e660706656acf51e50c9a.jpg",
    "https://static.insales-cdn.com/images/products/1/2850/459762466/w26-smartwatch2.jpg",
    "https://www.tuttodigitale.it/wp-content/uploads/2019/10/CANON-EOS-M50_APRE.jpg",
    "https://mediaserver.goepson.com/ImConvServlet/imconv/a25ba1100e79d6925ab5c38b746748f5d514703f/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=XP-4200_headon-output-scan_690x460",
    "https://images.philips.com/is/image/philipsconsumer/c10ae67bf3404cf39811b10e00e38ef8?wid=700&hei=700&$pnglarge$",
    "https://aem-elektron.az/image/cache/catalog/tovar/ustroystva_vvoda/klaviatura/krs-85-pic1-1000x1000.jpg",
    "https://elitoptimal.az/_next/image?url=https%3A%2F%2Fstatic.elitoptimal.az%2FElitOptimal%2F42636aab-1599-48b0-b4e1-0deb5d90e913_Thumb.jpeg&w=3840&q=100",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjT7CiAWdrc7IeMGnGWYL2WvGHnu_Bng08JA&s"
]
;

let content = ''
let cards = document.getElementById("cards")

for (let i = 0; i < ad.length; i++) {
    content += `
                    <article class="flex flex-col bg-gray-900">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" class="object-cover w-full h-52 dark:bg-gray-500"
                                src=${img[i]}>
                        </a>
                        <div class="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#"
                                aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#"
                                class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">${ad[i]}</a>
                            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${desc[i]}</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                <span>${date[i]}</span>
                                <span>${price[i]}<i class="fa-solid fa-manat-sign"></i></span>
                            </div>
                        </div>
                    </article>

    `

}
cards.innerHTML += content

function darkmode(){
    document.body.classList.toggle("dark")
}