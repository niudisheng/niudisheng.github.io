
// 下载图片的函数
function downloadImage(src) {
    // 下载合成后的图像
    const mergedImage = document.getElementById('merged-image');
        const link = document.createElement('a');
        link.href = mergedImage.src;
        link.download = 'merged-image.png';
        link.click();
}

function mergeImages() {
    console.log('mergeImages');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');        
    const backgroundImage = document.getElementById('background-image');
    const foregroundImage = document.getElementById('foreground-image');
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
    const top = 211;
    const left = 825;
    const width = foregroundImage.width;
    const height = foregroundImage.height;
    ctx.drawImage(foregroundImage, left, top, width, height);
    let mergedImage = document.getElementById('merged-image');
    mergedImage.src = canvas.toDataURL('image/png');
      
            
      
}
function getForm(id){
    
    // console.log("id="+id);
    var modal = document.getElementById("myModal");
    // 获取图片并将其插入模态窗口 - 使用其“alt”文本作为标题
    var img = document.getElementById(id);
    
    var captionText = document.getElementById("caption");
    // 新增下载按钮相关代码
    var downloadBtn = document.getElementById('downloadBtn');
    
    mergeImages();
    // modalImg.src = img.src;
    
    // 绑定下载按钮事件处理
    downloadBtn.addEventListener('click', function() {
        downloadImage(img.src);
    });

    modal.style.display = "block";
    // captionText.innerHTML = img.alt;

    
    // 获取关闭按钮
    var span = document.getElementsByClassName("close")[0];
    
    // 当用户点击关闭按钮时，关闭模态窗口
    span.onclick = function() { 
        modal.style.display = "none";
        // 重新启用页面滚动
        document.body.style.overflow = 'auto';
    }
    
    // 当用户点击窗口外部时也关闭窗口
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }
}
