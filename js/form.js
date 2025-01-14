function loadfg() {
    // 图片数据数组，按行分组
    const imageData = [
        [
            { src: 'image/fg/mis/z2/A01.png', alt: 'TypeA1' },
            { src: 'image/fg/mis/z2/A02.png', alt: 'TypeA1' },
            { src: 'image/fg/mis/z2/A03.png', alt: 'TypeA2' },
            { src: 'image/fg/mis/z2/A04.png', alt: 'TypeA2' }
        ],
        [
            { src: 'image/fg/mis/z2/B01.png', alt: 'TypeB1' },
            { src: 'image/fg/mis/z2/B02.png', alt: 'TypeB2' },
            { src: 'image/fg/mis/z2/B03.png', alt: 'TypeB2' },
            { src: 'image/fg/mis/z2/B04.png', alt: 'TypeB3' },
            { src: 'image/fg/mis/z2/B05.png', alt: 'TypeB3' },
            { src: 'image/fg/mis/z2/B06.png', alt: 'TypeE' }
            
        ],
        [
            { src: 'image/fg/mis/z2/C01.png', alt: 'TypeC' },
            { src: 'image/fg/mis/z2/C02.png', alt: 'TypeC' }
        ]
    ];

    const fgContainer = document.getElementById('fg-container');

    // 底图
    const targetImage = document.getElementById('background-image');

    
    // 动态生成图片行并插入到容器中
    imageData.forEach(rowData => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        rowData.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;

            // 添加点击事件监听器
            imgElement.addEventListener('click', function() {
                targetImage.src = image.src;
                targetImage.alt = image.alt;
                // 切换表情栏，配合立绘变化
                loadFace(targetImage.alt);
                changeFace(targetImage.alt);
                
                
            });

            rowDiv.appendChild(imgElement);
        });

        fgContainer.appendChild(rowDiv);
        loadFace(targetImage.alt) 
    });
    };
function setButton() {    
        // 以下为按钮控制展开和收起功能
        const FgButton = document.getElementById('fgButton');
        const FaceButton = document.getElementById('faceButton');
        const faceContainer = document.getElementById('face-container');
        const fgContainer = document.getElementById('fg-container');
        
        console.log(fgContainer.scrollHeight);
        // 设置初始的 maxHeight
        fgContainer.style.maxHeight = fgContainer.scrollHeight + 'px';
        faceContainer.style.maxHeight = faceContainer.scrollHeight + 'px';

        // 点击按钮时展开或收起 front 容器
        FgButton.addEventListener('click', function() {            
            const transitionDuration = getComputedStyle(faceContainer).transitionDuration;
            const transitionDurationMs = parseFloat(transitionDuration) * 1000;
            if (fgContainer.style.maxHeight === '0px') {
                fgContainer.style.maxHeight = fgContainer.scrollHeight + 'px';
                // 等待过渡时间后再执行
                setTimeout(function() {
                    if(fgContainer.style.maxHeight !== '0px')
                        fgContainer.style.overflow = 'visible';
                }, transitionDurationMs);
            } else {
                fgContainer.style.overflow = 'hidden';
                fgContainer.style.maxHeight = '0px';
            }
        });
        // 点击按钮时展开或收起 front 容器
        FaceButton.addEventListener('click', function() {            
            const transitionDuration = getComputedStyle(faceContainer).transitionDuration;
            const transitionDurationMs = parseFloat(transitionDuration) * 1000;
            if (faceContainer.style.maxHeight === '0px') {
                faceContainer.style.maxHeight = faceContainer.scrollHeight + 'px';
                // 等待过渡时间后再执行
                setTimeout(function() {
                    if(faceContainer.style.maxHeight !== '0px')
                        faceContainer.style.overflow = 'visible';
                }, transitionDurationMs);
            } else {
                faceContainer.style.overflow = 'hidden';
                faceContainer.style.maxHeight = '0px';
            }
            
        });
        
    };
function loadFace(type){
    console.log(type);
    const name_dic={
        "TypeA1":"a1",
        "TypeA2":"a1",
        "TypeB1":"b1",
        "TypeB2":"b1",
        "TypeB3":"b1",
        "TypeE":"e1",  
    }
    type=name_dic[type];
    if (type=="a1"){
        faceData = [        
            [
                { src: 'image/fg/mis/z2/a1.png', alt: 'TypeA1' },
                { src: 'image/fg/mis/z2/a2.png', alt: 'TypeA1' },
                { src: 'image/fg/mis/z2/a3.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/a4.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/a5.png', alt: 'TypeA2' },
            ],
            [
                { src: 'image/fg/mis/z2/a6.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/a7.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/a8.png', alt: 'TypeB1' },
                { src: 'image/fg/mis/z2/a9.png', alt: 'TypeB2' },
                { src: 'image/fg/mis/z2/a10.png', alt: 'TypeB2' },              
                
            ],
            [
                { src: 'image/fg/mis/z2/a11.png', alt: 'TypeB3' },
                { src: 'image/fg/mis/z2/a12.png', alt: 'TypeB3' },
                { src: 'image/fg/mis/z2/a13.png', alt: 'TypeE' },
                { src: 'image/fg/mis/z2/a14.png', alt: 'TypeE' },
            ]
        ];
    }
    else if (type=="b1"){
        faceData = [        
            [
                { src: 'image/fg/mis/z2/b1.png', alt: 'TypeA1' },
                { src: 'image/fg/mis/z2/b2.png', alt: 'TypeA1' },
                { src: 'image/fg/mis/z2/b3.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/b4.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/b5.png', alt: 'TypeA2' },
            ],
            [
                { src: 'image/fg/mis/z2/b6.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/b7.png', alt: 'TypeA2' },
                { src: 'image/fg/mis/z2/b8.png', alt: 'TypeB1' },
                { src: 'image/fg/mis/z2/b9.png', alt: 'TypeB2' },
                { src: 'image/fg/mis/z2/b10.png', alt: 'TypeB2' },              
                
            ],
            [
                { src: 'image/fg/mis/z2/b11h.png', alt: 'TypeB3' },
                { src: 'image/fg/mis/z2/b12.png', alt: 'TypeB3' },
                { src: 'image/fg/mis/z2/b13.png', alt: 'TypeE' },
                { src: 'image/fg/mis/z2/b14.png', alt: 'TypeE' },
            ]
        ];

    }
    else if (type=="e1"){
        faceData = [
            { src: 'image/fg/mis/z2/e1.png', alt: 'TypeA1' },
            { src: 'image/fg/mis/z2/e2.png', alt: 'TypeA1' },
            { src: 'image/fg/mis/z2/e12.png', alt: 'TypeA2' },
            
        ];
    }
    const container = document.getElementById('face-container');
    const targetImage = document.getElementById('foreground-image');
    // 清空容器中的现有内容
    container.innerHTML = '';
    // 动态生成图片行并插入到容器中
    faceData.forEach(rowData => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row1');

        rowData.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;

            // 添加点击事件监听器
            imgElement.addEventListener('click', function() {
                targetImage.src = image.src;
                targetImage.alt = image.alt;
                // changeFace(targetImage.alt);
                mergeImages();
                
                
            });

            rowDiv.appendChild(imgElement);
        });

        container.appendChild(rowDiv);
    });
}
// 下载图片的函数
function downloadImage() {
    // 下载合成后的图像
    const mergedImage = document.getElementById('merged-image');
        const link = document.createElement('a');
        link.href = mergedImage.src;
        link.download = '心铃超绝可爱立绘！.png';
        link.click();
    }
function changeFace(type){
    const foregroundImage = document.getElementById('foreground-image'); 
    console.log(type);
    // 新增判断图片类型
    const name_dic={
        "TypeA1":"a1",
        "TypeA2":"a1",
        "TypeB1":"b1",
        "TypeB2":"b1",
        "TypeB3":"b1",
        "TypeE":"e1",  
    }
    if (type in name_dic){
        console.log(name_dic[type]);
        foregroundImage.src="image/fg/mis/z2/"+name_dic[type]+".png";
    }
    else{
        mergeImages();
        
    }
    foregroundImage.onload=function(){
        mergeImages();
        
    }
}

function mergeImages() {
    console.log('mergeImages');
    const canvas = document.getElementById('canvas');
    const backgroundImage = document.getElementById('background-image');
    const foregroundImage = document.getElementById('foreground-image'); 
    const fingerImage = document.getElementById('finger-image'); 
    const ctx = canvas.getContext('2d');        

    // 设置 canvas 的宽高为背景图片的宽高
    canvas.width = backgroundImage.width;
    canvas.height = backgroundImage.height;       

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
    
    // 新增判断图片类型
    const coo_dic={
        "TypeA1":[825,211],
        "TypeA2":[594,211],
        "TypeB1":[700,210],
        "TypeB2":[832,210],
        "TypeB3":[700,210],
        "TypeE":[544,238],
        "finger2":[917,463],
        "finger3":[786,463],
        

    }

    //绘制表情图片
    if (backgroundImage.alt in coo_dic){
        let left = coo_dic[backgroundImage.alt][0];
        let top = coo_dic[backgroundImage.alt][1];
        
        let width = foregroundImage.width;
        let height = foregroundImage.height;
        ctx.drawImage(foregroundImage, left, top, width, height);
        
        fileName=backgroundImage.src.split("/").pop()
        console.log(fileName);
        console.log(backgroundImage.src.split("/").pop());
        //手指拼合处理
        if (fileName=="B03.png" || fileName=="B05.png"){
            let width = fingerImage.width;
            let height = fingerImage.height;
            if (fileName=="B03.png"){
                left = coo_dic["finger2"][0];
                top = coo_dic["finger2"][1];
            }
            else{
                left = coo_dic["finger3"][0];
                top = coo_dic["finger3"][1];
            }
            console.log("finger");
            ctx.drawImage(fingerImage, left, top, width, height);
        }
        
    }
    //不需要绘制表情的时候
    else{       
        console.log("图片类型不存在");
    }
    let mergedImage = document.getElementById('merged-image');
    mergedImage.src = canvas.toDataURL('image/png');

    
}
//在立绘处调用，打开二级界面
function getForm(){
    var modal = document.getElementById("myModal");

    // 新增下载按钮相关代码
    var downloadBtn = document.getElementById('downloadBtn');
    
    mergeImages();

    
    // 绑定下载按钮事件处理
    downloadBtn.addEventListener('click', function() {
        downloadImage();
    });

    modal.style.display = "block";
    

    
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
