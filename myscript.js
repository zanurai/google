alert("I am a Link");


function gotoLink(Link) {
    console.log(Link.value)

    //location.href = 'https://www.google.com';(we can do like this also for single one)

    //location.href = Link.value;(in place of location we can use window.open also)

    window.open(Link.value)
}