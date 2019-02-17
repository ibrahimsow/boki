$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

// transition sur la redirection de mon liens d'ancrage

(function() {
  var speed = 600;
  var moving_frequency = 15; // Affects performance !
  var links = document.querySelectorAll("a"); // Active links
  var href;
  for(var i=0; i<links.length; i++)
  {   
      href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
      if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
      {
          links[i].onclick = function()
          {
              var element;
              var href = this.attributes.href.nodeValue.toString();
              if(element = document.getElementById(href.substr(1)))
              {
                  var hop_count = speed/moving_frequency
                  var getScrollTopDocumentAtBegin = getScrollTopDocument();
                  var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                  
                  for(var j = 1; j <= hop_count; j++)
                  {
                      (function()
                       {
                           var hop_top_position = gap*j;
                           setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*j);
                       })();
                  }
              }
              
              return false;
          };
      }
  }
  
  var getScrollTopElement =  function (e)
  {
      var top = 0;
      
      while (e.offsetParent != undefined && e.offsetParent != null)
      {
          top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
          e = e.offsetParent;
      }
      
      return top;
  };
  
  var getScrollTopDocument = function()
  {
      return document.documentElement.scrollTop + document.body.scrollTop;
  };
})();