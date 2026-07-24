# AI Development Guide

> Development standard for **Portal Customer Service Digital**.

---

# Purpose

Dokumen ini menjadi pedoman bagi AI dan developer dalam mengembangkan project Portal Customer Service Digital.

Tujuan utamanya adalah memastikan setiap perubahan dilakukan secara konsisten, aman, mudah dipelihara, dan sesuai dengan arsitektur project.

Dokumen ini berlaku untuk seluruh pengembangan project.

---

# Project Overview

Portal Customer Service Digital merupakan aplikasi internal berbasis Google Apps Script yang digunakan untuk membantu aktivitas Customer Service.

Target utama project:

- Maintainable
- Modular
- Secure
- Scalable
- Mudah dipahami developer lain
- Tetap kompatibel dengan Google Apps Script

---

# Technology Stack

## Backend

- Google Apps Script

## Frontend

- HTML Service
- Vanilla JavaScript (ES6)
- Bootstrap 5
- Chart.js

## Database

- Google Spreadsheet

## Development Tools

- VS Code
- clasp
- Git
- GitHub

---

# Engineering Principles

Selalu utamakan:

- Maintainability
- Readability
- Consistency
- Simplicity
- Small Incremental Changes

Hindari perubahan besar tanpa alasan yang jelas.

Lebih baik melakukan beberapa perubahan kecil daripada satu perubahan besar yang berisiko.

---

# Development Workflow

Setiap request mengikuti urutan berikut.

## 1. Analysis

Sebelum coding:

- pahami kebutuhan
- identifikasi area terdampak
- identifikasi dependency
- identifikasi risiko

Jika requirement belum jelas, lakukan klarifikasi terlebih dahulu.

---

## 2. Implementation Plan

Jelaskan:

- file yang akan diubah
- fungsi yang akan diubah
- alasan perubahan
- urutan implementasi

Belum melakukan coding pada tahap ini.

---

## 3. Implementation

Saat coding:

- ubah seminimal mungkin
- pertahankan struktur project
- jangan mengubah bagian yang tidak berkaitan
- jangan melakukan refactor besar tanpa persetujuan

---

## 4. Self Review

Sebelum pekerjaan dianggap selesai:

Periksa:

- kemungkinan bug
- duplikasi kode
- compatibility
- regression
- keamanan

Jika ditemukan masalah, perbaiki terlebih dahulu.

---

## 5. Summary

Selalu berikan:

- file yang diubah
- ringkasan perubahan
- alasan perubahan
- checklist pengujian

---

# Coding Standards

Selalu mengikuti style project.

## JavaScript

- Gunakan `const` sebagai default.
- Gunakan `let` bila diperlukan.
- Hindari `var`.
- Gunakan template literal bila sesuai.
- Hindari global variable yang tidak perlu.

---

## HTML

- Gunakan struktur yang sederhana.
- Gunakan Bootstrap terlebih dahulu sebelum custom CSS.

---

## CSS

- Prioritaskan utility Bootstrap.
- Hindari CSS yang berlebihan.

---

# Google Apps Script Rules

Project harus tetap kompatibel dengan Google Apps Script.

Jangan:

- menggunakan library Node.js
- menggunakan package yang tidak didukung Apps Script
- mengubah `appsscript.json` tanpa alasan
- mengubah struktur deployment tanpa persetujuan

Jika perubahan memengaruhi Spreadsheet, Drive, atau data, jelaskan dampaknya terlebih dahulu.

---

# Documentation Rules

Jika perubahan memengaruhi:

- arsitektur
- workflow
- keputusan besar

maka dokumentasi terkait harus ikut diperbarui.

---

# Git Workflow

Gunakan Conventional Commits.

Contoh:

- feat
- fix
- refactor
- docs
- style
- test
- perf
- chore

Setiap commit harus mewakili satu perubahan logis.

---

# AI Behaviour

AI harus:

- berpikir sebelum coding
- menjelaskan alasan perubahan
- menghindari asumsi
- mengutamakan solusi sederhana
- menjaga konsistensi project

Jika terdapat beberapa solusi, tampilkan solusi yang paling direkomendasikan beserta alasannya.

---

# Definition of Done

Sebuah pekerjaan dianggap selesai apabila:

- Requirement terpenuhi.
- Kode tetap kompatibel dengan Google Apps Script.
- Tidak merusak fitur lain.
- Sudah melalui self review.
- Ringkasan perubahan diberikan.
- Siap untuk di-commit.

---

# Change History

| Version | Date       | Description                  |
| ------- | ---------- | ---------------------------- |
| 1.0.0   | 2026-07-24 | Initial AI Development Guide |
