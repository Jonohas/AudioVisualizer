
class Visualizer {
    constructor(){
        this.update = 0;
    }

    audioListener(audioArray) {
        this.lastArray = this.audioArray;
        this.audioArray = this.changeArray(audioArray);
    }

    update() {

    }

    setup(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.canvas.width = this.canvas.scrollWidth;
        this.canvas.height = this.canvas.scrollHeight;

        this.cx = this.canvas.width / 2;
        this.cy = this.canvas.height / 2;

        this.update();


        this.loop();
    }
    loop() {
        if (this.update == 1) {
            this.reload();
            this.update = 0;
        }
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}
