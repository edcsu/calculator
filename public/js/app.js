$(() => {

    $("#copy-text").click(() =>{
        copyToClipboard("#br-details");
    });
});

copyToClipboard = (element) => {
    let $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}