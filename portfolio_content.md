# 🚀 My Project Portfolio

Welcome to my portfolio! Below is a detailed showcase of my recent software development projects, highlighting my expertise in full-stack web development, cross-platform mobile apps, AI integrations, and Python automation.

---

## 1. LearnFlow - Learning Management System
**Type:** Full-Stack Web & Mobile App (Monorepo)
**Tech Stack:** React 18, Vite, Tailwind CSS, Shadcn UI, React Query, Supabase (Auth & Database), Capacitor (Ionic) for Mobile.

**Overview:**
LearnFlow is a comprehensive, modern Learning Management System (LMS) engineered to facilitate seamless education delivery across web and mobile platforms. Built with a robust role-based architecture, it serves Students, Instructors, Department Admins, and Super Admins with tailored dashboards and capabilities.

**Key Features:**
- **Role-Based Access Control (RBAC):** Distinct permissions and UI flows for different user types, ensuring secure and relevant experiences.
- **Course & Workshop Management:** Instructors can build rich course content, schedule interactive workshops, and monitor student engagement.
- **Cross-Platform Compatibility:** The codebase is structured as a monorepo, sharing design principles and core logic between the React web app and the Capacitor-powered native mobile wrapper (iOS/Android).
- **Modern UI/UX:** Highly accessible and responsive design crafted with Tailwind CSS and Radix UI primitives.

---

## 2. DocRAG - Local-First AI Research Assistant
**Type:** Browser-Based AI Application
**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Transformers.js (WebGPU/WASM), IndexedDB, Groq / Gemini / Ollama APIs.

**Overview:**
DocRAG is a privacy-first AI research assistant that allows users to chat with their documents (PDFs, Word docs, CSVs, Source Code) entirely within the browser. By leveraging local embedding models and IndexedDB, files never leave the user's machine.

**Key Features:**
- **Local RAG Pipeline:** All chunking, embedding, and semantic search processes run client-side using HuggingFace's Transformers.js.
- **Multi-Model Support:** Seamless integration with cloud LLMs like Groq and Gemini, as well as local models via Ollama.
- **Knowledge Graph Generation:** Automatically extracts entities and relationships from documents and visualizes them using React Flow.
- **Data Visualization & Export:** Generates Recharts visualizations from tabular data and allows exporting chat history and research reports as Markdown or HTML.

---

## 3. Wholesaler Retailer Management System
**Type:** B2B E-commerce & Management Portal
**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Supabase, Chart.js, Recharts, jsPDF.

**Overview:**
A comprehensive web application built to streamline operations, inventory, and transactions between wholesalers and retailers. It acts as a centralized hub for managing product distribution, order tracking, and financial analytics.

**Key Features:**
- **Dual Portal System:** Separate, secure dashboards for the Admin (Wholesaler) and Retailers.
- **Analytics & Dashboard:** Real-time insights into total revenue, pending orders, and top products visualized through interactive charts.
- **Billing & Invoicing:** Automated PDF invoice generation and billing history management.
- **Profit Sharing Tracking:** Advanced algorithms and analytics to track profit sharing between the wholesaler and retail partners.

---

## 4. Building Resume - ATS-Friendly Resume Builder
**Type:** Serverless Web Application
**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Vercel Serverless Functions, Node.js, Puppeteer-Core.

**Overview:**
A lightning-fast, 100% free resume builder designed to help professionals craft stunning ATS-friendly resumes in minutes. It requires no sign-ups and generates pixel-perfect A4 PDFs.

**Key Features:**
- **Real-Time Preview:** Users can watch their resume update instantly as they type.
- **Serverless PDF Generation:** Leverages Puppeteer running on Vercel Serverless Functions to reliably generate high-quality PDFs.
- **Dynamic Content Formatting:** Automatically adjusts profile titles and summaries based on the user's experience level (Fresher, Intermediate, Executive).
- **Multiple Templates:** A variety of ATS-optimized designs including Modern, Classic, Minimal, and Technical.

---

## 5. Google Form Auto-Filler
**Type:** Automation & Web Scraping Script
**Tech Stack:** Python 3, Playwright, CSV Data Handling.

**Overview:**
A generic, highly configurable Python automation tool designed to interact with and submit data to any Google Form. It parses form fields and injects data from a provided CSV source, handling everything from short answers to complex dropdowns and checkboxes.

**Key Features:**
- **Form Inspection:** Automatically opens and maps out a Google Form, generating the exact CSV column headers required for data entry.
- **Incognito Submissions:** Utilizes Playwright to run each submission in a fresh browser context (no cookies/history), simulating a new, unique visitor every time.
- **Flexible Data Modes:** Supports unique row-by-row submissions, repeating data, or picking random rows from the dataset.

---

## 6. UTD Background Monitor
**Type:** Desktop Automation & Computer Vision App
**Tech Stack:** Python, CustomTkinter (GUI), OpenCV (Template Matching), Tesseract OCR, Pynput/PyAutoGUI.

**Overview:**
A background monitoring and macro application built with a modern GUI. It captures screenshots of a target application, analyzes them using computer vision, and executes automated tasks or sends status updates.

**Key Features:**
- **Computer Vision Integration:** Uses OpenCV for confidence-based template matching and Tesseract for Optical Character Recognition (OCR).
- **Discord Webhook Alerts:** Pushes real-time status updates and screenshots to a Discord channel to keep the user informed remotely.
- **Modern Interface:** Configurable settings through a sleek CustomTkinter dashboard, allowing users to tweak confidence thresholds, anti-AFK timers, and cooldowns on the fly.
- **Session Tracking:** Tracks successful runs, losses, captures, and total session uptime.

---

## 7. Newsletter Template Generator
**Type:** Web-Based Editor & SPA
**Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, shadcn-ui, html2canvas, jsPDF.

**Overview:**
A robust, highly customizable web-based application designed to help educational institutions and organizations effortlessly create, manage, and publish professional newsletters. It streamlines the editorial process by completely decoupling the data layer from the presentation layer, empowering non-technical users to generate print-ready A4 PDFs without specialized design software.

**Key Features:**
- **Real-Time A4 Preview:** Features a split-screen editor with structured accordion forms on the left and a live, scaled A4 template preview on the right.
- **Dynamic Theming Engine:** Offers pre-configured themes with instant color injection and typography switching using CSS variables and Tailwind.
- **JSON State Hydration:** Allows users to save their entire newsletter state as a local JSON file and upload it later to seamlessly resume editing.
- **High-Resolution PDF Export:** Integrates `html2canvas` and `jsPDF` to precisely capture the DOM and compile it into a high-fidelity, multipage PDF ready for print or digital distribution.

---

> *This document was generated to provide a comprehensive overview of my recent work, highlighting my ability to adapt to various technologies and solve complex problems across different domains.*
