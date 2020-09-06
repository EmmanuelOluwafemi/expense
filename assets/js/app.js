const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidenav');
const sidenavCloseEl = $('.sidenav__close-icon');
const avatar = $('#avatar');
const dropdown = $('.dropdown');

// Add and remove provided class names
function toggleClassName(el, className) {
    if (el.hasClass(className)) {
        el.removeClass(className);
    } else {
        el.addClass(className);
    }
}
// Open the side nav on click
menuIconEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidenavCloseEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});


// Avatar dropdown
avatar.on('click', function(){
    toggleClassName(dropdown, 'active');
})