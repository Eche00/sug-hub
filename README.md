# SUG Hub

**SUG Hub** is a centralized digital platform designed to improve communication, transparency, and student engagement within the Students’ Union Government (SUG). It provides public-facing information for students and a secure admin panel for managing content and anonymous feedback.

---

##  Overview

SUG Hub serves as:

* An **official information hub** for students
* A **management system** for SUG executives
* A **safe anonymous feedback channel** for student voices

The platform prioritizes **clarity, moderation, and student safety**.

---

##  Features

###  Public Pages

* **Home/Announcements**
* **About the SUG**
* **Events**
* **EXCOs (by academic year)**
* **Student Voice (Anonymous Feedback)** ⭐

---

###  Admin / SUG Panel

* Create, edit, and delete announcements
* Manage events
* Manage EXCOs by year
* Review anonymous student feedback
* Flag, mark, or delete inappropriate messages

---

## 🗂️ Site Structure

```
Home
 ├── About SUG
 ├── Announcements
 ├── Events
 ├── EXCOs
 │     ├── 2022/2023
 │     ├── 2023/2024
 │     └── 2024/2025
 ├── Student Voice (Anonymous Feedback)
 └── Contacts
```

---

##  Core Feature: Student Voice

The **Student Voice** feature allows students to share concerns and suggestions **anonymously**.

### Student Experience

> “This platform allows students to freely express concerns and suggestions.
> Messages are anonymous. Offensive language is not allowed.”

**Form Fields**

* Category (optional)
* Message (required)
* Submit anonymously
* Character counter
* Success / error feedback

---

##  Safety & Moderation

### Keyword Filtering System

To prevent abuse:

1. Messages are converted to lowercase
2. Scanned against a banned words list
3. Offensive content is either:

   * Blocked
   * Or masked before storage

#### Example Banned Words JSON

```json
{
  "bannedWords": [
    "abuse",
    "insult",
    "threat",
    "violence",
    "hate"
  ]
}
```

---

###  Blocked Message Response

```json
{
  "error": "Your message contains restricted words. Please revise and submit again."
}
```

---

##  Data Structure

### Feedback Storage Example

```json
{
  "feedbacks": [
    {
      "id": "fb_001",
      "category": "Academics",
      "message": "We need more library hours during exams.",
      "createdAt": "2026-03-10T14:22:00",
      "status": "unreviewed"
    }
  ]
}
```

---

##  Admin Moderation View

| Category  | Message                          | Status     | Action |
| --------- | -------------------------------- | ---------- | ------ |
| Welfare   | Hostels need better water supply | Unreviewed | View   |
| Academics | More revision classes needed     | Reviewed   | Flag   |

---

##  Important Safety Notes

* No usernames collected
* No IP addresses displayed on UI
* No public message wall (MVP phase)
* Clear disclaimer shown to users
* Admin-only access to all feedback

---

##  Development Plan (10 Days)

### Day 1 – Planning & UX Flow

* Define feedback rules
* Abuse prevention strategy
* UX sketches for Student Voice
* Admin moderation flow
* Next.js setup
* Pages setup

### Day 2 – Project Setup & Layout

* Navigation & footer UI
* Responsive layout
* Routing
* Meta names and description

### Day 3 – About SUG Page

### Day 4 – Announcements

### Day 5 – Events

### Day 6 – EXCOs Page

### Day 7 – Student Voice ⭐

* Feedback form
* Validation
* Anonymous submission handling

### Day 8 – Keyword Filtering

* Banned words system
* Message validation & masking

### Day 9 – Admin Moderation Panel

* View & filter feedback
* Review, flag, dismiss, or delete entries

### Day 10 – Testing & Deployment

* End-to-end testing
* Mobile responsiveness
* Deployment (Vercel / Netlify)

---

##  Why This Works

✅ Encourages honest student expression
✅ Protects SUG credibility
✅ Prevents abuse and misuse
✅ Scalable for future features (polls, voting, surveys)

---

##  Future Enhancements

* Polls & voting
* Analytics dashboard
* Role-based admin access
* Notification system

---

##  Tech Stack

* **Frontend:** Next.js / Ts
* **Styling:** Tailwind CSS
* **Backend:** Firebase 
* **Deployment:** Vercel 


### Feedback Rules 

Purpose:
Allow students to share honest opinions while maintaining respect and order.
Core Rules
•	Submissions are anonymous by default
•	No personal identity details are requested or stored
•	Feedback must be clear, respectful, and issue-focused
•	Messages are text-only
•	Very short or empty submissions are not allowed
What Students Can Share
•	Concerns about academics, welfare, or campus life
•	Suggestions for improvement
•	General student opinions
What Is Not Allowed
•	Attacks on individuals
•	Threatening or violent language
•	Hate or discriminatory speech
•	Spam or repeated messages


### Abuse Prevention Strategy 

Purpose:
Protect the platform from misuse without discouraging genuine student feedback.
Preventive Measures
•	Messages are checked automatically before submission
•	Certain words and phrases trigger restrictions
•	Harmful language stops the message from being sent
•	Mildly inappropriate terms are hidden or altered

Design Principles
•	Prevention happens quietly in the background
•	Students are informed politely if a message is rejected
•	No public display of feedback to avoid misuse


### Admin Moderation Flow 

Purpose:
Give SUG executives a clear, calm, and organized way to handle student feedback.
Feedback Lifecycle
1.	Message is submitted
2.	Message enters the admin panel as “new”
3.	Admin reviews content
4.	Admin decides next action

Admin Actions
•	Mark as reviewed
•	Flag for attention
•	Resolve after action is taken
•	Remove if it breaks platform rules
