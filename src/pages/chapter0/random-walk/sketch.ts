import type p5 from "p5";

export default function sketch(p: p5) {
  let walker: Walker;

  class Walker {

    x: number;
    y: number;

    constructor() {
      this.x = p.width / 2;
      this.y = p.height / 2;
    }

    show() {
      p.stroke("white");
      p.point(this.x, this.y);
    }

    step() {
      let xstep = p.random(-1, 1);
      let ystep = p.random(-1, 1);

      this.x += xstep;
      this.y += ystep;
    }
  }

  p.setup = () => {
    p.createCanvas(600, 600);
    walker = new Walker();
    p.background("black");
  };

  p.draw = () => {
    walker.step();
    walker.show();
  };
}