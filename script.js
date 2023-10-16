const openModal = document.querySelectorAll('.show-modal');
const modalContainerDiv = document.querySelector('.modal');
const overlayContainerDiv = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');

openModal.forEach(modal => {
  modal.addEventListener("click", () => {
    modalContainerDiv.classList.remove("hidden")
    overlayContainerDiv.classList.remove("hidden")
  });
});

overlayContainerDiv.onclick=()=>closeModal()
closeModalBtn.onclick=()=>closeModal()

document.addEventListener('keydown',(event)=>{
    if(event.key === 'Escape' || event.key === 'Esc'){
        closeModal()
    }
})

const closeModal=()=>{
    modalContainerDiv.classList.add('hidden')
    overlayContainerDiv.classList.add('hidden')
}
