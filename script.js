
//inicial click
const click= document.querySelector(".click");

// parabens musica e video
const parabens = document.querySelector('.parabens');
const video = document.querySelector('.video');
const audio = document.querySelector('.audio');

//nav menu 
const nav = document.querySelector(".nav");
const buttonParabens = document.querySelector('#parabens')
const buttonLouvor = document.querySelector('#louvor')
const buttonMensagem = document.querySelector('#mensagem')

// louvor
const louvor = document.querySelector('.louvor');
const musica = document.querySelector('.musica');

// mensagem
const mensagem = document.querySelector('.mensagem');
const msgVideo = document.querySelector('.mensagemV');
const msgAudio = document.querySelector('.mensagemA');

// Play e Stop Parabens
const playParabens = ()=>{
    parabens.style.display = "block";
    video.play();
    audio.play();
    stopLouvor();
    stopMensagem();
}
const stopParabens = ()=>{
    parabens.style.display = "none";
    video.pause()
    audio.pause()
    video.currentTime = 0;
    audio.currentTime = 0;
}


// Play e Stop Louvor
const playLouvor = ()=>{
    louvor.style.display = "block";
    musica.play();
    stopParabens();
    stopMensagem();
}

const stopLouvor = ()=>{
    louvor.style.display = "none";
    musica.pause();
    musica.currentTime = 0;
}

// Play e Stop Mensagem
const playMensagem = ()=>{
    mensagem.style.display = "block";
    msgVideo.play();
    msgAudio.play();
    stopParabens();
    stopLouvor();
}

const stopMensagem = ()=>{
    mensagem.style.display = "none";
    msgVideo.pause();
    msgAudio.pause();
    msgVideo.currentTime = 0;
    msgAudio.currentTime = 0;
}

click.addEventListener('click', ()=>{
    playParabens()
    showNav()
    click.style.display = "none";
})

const showNav = ()=>{
    nav.style.display = "flex"
}


const tempo_louvor = ()=>{
    louvor.style.display = "block";
    musica.play()
}

buttonParabens.addEventListener('click', ()=>{
    playParabens()
})

buttonLouvor.addEventListener('click', ()=>{
    playLouvor()
})

buttonMensagem.addEventListener('click', ()=>{
    playMensagem()
})