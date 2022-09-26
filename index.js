
$('.ourwallet').hover(
    function(){
        $('.wallet-dropdown').toggle('.drop')
    }
)

$('.ournotify').hover(
    function(){
        $('.notify-dropdown').toggle('.drop')
    }
)

$('.ourlangue').hover(
    function(){
        $('.langue-dropdown').toggle('.drop')
    }
)
$('.ourprofile').hover(
    function(){
        $('.profile-dropdown').toggle('.drop')

    }
)

$('#closemine').hover(
    function(){
        $('.big-servies').toggle('.drop')
    }
)

$('#allFacilites').click(
    function(){
        var all = $('#allFacilites');
        var chid = $('.Facilites');

        chid.prop('checked',true) 
})

$('#allMeal').click(
    function(){

        $('.meal').prop('checked',true) 
})

$('#alltype').click(
    function(){
        $('.types').prop('checked',true) 
})





