let isPlaying = false;
currentaudio = null;
function togglePlay(index) {
    index=index+1;
    console.log(isPlaying);
    // let buttonImg = document.getElementsByClassName('playButton')[index];
    // const characterImage = document.getElementById('characterImage');
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
    
    if (!isPlaying && currentaudio==null ) {
        currentaudio = new Audio(path); // 指定语音文件路径
        currentaudio.play();
        let icon = document.getElementsByTagName('i')[index];
        icon.className = 'fa-solid fa-circle-stop fa-2xl';
        
        // buttonImg.src = 'button_playing.png'; // 更改按钮图片为播放状态
        // characterImage.src = 'character_playing.png'; // 更改角色图片
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
        for (let i = 0; i < 3; i++) {
            let icon = document.getElementsByTagName('i')[i];
            icon.className = 'fa-solid fa-music fa-2xl';
        }
        
        // let icon = document.getElementsByTagName('i')[index];
        // icon.className = 'fa-solid fa-circle-play fa-2xl';        
        isPlaying = false;
    }
}