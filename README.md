# 🛰️ Admin Portal: Sales Executive Location Tracking App

A React Native Admin Panel designed to **track sales executives’ live location and route history**. The app fetches location data from a real-time API and displays it on a map with proper markers, polylines, and timestamps.

This project simulates a **real enterprise tracking use-case** and demonstrates your ability to build powerful, production-ready mobile applications using native technologies.

---

## 📱 App Screenshots

### 📋 Dashboard – List of Employees
Shows all tracked employees fetched from backend API.
<img src="./img/dashboard.png" width="300"/>

### 🗺️ Tracking History – Route on Map with Timestamps
Displays the executive’s movement using Google Maps with accurate markers, lines, and logs.
<img src="./img/tracking.png" width="300"/>

---

## ✨ Key Features

- 🔐 **Admin Login** with session-based access (coming soon)
- 📋 **Dashboard Screen** to display employee list (with empID)
- 📍 **Live Location Tracking** of individual sales executives
- 🗺️ **Map View** using `react-native-maps` with:
  - Markers for each location update
  - Polylines to connect the movement route
- 🕒 **Location Log Section** with latitude, longitude, and timestamp
- ⚙️ Clean component-based code structure
- ⚡ Powered by live backend API (`GET /LocationTrack/GetEmplLocationTrack?empID=`)

---

## 💻 Tech Stack

| Area             | Technology                     |
|------------------|--------------------------------|
| Mobile Framework | React Native (CLI setup)       |
| Maps             | `react-native-maps` (Google)   |
| API Handling     | Axios                          |
| UI Components    | React Native Views & Styles    |
| Navigation       | `@react-navigation/native`     |
| Backend API      | External REST endpoint         |
| Platform         | Android                        |

---

## 🏗️ Project Structure

Admin_ath/
├── App.jsx
├── api.js
├── DashboardScreen.jsx
├── LoginScreen.jsx
├── TrackingHistoryScreen.jsx
├── index.js
├── img/
│ ├── dashboard.png
│ └── tracking.png
├── package.json
├── android/
└── README.md

yaml
Copy
Edit

---

## ⚙️ How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/nidhaandubey/Ath_admin_portal.git
cd Ath_admin_portal
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Metro Bundler
bash
Copy
Edit
npx react-native start
4. Run on Android Device
bash
Copy
Edit
npx react-native run-android
📱 Make sure your emulator or physical Android device is connected.

📦 API Used
Get Tracking History of Employee

http
Copy
Edit
GET /LocationTrack/GetEmplLocationTrack?empID={id}
Get Last Known Location

http
Copy
Edit
GET /LocationTrack/GetEmplLastLocation?empID={id}
💼 Use Case Scenario
This project is built to simulate a real-world field staff tracking system, where:

Sales Executives carry a location tracking app.

Managers/Admins use this admin panel to monitor their movement.

All location data is timestamped and visualized using maps.

Ideal for companies in:

FMCG

Logistics & Courier

Field Sales

Marketing Teams

👨‍💻 About Me
Hi! I'm Nidhaan Dubey, a final-year B.Tech student and a passionate developer focused on building practical, scalable apps.

🔧 I love working on:

React & React Native

MERN Stack

Mobile + Web Hybrid Projects

Real-world applications

📫 Reach me:

📧 Email: nidhaandubey@example.com

💼 LinkedIn: linkedin.com/in/YOUR-USERNAME

💡 I'm Open to Opportunities!
I’m actively seeking:

React Native Developer Internships

Frontend Developer Roles (React / React Native)

Full-Stack Developer Roles

If you're a recruiter or hiring manager, feel free to reach out — I’d love to connect!

⭐ GitHub Stats

📄 License
This project is for learning and demonstration purposes. Reach out to me if you want to collaborate or customize it further!

yaml
Copy
Edit

---

### 🔧 Final Checklist:

- ✅ Place this file as `README.md` in your project root
- ✅ Rename images to `dashboard.png` and `tracking.png` (if not done yet)
- ✅ Push changes to GitHub:
  ```bash
  git add .
  git commit -m "Added detailed README with screenshots"
  git push
