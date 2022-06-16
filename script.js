const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image: './img/crying.jpg',
        text: "he is crying"
    },
    {
        image: './img/dontlie.jpg',
        text: "lying is a bad habbit"
    },
    {
        image: './img/embaressed.jpg',
        text: "she is getting embaressed"
    },
    {
        image: './img/happy.jpg',
        text: "she is happy"
    },
    {
        image: './img/noisy.jpg',
        text: "it's noisy here"
    },
    {
        image: './img/sad.jpg',
        text: "she is sad"
    },
    {
        image: './img/stressed.jpg',
        text: "she is stressed"
    },
    {
        image: './img/surprised.jpg',
        text: "i'm surprised"
    },
    {
        image: './img/Chichén Itzá.jpg',
        text: "Chichén Itzá"
    },
    {
        image: './img/Christ The Redeemer.jpg',
        text: "Christ The Redeemer"
    },
    {
        image: './img/Great wall of china.jpg',
        text: "Great wall of china"
    },
    {
        image: './img/Machu Picchu.jpg',
        text: "Machu Picchu"
    },
    {
        image: './img/Petra.jpg',
        text: "petra"
    },
    {
        image: './img/taj mahal.jpg',
        text: "taj mahal"
    },
    {
        image: './img/The colosseum.jpg',
        text: "Machu Picchu"
    },
    {
        image: './img/hospital.jpg',
        text: "it's a hospital"
    },
    {
        image: './img/library.jpg',
        text: "it's a library"
    },
    {
        image: './img/park.jpg',
        text: "it's a park"
    },
    {
        image: './img/police station.jpg',
        text: "it's a police station"
    },
    {
        image: './img/school.jpg',
        text: "it's a school"
    },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const {image , text} = item;
  

  box.classList.add('box');
  box.innerHTML=`
  <img src ="${image}" alt = "${text}"/>
  <p class ="info">${text}</p>  `;

  box.addEventListener('click', ()=> {
      setTextMessage(text);
      speakText();

      box.classList.add('active');
      setTimeout(() => {
          box.classList.remove('active')
      }, 1000);
  })

  main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();


let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

function setTextMessage(text){
    message.text=text;
}

function speakText(){
    speechSynthesis.speak(message);
}

function setVoice(e){
    message.voice = voices.find(voice => voice.name===e.target.value);
}


speechSynthesis.addEventListener('voiceschanged', getVoices);


toggleBtn.addEventListener('click', ()=>{
    document.getElementById('text-box').classList.toggle('show');
})

closeBtn.addEventListener('click', ()=>{
    document.getElementById('text-box').classList.remove('show');
})

voicesSelect.addEventListener('change',setVoice);

readBtn.addEventListener('click',() => {
    setTextMessage(textarea.value);
    speakText();
})

getVoices();
 