window.onload = function() {
    main ();
};

function main() {
    const btn = document.getElementById('change-Data');
    const title = document.getElementById('title');

    if (btn && title) {  // `null` চেক করা হয়েছে
        let currentTitel = title.textContent;
        let changeTitle = 'Some Change title Here';

        btn.onclick = function(e) {
            title.innerText = changeTitle;

            const temp = currentTitel;
            currentTitel = changeTitle;
            changeTitle = temp;

            if (title.classList.contains('title1')) {
                title.classList.remove('title1');
                title.classList.add('title2');
            } else {
                title.classList.remove('title2');
                title.classList.add('title1');
            }
            console.log(title);
        };
    }
    const btn1 = document.getElementById('Data');
    const topText = document.getElementById('top')

    let realTimeData = topText.textContent;
    let nextData = 'If you want to start your work any time'
    
    btn1.onclick = function(e) {
        topText.innerText = nextData;

        const sayText = realTimeData;
        realTimeData = nextData;
        nextData = sayText;

        if (topText.classList.contains('color1')){
            topText.classList.remove('color1');
            topText.classList.add('color2');
        } else{
            topText.classList.remove('color2');
            topText.classList.add('color1');
        }
    };
    const input = document.getElementById('inputs');
    const output = document.getElementById('outputs');


    inputs.addEventListener('keyup', function(e) {
        outputs.innerText = e.target.value;
    });
}

