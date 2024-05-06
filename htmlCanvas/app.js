import { Robot } from './robot.js';

window.addEventListener('load', function() {
    const scaleMetric = 49.367;
    const scaleImperial = scale / 39.37;
    const canvas = document.getElementById('primary-field-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 813;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.robot = new Robot(this, 28 * scaleImperial, 30 * scaleImperial, true, true, 0, 0, 254);
        }
        update() {

        }

        draw(context) {
            ctx.clear
            this.robot.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);

    function animate() {
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
});