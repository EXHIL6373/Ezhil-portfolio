# 🌐 Personal Portfolio Website

A modern and responsive **Portfolio Website** built with **React.js**.  
It showcases my skills, projects, and professional journey, with a contact form powered by **EmailJS** for direct communication.

---

## 🚀 Features

- **Home Page** – Introduction and highlights  
- **About Page** – Personal background, education, and career goals  
- **Projects Section** – Showcases my fullstack projects (React + Spring Boot + MySQL)  
- **Skills Section** – Technical skills in frontend, backend, and database management  
- **Contact Page** – Contact form integrated with **EmailJS** for instant email responses  
- **Responsive Design** – Works seamlessly across desktop, tablet, and mobile  

---

## 📦 Tech Stack

- **Frontend:** React.js, JavaScript (ES6+), CSS, Bootstrap/Tailwind  
- **Email Service:** EmailJS (for sending contact form responses)  
- **Deployment:** Netlify / Vercel  

---

## 🔧 Setup Instructions

# 1. Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio


# 2. Install Dependencies
```bash
npm install
npm start

---

# 3.Configure EmailJS
-Create an account at EmailJS
-Get your Service ID, Template ID, and Public Key
-Add them to your React project (usually in .env or directly in your form component):

```javascript
import emailjs from 'emailjs-com';

emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formRef.current,
  'YOUR_PUBLIC_KEY'
);

---

# 4.Access the Application
Frontend UI: http://localhost:3000

---

## 🌍 Deployment (GitHub Pages)

# 1.Install GitHub Pages package:
```bash
npm install gh-pages --save-dev

# 2.Add these lines to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
# 3.Deploy:
```bash
npm run deploy

-Your portfolio will be live at: https://yourusername.github.io/portfolio

EmailJS: Works seamlessly without backend setup

---

🎯 Outcome
-This portfolio serves as a professional showcase of my skills, projects, and career journey. It demonstrates frontend development with React.js, integrates EmailJS for seamless communication, and is deployed using GitHub Pages for easy access.

---

✅ Now your README clearly shows **GitHub Pages deployment**.   