import React from 'react'
import p5 from 'p5'
import "./space.scss"

const STAR_MAX_DISTANCE = 3;
const STAR_SPEED = 0.02;
const STAR_SIZE = 3;

class Star {
    constructor() {
        this.z = Math.random() * STAR_MAX_DISTANCE;
        this.x = (Math.random() * 2) - 1;
        this.y = (Math.random() * 2) - 1;
    }

    show(sketch) {
        let sx = sketch.map(this.x / this.z, 0, 1, 0, sketch.width);
        let sy = sketch.map(this.y / this.z, 0, 1, 0, sketch.height);
        let ssize = (STAR_MAX_DISTANCE - this.z) * STAR_SIZE;
        sketch.circle(sx, sy, ssize);
    }

    update() {
        this.z -= STAR_SPEED;
        if (this.z < 0) {
            this.z = STAR_MAX_DISTANCE;
        }
    }

}

export default class Space extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    Sketch = (sketch) => {
        let stars = [];

        sketch.setup = () => {
            this.canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
            for (let i = 0; i < 100; i++) {
                stars.push(new Star());
            }
        };

        sketch.draw = () => {
            sketch.background(0);
            sketch.translate(sketch.width/2, sketch.height/2);
            sketch.fill(255);
            stars.forEach(star => {
                star.show(sketch);
                star.update();
            });
        };

        sketch.windowResized = () => {
            sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight)
        }
    }
  
    componentDidMount() {
      this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
  
    render() {
      return (
        <div ref={this.myRef}>
        </div>
      )
    }
}