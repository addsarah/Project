// ==============================
// SETUP CANVAS
// ==============================
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ==============================
// CLASS Player (OOP)
// ==============================
class Player {
    // Perbaikan: "hero.png" harus dalam tanda kutip sebagai string
    constructor(x, y, imageSrc = "hero.png") {
        this.x = x;
        this.y = y;
        this.speed = 5;

        this.image = new Image();
        this.image.src = imageSrc;

        // Logika pengecekan apakah gambar berhasil dimuat
        this.image.onload = () => {
            this.useImage = true;
        };
        this.image.onerror = () => {
            this.useImage = false; // Jika file tidak ditemukan, tetap gunakan kotak
            console.error("Gagal memuat gambar: " + imageSrc);
        };
    }

    draw(ctx) {
        // Jika gambar sudah siap, gunakan gambar. Jika tidak, kotak biru.
        if (this.useImage) {
            ctx.drawImage(this.image, this.x, this.y, 50, 50);
        } else {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.x, this.y, 50, 50);
        }
    }

    // METHOD GERAK: Logika pembatasan dihapus agar bisa keluar layar
    moveLeft() {
        this.x -= this.speed;
    }
    moveRight() {
        this.x += this.speed;
    }
    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
    }
}

// ==============================
// INISIALISASI & LOOP
// ==============================
// Pastikan file "hero.png" berada di folder yang sama dengan file ini
const hero = new Player(100, 150, "hero.png");

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Bersihkan layar
    hero.draw(ctx); // Gambar ulang
    requestAnimationFrame(gameLoop);
}
gameLoop();

// ==============================
// INPUT KEYBOARD
// ==============================
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") hero.moveLeft();
    if (e.key === "ArrowRight") hero.moveRight();
    if (e.key === "ArrowUp") hero.moveUp();
    if (e.key === "ArrowDown") hero.moveDown();
});


// ==============================
// GAME LOOP
// ==============================

function gameLoop() {

    // Membersihkan layar sebelum render ulang
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar hero
    hero.draw(ctx);

    // Loop terus menerus (animasi)
    requestAnimationFrame(gameLoop);
}

// Menjalankan game loop pertama kali
gameLoop();