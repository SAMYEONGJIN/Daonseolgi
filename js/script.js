//#header gnb 이동하기
$(function () {
    let headerH = $('.header_right').outerHeight();

    $('.gnb a').on('click', function (e) {
        e.preventDefault();

        let target = $(this).attr('href');
        let offsetTop = $(target).offset().top - headerH;

        $('html, body').animate({ scrollTop: offsetTop }, 600);
    });
});

// 메인 배너 
const mainSwiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".main-pagination",   // 반드시 메인 배너 전용
        type: "progressbar",
    },
    navigation: {
        nextEl: ".main-next",
        prevEl: ".main-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


//best menu 
var menuSwiper = new Swiper(".menuSwiper", {
    slidesPerView: 3,
    spaceBetween: 60,       // slide 간격 60px 정확히 맞춤
    slidesPerGroup: 1,
    loop: true, /* 사진 다시 1번으로 돌아감 */
    centeredSlides: false,
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
});


//section3 탭 메뉴 
// 카테고리별 데이터
const menuData = {
    new: [
        { img: './images/menu01.jpg', name: '복숭아크림떡' },
        { img: './images/menu02.jpg', name: '흑임자호박인절미' },
        { img: './images/menu03.jpg', name: '콩가루쑥인절미' },
        { img: './images/menu04.jpg', name: '보늬밤크림떡' },
        { img: './images/menu05.jpg', name: '녹차크림떡' },
        { img: './images/menu06.jpg', name: '고구마크림떡' },
    ],

    cream: [
        { img: './images/cream_menu01.jpg', name: '팥크림찹쌀떡', },
        { img: './images/cream_menu02.jpg', name: '딸기크림떡' },
        { img: './images/cream_menu03.jpg', name: '파베 초코크림떡' },
        { img: './images/cream_menu04.jpg', name: '보늬밤크림떡' },
        { img: './images/cream_menu05.jpg', name: '고구마크림떡' },
        { img: './images/cream_menu06.jpg', name: '복숭아크림떡' }
    ],

    // 다른 메뉴도 동일한 형식으로 추가 가능!
};



// 메뉴 출력 함수
function renderMenu(category) {
    const grid = document.querySelector(".menu-grid");
    grid.innerHTML = ""; // 기존 삭제

    menuData[category].forEach(item => {
        grid.innerHTML += `
            <a href="detail.html" class="menu-card">
                <img src="${item.img}" alt="${item.name}">
                <p class="name">${item.name}</p>
                
            </a>
        `;
    });
}

// 초기 로딩 → 신메뉴 보여줌
renderMenu("new");

// 카테고리 클릭 이벤트
document.querySelectorAll(".menu-tabs li").forEach(tab => {
    tab.addEventListener("click", function () {

        // active 클래스 변경
        document.querySelectorAll(".menu-tabs li").forEach(t => t.classList.remove("active"));
        this.classList.add("active");

        // 데이터 뿌리기
        const category = this.dataset.menu;
        renderMenu(category);
    });
});


//하단 슬라이드 배너
const bannerSwiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".banner-pagination",
        clickable: true,
    },
    navigation: false
});

//sns 슬라이드
var snsSwiper = new Swiper(".snsSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true, // 마지막 그룹 부족 시 빈 슬라이드 채움
    navigation: {
        nextEl: ".sns-next",
        prevEl: ".sns-prev",
    },
    autoHeight: true
});

$(function () {
    //맨 위 부드럽게 이동
    $(".top-btn img").click(function () {
        $("html,body").animate({
            // 세로위치 0
            scrollTop: '0'
            //1초동안
        }, 1500);
    });
});

