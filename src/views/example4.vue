<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
  <div class="block5">
      <div class="bb5">
        <h4>星期五你和另一個人在日本看海      —潘柏霖</h4>
        <p>
          很多事情我都試著記得<br>
          卻總是忘記<br>
          像是現在我在這裡<br>
          你在那裡<br>
          我在寫那些不在這裡的事情<br>
        </p>
        <p>
          像是你的醒。那將一點點<br>
          留下來給我的醒<br>
          你那很容易被弄髒的白色內褲<br>
          你的牙齒輕咬蘋果<br>
          唇舌抵著皮肉<br>
          明明只是靠近<br>
          就已經進的那麼徹底
        </p>
        <p>
          我求你了。答應我好嗎<br>
          當你要走的時候<br>
          留給我一些能讓我想起你的東西<br>
          一支你咬過的筆<br>
          穿過的短袖上衣<br>
          你可以穿著。好幾天都不要洗<br>
          和襪子。襪子保存了你的腳印
        </p>
        <p>
          留給我你喜歡的一本書<br>
          在書上寫滿你的筆記。如果我是你<br>
          最喜歡的書就好了。你可以<br>
          寫下你，在我的身體。<br>
          把我變成你的。弄髒我。撕下我<br>
          折成星星，放到你的夢裡。
        </p>
        <p>
          離開前的晚上多躺在我身邊幾分鐘。<br>
          多念幾次我的名字。<br>
          把你的名字留給我。你知道名字<br>
          是沒有榮耀的東西嗎。就像是刷牙/睡覺/吃飯<br>
          那都缺乏冒險和寶藏，就只是<br>
          每天都需要的東西。拜託你答應我<br>
          之後不要和任何人<br>
          分享這些事情。
        </p>
        <p>
          或許你會愛上別人。那幾個人<br>
          或許有我的樣子。或許沒有<br>
          我並不在意。我只要你保持不動<br>
          保持我看見你/你看見我的那個樣子<br>
          不要變好/也不要變壞<br>
          我只想記得那個對著我笑，大聲說<br>
          絕對要帶我去看海的你
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
        var step = 30;
        var off = 30;

        // let w = window.innerWidth;
        // let h = window.innerHeight;
        

        

        p5.setup = () => {
            p5.createCanvas(w, h);
            p5.colorMode(p5.HSB, 360, 100, 100);
        };

        p5.draw = () => {
            p5.background(0);
            p5.randomSeed(1);
            p5.fill(0, 0, 100, 40);
            for (var y = -off; y <= p5.height + off; y = y + p5.map(y, -off, p5.height + off, step * 2, step / 2)) {
              
              p5.noStroke();
              p5.fill(p5.random(185, 240), p5.random(55, 85), p5.random(50, 100), p5.random(0.8, 1));
              p5.beginShape();
              for (var x = -off; x <= p5.width + off; x = x + step) {
                var n = p5.noise(y * 0.1, x * 0.001, (y + p5.frameCount)  *0.005);
                n = p5.map(n, 0, 1, -p5.height/3, p5.height/3);
                var y2 = y + n;
                p5.vertex(x, y2);
              }
              p5.vertex(p5.width + off, p5.height + off);
              p5.vertex(-off, p5.height + off);
              p5.endShape(p5.CLOSE);
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
.block5{
    position: fixed;
    
    width: 1200px;
    height: 400px;
    background-color: rgb(63, 63, 63, 0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -600px;
    
}
.bb5{
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