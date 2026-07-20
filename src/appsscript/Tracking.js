/**
 * ==========================================
 * Tracking Pengaduan
 * Digunakan oleh Portal Nasabah
 * ==========================================
 */
/**
 * ==========================================
 * CEK STATUS PENGADUAN
 * ==========================================
 */
function checkComplaintStatus(ticketNumber) {

  const ss = SpreadsheetApp.openById(
    DATABASE.PENGADUAN_SHEET_ID
  );

  const sheet = ss.getSheetByName(
    DATABASE.SHEET_NAME
  );

  const data = sheet.getDataRange().getValues();

  // Mulai dari baris kedua (skip header)
  for (let i = 1; i < data.length; i++) {

    // Kolom S = Nomor Pengaduan
    if (String(data[i][19]).trim() === String(ticketNumber).trim()) {

      return {
        success: true,
        nomor: data[i][19],
        status: data[i][17],
        terakhir: Utilities.formatDate(
          new Date(data[i][18]),
          Session.getScriptTimeZone(),
          "dd/MM/yyyy HH:mm:ss"
        ),
        catatan: data[i][20] || "",
      };

    }

  }

  return {
    success: false,
    message: "Nomor pengaduan tidak ditemukan."
  };

}

function testCheckStatus() {

  const result = checkComplaintStatus("PGD-20260713-0009");

  Logger.log(result);

}