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
function pikersettime(date){
  var picker_pikeddate =  parseInt(date.format('D'));
  var picker_pickedmonth =  parseInt(date.format('M'));
  var picker_pickedyear =  parseInt(date.format('YYYY'));
  var picker_date_temp = moment(picker_pickedyear+"-"+picker_pickedmonth+"-01",'YYYY-M-D');
  var picker_startdayofmonth =  parseInt (picker_date_temp.format('d'));
  var picker_dayofmonth = parseInt(date.daysInMonth());
  
  $(".piker-pickedyear").text(date.format('YYYY'));
  $(".piker-pickedday").text(date.format('dddd'));
  $(".piker-pickeddate").text(date.format('D'));
  $(".piker-pickedmonth").text(date.format('MMMM'));
  $(".picker_nowdate").text(moment().format('YYYY/M/D'+' : امـروز'));

  for(  i = 0 ; i <= 41 ; i++ ){
    $(".day-of-mounth").eq(i).text("");
    $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.0)"});
    $(".day-of-mounth").eq(i).removeClass('day-of-mounth-today');
  }    
  for(j =parseInt(moment(picker_pickedyear+"-"+picker_pickedmonth+"-01",'YYYY-M-D').format('D')) ,  i = picker_startdayofmonth ; i <= picker_dayofmonth+picker_startdayofmonth-1 ; i++ , j++){
    $(".day-of-mounth").eq(i).text(j);
    $(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.1)"});
    if(j == parseInt(moment().format('D')) && parseInt(moment().format('M')) == picker_pickedmonth && parseInt(moment().format('YYYY')) == picker_pickedyear){
      $(".day-of-mounth").eq(i).addClass('day-of-mounth-today');
    }
  }
}
function onclickfunc(date){

$('.picker-nextmonth').click(function(){
pikersettime(date.add(1, 'months'));
})

$('.picker-prevmonth').click(function(){
pikersettime(date.subtract(1, 'months'));
})

$('.day-of-mounth').click(function(){
  date.set('date',parseInt($(this).text()));
  $('.piker-pickeddate').text(date.format('D'));
  $('.piker-pickedday').text(date.format('dddd'));
  $('.datepickerinput').val(date.format('YYYY/M/D'));
  $('.datepicker').addClass('datepicker-clapse');
})

// $('.datepickerinput').clickOutsideThisElement(function(){
//     $('.datepicker').addClass('datepicker-clapse');
// })

$('.datepickerinput').focus(function(){
  $('.datepicker').removeClass('datepicker-clapse');
})
}
function apendmonth(){
  var daysofweek = [7];
  for(i=0;i<=6;i++){
    daysofweek[i]= moment().weekday(i).format('ddd');
  }
  

  var month = '<div class="mounth"><div class="picker-header"><div class="piker-pickedmonth picker-btnpicker inline-block color-gray1"> </div><div class="inline-block"> </div><div class="piker-pickedyear picker-btnpicker  inline-block color-gray1"></div><div class="picker-nextmonth picker-btnmonth mfd-down inline-block"></div><div class="picker-prevmonth picker-btnmonth mfd-top inline-block"></div></div><div class="piker-row"><div class="name-of-week">'+ daysofweek[0] +'</div><div class="name-of-week">'+ daysofweek[1] +'</div><div class="name-of-week">'+ daysofweek[2] +'</div><div class="name-of-week">'+ daysofweek[3] +'</div><div class="name-of-week">'+ daysofweek[4] +'</div><div class="name-of-week">'+ daysofweek[5] +'</div><div class="name-of-week">'+ daysofweek[6] +'</div></piker-row><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div></div>';
  $('.block-main').append(month);
}
function  basepicker(){
  var bacepiker = '<div class="datepicker datepicker-clapse"><div class="block-side"><div class="piker-pickedyear"></div><div class="piker-pickedday"></div><div class="piker-pickeddate inline-block"></div><div class="piker-pickedmonth inline-block"></div><div class="picker_nowdate"></div></div><div class="block-main"></div></div>'
  $(bacepiker).insertAfter('.datepickerinput');
}
jQuery(document).ready(function () {
  moment.loadPersian();
  var date = moment();
  basepicker();
  apendmonth();
  // pikertest("");
  pikersettime(date);
  onclickfunc(date);
});

