const parallax = document.querySelector('.contact-page')
window.addEventListener('scroll' , (e)=>{
    let offset = this.scrollY
    console.log('Offset' + offset);
    parallax.style.backgroundPositionY = offset*0.8 + 'px'
})

const moreText = document.querySelector('.more-text');
const btnMore = document.querySelector('.btn-more');

btnMore.addEventListener('click', (e)=>{
    moreText.classList.toggle('show-more')
    console.log(btnMore.innerText)
    if(btnMore.innerText === "Show More"){
        btnMore.innerText = 'Show Less'
    }
    else{
        btnMore.innerText === "Show More"
}})

