// 1. Membuat class Player sebagai blueprint [cite: 19]
class Player {
    // Constructor dijalankan saat 'new Player' dipanggil [cite: 19]
    constructor(x, y, color) {
        this.x = x;           // Menyimpan posisi horizontal [cite: 62]
        this.y = y;           // Menyimpan posisi vertikal [cite: 63]
        this.color = color;   // Property warna dinamis sesuai tugas [cite: 58, 64]
    }

    // Method untuk menggambar objek ke layar [cite: 40, 48]
    draw(ctx) {
        ctx.fillStyle = this.color;          // Menggunakan warna dari property [cite: 66]
        ctx.fillRect(this.x, this.y, 40, 40); // Menggambar kotak (x, y, lebar, tinggi) [cite: 42]
    }
}

// 2. Inisialisasi Canvas [cite: 36, 38]
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 3. Membuat beberapa objek player dengan warna berbeda (Warna Dinamis) [cite: 68]
const player1 = new Player(100, 150, "blue");   // Player biru [cite: 44]
const player2 = new Player(250, 100, "red");    // Player merah
const player3 = new Player(400, 200, "green");  // Player hijau

// 4. Menampilkan semua player ke layar [cite: 44]
player1.draw(ctx);
player2.draw(ctx);
player3.draw(ctx);