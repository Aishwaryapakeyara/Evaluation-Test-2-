formvalidate = {
  init: function() {
    this.valid();
    this.main_cb();
    this.time_slot();
},
valid: function () {
  $('#myform').validate({

    rules: {
      name: {
        required: true,
        non_numeric: true,
        minlength: 3
      },
      age: {
        required: true
      },
      email: {
        required: true,
        mail: true
      },
      phone_num: {
        required: true,
        phnregex: true,
        minlength: 10,
        maxlength: 10
      },
      'gender': {
        required: true
      },
      time1: {
        required: true
      },
      time2: {
        required: true
      },
      time3: {
        required: true
      },
      time4: {
        required: true
      },
      time5: {
        required: true
      },
      time6: {
        required: true
      },
      time7: {
        required: true
      }
    
    },
  });
  },
    main_cb: function () {
      formvalidate.days_Checked();//to disable when page loads
      $('#check_box').on('change', function(){
        formvalidate.days_Checked();
      });
  },
  days_Checked: function(){
      $('.time-selection input[type=checkbox]').attr('disabled', $('#check_box:checked').length==0);
      $('.time-selection select').attr('disabled', true);
  },
  time_slot: function(){
    $('.time-selection input[type=checkbox]').on('change', function (){
      debugger
      $(this).parent().siblings('div').children('select').attr('disabled', !this.checked);
  });
  }

}

$(function () {
  enable_cb();
  $("#check_box").click(enable_cb);
});


function enable_cb() {
  if (!this.checked) {
    $("input.checkbox").prop("disabled", true);
    $("#sunday1").prop("checked", false);
    $("#monday").prop("checked", false);
    $("#tuesday").prop("checked", false);
    $("#wednesday").prop("checked", false);
    $("#thursday").prop("checked", false);
    $("#friday").prop("checked", false);
    $("#saturday").prop("checked", false);

    $("#time1").prop("disabled", true);
    $("#time2").prop("disabled", true);
    $("#time3").prop("disabled", true);
    $("#time4").prop("disabled", true);
    $("#time5").prop("disabled", true);
    $("#time6").prop("disabled", true);
    $("#time_S").prop("disabled", true);
    $('#time1').val('');
    $('#time2').val('');
    $('#time3').val('');
    $('#time4').val('');
    $('#time5').val('');
    $('#time6').val('');
    $('#time_S').val('');
    $("#time1-error").hide();
    $("#time1").removeClass("error");
    $("#time2-error").hide();
    $("#time2").removeClass("error");
    $("#time3-error").hide();
    $("#time3").removeClass("error");
    $("#time4-error").hide();
    $("#time4").removeClass("error");
    $("#time5-error").hide();
    $("#time5").removeClass("error");
    $("#time6-error").hide();
    $("#time6").removeClass("error");
    $("#time_S-error").hide();
    $("#time_S").removeClass("error");
  }}

function passvalues() {
  var name = document.getElementById("name1").value;
  localStorage.setItem("Value1", name);
  var age = document.getElementById("age1").value;
  localStorage.setItem("Value2", age);
  var email = document.getElementById("email1").value;
  localStorage.setItem("Value3", email);
  var phone = document.getElementById("phone_num1").value;
  localStorage.setItem("Value4", phone);
  var gender = $(" input[type='radio'][name='gender']:checked").val();
  localStorage.setItem("Value5", gender);
  var day1 = document.getElementById("time1").value;
  localStorage.setItem("Value6", day1);
  var day2 = document.getElementById("time2").value;
  localStorage.setItem("Value7", day2);
  var day3 = document.getElementById("time3").value;
  localStorage.setItem("Value8", day3);
  var day4 = document.getElementById("time4").value;
  localStorage.setItem("Value9", day4);
  var day5 = document.getElementById("time5").value;
  localStorage.setItem("Value10", day5);
  var day6 = document.getElementById("time6").value;
  localStorage.setItem("Value11", day6);
  var day7 = document.getElementById("time_S").value;
  localStorage.setItem("Value12", day7);

  return false;

} 