(function() {
    'use strict';
    
    let GridNavigation = function GridNavigation(element) {
        this.element = element;
        
        this.init();
    };

    window['GridNavigation'] = GridNavigation;

    GridNavigation.prototype.init = function() {
        let header = $('.header');
        let body = $('body');
        
        $(this.element).click(() => {
            $(this.element).toggleClass('grid__navigation--visible');
            $(this.overlay).toggleClass('overlay--visible');
        });

        this.overlay = $('<div></div>')
            .addClass('overlay')
            .click(() => {
                $(this.element).toggleClass('grid__navigation--visible');
                $(this.overlay).toggleClass('overlay--visible');
            });

        let navToggle = $('<div></div>')
            .addClass('header__nav-toggle');


        this.navAction = $('<svg><use xlink:href="#icon-menu"></use></svg>')
            .addClass('icon icon__action')
            .click(() => {
                $(this.element).toggleClass('grid__navigation--visible');
                $(this.overlay).toggleClass('overlay--visible');
            });
        
        
        navToggle.append(this.navAction);
        header.prepend(navToggle);
        body.prepend(this.overlay);
    }

    componentHandler.registerComponent({
        constructorName: 'GridNavigation',
        cssClassName: 'grid__navigation',
    });   
})();
