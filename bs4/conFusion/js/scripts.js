
    $(document).ready(function(){
        $("#reserveTableButton").click(function(){
            $("#reserveModal").modal();
        });
    });
    $(document).ready(function(){
        $("#login").click(function(){
            $("#loginModal").modal();
        });
    });
    $(function () {
        $('#datetimepicker4').datetimepicker({
            format: 'L'
        });
    });
    $(function () {
        $('#datetimepicker3').datetimepicker({
            format: 'LT'
        });
    });
    $(document).ready(function(){
        $("#mycarousel").carousel( { interval: 2000 } );
        $("#carousel-button").click(function(){
            if($('#carousel-button').children('span').hasClass('fa-pause')){
                $("#mycarousel").carousel('pause');

                $('#carousel-button').children('span').removeClass('fa-pause');
                $('#carousel-button').children('span').addClass('fa-play');
            }else{
                $("#mycarousel").carousel('cycle');

                $('#carousel-button').children('span').removeClass('fa-play');
                $('#carousel-button').children('span').addClass('fa-pause');
            }
        });
    });
