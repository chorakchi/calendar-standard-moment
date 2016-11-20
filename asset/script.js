// var a = moment('2016-01-01','MM/DD/YYYY'); 
// document.write(a.weeks);
// document.write(momnet().formant('MMMm Do YYYY , h:mm:ss a'));
// console.log(a._i);
// document.getElementsByClassName.write("hi");

// var sdate = moment().format('YYYY YY / MMMM / DD , d dd ddd dddd');
// var sdate = moment().daysInMonth();
// console.log(picker_startdayofmonth);
// var picker_startdayofmonth = parseInt (picker_date_temp.date("1").format('d'));
// Math.abs(((date.date())%7-7))
function pikertest(testvalue){
  $(".test" ).text( testvalue );
}
function pikersettime(time){
  var picker_pikeddate =  parseInt(time.date());
  var picker_pickedmonth =  parseInt(time.month());
  var picker_pickedyear =  parseInt(time.year());
  var picker_date_temp = time;
  var picker_startdayofmonth =  parseInt (picker_date_temp.date("1").format('d'));
  var picker_dayofmonth = parseInt(time.daysInMonth());
  
  $(".piker-pickedyear").text(time.format('YYYY'));
  $(".piker-pickedday").text(time.format('dddd'));
  $(".piker-pickeddate").text(time.format('D'));
  $(".piker-pickedmonth").text(time.format('MMMM'));
  $(".picker_nowdate").text(moment().format('YYYY/M/D'+' : امـروز'));

  for(  i = 0 ; i <= 41 ; i++ ){
    $(".day-of-mounth").eq(i).text("");
    $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.0)"});
    $(".day-of-mounth").eq(i).removeClass('day-of-mounth-today');
  }    
  for(j =1 ,  i = picker_startdayofmonth ; i <= picker_dayofmonth+picker_startdayofmonth-1 ; i++ , j++){
    $(".day-of-mounth").eq(i).text(j);
    $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.1)"});
    if(j == parseInt(moment().date()) && parseInt(moment().month()) == picker_pickedmonth && parseInt(moment().year()) == picker_pickedyear){
      $(".day-of-mounth").eq(i).addClass('day-of-mounth-today');
    }
  }
}
function onclickfunc(date){
$('.picker-nextmonth').click(function(){
pikersettime(date.add(1, 'months'));
pikertest(parseInt(date.daysInMonth()));
})
$('.picker-prevmonth').click(function(){
pikersettime(date.subtract(1, 'months'));
pikertest(parseInt(date.daysInMonth()));
})  
}

jQuery(document).ready(function () {
  var date = moment();
pikertest(parseInt(date.daysInMonth()));
pikersettime(date);
onclickfunc(date);
});

