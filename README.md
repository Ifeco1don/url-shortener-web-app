# 🚀 URL Shortener Web App

A modern and responsive web app built with **React + Vite** to shorten long URLs using the [Rebrandly API](https://developers.rebrandly.com/). It includes basic analytics like tracking total clicks over time and supports dark mode.

---

## 🌐 Live Demo

👉 [View Live App](https://ifeco1don.github.io/url-shortener-web-app/)

---

## ✨ Features

- 🔗 **Shorten long URLs** using the Rebrandly API
- 📊 **Track clicks over time** Displays number of clicks
- 🌙 **Dark mode** toggle for better user experience
- ⚡ Powered by **Vite** for fast development and builds

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS
- **Deployment:** GitHub Pages
- **API:** Rebrandly URL Shortening API

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/ifeco1don/url-shortener-web-app.git
cd url-shortener-web-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add your [Rebrandly API key](https://developers.rebrandly.com/):

```env
VITE_REBRANDLY_API_KEY=your_actual_rebrandly_api_key
```

4. **Start the development server**

```bash
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 🚀 Deploy to GitHub Pages

Make sure your `vite.config.js` is correctly set:

```js
export default defineConfig({
  base: "/url-shortener-web-app/",
  // ...other settings
});
```

Then run:

```bash
npm run deploy
```

Your app will be live at  
👉 [https://ifeco1don.github.io/url-shortener-web-app/](https://ifeco1don.github.io/url-shortener-web-app/)

---

## 📁 Project Structure

```
url-shortener-web-app/
├── public/
├── src/
│   ├── assets/
│   ├── styles/
|   |   ├── App.css
|   ├── components/
│   │   ├── UrlForm.jsx
│   │   ├── UrlList.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📸 Screenshots

![alt text](<./src/assets/Screenshot (260).png>) ![alt text](<./src/assets/Screenshot (261).png>)

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

---

## 🤝 Connect with Me

- GitHub: [@ifeco1don](https://github.com/ifeco1don)

---
