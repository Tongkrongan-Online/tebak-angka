alert(
  "selamat datang di permaiann game tebak angka yang sangat sederhana memanfaatkan prompt website \n dibuat dengan bahasa pemrograman javascript"
);

let ulangGame = true;
while (ulangGame) {
  let kamu = "0";
  let saya = Math.random();

  if (saya < 0.1 && saya > 0) {
    saya = 1;
  } else if (saya > 0.1 && saya < 0.2) {
    saya = 2;
  } else if (saya > 0.2 && saya < 0.3) {
    saya = 3;
  } else if (saya > 0.3 && saya < 0.4) {
    saya = 4;
  } else if (saya > 0.4 && saya < 0.5) {
    saya = 5;
  } else if (saya > 0.5 && saya < 0.6) {
    saya = 6;
  } else if (saya > 0.6 && saya < 0.7) {
    saya = 7;
  } else if (saya > 0.7 && saya < 0.8) {
    saya = 8;
  } else if (saya > 0.8 && saya < 0.9) {
    saya = 9;
  } else {
    saya = 10;
  }

  let nyawa = 3;
  while (nyawa >= 1 && kamu != saya) {
    alert("nyawa kamu adalah " + nyawa);
    kamu = parseInt(prompt("tebak angka dari 1-10"));
    if (kamu == saya) {
      alert(
        "🎉selamat tebakan kamu benar angka yang dimaksud adalah " + kamu + "🎉"
      );
    } else if (saya > kamu && !(kamu > 10)) {
      alert("angka " + kamu + " terlalu kecil masukan angka yang lebih besar");
      nyawa--;
    } else if (saya < kamu && !(kamu > 10)) {
      alert("angka " + kamu + " terlalu besar masukan angka lebih kecil");
      nyawa--;
    } else {
      alert(
        "mohon diperhatikan yang anda masukan \n 1. hanya boleh angka 1-10 ✅ \n 2. tidak ada spasi ✅ \n 3. tidak mengandung huruf ✅"
      );
    }

    if (nyawa == 0) {
      alert("mohon maaf, anda sudah kehabisan nyawa 😪");
    }
  }

  ulangGame = confirm(
    "apakah anda ingin bermain tebak angka lagi ? \n tekan cancel untuk berhenti \n tekan ok untuk mencoba lagi"
  );
}
