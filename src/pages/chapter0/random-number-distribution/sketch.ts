import type p5 from "p5";


export default function sketch(p: p5) {
  let randomCounts: number[] = []
  let total = 20

  p.setup = () => {
    p.createCanvas(600, 600);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0
    }
    p.background("black");
  };

  p.draw = () => {

    let index = p.floor(p.random(randomCounts.length))
    randomCounts[index]++
    p.stroke('white')
    p.fill('black')
    let w = p.width / randomCounts.length

    for (let i = 0; i < randomCounts.length; i++) {
      p.rect(i * w, p.height - randomCounts[i], w - 1, randomCounts[i])
    }
  };
}