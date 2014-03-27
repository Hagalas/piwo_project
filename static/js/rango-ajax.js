$(document).ready(function(){

    // JQuery code to be added here.

$.fn.shorten = function (settings) {

        var config = {
            showChars: 100,
            ellipsesText: "...",
            moreText: "more >>>",
            lessText: "<<< less"
        };

        if (settings) {
            $.extend(config, settings);
        }

        $(document).off("click", '.morelink');

        $(document).on({click: function () {

                var $this = $(this);
                if ($this.hasClass('less')) {
                    $this.removeClass('less');
                    $this.html(config.moreText);
                } else {
                    $this.addClass('less');
                    $this.html(config.lessText);
                }
                $this.parent().prev().toggle();
                $this.prev().toggle();
                return false;
            }
        }, '.morelink');

        return this.each(function () {
            var $this = $(this);
            if($this.hasClass("shortened")) return;

            $this.addClass("shortened");
            var content = $this.html();
            if (content.length > config.showChars) {
                var c = content.substr(0, config.showChars);
                var h = content.substr(config.showChars, content.length - config.showChars);
                var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
                $this.html(html);
                $(".morecontent span").hide();
            }
        });

    };




    $(".comment").shorten();

    // Show more func
    /*var showChar = 100;
    var moretext = "more >>>";
    var lesstext = "<<< less";
    $('.more').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);

            var html = c + '<span class="moreellipses">'+''+'&nbsp;</span><span class="morecontent"><span>' +h+ '</span>&nbsp;&nbsp;<a href="" class="morelink">' + lesstext + '</a></span>';
            var html2=c + '<span class="moreellipses">'+'...'+'&nbsp;</span><span class="morecontent"><span>' + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + lesstext + '</a></span>';
            $(this).html(html);
        }

    });

    $(".morelink").click(function(){
        if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html(lesstext);
        } else {
            $(this).addClass("more");
            $(this).html(moretext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });*/






    // Like button with html5 local storage
    if(!window.localStorage.getItem("disable-"+$('#likes').attr("data-catid"))){
        $('#likes').click(function(){
            var catid;
            catid=$(this).attr("data-catid");
            $.get('/rango/like_category/', {category_id: catid}, function(data){
                $('#like_count').html(data);
                $('#likes').hide();
                window.localStorage.setItem("disable-"+$('#likes').attr("data-catid"),1);
            });
    });
    }else{
        $('#likes').hide();
    }

    // Add button with html5 local storage
    if(!window.localStorage.getItem("disable"+"^"+$('.rango-add').attr("data-url"))){
        $('.rango-add').click(function(){
            var catid=$(this).attr("data-catid");
            var title=$(this).attr("data-title");
            var url=$(this).attr("data-url");
            var me = $(this);
            $.get('/rango/auto_add_page/', {category_id: catid, url: url, title: title }, function(data){
                $('#pages').html(data);
                me.hide();
                window.localStorage.setItem("disable"+"^"+$('.rango-add').attr("data-url"), $('.rango-add').attr("data-url"));
            });
    });
    }else if($('.rango-add').attr("data-url")==window.localStorage.getItem("disable"+"^"+$('.rango-add').attr("data-url")))
    {
        var v=window.localStorage.getItem("disable"+"^"+$('.rango-add').attr("data-url"));
        $('.rango-add').is('[data-url='+window.localStorage.getItem("disable"+"^"+$('.rango-add').attr("data-url"))+']').hide();
    }

    // Dynamic category search suggestion
    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query }, function(data){
            $('#cats').html(data);
        });
    });

    // Add page button
    /*$('.rango-add').click(function(){
        var catid=$(this).attr("data-catid");
        var title=$(this).attr("data-title");
        var url=$(this).attr("data-url");
        var me = $(this);
        $.get('/rango/auto_add_page/', {category_id: catid, url: url, title: title }, function(data){
            $('#pages').html(data);
            me.hide();
        });
    });*/


    // Like Button
    /*$('#likes').click(function(){
        if(!window.localStorage.getItem("disable")){
            var catid;
            catid=$(this).attr("data-catid");
            $.get('/rango/like_category/', {category_id: catid}, function(data){
                $('#like_count').html(data);
                $('#likes').hide();
                window.localStorage.setItem("disable",1);
                //$('#likes').css("visibility", "hidden").hide();
            });
        }
    });*/

});