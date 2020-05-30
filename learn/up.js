'use strict';
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() != 0) {
                    $('#topNubex').fadeIn();
                } else {
                    $('#topNubex').fadeOut();
                }
            });
            $('#topNubex').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 700);
            });
        });

document.addEventListener('scroll', function(){
            if (window.pageYOffset >= document.body.scrollHeight/4)
            {
                document.body.querySelector('.topNubex').style.bottom = '25px';
                document.body.querySelector('.topNubex').style.right = '5px';
                document.body.querySelector('.topNubex').style.opacity = '1';
            }
            else
            {
                document.body.querySelector('.topNubex').style.opacity = '0';
                document.body.querySelector('.topNubex').style.bottom = '-20%';
                document.body.querySelector('.topNubex').style.right = '-20%';
            }
        });