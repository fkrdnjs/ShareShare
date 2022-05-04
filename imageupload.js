var submit = document.getElementById('submitButton');
submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
    newImage.style.visibility = "visible"; //사진 보이게
    
    document.getElementById('image-upload').style.visibility = 'hidden'; //기존 것들 안보이게
    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
}

function loadFile(input) {
    var file = input.files[0];

    var name = document.getElementById('fileName');
    name.textContent = file.name;

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기

    var container = document.getElementById('image-show');
    container.appendChild(newImage);
};

//------------------------------------------------
document.querySelector('#calbutton').addEventListener('click', function() {
    
    var originPrice = document.querySelector('#original').value;
    var discountRate = document.querySelector('#usernumber').value;

    var discounted = Math.round(originPrice * (discountRate / 100)); // 정수로 출력하기 위해 소수점 아래 반올림 처리
    var newPrice = originPrice - discounted;
    document.querySelector('#discount').innerText = newPrice
    
    }
    );
    
