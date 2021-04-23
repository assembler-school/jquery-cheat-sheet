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
        $('.jQueryText').text('Node.onload = function(){myScript}');
        $('.vanillaText').text(	`$( "#idOfNode" ).load( "file to execute" )`);
        $('.jsclas').text('DOMContentLoaded');
        $('.jQclas').text('ready');
        
    }else if
    ($(selected).attr('id')=='command 1')
    {
        $('.jQueryText').text('texto jQuery1');
        $('.vanillaText').text('texto JavaScript1');
        $('.jsclas').text('cliked');
        $('.jQclas').text('data("cliked",true)');
        
    }else if
    ($(selected).attr('id')=='command 2')
    {
        $('.jQueryText').text('texto jQuery2');
        $('.vanillaText').text('Dblclicksss');
        $('.jsclas').text('dblclick');
        $('.jQclas').text('dblclick');
    }else if
    ($(selected).attr('id')=='command 3')
    {
        $('.jQueryText').text('texto jQuery3');
        $('.vanillaText').text('Keypress');
        $('.jsclas').text('onkeypress');
        $('.jQclas').text('keypress');
    }else if
    ($(selected).attr('id')=='command 4')
    {
        $('.jQueryText').text('texto jQuery4');
        $('.vanillaText').text('Mousemove');
        $('.jsclas').text('onmousemove');
        $('.jQclas').text('mousemove');
    }else if
    ($(selected).attr('id')=='command 5')
    {
        $('.jQueryText').text('texto jQuery5');
        $('.vanillaText').text('Val');
        $('.jsclas').text('value');
        $('.jQclas').text('val');
    }else if
    ($(selected).attr('id')=='command 6')
    {
        $('.jQueryText').text('texto jQuery6');
        $('.vanillaText').text('Ready');
        $('.jsclas').text('onload');
        $('.jQclas').text('load');
    }else if
    ($(selected).attr('id')=='command 7')
    {
        $('.jQueryText').text('texto jQuery7');
        $('.vanillaText').text('Error');
        $('.jsclas').text('onerror');
        $('.jQclas').text('error');
    
    }else if
    ($(selected).attr('id')=='command 8')
    {
        $('.jQueryText').text('texto jQuery8');
        $('.vanillaText').text('Submit');
        $('.jsclas').text('submit');
        $('.jQclas').text('submit');
    }else if
    ($(selected).attr('id')=='command 9')
    {
        $('.jQueryText').text('texto jQuery9');
        $('.vanillaText').text('Change');
        $('.jsclas').text('change');
        $('.jQclas').text('change');
    }else if
    ($(selected).attr('id')=='command 10')
    {
        $('.jQueryText').text('texto jQuery10');
        $('.vanillaText').text('Mouseover');
        $('.jsclas').text('onmouseover');
        $('.jQclas').text('mouseover');
    }else if
    ($(selected).attr('id')=='command 11')
    {
        $('.jQueryText').text('texto jQuery11');
        $('.vanillaText').text(':Checked');
        $('.jsclas').text('.checked');
        $('.jQclas').text(':checked');
    }else if
    ($(selected).attr('id')=='command 12')
    {
        $('.jQueryText').text('texto jQuery12');
        $('.vanillaText').text('$(this).on');
        $('.jsclas').text('(this).click');
        $('.jQclas').text('(this).on');
    }else if
    ($(selected).attr('id')=='command 13')
    {
        $('.jQueryText').text('texto jQuery13');
        $('.vanillaText').text('Add');
        $('.jsclas').text('create');
        $('.jQclas').text('add');
    }else if
    ($(selected).attr('id')=='command 14')
    {
        $('.jQueryText').text('texto jQuery14');
        $('.vanillaText').text('Remove');
        $('.jsclas').text('remove');
        $('.jQclas').text('remove');
    }else if
    ($(selected).attr('id')=='command 15')
    {
        $('.jQueryText').text('texto jQuery15');
        $('.vanillaText').text('Append');
        $('.jsclas').text('appendChild');
        $('.jQclas').text('append');
    }else if
    ($(selected).attr('id')=='command 16')
    {
        $('.jQueryText').text('texto jQuery16');
        $('.vanillaText').text('Prepend');
        $('.jsclas').text('prepend');
        $('.jQclas').text('prepend');
    }else if
    ($(selected).attr('id')=='command 17')
    {
        $('.jQueryText').text('texto jQuery17');
        $('.vanillaText').text('After');
        $('.jsclas').text('insertAdjesent(after)');
        $('.jQclas').text('after');
    }else if
    ($(selected).attr('id')=='command 18')
    {
        $('.jQueryText').text('texto jQuer18');
        $('.vanillaText').text('Before');
        $('.jsclas').text('insertAdjesent(before)');
        $('.jQclas').text('before');
    }else if
    ($(selected).attr('id')=='command 19')
    {
        $('.jQueryText').text('texto jQuery19');
        $('.vanillaText').text('Clone');
        $('.jsclas').text('cloneNode(true)');
        $('.jQclas').text('clone');
    }else if
    ($(selected).attr('id')=='command 20')
    {
        $('.jQueryText').text('texto jQuery20');
        $('.vanillaText').text('addClass');
        $('.jsclas').text('classList.add');
        $('.jQclas').text('addClass');
    }else if
    ($(selected).attr('id')=='command 21')
    {
        $('.jQueryText').text('texto jQuery21');
        $('.vanillaText').text('removeClass');
        $('.jsclas').text('classList.remove');
        $('.jQclas').text('removeClass');
    }else if
    ($(selected).attr('id')=='command 22')
    {
        $('.jQueryText').text('texto jQuery22');
        $('.vanillaText').text('toggle');
        $('.jsclas').text('classList.toggle');
        $('.jQclas').text('toggle');
    }else if
    ($(selected).attr('id')=='command 23')
    {
        $('.jQueryText').text('texto jQuery23');
        $('.vanillaText').text('attr("disabled")');
        $('.jsclas').text('setAttribute("disabled")');
        $('.jQclas').text('attr("disabled")');
    }else if
    ($(selected).attr('id')=='command 24')
    {
        $('.jQueryText').text('texto jQuery24');
        $('.vanillaText').text('removeAttr("disabled")');
        $('.jsclas').text('removeAttribute("disabled")');
        $('.jQclas').text('removeAttr("disabled")');
    }else if
    ($(selected).attr('id')=='command 25')
    {
        $('.jQueryText').text('texto jQuery25');
        $('.vanillaText').text('attr("data-src","src-data name")');
        $('.jsclas').text('setAttribute("data-src","name")');
        $('.jQclas').text('attr("data-src","name")');
    }else if
    ($(selected).attr('id')=='command 26')
    {
        $('.jQueryText').text('texto jQuery26');
        $('.vanillaText').text('texto JavaScript26');
        $('.jsclas').text('removeAttribute("data-src")');
        $('.jQclas').text('removeAttr("data-src")');
    }else if
    ($(selected).attr('id')=='command 27')
    {
        $('.jQueryText').text('texto jQuery27');
        $('.vanillaText').text('texto JavaScript27');
        $('.jsclas').text('visibility = "hidden"');
        $('.jQclas').text('hide');
    }else if
    ($(selected).attr('id')=='command 28')
    {
        $('.jQueryText').text('texto jQuery28');
        $('.vanillaText').text('texto JavaScript28');
        $('.jsclas').text('style.visibility = "visible"');
        $('.jQclas').text('show');
    }else if
    ($(selected).attr('id')=='command 29')
    {
        $('.jQueryText').text('texto jQuery29');
        $('.vanillaText').text('texto JavaScript29');
        $('.jsclas').text('style.opacity+');
        $('.jQclas').text('fadeIn');
    }else if
    ($(selected).attr('id')=='command 30')
    {
        $('.jQueryText').text('texto jQuery30');
        $('.vanillaText').text('texto JavaScript30');
        $('.jsclas').text('style.opacity-');
        $('.jQclas').text('fadeOut');
    }else if
    ($(selected).attr('id')=='command 31')
    {
        $('.jQueryText').text('texto jQuery31');
        $('.vanillaText').text('texto JavaScript31');
        $('.jsclas').text('forEach');
        $('.jQclas').text('each');
    }else if
    ($(selected).attr('id')=='command 32')
    {
        $('.jQueryText').text('texto jQuery32');
        $('.vanillaText').text('texto JavaScript32');
        $('.jsclas').text('parentNode');
        $('.jQclas').text('parent');
    }else if
    ($(selected).attr('id')=='command 33')
    {
        $('.jQueryText').text('texto jQuery33');
        $('.vanillaText').text('texto JavaScrip33');
        $('.jsclas').text('childNodes');
        $('.jQclas').text('children');
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}