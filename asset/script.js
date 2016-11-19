// var a = moment('2016-01-01','MM/DD/YYYY'); 
// document.write(a.weeks);
// document.write(momnet().formant('MMMm Do YYYY , h:mm:ss a'));
// console.log(a._i);
// document.getElementsByClassName.write("hi");

// var sdate = moment().format('YYYY YY / MMMM / DD , d dd ddd dddd');
// var sdate = moment().daysInMonth();
// console.log(picker_startdayofmonth);
// var picker_startdayofmonth = parseInt (picker_date_temp.date("1").format('d'));

jQuery(document).ready(function () {

var picker_nowdate =  parseInt(moment().date());
var picker_nowmonth =  parseInt(moment().month());
var picker_nowyear =  parseInt(moment().year());

var picker_date = moment();
var picker_pikeddate =  parseInt(picker_date.date());
var picker_pickedmonth =  parseInt(picker_date.month());
var picker_pickedyear =  parseInt(picker_date.year());
var picker_startdayofmonth =  Math.abs(((picker_date.date())%7)-7);
var picker_dayofmonth = parseInt(picker_date.daysInMonth());

        $(".piker-pickedyear").text(picker_date.format('YYYY'));
        $(".piker-pickedday").text(picker_date.format('dddd'));
        $(".piker-pickeddate").text(picker_date.format('D'));
        $(".piker-pickedmonth").text(picker_date.format('MMMM'));
        $(".picker_nowdate").text(moment().format('YYYY / M / D'));

  for(j =1 ,  i = picker_startdayofmonth ; i <= picker_dayofmonth+1 ; i++ , j++){
  $(".day-of-mounth").eq(i).text(j);
  $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.2)"});
  if(j ==picker_nowdate && picker_nowmonth == picker_pickedmonth && picker_nowyear== picker_pickedyear){
    $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,1)"});
  }
}

  $(".test" ).text( parseInt(picker_date.Month()) );
});