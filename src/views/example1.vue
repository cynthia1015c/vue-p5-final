<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
  <div class="block1">
      <div class="bb1">
        <h4>汙濁了的悲傷之中      —中原中也</h4>
        <p>
          被汙濁了的悲傷之中<br>
          今日天空也下著小雪<br>
          被汙濁了的悲傷之中<br>
          今日就連風也吹得過分
        </p>
        <p>
          被汙濁了的悲傷啊<br>
          猶如狐狸的裘革<br>
          被汙濁了的悲傷啊<br>
          因小雪灑落而縮起身
        </p>
        <p>
          被汙濁了的悲傷啊<br>
          不奢望什麼不渴求什麼<br>
          被汙濁了的悲傷啊<br>
          在倦怠中夢著死亡         
        </p>
        <p>
          被汙濁了的悲傷之中<br>
          痛心得令人生懼
        </p>
        <p>
          被汙濁了的悲傷之中<br>
          無計可施的夕陽西沉著……
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
        var walX;
        var walY;
        var speed = 30;

        // let w = window.innerWidth;
        // let h = window.innerHeight;
        

        

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.colorMode(p5.HSB,100);
            walX = p5.width/2;
            walY = p5.height/2;
        };

        p5.draw = () => {
            p5.background(0,0,0,0);
            p5.fill( walY/3,100,50,0.4);
            p5.noStroke();
            p5.ellipse(walX,walY,300,300);
            
            walX = walX + p5.random(speed*-1, speed);
            walY = walY + p5.random(speed*-1, speed);
            
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
.block1{
    position: fixed;
    
    width: 550px;
    height: 300px;
    background-color: rgb(63, 63, 63, 0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -275px;
    
}
.bb1{
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