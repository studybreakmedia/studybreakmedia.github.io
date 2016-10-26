// console.log('sbm-snippets is running');
$('.card').css({'width': $('#body-width').width()-180})
// console.log($('#body-width').width()+' is window width');
window.onresize = function() {
    $('.card').css({'width': $('#body-width').width()-180})
}
// console.log('sbm-snippets ran');
