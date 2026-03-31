// tracker.js - Web sitenizin alt kısmına (</body> öncesi) ekleyin
const Tracker = {
    // Trafik kaynağını ve cihaz bilgisini toplar
    getVisitorStats: function() {
        return {
            zaman: new Date().toLocaleString('tr-TR'),
            kaynak: document.referrer || "Dogrudan Giris",
            dil: navigator.language,
            ekran: `${window.screen.width}x${window.screen.height}`,
            sayfa: window.location.pathname
        };
    },

    // Verileri GitHub'a veya veritabanına gönderir
    kaydet: async function(musteriVerisi = {}) {
        const tumVeri = {
            ...this.getVisitorStats(),
            ...musteriVerisi
        };

        console.log("Sistem: Veri kaydediliyor...", tumVeri);
        
        // Burada ücretsiz bir webhook servisi (örn: Formspree veya Google Sheets) 
        // kullanmanı öneririm. Telefonla yönetim için en kolayı budur.
        alert("Veri başarıyla alındı: " + tumVeri.kaynak);
    }
};

// Sayfa yüklendiğinde otomatik trafik kaydı
window.onload = () => {
    console.log("İzleme başladı. Kaynak: " + document.referrer);
};
