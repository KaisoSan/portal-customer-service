# Coding Guidelines

Version : 1.0.0

Last Updated : 2026-07-24

Status : Active

Owner : Portal Customer Service Digital

---

# Purpose

Dokumen ini mendefinisikan standar penulisan kode untuk seluruh project Portal Customer Service Digital.

Seluruh kode baru diharapkan mengikuti pedoman ini agar project tetap konsisten dan mudah dipelihara.

---

# General Principles

Prioritaskan:

- Readability
- Maintainability
- Simplicity
- Consistency

Lebih baik menulis kode yang mudah dipahami daripada kode yang terlihat canggih.

---

# JavaScript Standards

## Variable

Gunakan:

- `const` sebagai default
- `let` bila nilainya berubah
- Hindari `var`

---

## Function

Gunakan camelCase.

Contoh:

```javascript
loadDashboard();

renderComplaintTable();

updateComplaintStatus();
```

Satu fungsi sebaiknya hanya memiliki satu tanggung jawab.

---

## Naming

Gunakan nama yang menjelaskan tujuan.

Contoh:

```javascript
activeComplaintData;
```

lebih baik daripada

```javascript
data;
```

---

## Comment

Berikan komentar hanya bila benar-benar membantu.

Komentar harus menjelaskan **mengapa**, bukan **apa**.

---

## Template Literal

Gunakan template literal bila membangun string yang kompleks.

---

## Global Variable

Hindari global variable yang tidak diperlukan.

---

# HTML Standards

Gunakan Bootstrap sebagai prioritas.

Gunakan semantic HTML bila memungkinkan.

ID menggunakan camelCase atau pola yang telah digunakan project.

Contoh:

```text
page-dashboard

activeComplaintTable

statusFilter
```

---

# CSS Standards

Gunakan utility Bootstrap terlebih dahulu.

Tambahkan custom CSS hanya bila benar-benar diperlukan.

Hindari penggunaan `!important`.

---

# Google Apps Script Standards

Backend bertanggung jawab terhadap:

- Business Logic
- Spreadsheet Access
- Validation
- Response Formatting

Frontend tidak boleh mengakses Spreadsheet secara langsung.

---

# File Organization

Satu file sebaiknya memiliki satu tanggung jawab utama.

Contoh:

```text
dashboardHome.html

→ Layout Dashboard

pengaduanHome.html

→ Layout Pengaduan

dashboardJS.html

→ Logic Frontend
```

Jika file mulai terlalu besar, lakukan refactor modular.

---

# Naming Convention

## Function

camelCase

```javascript
loadDashboard();

refreshDashboard();

renderPagination();
```

---

## Variable

camelCase

```javascript
currentPage;

filteredComplaintData;
```

---

## Constant

UPPER_SNAKE_CASE bila merupakan konfigurasi global.

```javascript
APP_CONFIG;
```

---

## CSS Class

Gunakan Bootstrap terlebih dahulu.

Class custom gunakan kebab-case.

---

# Error Handling

Gunakan:

```javascript
.withFailureHandler()
```

untuk seluruh komunikasi Apps Script.

Error harus dicatat melalui:

```javascript
console.error();
```

Jangan mengabaikan error.

---

# Performance Guidelines

- Hindari query DOM berulang.
- Cache elemen yang sering digunakan.
- Jangan mengambil data yang tidak diperlukan.
- Pisahkan lifecycle setiap halaman.

---

# Git Convention

Gunakan Conventional Commits.

Contoh:

- feat
- fix
- refactor
- docs
- style
- perf
- test
- chore

Satu commit mewakili satu perubahan logis.

---

# Documentation Rules

Jika perubahan memengaruhi:

- arsitektur
- workflow
- coding standard

maka dokumentasi terkait harus diperbarui.

---

# Code Review Checklist

Sebelum commit, pastikan:

- [ ] Requirement terpenuhi
- [ ] Tidak ada bug yang diketahui
- [ ] Tidak ada kode duplikat
- [ ] Naming sudah konsisten
- [ ] Tidak ada console.log yang tidak diperlukan
- [ ] Kompatibel dengan Google Apps Script
- [ ] Dokumentasi diperbarui bila diperlukan

---

# Anti-Patterns

Hindari:

- Function lebih dari ±100 baris tanpa alasan.
- Nested if lebih dari 3 level.
- Magic number tanpa konstanta.
- Menyalin kode (copy-paste) jika bisa dijadikan fungsi.
- Mencampur business logic dengan DOM manipulation.
- Menggunakan global variable untuk state yang seharusnya lokal.

---

# Change History

| Version | Date       | Description               |
| ------- | ---------- | ------------------------- |
| 1.0.0   | 2026-07-24 | Initial coding guidelines |
