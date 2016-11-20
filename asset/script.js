// var a = moment('2016-01-01','MM/DD/YYYY'); 
// document.write(a.weeks);
// document.write(momnet().formant('MMMm Do YYYY , h:mm:ss a'));
// console.log(a._i);
// document.getElementsByClassName.write("hi");

// var sdate = moment().format('YYYY YY / MMMM / DD , d dd ddd dddd');
// var sdate = moment().daysInMonth();
// console.log(picker_startdayofmonth);
// var picker_startdayofmonth = parseInt (picker_date_temp.date("1").format('d'));
function pikertest(testvalue){
  $(".test" ).text( testvalue );
}
function pikersettime(time){
  var picker_pikeddate =  parseInt(time.date());
  var picker_pickedmonth =  parseInt(time.month());
  var picker_pickedyear =  parseInt(time.year());
  var picker_startdayofmonth =  Math.abs(((time.date())%7)-7);
  var picker_dayofmonth = parseInt(time.daysInMonth());
  
  $(".piker-pickedyear").text(time.format('YYYY'));
  $(".piker-pickedday").text(time.format('dddd'));
  $(".piker-pickeddate").text(time.format('D'));
  $(".piker-pickedmonth").text(time.format('MMMM'));
  $(".picker_nowdate").text(moment().format('YYYY / M / D'));
        
  for(j =1 ,  i = picker_startdayofmonth ; i <= picker_dayofmonth+1 ; i++ , j++){
    $(".day-of-mounth").eq(i).text(j);
    $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.2)"});
    if(j == parseInt(moment().date()) && parseInt(moment().month()) == picker_pickedmonth && parseInt(moment().year()) == picker_pickedyear){
      $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,1)"});
    }
  }
}
jQuery(document).ready(function () {
pikertest(parseInt(moment().date()));
pikersettime(moment());
});

