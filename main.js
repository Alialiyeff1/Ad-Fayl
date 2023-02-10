let ad=document.querySelector('.iad')
let file=document.querySelector('.ifile')
let elave=document.querySelector('.btn')
let sil=document.querySelector('.btn2')
let divv=document.querySelector('.divv2')

let count=1;
elave.addEventListener('click', function () {
    divv.innerHTML+=
    
    <div class="divv2">
        <div class="file">${file.type}</div>
        <p class="add">${ad.value}</p>
        <p>${count++}</p>
        <button class="download"><a href="" download="">Download</a></button>
    </div>

    ad.value='';
    file.value='';
})

sil.addEventListener('click', function () {
    divv.innerHTML=''
})