# Architecture

Version : 1.0.0

Last Updated : 2026-07-24

Status : Active

Owner : Portal Customer Service Digital

---

# Purpose

Dokumen ini menjelaskan arsitektur Portal Customer Service Digital.

Tujuannya adalah memberikan gambaran menyeluruh mengenai bagaimana aplikasi dibangun, bagaimana komponen saling berinteraksi, serta menjadi acuan ketika melakukan perubahan pada sistem.

---

# System Overview

Portal Customer Service Digital merupakan aplikasi internal berbasis Google Apps Script dengan pendekatan Single Page Application (SPA).

Sistem digunakan untuk membantu aktivitas Customer Service dalam mengelola layanan nasabah melalui satu portal terintegrasi.

---

# High-Level Architecture

```
                    Google Spreadsheet
                            │
                            ▼
                  Google Apps Script
                 (Business Logic Layer)
                            │
                google.script.run()
                            │
                            ▼
              HTML Service (Single Page App)
                            │
        ┌───────────┬────────────┬────────────┐
        ▼           ▼            ▼            ▼
   Dashboard   Pengaduan   Statistik   Laporan
```

---

# Technology Stack

## Backend

- Google Apps Script

## Frontend

- HTML Service
- Vanilla JavaScript
- Bootstrap 5
- Chart.js

## Database

- Google Spreadsheet

## Development

- VS Code
- clasp
- Git
- GitHub

---

# Project Structure

```
Portal Customer Service

├── appsscript.json
├── Code.js
├── dashboard.html
├── navbar.html
├── sidebar.html
├── dashboardStyle.html
├── dashboardJS.html
├── dashboardHome.html
├── pengaduanHome.html
├── statistikHome.html
├── laporanHome.html
├── assets/
└── docs/
```

> Struktur dapat berkembang seiring refactor modular.

---

# Application Flow

```
User

↓

Dashboard SPA

↓

google.script.run()

↓

Apps Script

↓

Spreadsheet

↓

Apps Script

↓

Frontend Render
```

Semua komunikasi data dilakukan melalui `google.script.run()`.

Frontend tidak boleh mengakses Spreadsheet secara langsung.

---

# Frontend Architecture

Frontend menggunakan pendekatan Single Page Application (SPA).

Setiap halaman mempunyai lifecycle sendiri.

Contoh:

Dashboard

- refreshDashboard()

Pengaduan

- loadActiveComplaints()

Auto refresh hanya dijalankan pada halaman yang sedang aktif.

---

# Backend Architecture

Backend bertanggung jawab terhadap:

- Business Logic
- Spreadsheet Access
- Data Validation
- Response Formatting

Backend tidak menangani rendering HTML.

---

# Data Flow

```
Spreadsheet

↓

Apps Script

↓

google.script.run()

↓

JavaScript

↓

DOM Rendering
```

---

# Design Principles

Project mengikuti prinsip berikut:

- Single Responsibility Principle
- Separation of Concerns
- DRY
- KISS
- Incremental Improvement

---

# Architecture Decisions

## ADR-001

Decision

Menggunakan Single Page Application (SPA).

Reason

- Mengurangi reload halaman.
- UX lebih baik.
- Cocok dengan HTML Service.

---

## ADR-002

Decision

Dashboard dan Pengaduan memiliki lifecycle terpisah.

Reason

- Mengurangi request yang tidak diperlukan.
- Setiap halaman bertanggung jawab atas datanya sendiri.

---

## ADR-003

Decision

Frontend tidak boleh mengakses Spreadsheet secara langsung.

Reason

Seluruh akses data harus melalui Apps Script agar business logic terpusat.

---

# Future Architecture

Target pengembangan berikutnya:

- Modular JavaScript
- Modular Apps Script
- Utility Layer
- Configuration Layer
- Reporting Module
- Analytics Module

---

# Change History

| Version | Date       | Description                        |
| ------- | ---------- | ---------------------------------- |
| 1.0.0   | 2026-07-24 | Initial architecture documentation |
