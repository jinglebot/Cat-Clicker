    // For clicking the cat
    // jQuery version
    // $('#xaxa').click(function(e) {
    //     // add 1 to counter everytime cat picture is clicked
    //     ctr++;
    //     $('#counter').text('Clicks : ' + ctr);
    // });


var cats =
    [{
        "name": "Xaxa",
        "img": ["images/cat_1.jpg"],
        "ctr": 0
    },{
        "name": "Chewie",
        "img": ["images/cat_2.jpg"],
        "ctr": 0
    }]
;


var formattedCatname = '<div><h1 class="catName">%data%</h1></div>';
var formattedCatctr = '<div><h2 class="catCtr">%data%</h2></div>';
var formattedCatimg = '<div><img class="catImg" class="img-responsive" style="max-width: 100%" src="%data%" sizes="100w" alt="%alt%"></div>';


function display() {
    // var profile = [];
    for (var i = 0; i < cats.length; i++) {
        var catcopy = cats[i];
        (function (catcopy) {
            var htmlCatId = catcopy.name;
            var profile = '<div class="htmlCat" id=' + htmlCatId + ' style="text-align:center"></div>';
            var htmlCatname = formattedCatname.replace("%data%", catcopy.name);
            var htmlCatctr = formattedCatctr.replace("%data%", catcopy.ctr);
            var htmlCatimg = formattedCatimg.replace("%data%", catcopy.img[0]);
                // htmlCatimg = formattedCatimg.replace("%alt%", cats[icopy].name);

            $('#cat').append(profile);
            $('.htmlCat:last').append(htmlCatname);
            $('.htmlCat:last').append(htmlCatctr);
            $('.htmlCat:last').append(htmlCatimg);
        })(catcopy)
    }

    // To get counter to count clicks
    var catImage = document.getElementsByClassName("catImg");

    var modifyCtr = function(numcopy) {
        // var attribute = this.siblings("catCtr").text("add one");
        // console.log(numcopy);
        // console.log(this.parentNode.className);
    };

    for (var i = 0; i < catImage.length; i++) {
        var numcopy = catImage[i];
        var htmlCatmom = $(numcopy).parentNode;
        console.log(htmlCatmom);
        catImage[i].onclick = modifyCtr(numcopy);
    }
}

if (cats.length > 0) {
        display();
}


// 1. counter adds 1
// 2. counter on screen changes value

// function modifyCtr() {
//     console.log("clicked");
// }
// var catClick = document.getElementById("catImg");
// catClick.addEventListener("click", modifyCtr, false);

// var catImage = document.getElementsByClassName("catImg");

// var modifyCtr = function() {
//     // var attribute = this.siblings("catCtr").text("add one");
//     console.log(this.parentNode.className);
// };

// for (var i = 0; i < catImage.length; i++) {
//     catImage[i].addEventListener('click', modifyCtr, false);
// }

//     for (var i = 0; i < cats.length; i++) {
//         var numcopy = i;
//         (function(numcopy){
//             var mommy = document.('#catImg').parent();
//     console.log(mommy);

//         })(i)
//     //     if (mommy == cats[i].name) {
//     //         cats[i].ctr++;
//     //         mommy.getElementById("catCtr").text('Clicks : ' + cats[i].ctr);
//         e.target.siblings("#catCtr").text('Clicks : ' + cats[i].ctr);
//     }
// })


// $('#catImg').click(function(e) {
    // add 1 to counter everytime cat picture is clicked
    // var mommy = document.('#catImg').parent();
    // console.log(mommy);
    // for (var i = 0; i < cats.length; i++) {
    //     if (mommy == cats[i].name) {
    //         cats[i].ctr++;
    //         mommy.getElementById("catCtr").text('Clicks : ' + cats[i].ctr);
    //     }
    // }
// })


    // Vanilla JS version
    // elem.addEventListener('click', function(){
    // ctr++;
    // $('#counter').text('Clicks : ' + ctr);
    // }, false);
