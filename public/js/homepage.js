const playMIDI = async (event) => {
    const audioCtx= new AudioContext();
    const type= "sine";
    const decay= 5;
    const freq = 369.99;
    const osc = audioCtx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(
        freq,
        audioCtx.currentTime,
    );
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.gain.setValueAtTime(
        0.3,
        audioCtx.currentTime,
    );
    gainNode.connect(audioCtx.destination);
    osc.start();
    gainNode.gain.exponentialRampToValueAtTime(
        0.00001,
        audioCtx.currentTime + decay,
    );
}
alert("LINKED!");
document.querySelector("#play-midi-btn").addEventListener('click', playMIDI);