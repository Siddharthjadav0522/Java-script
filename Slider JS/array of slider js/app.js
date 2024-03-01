$(document).ready(function () {
    // get card width dynamically
    cardWidth = $(".slide-card").width();
    // next-arrow
    $('#next-arrow').click(function () {
        var firstChildAppend = $(".slide-card:first-child()");
        $(".slide-card").animate({ left: -cardWidth }, function () {
            $('.slider-wrap').append(firstChildAppend);
            $(".slide-card").css({
                left: 0,
            })
        })
    });
    // previous-arrow
    $('#previous-arrow').click(function () {
        var lastChildPrepend = $(".slide-card:last-child()");
        $(".slide-card").animate({ left: cardWidth }, function () {
            $('.slider-wrap').prepend(lastChildPrepend);
            $(".slide-card").css({
                left: 0,
            })
        })
    });
});

let s = "";

let imgcard = [
    "https://i.postimg.cc/wv0j2bCB/slide-1.jpg",
    "https://i.postimg.cc/Y00qsz7z/slide-2.jpg",
    "https://i.postimg.cc/PJ7rsvrs/slide-3.jpg",
    "https://i.postimg.cc/jdWS6cZs/slide-4.jpg",
    "https://i.postimg.cc/PJ7rsvrs/slide-3.jpg",

];

imgcard.forEach((i, index) => {
    s += `<div class="slide-card position-relative bg-white overflow-hidden shadow-sm mx-2"  >
            <a href="#" class="text-decoration-none">
            <img src="${i} alt="slide" width="100%">
            <div class="p-3">
            <p class="text-dark my-2 fs-5 fw-semibold">jQuery | JS - ${index+1}/p>
            <p class="text-dark">Lorem ipsum dolor sit amet consec isicing elit. Praesentium
                aperiam
                ullam natus. Repudiandae.</p>
            <p class="text-muted mb-0 mt-3">18 Nov, 2022</p>
            </div>
            </a>
        </div>`
});

document.getElementById("slider-1").innerHTML=s;
