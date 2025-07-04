# K&N TaxMark Advisors

![K&N TaxMark Advisors Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png)

## Modern Tax, Legal & Business Advisory Platform

K&N TaxMark Advisors is a full-stack web application designed to provide seamless, professional, and secure tax, legal, and business advisory services. Built with a modern tech stack, it delivers a branded, user-friendly experience for individuals and businesses seeking expert guidance.

---

## 🚀 Features
- **Branded, Modern UI/UX**: Consistent K&N TaxMark branding, responsive design, and visually appealing layouts.
- **Protected Service Pages**: Secure access to Tax Planning, ITR Filing, GST Filing, Trademark & Legal, and Business Advisory services.
- **Authentication & Authorization**: Secure login, registration, and protected routes with after-login redirects.
- **Attractive Email Templates**: Branded HTML emails for OTP, password reset, and contact inquiries.
- **Auto-filled Contact Forms**: Logged-in users enjoy pre-filled contact details for convenience.
- **Informational Pages**: FAQ, Privacy Policy, Terms, Cookie Policy, and Sitemap—all visually enhanced and accessible from the footer.
- **Mobile-First Navigation**: Fully responsive navbar, dropdowns, and footer for all devices.
- **Toast Notifications**: Consistent, attractive popups for feedback and redirects.

---

## 🛠️ Tech Stack
- **Frontend**: React, Vite, CSS Modules
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Email**: Nodemailer (HTML templates)

---

## 📦 Project Structure
```
client/
  src/
    components/      # Navbar, Footer, ProtectedRoute, etc.
    pages/           # Home, Services, Contact, Info Pages
    context/         # Auth Context
    utils/           # Axios config
server/
  controllers/       # Auth, Contact
  models/            # User
  routes/            # Auth, Contact
  utils/             # Mailer
  db/                # DB Connection
```

---

## 🖥️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/k-n-taxmark.git
   cd k-n-taxmark
   ```
2. **Install dependencies:**
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in `server/` with your MongoDB URI and JWT secret.
4. **Run the app:**
   - Start backend:
     ```sh
     cd server && npm start
     ```
   - Start frontend:
     ```sh
     cd ../client && npm run dev
     ```

---

## 📧 Contact & Support
For queries, support, or business inquiries, please use the [Contact Us](#) page in the app.

---

## 📄 License
This project is for demonstration and educational purposes. All rights reserved © K&N TaxMark Advisors.
