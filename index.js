const root = document.getElementById('root');

const Render = () => {
    root.style.color = 'green';
    root.style.backgroundColor = 'black';
    root.style.textAlign = 'center';
    root.style.minHeight = '95vh';
}

Render();

class CreatNode {
    constructor(text) {
        this.id = this.generateId();
        this.text = text;
        this.addNode();
        this.addStyle();
        this.interval = null;
    }
    addNode() {
        const node = document.createElement('div');
        node.id = this.id;
        node.innerText = this.text;
        root.appendChild(node);
    }
    addStyle() {
        const node = document.getElementById(this.id);
        node.style.fontSize = '2.5rem';
        node.style.borderRadius = '50%';
        // node.style.backgroundColor = this.diffColor;
        node.style.padding = '10px';
        node.style.width = '100px';
        node.style.height = '100px';
        node.style.textTransform = 'capitalize';
        node.style.position = 'relative';
        node.style.animation = '0.2s  linear infinite';
        node.style.display = 'flex';
        node.style.justifyContent = 'center';
        node.style.alignItems = 'center';
        node.style.cursor = 'pointer';
        node.style.color = '#fff';
        node.style.textShadow =
            '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff';
    }
    generateId() {
        return Math.floor(Math.random() * 100000);
    }
   
    addDown() {
        const node = document.getElementById(this.id);
        node.style.top = '0px';
        node.style.left = '0px';

        // chnage the position of the node
        let downLimit = window.innerHeight - node.offsetHeight - 20;
        let leftLimit = window.innerWidth - node.offsetWidth - 20;
        let leftMove = false;
        let topMove = false;

        function movedown() {
            if (parseInt(node.style.left) <= leftLimit && leftMove === false) {
                node.style.backgroundColor = 'pink';
                node.style.left = parseInt(node.style.left) + 1 + 'px';
            }
            else {
                leftMove = true;
                node.style.backgroundColor = 'gold';

                node.style.left = parseInt(node.style.left) - 1 + 'px';
                if (parseInt(node.style.left) === 0) {
                    leftMove = false;
                }
            }

            // work for up and down
            if (parseInt(node.style.top) <= downLimit && topMove === false) {
                node.style.backgroundColor = 'red';
                node.style.top = parseInt(node.style.top) + 1 + 'px';
            }
            else {
                topMove = true;
                node.style.backgroundColor = 'green';
                node.style.top = parseInt(node.style.top) - 1 + 'px';
                if (parseInt(node.style.top) === 5) {
                    node.style.backgroundColor = 'skyblue';
                    topMove = false;

                }
            }
        }
        this.interval = setInterval(movedown, 1);

    }
    stop() {
        const node = document.getElementById(this.id);
        node.style.animation = 'none';
        // if any event is added to the node then remove it
        node.removeEventListener('click', this.stop);

        // node.style.top = '0px';
        // node.style.left = '0px';
        clearInterval(this.interval);


    }
}

const node = new CreatNode('one');
const node1 = new CreatNode('Two');

const addButton = (text) => {
    const button = document.createElement('button');
    button.id = text;
    button.innerText = text;
    root.appendChild(button);
    button.style.color = 'green';
    button.style.fontSize = '1.5rem';
    button.style.padding = '10px 20px';
}
addButton("Start");
addButton("Stop");

const start = document.getElementById('Start');
start.addEventListener('click', () => {
    start.disabled = true;
    node.addDown();
    // delay the start of the second node
    setTimeout(() => {
        node1.addDown();
    }, 1000);
    const stop = document.getElementById('Stop');
    stop.disabled = false;

});

const stop = document.getElementById('Stop');
stop.addEventListener('click', () => {
    stop.disabled = true;
    node.stop();
    node1.stop();
    start.disabled = false;
});





