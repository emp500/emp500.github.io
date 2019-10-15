// Class: Enemy
// These are the enemies falling down
class Enemy {
    constructor(location, velocity) {
        this.location = location;
        this.oldLocation = subtractVectors(location, velocity);
        this.kana = pickRandomCharacter(CURRENT_CHARSET);
        this.radius = 20;
        this.sides = 4;

        this.destroyed = false;
        this.hitTaken = false;

    }

    draw(c) {
        let ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        
        ctx.fillText(`${this.kana.jp}`, this.location[0], this.location[1]);
    }

    playHitSound() {
        // Play destroyed sound when... destroyed.
        let destroyedSound = new Audio("pepSound5.mp3");
            destroyedSound.loop = false;
            destroyedSound.play();
    }
}

// Pick a random character from the given charset array
function pickRandomCharacter(kana) {
    return kana[Math.floor(Math.random() * kana.length)];
}