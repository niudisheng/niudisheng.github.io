let isPlaying = false;
currentaudio = null;
function togglePlay(index) {
    console.log(isPlaying);
    
    let path='voicel.mp3';
    if (index === 0) {
        path='sound/1.mp3';
    }
    else if (index === 1) {
        path='sound/2.mp3';
    }
    else if (index === 2) {
        path='sound/3.mp3';
        
    }
    
    index+=1;
    if (!isPlaying && currentaudio==null ) {
        currentaudio = new Audio(path); // 指定语音文件路径
        currentaudio.play();
        // let icon = document.getElementsByTagName('i')[index];
        let icon = document.getElementsByClassName('playButton')[index];
        icon.getElementsByTagName('i')[0].className = 'fa-solid fa-circle-stop fa-2xl';
        // icon.className = 'fa-solid fa-circle-stop fa-2xl';
        
        
        isPlaying = true;
        currentaudio.addEventListener('ended', function() {
            
            togglePlay(index);
            console.log('ended');
        });
    }
     
    else {
        
        currentaudio.pause();
        currentaudio.currentTime = 0; // 重置音频位置 
        currentaudio=null;       
        for (let i = 1; i < 4; i++) {
            let icon = document.getElementsByClassName('playButton')[i];
            icon.getElementsByTagName('i')[0].className = 'fa-solid fa-circle-play fa-2xl';
        }
             
        isPlaying = false;
    }
}