let backgroundPlaying = false;
Bgm = null;
function backgroundPlay() {
    console.log(backgroundPlaying);
    // let buttonImg = document.getElementById('backgroudMusic');
    // const characterImage = document.getElementById('characterImage');
    let path='sound/background.mp3';
    
    if (Bgm==null) {
    Bgm = new Audio(path); // 指定语音文件路径
    Bgm.loop = true; // 循环播放
    Bgm.volume = 0.5; // 设置音量
    }
    
    
    if (!backgroundPlaying) {
        Bgm.play();
        let icon = document.getElementById('backgroudMusic');
        icon.className = 'fa-solid fa-circle-stop fa-2xl';
        
        // buttonImg.src = 'button_playing.png'; // 更改按钮图片为播放状态
        // characterImage.src = 'character_playing.png'; // 更改角色图片
        backgroundPlaying = true;
        Bgm.addEventListener('ended', function() {
            
            togglePlay();
            console.log('ended');
        });
    }
     
    else {
        
        Bgm.pause();
        // Bgm.currentTime = 0; // 重置音频位置 
        // Bgm=null;       
        for (let i = 0; i < 3; i++) {
            let icon = document.getElementById('backgroudMusic');
            icon.className = 'fa-solid fa-music fa-2xl';
        }
        
        // let icon = document.getElementsByTagName('i')[index];
        // icon.className = 'fa-solid fa-circle-play fa-2xl';        
        backgroundPlaying = false;
    }
}