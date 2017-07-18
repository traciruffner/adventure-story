$(document).ready(function(){
    $('#title').show();
    $('#dragon2').show();
    $('#part1').hide();
    $('#part2').hide();
    
    $('#pg1').click (function(){
        $('#part1').show();
        $('#part2').hide();
        $('#dragon2').hide();
    });
    
    $('#pg2').click(function(){
        $('#part1').hide();
        $('#part2').show();
      }); 
    
    
    
});