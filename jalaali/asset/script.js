function jalaalipikersettime(date,selected){
  var picker_pikeddate =  parseInt(date.format('jD'));
  var picker_pickedmonth =  parseInt(date.format('jM'));
  var picker_pickedyear =  parseInt(date.format('jYYYY'));
  var picker_date_temp = moment(parseInt(date.format('jYYYY'))+"-"+parseInt(date.format('jM'))+"-01",'jYYYY-jM-jD');
  var picker_startdayofmonth =  parseInt (picker_date_temp.format('d'))+1;
  var picker_dayofmonth = parseInt(moment.jDaysInMonth(date.format('jYYYY'),date.format('jM')));
  
  selected.next().find(".piker-pickedyear").text(date.format('jYYYY'));
  selected.next().find(".piker-pickedday").text(date.format('dddd'));
  selected.next().find(".piker-pickeddate").text(date.format('jD'));
  selected.next().find(".piker-pickedmonth").text(date.format('jMMMM'));
  selected.next().find(".picker_nowdate").text(moment().format('jYYYY/jM/jD'+' : امـروز'));
  
  selected.next().find('.day-of-mounth').addClass('opacity-none');
  
  setTimeout(function() {
    for(  i = 0 ; i <= 41 ; i++ ){
    selected.next().find(".day-of-mounth").eq(i).text("");
    selected.next().find(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.0)"});
    selected.next().find(".day-of-mounth").eq(i).removeClass('day-of-mounth-today');
  } 
    for(j =parseInt(moment(picker_pickedyear+"-"+picker_pickedmonth+"-01",'jYYYY-jM-jD').format('jD')) ,  i = picker_startdayofmonth ; i <= picker_dayofmonth+picker_startdayofmonth-1 ; i++ , j++){
    selected.next().find(".day-of-mounth").eq(i).text(j);
    selected.next().find(".day-of-mounth").eq(i).css({"border": "1px solid rgba(255,255,255,0.1)"});
    if(j == parseInt(moment().format('jD')) && parseInt(moment().format('M')) == picker_pickedmonth && parseInt(moment().format('jYYYY')) == picker_pickedyear){
      $(".day-of-mounth").eq(i).addClass('day-of-mounth-today');
    }
  }
  }, 350);
  setTimeout(function() {
    selected.next().find('.day-of-mounth').removeClass('opacity-none');
  }, 500);  
}
function jalaalionclickfunc(date){

  $('.datepickerinput').focus(function(){

  $('.datepicker').css({'height': 0 });
  $('.datepicker').addClass('datepicker-clapse');
  
  $(this).next().css({'height': $(this).next().children('.block-main').height() });
  $(this).next().removeClass('datepicker-clapse');
  
})

$('.picker-nextmonth').click(function(){
  var i = parseInt($(this).parents('.datepickerinput[typecalendar="jalaali"]').index('.datepickerinput[typecalendar="jalaali"]'));

jalaalipikersettime(date.add(1, 'jMonth'),$('.datepickerinput[typecalendar="jalaali"]').eq(i));
})

$('.picker-prevmonth').click(function(){
  var i = parseInt($(this).parents('.datepicker').index('.datepicker'));
jalaalipikersettime(date.subtract(1, 'month'),$('.datepickerinput[typecalendar="jalaali"]').eq(i));
})

$('.day-of-mounth').click(function(){
  
  date.jDate(parseInt($(this).text()));
  $(this).parents('.datepicker').find('.piker-pickeddate').text(date.format('jD'));
  $(this).parents('.datepicker').find('.piker-pickedday').text(date.format('dddd'));
  $(this).parents('.datepicker').prev('.datepickerinput').val(date.format('jYYYY/jM/jD'));
  $(this).parents('.datepicker').addClass('datepicker-clapse');
  $(this).parents('.datepicker').css({'height': 0});
})

  $(window).on("click.Bst", function(event){
		if ( $('.datepicker , .datepickerinput').has(event.target).length == 0 && !$('.datepicker, .datepickerinput').is(event.target)){
			$('.datepicker').addClass('datepicker-clapse');
        $('.datepicker').css({'height': 0});
		}
	});

}
function jalaaliapendmonth(){
  var daysofweek = [0];
  for(i=0;i<=6;i++){
    daysofweek[i]= moment().weekday(i).format('ddd');
  }
  

  var month = '<div class="mounth"><div class="picker-header"><div class="piker-pickedmonth picker-btnpicker inline-block color-gray1"> </div><div class="inline-block"> </div><div class="piker-pickedyear picker-btnpicker  inline-block color-gray1"></div><div class="picker-nextmonth picker-btnmonth mfd-down inline-block"></div><div class="picker-prevmonth picker-btnmonth mfd-top inline-block"></div></div><div class="piker-row"><div class="name-of-week">'+ daysofweek[0] +'</div><div class="name-of-week">'+ daysofweek[1] +'</div><div class="name-of-week">'+ daysofweek[2] +'</div><div class="name-of-week">'+ daysofweek[3] +'</div><div class="name-of-week">'+ daysofweek[4] +'</div><div class="name-of-week">'+ daysofweek[5] +'</div><div class="name-of-week">'+ daysofweek[6] +'</div></piker-row><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="sperat-week"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div><div class="day-of-mounth"></div></div>';
  $('.block-main').append(month);
}
function  jalaalibasepicker(){
  var bacepiker = '<div class="datepicker datepicker-clapse animation-g"><div class="block-side"><div class="piker-pickedyear"></div><div class="piker-pickedday"></div><div class="piker-pickeddate inline-block"></div><div class="piker-pickedmonth inline-block"></div><div class="picker_nowdate"></div></div><div class="block-main"></div></div>'
  $(bacepiker).insertAfter('.datepickerinput');
}
function jalaalidatepicker(){
  if($('.datepickerinput[lang]').attr('lang') == "fa"){
    moment.loadPersian();
  }
  var date = moment();
  jalaalibasepicker();
  jalaaliapendmonth();
  for(i = $('.datepickerinput').length; i >= 0; i--){
    jalaalipikersettime(date,$('.datepickerinput[typecalendar="jalaali"]').eq(i));
  }
  jalaalionclickfunc(date);
}
jQuery(document).ready(function () {
  if($('.datepickerinput[typecalendar]').attr('typecalendar') == "jalaali"){
    jalaalidatepicker();
  }else if($('.datepickerinput[typecalendar]').attr('typecalendar') == "jalaali"){
    georgiandatepicker();
  }
});

