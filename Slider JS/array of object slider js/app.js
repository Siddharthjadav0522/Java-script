
let sliderobj = [
    {
        id: 1,
        img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
        name: "Dota 2",
        discription: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    },

    {
        id: 2,
        img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
        name: "The Witcher 3",
        discription: "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    },

    {
        id: 3,
        img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
        name: "RDR 2",
        discription: "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    },

    {
        id: 4,
        img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
        name: "PUBG Mobile",
        discription: "PUBG Mobile is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    },

    {
        id: 5,
        img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
        name: "Fortnite",
        discription: "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    },

    {
        id: 6,
        img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
        name: "Far Cry 5",
        discription: "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
    },
];

let js = "";

sliderobj.forEach((i) => {
    js += `<div class="item ${i.id == 1 ? "active" : ""}" style="background-image: url(${i.img});">
            <div class="item-desc">
            <h3>${i.name}</h3>
            <p>${i.discription}</p>
            </div>
        </div>`;
})

document.getElementById("myslider").innerHTML = js;

$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
});
$(document).ready(function () {
    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });
});
