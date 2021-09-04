const submit = document.getElementById('submit');
const random = document.getElementById('randomNum');
const input = document.getElementById('input');
const poemNum = document.getElementById('poem-num');
const orgText = document.getElementById('org-text');
const tamilLine1 = document.getElementById('tamil-poem1');
const tamilLine2 = document.getElementById('tamil-poem2');
const poemSection = document.getElementById('sec');
const engTrans = document.getElementById('eng-trans');
const engExp = document.getElementById('eng-exp');
const hr = Array.from(document.getElementsByTagName('hr'));
const subHeading = Array.from(document.getElementsByClassName('sub-heading'));
const subSection = Array.from(document.getElementsByClassName('sub-section'));


let api = 'https://api-thirukkural.vercel.app/api?num=';
function callAPI(num){
    let url = api+num;
    fetch(url)
    .then(response => response.json())
    .then(json => {
        poemNum.textContent = json.number;
        tamilLine1.textContent = json.line1;
        tamilLine2.textContent = json.line2;
        poemSection.textContent = json.sect_eng;
        engTrans.textContent = json.eng;
        engExp.textContent = json.eng_exp;

        for(let i = 0; i < subHeading.length; i++){
            subHeading[i].style.display = 'block';
            subSection[i].style.display = 'block';
        }
    })

}
function randomNumGenerator(){
    return parseInt(Math.random()*1330);
}
submit.addEventListener('click',() => {
    callAPI(input.value)
});

random.addEventListener('click',() => {
    let randomNum = randomNumGenerator();
    callAPI(randomNum);
})