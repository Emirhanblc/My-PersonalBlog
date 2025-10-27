# Kişisel Teknik Blog ve Portföy

Bu proje, gerçek üretim (production) ortamında karşılaşılan teknik sorunlar ve çözümleri üzerine bir blog ve portföy sitesidir. Amaç, "gerçek problem çözen" bir profil sunmak ve küçük iş/freelance fırsatları için net bir vitrin oluşturmaktır.

## İçerik ve Amaç
- Sistem yönetimi, yedekleme/depoma (backup/storage), network ayrıştırma, Android (offline-first) gibi konularda gerçek deneyim notları
- Blog yazıları (detaylı makaleler)
- Ops Log (kısa olay kayıtları: kök sebep, çözüm, önlem)
- Projeler (etki ve rol odaklı)
- Hakkımda (HR dostu, 5 saniyede özet)
- İletişim ve çalışma teklifi (lead toplama)

## Yapı
- `/index.html` ana sayfa
- `/blog/` blog listesi ve tekil yazılar
- `/projects/` projeler
- `/about.html` hakkımda
- `/contact.html` iletişim
- `/ops-log/` production olay kayıtları
- `/assets/` stil ve scriptler
- `/content/` içerik kaynakları (markdown taslaklar)

## Teknoloji
- Plain HTML, CSS, JavaScript
- Dark mode toggle (localStorage, aria-pressed)
- Prism.js syntax highlight
- SEO: sitemap.xml, rss.xml, Open Graph / Twitter meta
- Vercel veya benzeri ile statik deploy

## Gelecek (Roadmap)
- İçeriği Markdown'dan build etmek (front-matter ile)
- Next.js (App Router) ile tam migrasyon
- `/content/` içeriğinden blog/ops-log sayfalarını otomatik üretim
- RSS ve sitemap'ı build sırasında metadata'dan üretmek

## Geliştirme
- Static, dependency yok. Dosyaları açıp düzenlemek yeterli.
- `assets/css/main.css` ve `assets/js/theme.js` görsel/tema ayarları içerir.
- Kod bloklarında syntax highlight için Prism kullanılır: `assets/css/prism.css`, `assets/js/prism.js`.

## Lisans
- İçerik ve kod, aksi belirtilmedikçe kişisel kullanım içindir. Ticari kullanım için iletişime geçin.
