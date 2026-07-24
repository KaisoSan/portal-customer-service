# Decision Log

Version : 1.0.0

Last Updated : 2026-07-24

Status : Active

Owner : Portal Customer Service Digital

---

# Purpose

Dokumen ini mencatat seluruh keputusan penting yang diambil selama pengembangan Portal Customer Service Digital.

Tujuannya bukan mencatat perubahan kode, melainkan alasan di balik keputusan tersebut agar mudah dipahami di masa depan.

---

# When to Add a Decision

Tambahkan entri baru apabila terjadi:

- Perubahan arsitektur.
- Perubahan workflow.
- Perubahan standar coding.
- Perubahan struktur project.
- Perubahan desain sistem.
- Keputusan yang berpotensi memengaruhi pengembangan di masa depan.

Perubahan kecil seperti perbaikan bug atau perubahan UI tidak perlu dicatat di sini.

---

# Decision Template

Gunakan format berikut:

## DEC-XXX

### Date

YYYY-MM-DD

### Title

Judul keputusan.

### Context

Latar belakang masalah.

### Decision

Keputusan yang diambil.

### Alternatives Considered

Alternatif yang dipertimbangkan.

### Consequences

Dampak positif maupun negatif dari keputusan tersebut.

### Related Documents

- Architecture
- AI Development Guide
- Coding Guidelines
- Roadmap

---

# Decision Log

## DEC-001

### Date

2026-07-24

### Title

Menggunakan Single Page Application (SPA)

### Context

Portal terdiri dari beberapa halaman yang saling berhubungan dan membutuhkan pengalaman pengguna yang cepat tanpa reload halaman.

### Decision

Menggunakan pendekatan Single Page Application dengan mekanisme `showPage(page)` untuk navigasi antar halaman.

### Alternatives Considered

- Multi Page Application
- Beberapa deployment Apps Script

### Consequences

Positif:

- Navigasi lebih cepat.
- Pengalaman pengguna lebih baik.
- Struktur aplikasi lebih konsisten.

Negatif:

- Lifecycle halaman perlu dikelola dengan baik.

### Related Documents

- ARCHITECTURE.md

---

## DEC-002

### Date

2026-07-24

### Title

Memisahkan lifecycle Dashboard dan Pengaduan

### Context

Dashboard sebelumnya bertanggung jawab memuat data Pengaduan sehingga terjadi coupling antar halaman.

### Decision

Dashboard hanya memuat data monitoring, sedangkan halaman Pengaduan bertanggung jawab memuat datanya sendiri.

### Alternatives Considered

- Tetap menggunakan satu refresh global.

### Consequences

Positif:

- Mengurangi request yang tidak diperlukan.
- Setiap halaman memiliki tanggung jawab yang jelas.
- Lebih mudah dikembangkan.

Negatif:

- Auto refresh perlu mengetahui halaman yang sedang aktif.

### Related Documents

- ARCHITECTURE.md
- AI_DEVELOPMENT_GUIDE.md

---

# Change History

| Version | Date       | Description          |
| ------- | ---------- | -------------------- |
| 1.0.0   | 2026-07-24 | Initial decision log |
