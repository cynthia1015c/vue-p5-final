<template>
  <div class="container">
    <div class="p5Canvas"></div>
  </div>
  <div class="block">
      <div class="bb">
        <h2>關於 詩、p5.js</h2>
        <h3>我挑選了四首我很喜歡的詩，並以它們各自帶給我的感覺分別設計了不同的p5。</h3>
      </div>
      
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = window.innerWidth;
        let h = window.innerHeight;
        let xoff = 0.0;

        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.background(0);
        };

        p5.draw = () => {
            let wave1 = (p5.sin(p5.frameCount * 0.05 + (0.05) * 0.05) * 100);
            let wave2 = (p5.cos(p5.frameCount * 0.05 + (0.05) * 0.05) * 100);


            xoff = xoff + 0.1;
            let n = p5.noise(xoff) * 200;
            let c1 = p5.noise(xoff) * 255;
            let c2 = p5.noise(xoff) * 255;

            p5.background(0,10); 
            
            p5.noStroke();
            
            p5.fill(255); 
            var x = p5.random(50, w-50);
            var y = p5.random(50, h-50);
            var ww = p5.random(10, 40);
            p5.rect(x, y, ww, 100+wave1);

        };

        
    }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
}
</script>

<style>
#p5Canvas {
  width: 100vw;
  position: relative;
}

main {
  margin: 0 auto;
  /* width: 90vw; */
}
.block{
    position: fixed;
    
    width: 650px;
    height: 200px;
    background-color: rgb(63, 63, 63, 0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -325px;
    
}
h2{
    background-color: rgb(63, 63, 63, 0);
    font-size: 20px;
    
}
h3{
    background-color: rgb(63, 63, 63, 0);
    padding: 10px;
    font-size: 16px;
    
}
.bb{
    background-color: rgb(63, 63, 63, 0);
}
</style>