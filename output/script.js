let ticTac = 'o';
const matchBox = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const message = document.getElementById('message');
let ticTacClick;
let boxClick = 0;
const mainParent = document.getElementById('main-parent');
const resetBtn = document.getElementById('reset-btn');

let match = false;

function resetOrNo(decession) {
    setTimeout(() => {
        message.classList.add('scale-0');
    }, 10)
    mainParent.classList.remove('hidden');
    resetBtn.classList.remove('hidden');

    allBoxHtmlRemove(decession);
}

function allBoxHtmlRemove(reset) {

    if (reset === true) {
        for (let i = 0; i < 8; i++) {
            const singleBox = document.getElementById(`box-${i + 1}`);
            singleBox.innerHTML = '';
            const matchBox = document.getElementById(`match-${i}`);
            matchBox.style.display = 'none';
            boxClick = 0;
            match = false;
            resetBtnHandle();
        }
        document.getElementById('box-9').innerHTML = '';
    } else if (reset === false) {
        match = true;
    }
}

function checkMacthOrNot() {
    for (let i = 0; i < 8; i++) {
        const box1 = document.getElementById(`box-${matchBox[i][0]}`);
        const box2 = document.getElementById(`box-${matchBox[i][1]}`);
        const box3 = document.getElementById(`box-${matchBox[i][2]}`);
        if (box1.innerText !== '' && (box1.innerText === box2.innerText && box2.innerText === box3.innerText)) {
            const matchLine = document.getElementById(`match-${i}`);
            matchLine.style.display = 'block';
            ticTacClick = null;
            match = true;
            break;
        }

    }
}

function XO(box) {
    const span = document.createElement('span');
    span.className = "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2";
    if (ticTac === 'o') {
        span.innerText = ticTac;
        box.appendChild(span)
        ticTac = 'x';
    } else {
        span.innerText = ticTac;
        box.appendChild(span)
        ticTac = 'o';
    }
}


function resetBtnHandle() {

    allBoxHtmlRemove();
    if (match === false) {
        ticTacClick = function (box) {
            if (box.innerHTML === '') {
                boxClick++;
                XO(box)
                checkMacthOrNot()
            }
        }
    }
    if (boxClick !== 0) {
        mainParent.classList.add('hidden');
        resetBtn.classList.add('hidden');
        message.classList.remove('scale-0');
    }
}
resetBtn.addEventListener('click', resetBtnHandle);
resetBtnHandle();
