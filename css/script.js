document.addEventListener('DOMContentLoaded', function () {
    var scrollingDiv = document.getElementById('scrollingDiv');
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollingDiv.style.display = 'block';
        } else {
            scrollingDiv.style.display = 'none';
        }
    });
    scrollingDiv.addEventListener('click', function () {
        document.documentElement.scrollTop = 0; 
    });
});
