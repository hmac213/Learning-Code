class Robot {
    constructor(game, width, height, turret, swerve, startX, startY, number) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.turret = turret;
        this.swerve = swerve;
        this.x = startX;
        this.y = startY;
        this.number = number;
    }

    update() {

    }

    draw(context) {
        context.fillStyle('red');
        context.fillRect(this.x, this.y, this.width, this.height);
        if (this.turret) {
            context.fillStyle('black');
            context.fillRect(this.x, this.y, 0.5*this.width, 0.5*this.height);
        }
    }
}