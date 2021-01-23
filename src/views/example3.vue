<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
  <div class="block3">
      <div class="bb3">
        <h4>你不知道我多希望能吃掉你的痛      —潘柏霖</h4>
        <p>
          不可思議的是<br>
          我愛你<br>
          全世界的眼淚<br>
          眼淚都變成蜂蜜<br>
        </p>
        <p>
          你是發生在我身上<br>
          最重要的傷口<br>
          傷口長出枝芽<br>
          一開始很痛<br>
          後來長出花果<br>
          有蝴蝶和蜂鳥<br>
        </p>
        <p>
          現在想到你<br>
          全是妳快樂的樣子<br>
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


        // let w = window.innerWidth;
        // let h = window.innerHeight;
        

        

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.frameRate(80);
        };

        p5.draw = () => {
            p5.background(0,0,0,50);
            p5.circle(p5.mouseX, p5.mouseY, 15);
            p5.fill(255);
            p5.noStroke();
            if(p5.mouseIsPressed){
              var x = p5.random(-70, 60);
              var y = p5.random(-70, 75);
              var z = p5.random(-70, 88);
              p5.noFill();
              p5.stroke(255);
              p5.triangle(p5.mouseX+x, p5.mouseY+y, p5.mouseX+y, p5.mouseY+x, p5.mouseX+z, p5.mouseY+z);
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
.block3{
    position: fixed;
    
    width: 450px;
    height: 350px;
    background-color: rgb(63, 63, 63, 0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    top: 50%;
    left: 50%;
    margin: -175px 0 0 -225px;
    
}
.bb3{
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