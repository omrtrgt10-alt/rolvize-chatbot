# Rolvize AI Vize Danışmanı 🛫

Claude benzeri modern UI'a sahip, yapay zeka destekli vize danışmanlık chatbot'u.

![Rolvize Chatbot](https://img.shields.io/badge/Status-Ready-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Özellikler

- **Modern Chat Arayüzü**: Claude'dan ilham alan premium, koyu tema tasarım
- **AI Destekli Danışmanlık**: OpenAI GPT-4o-mini ile güçlendirilmiş
- **Güvenlik Önlemleri**: Jailbreak koruması ve hassas veri güvenliği
- **Sohbet Geçmişi**: LocalStorage ile kalıcı sohbet kaydı
- **Mobil Uyumlu**: Responsive tasarım, tüm cihazlarda çalışır
- **Türkçe Dil Desteği**: Tamamen Türkçe arayüz ve yanıtlar

## 📋 Kurulum

### Replit'te Deploy

1. [Replit](https://replit.com)'e giriş yapın
2. "Create Repl" → "Import from GitHub" veya "HTML, CSS, JS" template seçin
3. Dosyaları yükleyin
4. "Run" butonuna tıklayın

### Yerel Geliştirme

```bash
# Projeyi klonlayın veya dosyaları indirin
cd rolvize-chatbot

# Basit HTTP sunucusu başlatın (Python)
python -m http.server 3000

# veya Node.js ile
npx serve .
```

Tarayıcıda `http://localhost:3000` adresine gidin.

## 🔑 API Anahtarı

Chatbot'u kullanmak için OpenAI API anahtarı gereklidir:

1. [OpenAI Platform](https://platform.openai.com/api-keys) adresinden API key alın
2. Uygulamayı açtığınızda API key modalı karşınıza çıkacak
3. Anahtarınızı girin ve "Kaydet ve Başla" butonuna tıklayın

> **Not:** API anahtarınız tarayıcınızın LocalStorage'ında güvenli şekilde saklanır.

## 📁 Proje Yapısı

```
rolvize-chatbot/
├── index.html      # Ana HTML dosyası
├── styles.css      # Premium CSS stilleri
├── app.js          # JavaScript uygulama mantığı
└── README.md       # Bu dosya
```

## ⚙️ Özelleştirme

### Şirket Bilgilerini Güncelleme

`app.js` dosyasındaki `SYSTEM_PROMPT` sabitini düzenleyin:

```javascript
const SYSTEM_PROMPT = `...
- Web Sitesi: www.sizinsirketiniz.com
- Telefon: 0XXX XXX XX XX
...`;
```

### Tema Renkleri

`styles.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --accent-primary: #6366f1;    /* Ana vurgu rengi */
    --accent-secondary: #818cf8;  /* İkincil vurgu */
    --bg-primary: #0d0d0f;        /* Arka plan */
    ...
}
```

## 🔒 Güvenlik

Bu chatbot aşağıdaki güvenlik önlemlerini içerir:

- ✅ Prompt injection koruması
- ✅ Jailbreak denemelerini engelleme
- ✅ TC kimlik, kredi kartı gibi hassas veri filtreleme
- ✅ Vize garantisi vermeme (yasal gereklilik)
- ✅ Rol değiştirme saldırılarına karşı koruma

## 📱 Ekran Görüntüleri

### Karşılama Ekranı
Modern, sade tasarım ile kullanıcıları karşılıyor.

### Sohbet Arayüzü
Claude benzeri mesaj baloncukları ve typing indicator.

### Mobil Görünüm
Tam responsive tasarım, hamburger menü ile sidebar.

## 🛠️ Teknolojiler

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **AI**: OpenAI GPT-4o-mini API
- **Storage**: LocalStorage (client-side)
- **Font**: Inter (Google Fonts)
- **Tasarım**: Glassmorphism, Dark Theme

## 📝 Lisans

MIT License - Dilediğiniz gibi kullanabilirsiniz.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

**Rolvize Vize Danışmanlık** © 2024 - Tüm hakları saklıdır.
