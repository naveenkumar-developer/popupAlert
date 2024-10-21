const popupMsg=document.querySelector('#popup')
const popupBtn=document.querySelector('#popupBtn')
const  closePopupBtn=document.querySelector('#closePopupBtn')

popupBtn.addEventListener('click',function(){
    popupMsg.classList.add("showPopup")
})

closePopupBtn.addEventListener('click',function(){
    popupMsg.classList.remove('showPopup')
})