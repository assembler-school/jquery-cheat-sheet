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
        $( ".run" ).text("click");
        $('.jsclas').text('submit');
        $('.jQclas').text('submit');
        $('.run').on('click',iSubm);
    }else if
    ($(selected).attr('id')=='command 9')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('change');
        $('.jQclas').text('change');
        $('.run').on('click',isChange);
    }else if
    ($(selected).attr('id')=='command 10')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('onmouseover');
        $('.jQclas').text('mouseover');
        $('.run').on('click',isOver);
    }else if
    ($(selected).attr('id')=='command 11')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('.checked');
        $('.jQclas').text(':checked');
        $('.run').on('click',isCliked);
    }else if
    ($(selected).attr('id')=='command 12')
    {
        $( ".run" ).text("Display list");
        $('.jsclas').text('(this).click');
        $('.jQclas').text('(this).on');
        $('.run').on('click',selectOpt);
    }else if
    ($(selected).attr('id')=='command 13')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('create');
        $('.jQclas').text('add');
        $('.run').on('click',inElement);
    }else if
    ($(selected).attr('id')=='command 14')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('remove');
        $('.jQclas').text('remove');
        $('.run').on('click',killElement);
    }else if
    ($(selected).attr('id')=='command 15')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('insertAdjesent(after)');
        $('.jQclas').text('append');
        $('.run').on('click',newLastCh);
    }else if
    ($(selected).attr('id')=='command 16')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('insertAdjesent(before)');
        $('.jQclas').text('prepend');
        $('.run').on('click',newFirstCh);
    }else if
    ($(selected).attr('id')=='command 17')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('append');
        $('.jQclas').text('after');
        $('.run').on('click',elementAfter);
    }else if
    ($(selected).attr('id')=='command 18')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('prepend');
        $('.jQclas').text('before');
        $('.run').on('click',elementBefore);
    }else if
    ($(selected).attr('id')=='command 19')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('cloneNode(true)');
        $('.jQclas').text('clone');
        $('.run').on('click',colantion);
    }else if
    ($(selected).attr('id')=='command 20')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('classList.add');
        $('.jQclas').text('addClass');
        $('.run').on('click',addingClass);
    }else if
    ($(selected).attr('id')=='command 21')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('classList.remove');
        $('.jQclas').text('removeClass');
        $('.run').on('click',removingClass);
    }else if
    ($(selected).attr('id')=='command 22')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('classList.toggle');
        $('.jQclas').text('toggle');
        $('.run').on('click',toggClass);
    }else if
    ($(selected).attr('id')=='command 23')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('setAttribute("disabled")');
        $('.jQclas').text('attr("disabled")');
        $('.run').on('click',newAtribute);
    }else if
    ($(selected).attr('id')=='command 24')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('removeAttribute("disabled")');
        $('.jQclas').text('removeAttr("disabled")');
        $('.run').on('click',deteAtribute);
    }else if
    ($(selected).attr('id')=='command 25')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('setAttribute("data-src","name")');
        $('.jQclas').text('attr("data-src","name")');
        $('.run').on('click',dataSrc);
    }else if
    ($(selected).attr('id')=='command 26')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('removeAttribute("data-src")');
        $('.jQclas').text('removeAttr("data-src")');
        $('.run').on('click',deleDataSrc);
    }else if
    ($(selected).attr('id')=='command 27')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('visibility = "hidden"');
        $('.jQclas').text('hide');
        $('.run').on('click',noShow);
    }else if
    ($(selected).attr('id')=='command 28')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('style.visibility = "visible"');
        $('.jQclas').text('show');
        $('.run').on('click',siShow);
    }else if
    ($(selected).attr('id')=='command 29')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('style.opacity+');
        $('.jQclas').text('fadeIn');
        $('.run').on('click',opacityUp);
    }else if
    ($(selected).attr('id')=='command 30')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('style.opacity-');
        $('.jQclas').text('fadeOut');
        $('.run').on('click',opacityDown);
    }else if
    ($(selected).attr('id')=='command 31')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('forEach');
        $('.jQclas').text('each');
        $('.run').on('click',runArray);
    }else if
    ($(selected).attr('id')=='command 32')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('parentNode');
        $('.jQclas').text('parent');
        $('.run').on('click',PapaNode);
    }else if
    ($(selected).attr('id')=='command 33')
    {
        $( ".run" ).text("click");
        $('.jsclas').text('childNodes');
        $('.jQclas').text('children');
        $('.run').on('click',sonNode);
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}