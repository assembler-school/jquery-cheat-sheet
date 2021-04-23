let elements=[];
$('li').each(function(index){
    
    $(this).attr('id','command '+index)
    $(this).click(callTemp);
    $(this).click(textLaunch);
    elements.push($(this));
})
console.log(elements)
function callTemp(){
    console.log('entra')
    let temp=document.querySelector("template.showComand");
    const tempConte=document.importNode(temp.content,true);
    $('body').append(tempConte);
    $('.backgound').click(closeTemp);
};
function closeTemp(){
    $(this).remove()
    $('.showComandContent').remove()

}


function textLaunch(event){
    let selected=event.target;
    console.log($(selected).attr('id'));
    
    if($(selected).attr('id')=='command 0'){
        $( ".run" ).text("click to active");
        $('.jsclas').text('DOMContentLoaded');
        $('.jQclas').text('ready');
        $('.run').on('click',ready);
        
    }else if
    ($(selected).attr('id')=='command 1')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('cliked');
        $('.jQclas').text('data("cliked",true)');
        $('.run').on('click',clicked);
        
    }else if
    ($(selected).attr('id')=='command 2')
    {   $( ".run" ).text("duble click");
        $('.jsclas').text('dblclick');
        $('.jQclas').text('dblclick');
        $('.run').on('click',dubl);
    }else if
    ($(selected).attr('id')=='command 3')
    {   $( ".run" ).text("click");
        $('.jsclas').text('onkeypress');
        $('.jQclas').text('keypress');
        $('.run').on('click',keyP);
    }else if
    ($(selected).attr('id')=='command 4')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('onmousemove');
        $('.jQclas').text('mousemove');
        $('.run').on('click',mousMv);
    }else if
    ($(selected).attr('id')=='command 5')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('value');
        $('.jQclas').text('val');
        $('.run').on('click',textVal);
    }else if
    ($(selected).attr('id')=='command 6')
    {
        $( ".run" ).text("click to show image");
        $('.jsclas').text('onload');
        $('.jQclas').text('load');
        $('.run').on('click',loadAction);
    }else if
    ($(selected).attr('id')=='command 7')
    {   
        $( ".run" ).text("click to show image");
        $('.jsclas').text('onerror');
        $('.jQclas').text('error');
        $('.run').on('click',errAction);
    
    }else if
    ($(selected).attr('id')=='command 8')
    {
        $('.jsclas').text('submit');
        $('.jQclas').text('submit');
    }else if
    ($(selected).attr('id')=='command 9')
    {
        $('.jsclas').text('change');
        $('.jQclas').text('change');
    }else if
    ($(selected).attr('id')=='command 10')
    {
        $('.jsclas').text('onmouseover');
        $('.jQclas').text('mouseover');
    }else if
    ($(selected).attr('id')=='command 11')
    {
        $('.jsclas').text('.checked');
        $('.jQclas').text(':checked');
    }else if
    ($(selected).attr('id')=='command 12')
    {
        $('.jsclas').text('(this).click');
        $('.jQclas').text('(this).on');
    }else if
    ($(selected).attr('id')=='command 13')
    {
        $('.jsclas').text('create');
        $('.jQclas').text('add');
    }else if
    ($(selected).attr('id')=='command 14')
    {
        $('.jsclas').text('remove');
        $('.jQclas').text('remove');
    }else if
    ($(selected).attr('id')=='command 15')
    {
        $('.jsclas').text('appendChild');
        $('.jQclas').text('append');
    }else if
    ($(selected).attr('id')=='command 16')
    {
        $('.jsclas').text('prepend');
        $('.jQclas').text('prepend');
    }else if
    ($(selected).attr('id')=='command 17')
    {
        $('.jsclas').text('insertAdjesent(after)');
        $('.jQclas').text('after');
    }else if
    ($(selected).attr('id')=='command 18')
    {
        $('.jsclas').text('insertAdjesent(before)');
        $('.jQclas').text('before');
    }else if
    ($(selected).attr('id')=='command 19')
    {
        $('.jsclas').text('cloneNode(true)');
        $('.jQclas').text('clone');
    }else if
    ($(selected).attr('id')=='command 20')
    {
        $('.jsclas').text('classList.add');
        $('.jQclas').text('addClass');
    }else if
    ($(selected).attr('id')=='command 21')
    {
        
        $('.jsclas').text('classList.remove');
        $('.jQclas').text('removeClass');
    }else if
    ($(selected).attr('id')=='command 22')
    {
        $('.jsclas').text('classList.toggle');
        $('.jQclas').text('toggle');
    }else if
    ($(selected).attr('id')=='command 23')
    {
        $('.jsclas').text('setAttribute("disabled")');
        $('.jQclas').text('attr("disabled")');
    }else if
    ($(selected).attr('id')=='command 24')
    {
        $('.jsclas').text('removeAttribute("disabled")');
        $('.jQclas').text('removeAttr("disabled")');
    }else if
    ($(selected).attr('id')=='command 25')
    {
        $('.jsclas').text('setAttribute("data-src","name")');
        $('.jQclas').text('attr("data-src","name")');
    }else if
    ($(selected).attr('id')=='command 26')
    {
        $('.jsclas').text('removeAttribute("data-src")');
        $('.jQclas').text('removeAttr("data-src")');
    }else if
    ($(selected).attr('id')=='command 27')
    {
        $('.jsclas').text('visibility = "hidden"');
        $('.jQclas').text('hide');
    }else if
    ($(selected).attr('id')=='command 28')
    {
        $('.jsclas').text('style.visibility = "visible"');
        $('.jQclas').text('show');
    }else if
    ($(selected).attr('id')=='command 29')
    {
        $('.jsclas').text('style.opacity+');
        $('.jQclas').text('fadeIn');
    }else if
    ($(selected).attr('id')=='command 30')
    {
        $('.jsclas').text('style.opacity-');
        $('.jQclas').text('fadeOut');
    }else if
    ($(selected).attr('id')=='command 31')
    {
        $('.jsclas').text('forEach');
        $('.jQclas').text('each');
    }else if
    ($(selected).attr('id')=='command 32')
    {
        $('.jsclas').text('parentNode');
        $('.jQclas').text('parent');
    }else if
    ($(selected).attr('id')=='command 33')
    {
        $('.jsclas').text('childNodes');
        $('.jQclas').text('children');
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}