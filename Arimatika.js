function tambah() {
    var form = document.getElementById('hitung');
    var a1 = parseFloat(form.angka.value);
    var a2 = parseFloat(form.angka2.value);

    var totaltambah = a1 + a2;
    if (a1 && a2 !== "") {
        form.hasiltambah.value = totaltambah;
    } else {
        alert("Kedua Kolom Angka Tidak Boleh Kosong!!!");
    }

}

function kurang() {
    var form = document.getElementById('hitung');
    var a1 = parseFloat(form.angka.value);
    var a2 = parseFloat(form.angka2.value);
    var totalkurang = a1 - a2;
    if (a1 && a2 !== "") {
        form.hasilkurang.value = totalkurang;
    } else {
        alert("Kedua Kolom Angka Tidak Boleh Kosong!!!");
    }

}

function kali() {
    var form = document.getElementById('hitung');
    var a1 = parseFloat(form.angka.value);
    var a2 = parseFloat(form.angka2.value);
    var totalkali = a1 * a2;
    if (a1 && a2 !== "") {
        form.hasilkali.value = totalkali;
    } else {
        alert("Kedua Kolom Angka Tidak Boleh Kosong!!!");
    }
}

function bagi() {
    var form = document.getElementById('hitung');
    var a1 = parseFloat(form.angka.value);
    var a2 = parseFloat(form.angka2.value);
    var totalbagi = a1 / a2;
    if (a1 && a2 !== "") {
        form.hasilbagi.value = totalbagi;
    } else {
        alert("Kedua Kolom Angka Tidak Boleh Kosong!!!");
    }
}

function pangkat() {
    var form = document.getElementById('hitung');
    var a1 = parseFloat(form.angka.value);
    var a2 = parseFloat(form.angka2.value);
    var totalpangkat = a1 ** a2;
    if (a1 && a2 !== "") {
        form.hasilpangkat.value = totalpangkat;
    } else {
        alert("Kedua Kolom Angka Tidak Boleh Kosong!!!");
    }
}