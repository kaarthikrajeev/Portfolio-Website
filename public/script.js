function Menu(e){
    let list=document.querySelector('ul')
    e.name === 'menu-outline' ? (e.name="close-outline",list.classList.add('top-[70px]'),list.classList.add('opacity-100')): (e.name="menu-outline",list.classList.remove('top-[70px]',list.classList.remove('opacity-100')))
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzXZwEgJjvPo8bwJjiKFYNlb297BJD3Gvp_XQ3WN_RNKdpp6YH3x9QwpklE0gUFvL1rYw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully!"
        msg.style.display="block"
        setTimeout(function(){
            msg.innerHTML=""
            msg.style.display="none"
        },6000) 
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  let loader=document.getElementById("preload")
  let loader_bg=document.getElementById("load-bg")
  window.addEventListener("load",()=>{
    loader.style.display="none";
    loader_bg.style.display="none";
  })