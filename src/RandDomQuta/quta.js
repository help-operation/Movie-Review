
const quoteTitles = [
    {
        Quta: 'some text input here',
        Autor: 'author Name Here',
    },
    {
        Quta: 'some text input here 2',
        Autor: 'author Name Here 2',
    },
    {
        Quta: 'some text input here 3',
        Autor: 'author Name Here 3',
    },
    {
        Quta: 'some text input here 4',
        Autor: 'author Name Here 4',
    },
    {
        Quta: 'some text input here 5',
        Autor: 'author Name Here 5',
    },
];

function qutaArrange() {
    const qutaRand = Math.floor(Math.random() * quoteTitles.length);
    const selectedQuta = quoteTitles[qutaRand];

    document.getElementById('quoteTitles').textContent = `"${selectedQuta.Quta}"`;
    document.getElementById("authorName").textContent = `— ${selectedQuta.Autor}`;
}

window.onload = function () {
    qutaArrange();
};