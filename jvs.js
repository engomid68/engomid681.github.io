//<![CDATA[
var contentHeight = 34;
var TimeToSlide = 300.0;
var openprobox = '';
function runprobox(index){
    var divID = "probox" + index + "content";
    if(openprobox == divID){
        divID = '';
    }
    setTimeout("animate(" + new Date().getTime() + "," + TimeToSlide + ",'" + openprobox + "','" + divID + "')", 33);
    openprobox = divID;

}
function animate(lastTick, timeLeft, closingId, openingId){
    var curTick = new Date().getTime();
    var elapsedTicks = curTick - lastTick;
    var opening = (openingId == '') ? null : document.getElementById(openingId);
    var closing = (closingId == '') ? null : document.getElementById(closingId);
    
    if(timeLeft <= elapsedTicks){
        if(opening != null){
            opening.style.height = contentHeight + 'px';
        }
        if(closing != null){
            closing.style.display = 'none';
            closing.style.height = '0px';
        }
    return;
    }
    timeLeft -= elapsedTicks;
  var newClosedHeight = Math.round((timeLeft/TimeToSlide) * contentHeight);
  if(opening != null){
      if(opening.style.display != 'block'){
          opening.style.display = 'block';
      }
      opening.style.height = (contentHeight - newClosedHeight) + 'px';
  }
  if(closing != null){
      closing.style.height = newClosedHeight + 'px';
  }
  setTimeout("animate(" + curTick + "," + timeLeft +",'" + closingId + "','" + openingId + "')", 33);
}
//]]>