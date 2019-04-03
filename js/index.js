//入口函数
window.addEventListener('load', function () {
    //搜索框渐变函数
    searchGradual()
    //倒计时函数
    downTime()
    //轮播
    slide()
})
//搜索框渐变函数
function searchGradual() {
    //获取头部元素
    var header = document.querySelector('#header');
    //获取slide的元素
    var slide = document.querySelector('#slide');
    //页面滚动事件
    document.addEventListener('scroll', function () {
        //页面滚出去的距离
        // console.log(111);
        var scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);
        var slideHeight = slide.offsetHeight;
        // console.log(slideHeight);
        var opacity = scrollTop / slideHeight;

        header.style.backgroundColor = 'rgba(222,24,26,' +
            opacity + ')'
    })
}
//轮播图
function slide() {
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',

        },

        speed: 1000,
        //显示小手
        grabCursor: true,
        //循环
        loop: true,
        //自动轮播
        // autoplay: true,
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction:true
        }
    });
}

//倒计时 秒杀的函数
function downTime() {
    //发请求获取秒杀倒计时的时间
    var time = 2 * 60 * 60; //秒
    //判断倒计时是否结束
    if (time <= 0) {
        time = 2 * 60 * 60
    }
    //获取元素
    var spans = document.querySelectorAll('.downtime span')
    //调用函数
    setDownTime()
    //计时器
    setInterval(function () {
        time--;
        setDownTime()
    }, 1000)

    function setDownTime() {
        // console.log(time);
        var hour = Math.floor(time / 60 / 60)
        // console.log(hour);
        var minute = Math.floor(time / 60 % 60)
        // console.log(minute);
        var second = Math.floor(time % 60)
        // console.log(second);
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    }
}