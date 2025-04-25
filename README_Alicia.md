# 📟 Alicia IT Helpdesk App

Alicia is a modern, web-based IT Helpdesk application built for internal use within healthcare organisations. It is designed to streamline issue reporting, asset requests, and feedback collection for healthcare professionals, including doctors, nurses, surgeons, consultants, and administrative staff.

---

## 🚀 Features

- 🎫 **Ticket Management**: Submit, track, and manage IT support tickets with status updates.
- 💻 **Asset Requests**: Request medical IT assets and check availability across dates.
- 📊 **Performance Dashboard**: Visual reports for workload, ticket resolution time, and team performance.
- 💬 **Feedback System**: Collect feedback to improve IT support and user experience.
- 🔒 **Role-Based Access**: Admin, IT Support, and General User roles with custom permissions.
- 🧠 **AI Assistance** _(Coming Soon)_: Smart ticket categorisation & knowledge base suggestions.
- 📅 **Calendar Integration**: Schedule support sessions and asset usage timelines.
- 📲 **Mobile Responsive**: Fully functional across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Backend**: Python (Django)
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript (with Tailwind CSS for clean UI)
- **Deployment**: Internal server (on-premises)
- **Version Control**: Git & GitHub

---

## 📁 Project Structure

```
alicia-helpdesk/
│
├── backend/           # Django project
├── frontend/          # Static HTML/CSS/JS files
├── templates/         # Django HTML templates
├── static/            # CSS, JS, and images
├── media/             # Uploaded files (screenshots etc.)
└── README.md          # You're here
```

---

## 👥 Roles & Access

| Role         | Permissions                                          |
|--------------|------------------------------------------------------|
| **Admin**    | Full access, manage users and settings               |
| **IT Support** | View/resolve tickets, manage assets                |
| **General User** | Submit tickets, request assets, give feedback   |

---

## 🔧 How to Run the Project (Local Dev)

```bash
# Clone the repository
git clone https://github.com/your-username/alicia-helpdesk.git

cd alicia-helpdesk

# Set up virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py migrate

# Start the server
python manage.py runserver
```

Then open [http://localhost:8000](http://localhost:8000)

---

## 📌 Milestones

- [x] Ticketing module with attachments
- [x] Responsive UI with Tailwind
- [x] Role-based authentication
- [ ] Analytics Dashboard
- [ ] AI-powered ticket suggestion engine
- [ ] Email/Outlook integration

---

## 📄 License

Internal use only – not open source.

---

## 🤝 Contact

For questions or support, contact Joshua Odubu (mailto:joshua.odubu@uhcw.nhs.uk or joshua.odubu@outlook.com) Medical Education **University Hospitals Coventry and Warwickshire (UHCW)**.
