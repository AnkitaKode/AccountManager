# 💼 AccountManager

A modern and responsive **React application** that allows users to **create, log in, and manage accounts**.  
This lightweight app is built with **React (v16+)** and **Tailwind CSS**, featuring a clean UI, smooth navigation, and simple localStorage-based authentication.

---

## 🖼️ Preview

<img width="1348" height="592" alt="image" src="https://github.com/user-attachments/assets/a0fbbe17-683a-4cbf-89ef-0b0163b5d889" />


> 🧭 *Home screen displaying login and registration options.*

---

## ✨ Features

- 📝 **User Registration** – Create new user accounts.
- 🔐 **User Login** – Log in with existing credentials.
- ⚙️ **Account Management** – View and edit your account details.
- 💾 **Local Storage Support** – Data persists in browser storage.
- 📱 **Responsive Design** – Fully mobile-friendly layout.
- 🚨 **Error Handling** – Basic validation for login and registration inputs.

---

## 📄 Pages Overview

### 🏠 Home Page
- Central hub with a **welcome message** and options to **Login** or **Register**.  
- Buttons styled using Tailwind CSS with icons for better UX.  
- Top navigation bar includes:
  - **Home**
  - **Login**
  - **Sign Up**

### 🔑 Login Page
- Allows users to enter **email** and **password**.  
- On successful login, users are redirected to the **Account Information Page**.  
- Includes a **“Back to Home”** button at the top-left corner.

### 🧾 Registration Page
- Enables users to create an account using **email** and **password**.  
- Details are stored in **localStorage** for demo purposes.  
- Includes a **“Back to Home”** button at the top-left corner.

### 👤 Account Information Page
- Displays the logged-in user’s **email** and **password**.  
- Users can **update** their account information (saved in localStorage).  
- Includes a **“Back to Home”** button for easy navigation.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React  |
| **Styling** | Tailwind CSS |
| **Routing** | React Router |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Data Storage** | Browser localStorage |

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-directory>
