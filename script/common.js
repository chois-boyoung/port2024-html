    gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: "#page04", 
            start: "top -10%",
            end: "bottom 50%",
            onEnter: () => {
                document.querySelectorAll("header .header_right ul li a").forEach((el) => {
                    el.style.color = "white";
                    el.classList.add("white-before");
                });
                document.querySelectorAll("header .header_left .logo").forEach((el) => {
                    el.style.color = "white";
                });
                document.querySelectorAll("#page04 > .page03_tit").forEach((el) => {
                    el.style.color = "white";
                    el.style.borderBottomColor = "white";
                });
                document.querySelectorAll("header .menuBtn span").forEach((el) => {
                    el.style.backgroundColor = "white";
                });
            },
            onLeave: () => {
                document.querySelectorAll("header .header_right ul li a").forEach((el) => {
                    el.style.color = "";
                    el.classList.remove("white-before");
                });
                document.querySelectorAll("header .header_left .logo").forEach((el) => {
                    el.style.color = "";
                });
                document.querySelectorAll("#page04 > .page03_tit").forEach((el) => {
                    el.style.color = "";
                    el.style.borderBottomColor = "";
                    el.style.backgroundColor = ""
                });
                document.querySelectorAll("header .menuBtn span").forEach((el) => {
                    el.style.backgroundColor = "";
                });
            },
            onLeaveBack: () => {
                document.querySelectorAll("header .header_right ul li a").forEach((el) => {
                    el.style.color = "";
                    el.classList.remove("white-before");
                });
                document.querySelectorAll("header .header_left .logo").forEach((el) => {
                    el.style.color = "";
                });
                document.querySelectorAll("#page04 > .page03_tit").forEach((el) => {
                    el.style.color = "";
                    el.style.borderBottomColor = "";
                });
                document.querySelectorAll("header .menuBtn span").forEach((el) => {
                    el.style.backgroundColor = "";
                });
            },
        });


    gsap.utils.toArray(".parallax_cont").forEach((item) => {
        let color = item.getAttribute("data-bgcolor");
    
        ScrollTrigger.create({
            trigger: "#page04",
            start: "top top",
            end: "bottom bottom",
    
            onEnter: () => gsap.to("body", {
                backgroundColor: color,
                duration: 0.5
            }),
            onEnterBack: () => gsap.to("body", {
                backgroundColor: color,
                duration: 0.5
            }),
    
            // 섹션을 벗어날 때 원래 배경색으로 돌아오기 (아래로 스크롤 시)
            onLeave: () => gsap.to("body", {
                backgroundColor: "#f3ede8",  // 원래 배경색 설정
                duration: 1.4
            }),
    
            // 섹션을 다시 위로 스크롤할 때 원래 배경색으로 돌아오기 (위로 스크롤 시)
            onLeaveBack: () => gsap.to("body", {
                backgroundColor: "#f3ede8",  // 원래 배경색 설정
                duration: 1.4
            }),
        });
    });
    
    const hide = (item) => {
        gsap.set(item, {autoAlpha: 0});
    }
    
    const animate = (item) => {
        let x = 0;
        let y = 0;
        let delay = item.dataset.delay;
    
        if(item.classList.contains("LTR")){
            x = -100;
            y = 0;
        } else if(item.classList.contains("RTL")){
            x = 100;
            y = 0;
        } else if(item.classList.contains("BTT")){
            x = 0;
            y = 100;
        } else if(item.classList.contains("TTB")){
            x = 0;
            y = -100;
        } else {
            x = 100;
            y = 0;
        }
    
        gsap.fromTo(item, 
            {autoAlpha: 0, x: x, y: y}, 
            {autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: "auto", ease: "expo"}
        );
    }
    
    gsap.utils.toArray(".reveal").forEach((item) => {
        hide(item);
    
        ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            // end: "bottom top",
            onEnter: () => {animate(item)}, 
        });
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            800: {
              slidesPerView: 2,
              spaceBetween: 20,
              grid: {
                rows: 2,
              },
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                    rows: 2,
                },
            },
        }
    });

    $(function(){
        $('.swiper-slide').on('click', function () {
            var index = $(this).data('index');
            $('.popup').hide();
    
            $('.popup[data-popup-index="' + index + '"]').css('display', 'block');
        });
    
        $('.popup_close').on('click', function () {
            $(this).closest('.popup').hide();
        });

        $(".menuBtn").on("click", function(){
            $(".menuCont").show();
        });
        $(".menuClose").on("click", function(){
            $(".menuCont").hide();
        })
    }); 