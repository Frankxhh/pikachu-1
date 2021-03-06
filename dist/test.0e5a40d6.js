const string = `
.skin * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.skin {
    background-color: #FFE600;
    min-height: 50vh;
    position: relative;
}

.eye {
    position: absolute;
    left: 50%;
    margin-left: -32px;
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    top: 100px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 5px;
    top: 3px;
    width: 25px;
    height: 25px;
    border: 3px solid black;
}

.eye.left {
    transform: translateX(-100px);

}

.eye.right {
    transform: translateX(100px);
}

.nose {
    width: 0px;
    height: 0px;
    border: 10px solid black;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: 150px;
    z-index: 3;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    animation: wave 200ms infinite linear;
}

.yuan {
    position: absolute;
    background-color: black;
    width: 20px;
    height: 8px;
    top: -18px;
    left: -50%;
    margin-left: -10px;
    border-radius: 10px 10px 0 0;
}

.face{
    position: absolute;
    border: 3px solid black;
    width: 82px;
    height: 82px;
    left: 50%;
    margin-left: -41px;
    top: 185px;
    border-radius: 50%;
    background-color: #f00;
}
.face.left{
    transform: translateX(-165px);
}
.face.right{
    transform: translateX(165px);
}

.mouth {
    position: absolute;
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    top: 170px;
}

.mouth .up {
    position: relative;
    top: -20px;
}

.mouth .up .lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: #FFE600;
    z-index: 2;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-52.5px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(52.5px);
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 10px;
    height: 30px;
    /* border: 1px solid red; */
    background-color: #FFE600;
    position: absolute;
    bottom: 0;
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    position: absolute;
    width: 100%;
    height: 150px;
    /* border: 1px solid black; */
    top: 5px;
    overflow: hidden;
    /* left: 50%; */
}

.mouth .down .yuan1{
    border: 3px solid black;
    position: absolute;
    width: 100px;
    height: 1000px;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border-radius: 75px/200px;
    background-color: #9b000a;
    overflow: hidden;
    box-shadow: 0px 0px 3px 0px black;

}
.mouth .down .yuan1 .yuan2{
    position: absolute;
    border: 1px solid green;
    background-color: green;
    width: 100px;
    height: 125px;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px 50px 0 0;
    background-color: #ff485f;

}
`;
const demo = document.querySelector('#demo');
const demo2 = document.querySelector('#demo2');
let n = 1;
let time;
// console.log(n + ':' + string.substring(0, n))
let time1 = 50;
// ??????
let player = {
    init: ()=>{
        demo.innerText = string.substring(0, n);
        demo2.innerHTML = string.substring(0, n);
        player.play();
        player.bindEvents();
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnRepeat': 'repeat'
    },
    bindEvents: ()=>{
        for(let key in player.events)//???????????????????????????????????????????????????????????????
        if (player.events.hasOwnProperty(key)) {
            const value = player.events[key];
            document.querySelector(key).onclick = player[value];
        }
    },
    run: ()=>{
        n += 1;
        if (n > string.length) {
            window.clearInterval(time);
            return; //??????????????????????????????????????????
        }
        // console.log(n + ':' + string.substring(0, n))
        demo.innerText = string.substring(0, n);
        demo2.innerHTML = string.substring(0, n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: ()=>{
        window.clearInterval(time);
        time = setInterval(player.run, time1);
    },
    pause: ()=>{
        window.clearInterval(time);
    },
    slow: ()=>{
        player.pause();
        time1 = 300;
        player.play();
    },
    normal: ()=>{
        player.pause();
        time1 = 50;
        player.play();
    },
    fast: ()=>{
        player.pause();
        time1 = 0;
        player.play();
    },
    repeat: ()=>{
        n = 1;
        player.pause();
        time1 = 50;
        player.play();
    }
};
player.init();

//# sourceMappingURL=test.0e5a40d6.js.map
