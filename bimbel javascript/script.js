var jamauto = setInterval(function(){ jam_auto() }, 1000);

function jam_auto(){
    var time = new Date();
    var jam = time.getHours();
    var menit = time.getMinutes();
    var detik = time.getSeconds();
    
    var jam_sekarang = jam+":"+menit+":"+detik;
    const element = document.getElementById("jam_digital");
    element.innerHTML = jam_sekarang
}

let btn = document.querySelector('.speak_btn');
        btn.onclik = () => {
            let txt = document.querySelector('.enter_text').value;
            let speech = new SpeechSynthesisUtterance();
            speech.lang = 'en-US';
            speech.text = txt;
            speech.rate = 1;
            speech.volume = 1;
            speech.pitch = 1;

            speechSynthesis.speak(speech);
        }
