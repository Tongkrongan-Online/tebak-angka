alert(
  "selamat datang di permainan game tebak angka yang sangat sederhana memanfaatkan prompt website \n dibuat dengan bahasa pemrograman javascript \n dibuat oleh \n Muhammad Dava Fahreza"
);

let pilihan = "fuck";
while (pilihan != "easy" && pilihan != "medium" && pilihan != "hard") {
  pilihan = prompt(
    "silahkan pilih level tebak angka ketik dibawah \n easy(1-10) \n medium(1-20) \n hard(1-30) \n\n contoh ketik: hard"
  ).toLowerCase();
}

let maxAngka;
if (pilihan == "easy") {
  maxAngka = 10;
} else if (pilihan == "medium") {
  maxAngka = 20;
} else if (pilihan == "hard") {
  maxAngka = 30;
} else {
  maxAngka = "eror";
}

let ulangGame = true;
while (ulangGame) {
  let kamu = "0";
  let saya = Math.random();

  if (pilihan == "easy") {
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
  } else if (pilihan == "medium") {
    if (saya <= 0.05) {
      saya = 1;
    } else if (saya <= 0.1) {
      saya = 2;
    } else if (saya <= 0.15) {
      saya = 3;
    } else if (saya <= 0.2) {
      saya = 4;
    } else if (saya <= 0.25) {
      saya = 5;
    } else if (saya <= 0.3) {
      saya = 6;
    } else if (saya <= 0.35) {
      saya = 7;
    } else if (saya <= 0.4) {
      saya = 8;
    } else if (saya <= 0.45) {
      saya = 9;
    } else if (saya <= 0.5) {
      saya = 10;
    } else if (saya <= 0.65) {
      saya = 11;
    } else if (saya <= 0.7) {
      saya = 12;
    } else if (saya <= 0.65) {
      saya = 13;
    } else if (saya <= 0.7) {
      saya = 14;
    } else if (saya <= 0.75) {
      saya = 15;
    } else if (saya <= 0.8) {
      saya = 16;
    } else if (saya <= 0.85) {
      saya = 17;
    } else if (saya <= 0.9) {
      saya = 18;
    } else if (saya <= 0.95) {
      saya = 19;
    } else {
      saya = 20;
    }
  } else if (pilihan == "hard") {
    if (saya <= 0.033) {
      saya = 1;
    } else if (saya <= 0.066) {
      saya = 2;
    } else if (saya <= 0.099) {
      saya = 3;
    } else if (saya <= 0.132) {
      saya = 4;
    } else if (saya <= 0.165) {
      saya = 5;
    } else if (saya <= 0.198) {
      saya = 6;
    } else if (saya <= 0.231) {
      saya = 7;
    } else if (saya <= 0.264) {
      saya = 8;
    } else if (saya <= 0.297) {
      saya = 9;
    } else if (saya <= 0.33) {
      saya = 10;
    } else if (saya <= 0.363) {
      saya = 11;
    } else if (saya <= 0.396) {
      saya = 12;
    } else if (saya <= 0.429) {
      saya = 13;
    } else if (saya <= 0.462) {
      saya = 14;
    } else if (saya <= 0.495) {
      saya = 15;
    } else if (saya <= 0.538) {
      saya = 16;
    } else if (saya <= 0.571) {
      saya = 17;
    } else if (saya <= 0.604) {
      saya = 18;
    } else if (saya <= 0.637) {
      saya = 19;
    } else if (saya <= 0.67) {
      saya = 20;
    } else if (saya <= 0.703) {
      saya = 21;
    } else if (saya <= 0.736) {
      saya = 22;
    } else if (saya <= 0.769) {
      saya = 23;
    } else if (saya <= 0.802) {
      saya = 24;
    } else if (saya <= 0.835) {
      saya = 25;
    } else if (saya <= 0.868) {
      saya = 26;
    } else if (saya <= 0.901) {
      saya = 27;
    } else if (saya <= 0.934) {
      saya = 28;
    } else if (saya <= 0.967) {
      saya = 29;
    } else {
      saya = 30;
    }
  } else {
    saya = "error";
  }

  let nyawa = 3;
  while (nyawa >= 1 && kamu != saya) {
    alert("nyawa kamu adalah " + nyawa);
    kamu = parseInt(prompt("tebak angka dari 1-10 \n ketik dibawah ini 👇"));
    if (kamu == saya) {
      alert(
        "🎉selamat tebakan kamu benar" +
          "🎉 \n" +
          "angka yang dicari adalah " +
          kamu
      );
    } else if (saya > kamu && !(kamu > maxAngka)) {
      alert(
        "angka " +
          kamu +
          "\n clue: terlalu kecil masukan angka yang lebih besar"
      );
      nyawa--;
    } else if (saya < kamu && !(kamu > maxAngka)) {
      alert(
        "angka " + kamu + "\n clue: terlalu besar masukan angka lebih kecil"
      );
      nyawa--;
    } else {
      alert(
        "mohon diperhatikan yang anda masukan \n 1. tidak boleh lebih dari angka " +
          maxAngka +
          " ✅ \n 2. tidak ada spasi ✅ \n 3. tidak mengandung huruf ✅"
      );
    }

    if (nyawa == 0) {
      alert(
        "mohon maaf, anda sudah kehabisan nyawa 😪 \n angka yang dicari adalah angka " +
          saya
      );
    }
  }

  ulangGame = confirm(
    "apakah anda ingin menebak angka lagi ? \n tekan ok untuk bermain lagi \n tekan cancel untuk berhenti"
  );
}
