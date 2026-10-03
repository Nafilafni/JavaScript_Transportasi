// Class Pelanggan
class Pelanggan {
    // Properti pelanggan
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    // Method untuk mencatat transaksi penyewaan kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }
}

// Class induk Kendaraan
class Kendaraan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }
}

// Class turunan: jenisnya otomatis "Mobil"
class Mobil extends Kendaraan {
    constructor(nama) {
        super(nama, "Mobil");
    }
}

// Class turunan: jenisnya otomatis "Motor"
class Motor extends Kendaraan {
    constructor(nama) {
        super(nama, "Motor");
    }
}

// Membuat data pelanggan
let pelanggan1 = new Pelanggan("Nafila", "088212345678", null);
let pelanggan2 = new Pelanggan("Tasya", "083898765432", null);
let pelanggan3 = new Pelanggan("lia", "081545678912", null);

// Menyimpan semua pelanggan dalam array
let daftarPelanggan = [pelanggan1, pelanggan2, pelanggan3];

// Mencatat transaksi penyewaan kendaraan
pelanggan1.sewaKendaraan(new Mobil("Mitsubishi Xpander"));
pelanggan2.sewaKendaraan(new Motor("Honda Scoopy"));
pelanggan3.sewaKendaraan(new Mobil("Daihatsu Ayla"));

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
console.log("DAFTAR PELANGGAN YANG SEDANG MENYEWA KENDARAAN");
console.log("-----------------------------");

daftarPelanggan.forEach(function (p) {
    if (p.kendaraanDisewa !== null) {
        console.log("Nama: " + p.nama);
        console.log("Nomor Telepon: " + p.nomorTelepon);
        console.log("Jenis Kendaraan: " + p.kendaraanDisewa.jenis);
        console.log("Kendaraan Disewa: " + p.kendaraanDisewa.nama);
        console.log("-----------------------------");
    }
});