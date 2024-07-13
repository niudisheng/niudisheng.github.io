let backgroundPlaying = false;
// currentaudio = null;
function backgroundPlay() {
    console.log(backgroundPlaying);
    // let buttonImg = document.getElementById('backgroudMusic');
    // const characterImage = document.getElementById('characterImage');
    let path='sound/background.mp3';
    
    
    if (!backgroundPlaying && currentaudio==null ) {
        currentaudio = new Audio(path); // 指定语音文件路径
        currentaudio.play();
        let icon = document.getElementById('backgroudMusic');
        icon.className = 'fa-solid fa-circle-stop fa-2xl';
        
        // buttonImg.src = 'button_playing.png'; // 更改按钮图片为播放状态
        // characterImage.src = 'character_playing.png'; // 更改角色图片
        backgroundPlaying = true;
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
            let icon = document.getElementById('backgroudMusic');
            icon.className = 'fa-solid fa-music fa-2xl';
        }
        
        // let icon = document.getElementsByTagName('i')[index];
        // icon.className = 'fa-solid fa-circle-play fa-2xl';        
        backgroundPlaying = false;
    }
}