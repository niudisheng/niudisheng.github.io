let currentIndex = 0;
let currentType = 0;
let imagepaths =[];
const descriptions = [
    '这是角色CG1的描述。',
    '这是角色CG2的描述。',
    '这是角色CG3的描述。'
];
const descriptionElement = document.getElementById('description');

function preloadImages(element) 
{
    gallery = document.getElementsByClassName('gallery')[0];
    let images = document.querySelectorAll('.gallery img');
    // 遍历 NodeList 并移除每个 img 元素
    images.forEach(function(img) {
        img.remove();
    });
    let path = 'image/CG/';
    for (let i = 0; i < element.length; i++) {
        let imgElement = document.createElement('img');
        imgElement.src = path + element[i];        
        imgElement.addEventListener('click', function() {
            nextImage();
        });
        gallery.appendChild(imgElement);
    }
    
    
}
function showImage(index) {
    
    let images = document.querySelectorAll('.gallery img');
    for (let i = 0; i < images.length; i++) {        
        if (images[i].classList.contains('active')){
            images[i].classList.remove('active');
        }
    }
    currentIndex = index % images.length;
    images[currentIndex].classList.add('active');
    // descriptionElement.textContent = descriptions[currentIndex];
}
function nextType(){
    currentType = (currentType + 1) % imagepaths.length;
    preloadImages(imagepaths[currentType]);
    showImage(0);
}
function prevType() {
    currentType = (currentType - 1) % imagepaths.length;
    preloadImages(imagepaths[currentType]);
    showImage(0);
}
function prevImage() {
    showImage(currentIndex - 1);
}

function nextImage() {
    showImage(currentIndex + 1);
}

function loadImage() {
    const fileUrl = 'data/ev_files.csv'; // 替换为你的文件路径

    fetch(fileUrl)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP 错误！状态码: ${response.status}`);
        }
        return response.text(); // 将响应内容解析为文本
    })
    .then((data) => {
        // 使用 PapaParse 解析 CSV
        const parsedData = Papa.parse(data, {
        header: false, // 如果 CSV 没有表头，设置为 false
        });

        console.log('解析后的数据:', parsedData.data);
        imagepaths = parsedData.data;
        preloadImages(imagepaths[0]);
        showImage(0);

    });

    
}
