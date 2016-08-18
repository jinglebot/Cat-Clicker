var cats =
    [{
        "name": "Alpha",
        "img": ["images/cat_0.jpg"],
        "ctr": 0
    },{
        "name": "Buffy",
        "img": ["images/cat_1.jpg"],
        "ctr": 0
    },{
        "name": "Copper",
        "img": ["images/cat_2.jpg"],
        "ctr": 0
    },{
        "name": "Darling",
        "img": ["images/cat_3.jpg"],
        "ctr": 0
    },{
        "name": "Earl",
        "img": ["images/cat_4.jpg"],
        "ctr": 0
    },{
        "name": "Fluffy",
        "img": ["images/cat_5.jpg"],
        "ctr": 0
    },{
        "name": "Gorgeous",
        "img": ["images/cat_6.jpg"],
        "ctr": 0
    },{
        "name": "Happy",
        "img": ["images/cat_7.jpg"],
        "ctr": 0
    },{
        "name": "Iffy",
        "img": ["images/cat_8.jpg"],
        "ctr": 0
    },{
        "name": "Jollibee",
        "img": ["images/cat_9.jpg"],
        "ctr": 0
    }]
;


var formattedUlHtmlStart = '<div class="col-sm-3"><ul id="catList"></ul></div>';
var formattedLiHtmlStart = '<li id="catItem">%data%</li>';

var formattedDisplayHtmlStart = '<div class="col-sm-9" id="catDisplay"></div>';
var formattedDataHtmlStart = '<div id="catData">%data%</div>';

var formattedCatname = '<div class="col-sm-6" id="catName">%data%</div>';
var formattedCatctr = '<div class="col-sm-6" id="catCtr">%data%</div>';
var formattedCatimg = '<img id="catImg" class="img-responsive" style="max-width: 100%" src="%data%" sizes="100w" alt="%alt%">';

function display() {

    // initial catList
    $('#cat').append(formattedUlHtmlStart);
    for (var i = 0; i < cats.length; i++) {
        var catcopy = cats[i];
        (function (catcopy) {
            var htmlCatId = catcopy.name;
            var htmlCatname = formattedLiHtmlStart.replace("%data%", catcopy.name);
            htmlCatname = htmlCatname.replace("catItem", catcopy.name);
            $('#catList:last').append(htmlCatname);
        })(catcopy)
    }

    // initial catDisplay
    $('#cat').append(formattedDisplayHtmlStart);
    var htmlCatname = formattedCatname.replace("%data%", cats[0].name);
    var htmlCatctr = formattedCatctr.replace("%data%", "Click count : " + cats[0].ctr);
    var htmlCatData = formattedDataHtmlStart.replace("%data%", htmlCatname + htmlCatctr);
    var htmlCatimg = formattedCatimg.replace("%data%", cats[0].img[0]);
    $('#catDisplay').append(htmlCatData);
    $('#catDisplay').append(htmlCatimg);

    // modify catDisplay function
    var modifyCtr = function() {
        // console.log(this.id);
        // console.log(this);
        var catPic = document.getElementById("catImg");
        $('#catName').text(this.id);
        for (var i = 0; i < cats.length; i++) {
            var catcopy = cats[i];
            if (catcopy.name == this.id) {
                catcopy.ctr = catcopy.ctr + 1;
                // console.log (catcopy.name + catcopy.ctr);
                $('#catCtr').text("Click count : " + catcopy.ctr);
                catPic.src = catcopy.img;
            }
        }
    };

    // Event Listener for catImgs
    for (var i = 0; i < cats.length; i++) {
        var catcopy = cats[i];
        var currentCat = document.getElementById(catcopy.name);
        currentCat.addEventListener("click", modifyCtr, false);
        // console.log(currentCat.id);
    }
}

if (cats.length > 0) {
        display();
}

