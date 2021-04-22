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
    $('.title').text($(selected).text());
    if($(selected).attr('id')=='command 0'){
        $('.jQueryText').text('Node.onload = function(){myScript}');
        $('.vanillaText').text(	`$( "#idOfNode" ).load( "file to execute" )`);
        
    }else if
    ($(selected).attr('id')=='command 1')
    {
        $('.jQueryText').text('texto jQuery1');
        $('.vanillaText').text('texto JavaScript1');
    }else if
    ($(selected).attr('id')=='command 2')
    {
        $('.jQueryText').text('texto jQuery2');
        $('.vanillaText').text('texto JavaScript2');
    }else if
    ($(selected).attr('id')=='command 3')
    {
        $('.jQueryText').text('texto jQuery3');
        $('.vanillaText').text('texto JavaScript3');
    }else if
    ($(selected).attr('id')=='command 4')
    {
        $('.jQueryText').text('texto jQuery4');
        $('.vanillaText').text('texto JavaScript4');
    }else if
    ($(selected).attr('id')=='command 5')
    {
        $('.jQueryText').text('texto jQuery5');
        $('.vanillaText').text('texto JavaScript5');
    }else if
    ($(selected).attr('id')=='command 6')
    {
        $('.jQueryText').text('texto jQuery6');
        $('.vanillaText').text('texto JavaScript6');
    }else if
    ($(selected).attr('id')=='command 7')
    {
        $('.jQueryText').text('texto jQuery7');
        $('.vanillaText').text('texto JavaScript7');
    
    }else if
    ($(selected).attr('id')=='command 8')
    {
        $('.jQueryText').text('texto jQuery8');
        $('.vanillaText').text('texto JavaScript8');
    }else if
    ($(selected).attr('id')=='command 9')
    {
        $('.jQueryText').text('texto jQuery9');
        $('.vanillaText').text('texto JavaScript9');
    }else if
    ($(selected).attr('id')=='command 10')
    {
        $('.jQueryText').text('texto jQuery10');
        $('.vanillaText').text('texto JavaScript10');
    }else if
    ($(selected).attr('id')=='command 11')
    {
        $('.jQueryText').text('texto jQuery11');
        $('.vanillaText').text('texto JavaScript11');
    }else if
    ($(selected).attr('id')=='command 12')
    {
        $('.jQueryText').text('texto jQuery12');
        $('.vanillaText').text('texto JavaScript12');
    }else if
    ($(selected).attr('id')=='command 13')
    {
        $('.jQueryText').text('texto jQuery13');
        $('.vanillaText').text('texto JavaScript13');
    }else if
    ($(selected).attr('id')=='command 14')
    {
        $('.jQueryText').text('texto jQuery14');
        $('.vanillaText').text('texto JavaScript14');
    }else if
    ($(selected).attr('id')=='command 15')
    {
        $('.jQueryText').text('texto jQuery15');
        $('.vanillaText').text('texto JavaScript15');
    }else if
    ($(selected).attr('id')=='command 16')
    {
        $('.jQueryText').text('texto jQuery16');
        $('.vanillaText').text('texto JavaScript16');
    }else if
    ($(selected).attr('id')=='command 17')
    {
        $('.jQueryText').text('texto jQuery17');
        $('.vanillaText').text('texto JavaScript17');
    }else if
    ($(selected).attr('id')=='command 18')
    {
        $('.jQueryText').text('texto jQuer18');
        $('.vanillaText').text('texto JavaScript18');
    }else if
    ($(selected).attr('id')=='command 19')
    {
        $('.jQueryText').text('texto jQuery19');
        $('.vanillaText').text('texto JavaScript19');
    }else if
    ($(selected).attr('id')=='command 20')
    {
        $('.jQueryText').text('texto jQuery20');
        $('.vanillaText').text('texto JavaScript20');
    }else if
    ($(selected).attr('id')=='command 21')
    {
        $('.jQueryText').text('texto jQuery21');
        $('.vanillaText').text('texto JavaScript21');
    }else if
    ($(selected).attr('id')=='command 22')
    {
        $('.jQueryText').text('texto jQuery22');
        $('.vanillaText').text('texto JavaScript22');
    }else if
    ($(selected).attr('id')=='command 23')
    {
        $('.jQueryText').text('texto jQuery23');
        $('.vanillaText').text('texto JavaScript23');
    }else if
    ($(selected).attr('id')=='command 24')
    {
        $('.jQueryText').text('texto jQuery24');
        $('.vanillaText').text('texto JavaScript24');
    }else if
    ($(selected).attr('id')=='command 25')
    {
        $('.jQueryText').text('texto jQuery25');
        $('.vanillaText').text('texto JavaScript25');
    }else if
    ($(selected).attr('id')=='command 26')
    {
        $('.jQueryText').text('texto jQuery26');
        $('.vanillaText').text('texto JavaScript26');
    }else if
    ($(selected).attr('id')=='command 27')
    {
        $('.jQueryText').text('texto jQuery27');
        $('.vanillaText').text('texto JavaScript27');
    }else if
    ($(selected).attr('id')=='command 28')
    {
        $('.jQueryText').text('texto jQuery28');
        $('.vanillaText').text('texto JavaScript28');
    }else if
    ($(selected).attr('id')=='command 29')
    {
        $('.jQueryText').text('texto jQuery29');
        $('.vanillaText').text('texto JavaScript29');
    }else if
    ($(selected).attr('id')=='command 30')
    {
        $('.jQueryText').text('texto jQuery30');
        $('.vanillaText').text('texto JavaScript30');
    }else if
    ($(selected).attr('id')=='command 31')
    {
        $('.jQueryText').text('texto jQuery31');
        $('.vanillaText').text('texto JavaScript31');
    }else if
    ($(selected).attr('id')=='command 32')
    {
        $('.jQueryText').text('texto jQuery32');
        $('.vanillaText').text('texto JavaScript32');
    }else if
    ($(selected).attr('id')=='command 33')
    {
        $('.jQueryText').text('texto jQuery33');
        $('.vanillaText').text('texto JavaScrip33');
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}