$(document).ready(function(){
    $('#title').show();
    $('#dragon2').show();
    $('#part1').hide();
    $('#part2').hide();
    $('#part3').hide();
    $('#choices').hide();
    $('#choose1').hide();
    $('#choose2').hide();
    
    $('#pg1').click (function(){
        $('#part1').show();
        $('#part2').hide();
        $('#part3').hide();
        $('#dragon2').hide();
        $('#choices').hide();
        $('#choose1').hide();
        $('#choose2').hide();
    });
    
    $('#pg2').click(function(){
        $('#part1').hide();
        $('#part2').show();
        $('#part3').hide();
        $('#dragon2').hide();
        $('#choices').hide();
        $('#choose1').hide();
        $('#choose2').hide();
      }); 
    
    $('#cover').click(function(){
        $('#title').show();
        $('#dragon2').show();
        $('#part1').hide();
        $('#part2').hide();
        $('#part3').hide();
        $('#choices').hide();
        $('#choose1').hide();
        $('#choose2').hide();
    });
    
     $('#pg3').click(function(){
        $('#part1').hide();
        $('#part2').hide();
        $('#part3').show(); 
        $('#dragon2').hide();
        $('#choices').show();
        $('#choose1').show();
        $('#choose2').show();
      }); 
    
    
    
});