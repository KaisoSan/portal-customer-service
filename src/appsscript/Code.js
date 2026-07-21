/**
 * ============================================
 * Portal Customer Service Digital
 * BNI KC Situbondo
 * ============================================
 * Version : 1.0.0
 * Author  : Ossama Setiarso
 */
/**
 * Konfigurasi Aplikasi
 */
const APP_CONFIG = {
  APP_NAME: "Portal Layanan Nasabah",

  BRANCH: "Customer Service",

  OFFICE: "BNI KC Situbondo",

  VERSION: "Build 1.3.0",

  PORTAL_URL:
    "https://script.google.com/macros/s/AKfycbzs-NXULF06YDHVSqUC996N6CLaxQk9nlnd7tCx6jRvu3vDL_hwK3hzAIkWAWDvnLYQ/exec",

  LOGO: "https://drive.google.com/thumbnail?id=1sSUvDVs4cTTuwEaZvzKDuQbIGBaRfh46&sz=w1000",

  COPYRIGHT: "© 2026 PT Bank Negara Indonesia (Persero) Tbk.",

  FORMS: {
    SIMPLI:
      "https://docs.google.com/forms/d/e/1FAIpQLScaHSAX2vWkX4BUl3a8VGlvUdls0j6nmrtoJDzrhFyRuAHvwA/viewform?usp=dialog",

    PENGADUAN:
      "https://docs.google.com/forms/d/e/1FAIpQLSdVUAMVTSA2eeFHbR6LaMSzo_ucXzimBeSs4IYURdgFAcZHXA/viewform?usp=dialog",
  },
};

const DATABASE = {
  PENGADUAN_SHEET_ID: "12FJl9StX9Lo6Fs5Gsc7B5ZvT9yg7NMZpwdV9lh72Xy8",

  SHEET_NAME: "Form Responses 1",
};

/**
 * Menampilkan halaman sesuai parameter
 */
function doGet(e) {
  const page = e && e.parameter.page ? e.parameter.page : "portal";

  let template;

  switch (page) {
    case "dashboard":
      template = HtmlService.createTemplateFromFile("dashboard");

      break;

    default:
      template = HtmlService.createTemplateFromFile("index");

      break;
  }

  template.config = APP_CONFIG;

  return template
    .evaluate()
    .setTitle(APP_CONFIG.APP_NAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Memanggil file HTML lain
 */
function include(filename) {
  const template = HtmlService.createTemplateFromFile(filename);

  template.config = APP_CONFIG;

  return template.evaluate().getContent();
}

function getConfig() {
  return APP_CONFIG;
}

/**
 * ==========================================
 * DASHBOARD STATISTIK
 * ==========================================
 */
function getDashboardData() {
  const ss = SpreadsheetApp.openById(DATABASE.PENGADUAN_SHEET_ID);

  const sheet = ss.getSheetByName(DATABASE.SHEET_NAME);

  const data = sheet.getDataRange().getValues();

  const result = {
    total: 0,

    waiting: 0,

    received: 0,

    process: 0,

    followup: 0,

    finished: 0,

    closed: 0,
  };

  const statusMap = {
    "Menunggu Verifikasi": "waiting",

    Diterima: "received",

    Diproses: "process",

    "Menunggu Tindak Lanjut": "followup",

    Selesai: "finished",

    Ditutup: "closed",
  };

  for (let i = 1; i < data.length; i++) {
    result.total++;

    const status = String(data[i][17]).trim();

    if (statusMap[status]) {
      result[statusMap[status]]++;
    }
  }

  return result;
}

function getChartData() {
  const data = getDashboardData();

  return {
    labels: [
      "Menunggu Verifikasi",
      "Diterima",
      "Diproses",
      "Menunggu Tindak Lanjut",
      "Selesai",
      "Ditutup",
    ],

    values: [data.waiting, data.received, data.process, data.followup, data.finished, data.closed],
  };
}

function getActiveComplaints() {
  const ss = SpreadsheetApp.openById(DATABASE.PENGADUAN_SHEET_ID);
  const sheet = ss.getSheetByName(DATABASE.SHEET_NAME);

  const data = sheet.getDataRange().getValues();

  const result = [];

  for (let i = 1; i < data.length; i++) {
    const status = String(data[i][17]).trim();

    const masalah = String(data[i][10]);

    result.push({
      // Data tabel
      nomor: data[i][19],
      nama: data[i][1],
      masalah: masalah.length > 45 ? masalah.substring(0, 45) + "..." : masalah,
      status: status,
      update: formatTanggal(data[i][18]),

      // Data detail
      rekening: data[i][2],
      atm: data[i][3],
      cabang: data[i][4],
      tanggal: formatTanggal(data[i][5]),
      nominal: data[i][6],
      terminal: data[i][7],
      record: data[i][8],
      hp: data[i][9],
      email: data[i][16],
      catatan: data[i][20] || "",

      // Link dokumen
      fotoKtp: data[i][11],
      fotoAtm: data[i][12],
      fotoBuku: data[i][13],
      fotoTransaksi: data[i][15],
    });
  }

  result.sort((a, b) => new Date(b.update) - new Date(a.update));

  return result;
}

function testActiveComplaints() {
  const data = getActiveComplaints();
  Logger.log(JSON.stringify(data, null, 2));
}

function getComplaintDetail(nomor) {
  const ss = SpreadsheetApp.openById(DATABASE.PENGADUAN_SHEET_ID);
  const sheet = ss.getSheetByName(DATABASE.SHEET_NAME);

  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][19]) === String(nomor)) {
      return {
        nomor: data[i][19],
        nama: data[i][1],
        rekening: data[i][2],
        atm: data[i][3],
        cabang: data[i][4],
        tanggal: formatTanggal(data[i][5]),
        nominal: data[i][6],
        terminal: data[i][7],
        record: data[i][8],
        hp: data[i][9],
        masalah: data[i][10],
        fotoKtp: data[i][11],
        fotoAtm: data[i][12],
        fotoBuku: data[i][13],
        fotoTransaksi: data[i][15],
        email: data[i][16],
        status: data[i][17],
        update: String(data[i][18]),
        catatan: data[i][20] || "",
      };
    }
  }

  return null;
}

function updateComplaintStatus(nomor, status) {
  const ss = SpreadsheetApp.openById(DATABASE.PENGADUAN_SHEET_ID);
  const sheet = ss.getSheetByName(DATABASE.SHEET_NAME);

  // Pakai helper cache
  const data = getComplaintSheetData();

  for (let i = 1; i < data.length; i++) {
    if (String(data[i][19]) === nomor) {
      // Update status
      sheet.getRange(i + 1, 18).setValue(status);

      // Update waktu
      sheet.getRange(i + 1, 19).setValue(new Date());

      // Hapus cache agar pembacaan berikutnya mengambil data terbaru
      CacheService.getScriptCache().remove("COMPLAINT_DATA");

      return true;
    }
  }

  return false;
}

function getImageBase64(driveUrl) {
  const start = Date.now();

  const id = driveUrl.match(/[-\w]{25,}/)[0];

  Logger.log("Ambil ID : " + (Date.now() - start));

  const file = DriveApp.getFileById(id);

  Logger.log("getFile : " + (Date.now() - start));

  const blob = file.getBlob();

  Logger.log("getBlob : " + (Date.now() - start));

  const result = {
    mime: blob.getContentType(),

    data: Utilities.base64Encode(blob.getBytes()),
  };

  Logger.log("Base64 : " + (Date.now() - start));

  return result;
}

function getComplaintSheetData(useCache = true) {
  const cache = CacheService.getScriptCache();

  if (useCache) {
    const cached = cache.get("COMPLAINT_DATA");

    if (cached) {
      return JSON.parse(cached);
    }
  }

  const ss = SpreadsheetApp.openById(DATABASE.PENGADUAN_SHEET_ID);
  const sheet = ss.getSheetByName(DATABASE.SHEET_NAME);

  const data = sheet.getDataRange().getValues();

  cache.put("COMPLAINT_DATA", JSON.stringify(data), 60);

  return data;
}

function formatTanggal(date) {
  if (!date) return "-";

  return Utilities.formatDate(new Date(date), "Asia/Jakarta", "dd MMM yyyy, HH:mm") + " WIB";
}
