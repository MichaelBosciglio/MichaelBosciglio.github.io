var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function isEmail(email) {
    var a = document.getElementById(email).value;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
    return regex.test(a);
}

function isCCNumber(cc) {
    var ccnum = document.getElementById(cc).value;
    
    if (isNaN(ccnum)) return false;
    else{
        if (ccnum.length == 16) return true;
        else return false;
    }
}

function isCVCNumber(cvc) {
    var cvcnum = document.getElementById(cvc).value;
    
    if (isNaN(cvcnum)){
        return false;
    }
    else{
        if (cvcnum.length == 3) return true;
        else return false;
    }
}

function isCCDateNumber(cvc) {
    var ccd = document.getElementById(cvc).value;
    var ccm = ccd.split("/")[0];
    var ccy = ccd.split("/")[1];

    if (isNaN(ccm) && isNaN(ccy)){
        return false;
    }
    else{
        if (ccm.length == 2 && ccy.length==4){
            if (parseInt(ccm)>12) return false;
            else return true; 
        }
        else return false;
    }
}

function isPhoneNumber(a) {
    var phone = document.getElementById(a).value;
    
    if (isNaN(phone)) return false;
    else{
        if (phone.length == 10) return true;
        else return false;
    }
}

function isFirstName(firstName) {
    var first = document.getElementById(firstName).value;
    var letters = /^[A-Za-z]+$/;
    if(first.match(letters)) return true;
    else return false;
}
function isLastName(lastName) {
    var last = document.getElementById(lastName).value;
    var letters = /^[A-Za-z]+$/;
    if(last.match(letters)) return true;
    else return false;
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#emailInput").on("change", function(){
        if (!isEmail("emailInput")){
            alert("Email format is incorrect!")
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });

    $("#cardInput").on("change", function(){
        if (!isCCNumber("cardInput")){
            alert("Credit card number is invalid!")
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });

    $("#cvcInput").on("change", function(){
        if (!isCVCNumber("cvcInput")){
            alert("CVC number is invalid!")
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    });

    $("#firstNameInput").on("change", function(){
        if (!isFirstName("firstNameInput")){
            alert("First Name Invalid")
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    }); 
    $("#lastNameInput").on("change", function(){
        if (!isLastName("lastNameInput")){
            alert("Last Name Invalid")
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    }); 
    $("#phoneInput").on("change", function(){
        if (!isPhoneNumber("phoneInput")){
            alert("Phone Number Invalid")
            $(this).css('border-color',"#ff1100" );
        }
        else{
            $(this).css('border-color',"#ced4da" );
        }
    }); 
    

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#date" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/27/2021'),
            maxDate: '+12M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)

});