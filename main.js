window.onload=function(){
  clickMe.addEventListener('click',(e)=>{
    popover.style.display = 'block'
    console.log('出现')
  })
  wrapper.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('阻断')
  })
  document.addEventListener('click',(e)=>{
    popover.style.display = 'none'
    console.log('隐藏')
  })   
}
//  $(clickMe).on('click',(e)=>{
//    $(popover).show()
//    setTimeout(function(){
//      $(document).one('click',()=>{
//        $(popover).hide()
//      })
//    },0)
//  })  
//

