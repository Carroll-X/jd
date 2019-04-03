//入口函数
window.addEventListener('load', function () {
    //侧导航
    leftsidebar()

    mainContent()

    // drawTop ()
})

// 侧导航栏
function leftsidebar() {
    var swiper = new Swiper('.left .swiper-container', {

        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        mousewheel: true,
  

    });
}
// 主体
function mainContent () {
    var swiper = new Swiper('.right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
  
    });
}

//吸顶
// function drawTop (){

//     var lis = document.querySelectorAll('.left .swiper-slide li')
//     console.log(lis);
//     //遍历
//     for( var i = 0 ; i< lis.length ; i++){
//         lis[i].addEventListener('click',function(){
//             // console.log(this);
//             console.log(this.dataset.index);
//         })
//     }
// }