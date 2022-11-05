const root = document.getElementById('root');

const Render = () => {
    root.style.color = 'green';
    root.style.backgroundColor = 'black';
    root.style.textAlign = 'center';
    root.style.minHeight = '95vh';
    root.style.overflow = 'hidden';
}

Render();

// class CreatNode {
//     constructor(text) {
//         this.id = this.generateId();
//         this.text = text;
//         this.addNode();
//         this.addStyle();
//         this.interval = null;
//     }
//     addNode() {
//         const node = document.createElement('div');
//         node.id = this.id;
//         node.innerText = this.text;
//         root.appendChild(node);
//     }
//     addStyle() {
//         const node = document.getElementById(this.id);
//         node.style.fontSize = '2.5rem';
//         node.style.borderRadius = '50%';
//         // node.style.backgroundColor = this.diffColor;
//         node.style.padding = '10px';
//         node.style.width = '100px';
//         node.style.height = '100px';
//         node.style.textTransform = 'capitalize';
//         node.style.position = 'relative';
//         node.style.animation = '0.2s  linear infinite';
//         node.style.display = 'flex';
//         node.style.justifyContent = 'center';
//         node.style.alignItems = 'center';
//         node.style.cursor = 'pointer';
//         node.style.color = '#fff';
//         node.style.textShadow =
//             '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff';
//     }
//     generateId() {
//         return Math.floor(Math.random() * 100000);
//     }

//     addDown() {
//         const node = document.getElementById(this.id);
//         node.style.top = '0px';
//         node.style.left = '0px';

//         // chnage the position of the node
//         let downLimit = window.innerHeight - node.offsetHeight - 20;
//         let leftLimit = window.innerWidth - node.offsetWidth - 20;
//         let leftMove = false;
//         let topMove = false;

//         function movedown() {
//             if (parseInt(node.style.left) <= leftLimit && leftMove === false) {
//                 node.style.backgroundColor = 'pink';
//                 node.style.left = parseInt(node.style.left) + 1 + 'px';
//             }
//             else {
//                 leftMove = true;
//                 node.style.backgroundColor = 'gold';

//                 node.style.left = parseInt(node.style.left) - 1 + 'px';
//                 if (parseInt(node.style.left) === 0) {
//                     leftMove = false;
//                 }
//             }

//             // work for up and down
//             if (parseInt(node.style.top) <= downLimit && topMove === false) {
//                 node.style.backgroundColor = 'red';
//                 node.style.top = parseInt(node.style.top) + 1 + 'px';
//             }
//             else {
//                 topMove = true;
//                 node.style.backgroundColor = 'green';
//                 node.style.top = parseInt(node.style.top) - 1 + 'px';
//                 if (parseInt(node.style.top) === 5) {
//                     node.style.backgroundColor = 'skyblue';
//                     topMove = false;

//                 }
//             }
//         }
//         this.interval = setInterval(movedown, 1);

//     }
//     stop() {
//         const node = document.getElementById(this.id);
//         node.style.animation = 'none';
//         // if any event is added to the node then remove it
//         node.removeEventListener('click', this.stop);

//         // node.style.top = '0px';
//         // node.style.left = '0px';
//         clearInterval(this.interval);


//     }
// }

// const node = new CreatNode('one');

// const addButton = (text) => {
//     const button = document.createElement('button');
//     button.id = text;
//     button.innerText = text;
//     root.appendChild(button);
//     button.style.color = 'green';
//     button.style.fontSize = '1.5rem';
//     button.style.padding = '10px 20px';
// }
// addButton("Start");
// addButton("Stop");

// const start = document.getElementById('Start');
// start.addEventListener('click', () => {
//     start.disabled = true;
//     node.addDown();
//     // delay the start of the second node

//     const stop = document.getElementById('Stop');
//     stop.disabled = false;

// });

// const stop = document.getElementById('Stop');
// stop.addEventListener('click', () => {
//     stop.disabled = true;
//     node.stop();

//     start.disabled = false;
// });



// New nodes
const floating = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    transform: ' translatey(0px)',
    // keyframes
    animation: 'floatings ease-in-out infinite',
}

const float = [
    { transform: 'translateY(0) translateX(0)' },
    { transform: 'translateY(-10px) translateX(10px)' },
    { transform: 'translateY(-5px) translateX(5px)' },
]

function addImg() {
    const img = document.createElement('img');
    img.src = 'https://happyaddons.com/wp-content/uploads/2020/06/man-fashion.png';
    img.style.width = 'auto';
    root.appendChild(img);
    // apply the floating style
    Object.assign(img.style, floating);

    img.animate(float, {
        duration: 2000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
    });
}

addImg();

const floatX = [
    { transform: 'translateY(0) translateX(0)' },
    { transform: 'translateY(0) translateX(10px)' },
    { transform: 'translateY(0) translateX(5px)' },

]
function addCircle() {
    const circle = document.createElement('div');
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'white';

    circle.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff';

    circle.style.position = 'absolute';
    circle.style.top = '0px';
    root.appendChild(circle);
    // apply the floating style

    circle.animate(floatX, {
        duration: 2000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
    });
}

addCircle();

function randomPosition() {
    // every second change the position
    const x = Math.floor(Math.random() * (window.innerWidth) );
    const y = Math.floor(Math.random() * (window.innerHeight /1.3) );
    return [x, y];
}

function addRandom() {
    const random = document.createElement('div');
    random.id = 'random';
    random.style.width = '30px';
    random.style.height = '30px';
    random.style.borderRadius = '50%';
    random.style.backgroundColor = 'white';
    random.style.boxShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff';

    random.style.position = 'relative';
    // randomPosition();

    random.style.top = randomPosition()[1] + 'px';
    random.style.left = randomPosition()[0] + 'px';
     

    // move in window
    function move() {
        random.style.top = randomPosition()[1] + 'px';
        random.style.left = randomPosition()[0] + 'px';
    }
    // setInterval(move, 1000);

    // update the position every second
    function updatPosition() {
        let downLimit = window.innerHeight-130 ;
        let leftLimit = window.innerWidth-80  ;
        let leftMove = false;
        let topMove = false;

        

        function movedown() {
            console.log(downLimit , leftLimit);
            if (parseInt(random.style.left) <= leftLimit && leftMove === false) {
                random.style.left = parseInt(random.style.left) + 1 + 'px';
            }
            else {
                leftMove = true;
                random.style.left = parseInt(random.style.left) - 1 + 'px';
                if (parseInt(random.style.left) === 5) {
                    leftMove = false;
                }
            }
            if (parseInt(random.style.top) <= downLimit && topMove === false) {
                random.style.top = parseInt(random.style.top) + 1 + 'px';
            }
            else {
                topMove = true;
                random.style.top = parseInt(random.style.top) - 1 + 'px';
                if (parseInt(random.style.top) === 5) {
                    topMove = false;
                }
            }
        }
        setInterval(movedown, 10);
    }
    updatPosition();

    root.appendChild(random);
    // apply the floating style

    random.animate(floatX, {
        duration: 2000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out',
    });
}

addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
addRandom();
// 

// Admin
const admin = document.createElement('div');
admin.id = 'admin';
admin.style.width = '100%';
admin.style.height = '100%';
// admin.style.backgroundColor = 'rgba(0,0,0,0.5)';
admin.style.position = 'absolute';
admin.style.top = '0px';
admin.style.left = '1px';
admin.style.color = 'white';
admin.innerText = 'Hamza khan';
admin.style.fontSize = '2rem';

root.appendChild(admin);