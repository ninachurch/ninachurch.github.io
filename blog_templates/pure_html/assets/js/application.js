(function($) {
    "use strict";
    
    // select text inputs
    $( "input[type=text], textarea" ).focus(function() {
        $( this ).select();
    });
    
    // set default search text
    $( "#searchform input[type=text]" ).attr( "placeholder", "Type and hit enter..." );
    
    // primary drop menu
    $( "#primary li" ).hover(function() {
          $( this ).find( "ul:first" ).stop( true, true ).animate({
                height: ["toggle", "swing"],
                opacity: "toggle"
          }, 300, 'linear');
    });
    
    // aside
    var $wrapper = $( "#wrapper" );
    $( "#tab" ).toggle(
        function() 
        {
            $wrapper.animate({ 
                right: "230px",
            }, 200 );
            setTimeout(function() {
                $wrapper.css( "overflow", "visible" );
            }, 200);
        }, function() 
        {
            $wrapper.animate({ 
                right: "0",
            }, 200 );
            setTimeout(function() {
                $wrapper.css( "overflow", "hidden" );
            }, 500);
        }
    );
    
    // pretty photo
    $( "a[rel^='prettyPhoto']" ).prettyPhoto({
        animation_speed:         "normal",
        slideshow:               4000,
        autoplay_slideshow:      false,
        opacity:                 0.9,
        show_title:              false,
        allow_resize:            true,
        default_width:           800,
        default_height:          600,
        counter_separator_label: "/",
        theme:                   "pp_default",
        horizontal_padding:      20,
        hideflash:               false,
        wmode:                   "opaque",
        autoplay:                true,
        modal:                   false,
        deeplinking:             true,
        overlay_gallery:         false,
        keyboard_shortcuts:      true,
        ie6_fallback:            true,
    });
    
    // gallery hovers    
    $( "#gallery li" ).hover( function()
    {
        $( this ).find( ".magnify" ).stop( true, true ).animate({
            opacity: "toggle"
        }, 500, "linear" );
    });
    
    // gallery filter
    var $container = $( "#gallery ul" );
    $container.imagesLoaded(function() {
        $container.isotope({
            itemSelector: ".item",
            layoutMode:   "masonry"
        });
    });

    // bind filter button click
    $( "#filters a" ).click(function(){
        var selector = $(this).attr( "data-filter-value" );
        $container.isotope({ filter: selector });
    });
    
    // ScrollTop
    $( "#top" ).hide();
    $( window ).scroll( function() {
        if ( $( window ).scrollTop() >= 600 )
        {
            $( "#top" ).fadeIn( 500 );
        }
        else
        {
            $( "#top" ).fadeOut( 500 );
        }
    });
   
    // prettyprint
    $( "pre" ).addClass( "prettyprint" );

	// uniform
	$( "select, input:checkbox, input:radio, input:file" ).uniform();
	
	// validate forms
	$( "#contact_form" ).validate();

})(jQuery);