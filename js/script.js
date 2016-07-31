    // For clicking the cat
    // jQuery version
    var ctr = 0;
    $('#xaxa').click(function(e) {
        // add 1 to counter everytime cat picture is clicked
        ctr++;
        $('#counter').text('Clicks : ' + ctr);
    });

    // Vanilla JS version
    // var elem = document.getElementbyId('xaxa');
    // elem.addEventListener('click', function(){
    // ctr++;
    // $('#counter').text('Clicks : ' + ctr);
    // }, false);
