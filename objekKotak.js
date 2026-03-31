// ===============================
// 1. Ambil Canvas dan Context
// ===============================
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


// ===============================
// 2. Class Player (OOP)
// ===============================
class Player {

    constructor(x, y){
        // posisi awal player
        this.x = x;
        this.y = y;

        // kecepatan gerak player
        this.speed = 5;
    }

    // Method untuk menggambar player
    draw(ctx){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 40, 40);
    }

    // Method gerakan ke kiri
    moveLeft(){
        this.x -= this.speed;
    }

    // Method gerakan ke kanan
    moveRight(){
        this.x += this.speed;
    }

    // Method gerakan ke atas
    moveUp(){
        this.y -= this.speed;
    }

    // Method gerakan ke bawah
    moveDown(){
        this.y += this.speed;
    }
}


// ===============================
// 3. Membuat Object Player
// ===============================
const player = new Player(100, 150);


// ===============================
// 4. Event Keyboard (Input User)
// ===============================
// Mendengar tombol keyboard ditekan
document.addEventListener("keydown", function(event){

    // Cek tombol yang ditekan
    if(event.key === "ArrowLeft"){
        player.moveLeft();
    }
    else if(event.key === "ArrowRight"){
        player.moveRight();
    }
    else if(event.key === "ArrowUp"){
        player.moveUp();
    }
    else if(event.key === "ArrowDown"){
        player.moveDown();
    }

});


// ===============================
// 5. Game Loop (Agar terus update)
// ===============================
function gameLoop(){

    // Membersihkan layar sebelum menggambar ulang
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar player di posisi terbaru
    player.draw(ctx);

    // Mengulang loop terus menerus
    requestAnimationFrame(gameLoop);
}

// Menjalankan game pertama kali
gameLoop();