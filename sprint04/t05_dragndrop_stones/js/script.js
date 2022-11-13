const block = document.querySelectorAll('.block');

block.forEach((item) => {
    item.addEventListener('click', clickBlock);
});

function clickBlock() {
    this.classList.toggle('on');
    if (this.classList.contains('on')) {
        this.removeEventListener('dragstart', dragStart);
        this.removeEventListener('dragend', dragEnd);
        this.draggable = 'true';
    } else {
        this.addEventListener('dragstart', dragStart);
        this.addEventListener('dragend', dragEnd);
        this.draggable = 'false';
    };
};

let x;
let y;

function dragStart(event) {
    x = event.offsetX;
    y = event.offsetY;
};

function dragEnd(event) {
    this.style.top = (event.pageY - y) + 'px';
    this.style.left = (event.pageX - x) + 'px';
};
