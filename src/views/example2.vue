<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
  <div class="block2">
      <div class="bb2">
        <h4>黑洞是黑色的      —任明信</h4>
        <p>
          關於崩潰的故事<br>
          發生在恆心將死之前<br>
          重力不斷增強<br>
          於是形成連<br>
          光都無法遁逃的場域<br>
        </p>
        
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
        var r1;
        var r2;
        var a1 = 0;
        var a2 = 0;
        var a1inc;
        var a2inc;
        var prevx;
        var prevy;
        // let w = window.innerWidth;
        // let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.angleMode(p5.DEGREES);
            p5.background(0);
            
            
            r1 = p5.random(50, 200);
            r2 = p5.random(50, 200);
            
            a1inc = p5.random(0.1, 1);
            a2inc = p5.random(0.1, 1);
        };

        p5.draw = () => {
            p5.translate(p5.width / 2, p5.height / 2);
            p5.stroke(255);
            for(var i = 0;i < 5;i+=1){
              var x1 = r1 * p5.cos(a1);
              var y1 = r1 * p5.sin(a1);
              
              var x2 = x1 + r2 * p5.cos(a2);
              var y2 = y1 + r2 * p5.sin(a2);
              
              var r = p5.map(p5.sin(p5.frameCount), -1, 1, 100, 200);
              var g = p5.map(p5.cos(p5.frameCount), -1, 1, 100, 200);
              var b = p5.map(p5.sin(p5.frameCount), -1, 1, 200, 100);
              p5.stroke(r, g, b);
              p5.line(prevx, prevy, x2, y2);
              
              prevx = x2;
              prevy = y2;
              
              a1 += a1inc;
              a2 += a2inc;
            }

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

.block2{
    position: fixed;
    
    width: 300px;
    height: 200px;
    background-color: rgb(63, 63, 63, 0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -150px;
    
}
.bb2{
    background-color: rgb(63, 63, 63, 0);
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    text-align:justify; 

}
p{
  background-color: rgb(63, 63, 63, 0);
}
h4{
  background-color: rgb(63, 63, 63, 0);
}
</style>