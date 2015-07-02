define("quickTools", ["jquery", "mustache", "rwd", "carouFredSel", "jquery-cookie"],
    function($, Mustache, rwd, carouFredSel, jQueryCookie) {

/* #################################################################
/*  TITLE:        quickTools.js                                      
/*  VERSION:      4.7                                                   
/*  AUTHOR:       Errol Dunlap                                                     
/*  LAST EDITOR:  Ray Weitzenberg                                        
/*  LAST UPDATED: 06/26/2015
/*  VERSION ON SERVER: quickTools_2015-06-26c
/*  UPDATE DETAILS: Pushed Friday, 26th - Lightbox Integration 01a
/*
/*                                                                   
/*  NOTES: began as a tools file (see quickTools object at the bottom); 
           Uses:  jQuery, Mustache and should be ported to RequireJS
/* ################################################################# */


function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


 var quickTools = quickTools || {};
 quickTools = {
     siteDate: new Date(),
   lightboxShowTime: 1700,
   lightBoxExpire: 60,
   lightboxSignupCloseCSS: {
     height: "45px",
     width: "100%",
     display: "block"
   },
   em1CSS: {
     position: "relative",
     width: "550px",
     height: "330px",
     background: "url(http://uniqlo.scene7.com/is/image/UNIQLO/060314%5Femail%5Fsignup%5Fpopup%5Ffinal?&fmt=jpg&qlt=85,0) center center no-repeat",
     "z-index": 105
   },
   em1FieldsetCSS: {
     "max-width": "480px !important",
     position: "relative !important",
     top: "175px !important"
   },
   init: function() {
     self = this;
     if (self.isHome()) {
        // quickTools.doCheckSubscribedLightBox();
     } else { //not homepage

     }
   },
   createOverlay: function(content, contentWidth, type, closeCopy) {
     if (type == "video") {
       content =
         "<div style='text-align: center; margin: auto; height: 400px'><object type='application/x-shockwave-flash' style='width:100%; height:95%;' data='http://www.youtube.com/v/" +
         content +
         "?color1=FFFFFF&amp;color2=FF0000&amp;border=1&amp;rel=0&amp;autoplay=1&amp;showsearch=0&amp;version=3&amp;modestbranding=1'> <param name='movie' value='http://www.youtube.com/v/" +
         content +
         "?color1=FFFFFF&amp;color2=FF0000&amp;border=1&amp;rel=0&amp;autoplay=1&amp;showsearch=0&amp;version=3&amp;modestbranding=1' /> <param name='allowFullScreen' value='true' /> <param name='allowscriptaccess' value='always' /> </object></div>";
     }
     if (type == "product") {
       content =
         "<div style='text-align: center; margin: auto; height: 550px'><iframe src='https://www.uniqlo.com/us/special/product/?c=false&id=" +
         content + "' style='height:100%;width:100%' frameborder='0' scrolling='no' ></iframe></div>";
     }
     if (!contentWidth || contentWidth == "") {
       contentWidth = "30%";
     }
     if (closeCopy) {
         var closeMarkup = "<div align='right'><a href='javascript:;' id='doOverLayClose' style='padding-right: 10px; padding-top: 8px; display:block; text-align: right; color: white; background: red'>" + closeCopy + "</a></div>";
     } else {
       var closeMarkup = "";
     }
     var contentPosition = {
       left: "25%",
       top: "8%",
       width: contentWidth,
       bg: "white"
     };
     var overlayHTML =
       "<div style='height: 100%; width: 100%; display:none; background: url(http://uniqlo.scene7.com/is/image/UNIQLO/blk%5Ftrans?fmt=png-alpha) repeat scroll 0 0 rgba(0, 0, 0, 0); position: fixed; z-index: 102; padding-top: 3em' id='overlayHTML'></div><div id='overlayContent' style='position: fixed !important; display: none; padding: 10px; height: auto; width: " +
           contentPosition.width + "; z-index: 103;'>" + closeMarkup + "<div>" + content + "</div></div>";
     jQuery("body").prepend(overlayHTML);
     jQuery("#overlayHTML, #overlayContent").fadeIn(300);
     self.center(jQuery("#overlayContent"));
     jQuery("#overlayContent p").css({
       "margin": "15px 0"
     });
     jQuery("#overlayHTML, #doOverLayClose").on("click", function() {
       jQuery("#overlayHTML, #overlayContent").fadeOut(300, function() {
         jQuery(this).remove();
         jQuery.cookie("showLightboxSignup", true, {
               expires: self.lightBoxExpire
            });
       })
     });
   },
   doCheckSubscribedLightBox: function() {
       var em =
            // '<div id="em1"><style>body{margin:-10px 0 0 0}#light-container{width:600px;height:545px;background:#fff}#light-stroke{position:relative;top:10px;height:515px;margin:10px;border:6px solid red}#lightboxSignupClose{position:absolute;right:-4px;height:19px!important;width:23px!important;font-family:UNIQLOBold;font-size:25px;color:#fff;line-height:8px;text-align:center;text-decoration:none;background-color:red}#light-logo{position:absolute;left:237px;top:39px}section{position:relative;top:107px}#sign-up{position:relative;width:210px;margin:0 auto!important;font-family:UniqloBoldRegular,helvetica,arial,sans-serif;font-family:UNIQLOBold;font-size:62px;color:red;text-align:center}#perks{position:relative;top:-13px;width:410px;margin:0 auto!important;text-align:center;font-family:UniqloBoldRegular,helvetica,arial,sans-serif;font-family:UNIQLOBold;font-size:50px;color:#000}hr{position:relative;top:-7px;width:407px;border-top:1px solid red}#treat{position:relative;top:18px;width:410px;margin:0 auto!important;text-align:center;font-family:UniqloBoldRegular,helvetica,arial,sans-serif;font-family:UNIQLORegular;font-size:23px;letter-spacing:1px;line-height:26px;color:red}#treat span{font-size:21px;color:#000}#forming{margin-top:50px;margin-left:67px}fieldset{top:330px;border:none}#email-lightbox{width:264px;height:29px;padding:5px 0 3px 12px;font-size:17px;font-family:UNIQLORegular;color:#000;border:3px solid red;background:0 0}::-webkit-input-placeholder{font-family:UNIQLORegular;color:#000}:-moz-placeholder{font-family:UNIQLORegular;color:#000}::-moz-placeholder{font-family:UNIQLORegular;color:#000}:-ms-input-placeholder{font-family:UNIQLORegular;color:#000}#submit{position:relative;top:-1px;width:114px;height:43px;margin-left:6px;padding-top:5px;font-family:UNIQLORegular;font-size:15px;letter-spacing:1px;color:#fff;background-color:red;border:none}#disclaimer{width:404px;margin-left:15px;margin-top:15px;font-family:UNIQLORegular;font-size:11px;line-height:12px;color:red;text-align:center}.rfk-rw[data-cssid=home1]{display:none}</style><div id="light-container"> <div id="light-stroke"> <a href="javascript:void(0)" id="lightboxSignupClose">x</a> <img id="light-logo" src="http://uniqlo.scene7.com/is/image/UNIQLO/lightbox_logo"> <section> <p id="sign-up">SIGN UP</p> <p id="perks">FOR SOME PERKS!</p> <hr> <p id="treat">As a thank you, you&apos;ll get<span> $10 off</span> <br>your purchase of $75 or more in your welcome email!</p> </section> <section id="forming">  <div id="signupper"> <div id="errormessage" class="error"></div> <form id="group-lightbox" class="group" name="signup-lightbox"> <fieldset name="signupField"> <input id="email-lightbox" type="email" name="mailAddrLogin-lightbox" placeholder="ENTER YOUR EMAIL" maxlength="64" class="input" pattern="^[a-zA-Z0-9_\-\/\?\+][\.a-zA-Z0-9_\-\/\?\+]*@([a-zA-Z0-9_\-]*[a-zA-Z0-9_\-]\.)+([a-zA-Z0-9][a-zA-Z0-9]*)$" required> <input type="submit" value="SUBMIT" class="submit" id="submit" name="submitEmail-lightbox"> </fieldset> </form> <div id="message"></div> </div> <div id="disclaimer"> <p>We&apos;ll never share your information and you can unsubcribe with a single click at<br> anytime. Offer will arrive via email approximately 24-48 hours after sign up.</p> </div> </section> </div> </div></div>';
            '<div id="em1"> <div id="emOv-container"> <div id="emOv-stroke"> <a href="javascript:void(0)" id="emOv-signupClose">x</a> <img id="emOv-logo" src="http://uniqlo.scene7.com/is/image/UNIQLO/lightbox_logo"> <section id="emOv-welcome-section" class="welcome-section"> <p id="emOv-sign-up">SIGN UP</p> <p id="emOv-perks">FOR SOME PERKS!</p> <hr id="emOv-hr-signUp"> <p id="emOv-treat">As a thank you, you&apos;ll get <br> a special <span>TREAT</span> in your welcome email!</p> </section> <section id="emOv-forming" class="harvester-section"> <div id="emOv-signupper"> <div id="emOv-errormessage" class="error"></div> <form id="emOv-group-lightbox" class="group" name="signup-lightbox"> <fieldset id="emOv-fieldset" name="signupField"> <input id="emOv-textbox" type="email" name="mailAddrLogin-lightbox" placeholder="ENTER YOUR EMAIL" maxlength="64" class="input" pattern="^[a-zA-Z0-9_\-\/\?\+][\.a-zA-Z0-9_\-\/\?\+]*@([a-zA-Z0-9_\-]*[a-zA-Z0-9_\-]\.)+([a-zA-Z0-9][a-zA-Z0-9]*)$" required> <input type="submit" value="SUBMIT" class="submit lightbox" id="emOv-submit" name="submitEmail-lightbox"> </fieldset> </form> <div id="emOv-message"></div> </div> <div id="emOv-disclaimer"> <p>We&apos;ll never share your information and you can unsubscribe with a single click at <br> anytime. Offer will arrive via email approximately 24-48 hours after sign up.</p> </div> </section> </div> </div> </div>';
        var doLightboxSignupClose = function() {
               jQuery("#em1").fadeOut(300, function() {
               jQuery("#overlayHTML, #emOv-signupClose").click();
               jQuery(this).remove();
           });
            //save cookie to not show for a month
            // COOKIE COOKIE COOKIE
            jQuery.cookie("showLightboxSignup", true, {
               expires: self.lightBoxExpire
            });
        }


          //cookie check to see if showLightboxSignup is true
        if (!jQuery.cookie("showLightboxSignup")) {
          self.createOverlay(em, "480px");
          ga('send', 'event', 'email_overlay', 'impression', 'email_signup_offer', {'nonInteraction': 1});
          // jQuery("#em1").addClass("email-sign-up-component").css(self.em1CSS);

           // CLOSING THE LIGHTBOX USING 'X' BUTTON
           //
           $( "#lightboxSignupClose" ).click(function() {
               doLightboxSignupClose();
           });


          $("#em1 #emOv-group-lightbox").submit(function(e) {
            var email = document.getElementById("emOv-textbox").value;


           // Checking if visitor is subscribed
           var api = 'https://www.uniqlo.com/us/store/ApiGetMailMemberInfo.do?format=json&email=' + email + '&type01=Y&type08=Y&automail=Y';
           // console.log(subscriberCheck);

           // This version of var api REGISTERS the visitor
           var api2 = "https://www.uniqlo.com/us/store/ApiRegMailMemberInfo.do?format=json&email=" + email + "&type01=Y&type08=Y&automail=Y";
           if (email !== '' && email.length <= 64) {
               $.ajax({
               crossDomain: true,
               // type: "POST",
               type: "GET",
               url: api,
               xhrFields: {
                 withCredentials: false
               },
               headers: {
                 'Access-Control-Allow-Origin': '*'
               },
               dataType: "jsonp",
               jsonpCallback: "returnFunction",
               cache: false,
               contentType: "application/json; charset=utf-8",

               Error: function() {
                 var errorMessage = "Sorry, your registration has not been completed, please try again."
                 $("#em1 #emOv-errormessage").html(errorMessage);
                 
                 var responseCode = obj.RegMailMemberInfo.responseInfo.resultCode;
                 console.log('responseCode: ' + responseCode);
               },

               success: function(response) {

                   if (response['Error'] == undefined) 
                   {
                       var errorMessage = "Sorry, this email is already subscribed.";
                       $("#em1 #emOv-errormessage").html(errorMessage);
                       ga('send', 'event', 'email_overlay', 'click', 'email_signup_already_subscribed');
                   } 
                   else 
                   {

                       var responseCheck = response['Error'].responseErroInfo.resultCode;
                       // console.log('responseCheck: ' + responseCheck);

                       var responseCode = response['Error'].responseErroInfo.resultCode;
                       var messageCode = response['Error'].responseErroInfo.detail.messageCode;

                       if (responseCode == '100' && messageCode == "API-CS-E-M-001") {

                           $.ajax({
                               crossDomain: true,
                               type: "POST",
                               url: api2,                  
                               xhrFields: {
                                 withCredentials: false
                               },
                               headers: {
                                 'Access-Control-Allow-Origin': '*'
                               },
                               dataType: "jsonp",
                               jsonpCallback: "returnFunction",
                               cache: false,
                               contentType: "application/json; charset=utf-8",
                               success: function(postResponse) {
                                   // var emThank = '<img src="http://24.media.tumblr.com/49f7caffa896829a55a261b6d0858246/tumblr_mnh375KPGH1rk1qp5o1_500.gif" style="width: 500px; height: 500px;" />';
                                                                      // self.createOverlay(emThank, "480px");
                                   


                                   var obj = postResponse;
                                   if (typeof obj.RegMailMemberInfo != "undefined") {
                                       var responseCode = obj.RegMailMemberInfo.responseInfo.resultCode;
                                       var messageCode = obj.RegMailMemberInfo.responseInfo.detail.messageCode;
                                       var textMessage;
                                       if (responseCode == '000' && messageCode == "API-CS-I-M-002") {
                                           // var emThank = '<style>body{margin:-10px 0 0 0}#light-container{width:600px;height:398px;background-repeat:no-repeat;background-color:#fff}#light-stroke{position:relative;top:10px;height:367px;margin:10px;border:6px solid red}#lightboxSignupClose{position:absolute;right:-4px;height:19px;width:23px;font-family:UNIQLOBold;font-size:25px;color:#fff;line-height:8px;text-align:center;text-decoration:none;background-color:red}#light-logo{position:absolute;left:237px;top:39px}section{position:relative;top:105px}#thank-you{position:relative;width:410px;margin:0 auto;font-family:UniqloBoldRegular,helvetica,arial,sans-serif;font-family:UNIQLOBold;font-size:62px;color:#000;text-align:center}hr{position:relative;top:18px;width:477px;border-top:1px solid red}#confirmation{position:relative;top:33px;width:450px;margin:0 auto;text-align:center;font-family:UniqloBoldRegular,helvetica,arial,sans-serif;font-family:UNIQLORegular;font-size:22px;letter-spacing:1px;line-height:26px;color:red}</style><div id="light-container"> <div id="light-stroke"> <a href="javascript:void(0)" id="lightboxSignupClose">x</a> <img id="light-logo" src="http://uniqlo.scene7.com/is/image/UNIQLO/lightbox_logo"> <section> <p id="thank-you">THANK YOU!</p> <hr> <p id="confirmation">We have updated your subscription <br>preference. You should receive a confirmation <br>email shortly, followed by your welcome <br>offer 24-48 hours later.</p> </section> </div> </div>';
                                           var emThank = '<div id="light-container-thanks"> <div id="light-stroke-thanks"> <a href="javascript:void(0)" id="lightboxSignupClose">x</a> <img id="light-logo" src="http://uniqlo.scene7.com/is/image/UNIQLO/lightbox_logo"> <section class="thank-you-section"> <p id="thank-you">THANK YOU!</p> <hr> <p id="confirmation">We have updated your subscription <br>preference. You should receive a confirmation <br>email shortly, followed by your welcome <br>offer 24-48 hours later.</p> </section> </div> </div>';
                                           $("#em1").html(emThank);
                                           textMessage = "Thank you for signing up for Uniqlo emails. We are excited to keep in touch!";
                                           $("#em1 #emOv-errormessage").hide();
                                           $("#em1 #message").html(textMessage);
                                           $( "#lightboxSignupClose" ).click(function() {
                                                doLightboxSignupClose();
                                           });
                                           ga('send', 'event', 'email_overlay', 'click', 'email_signup_success');

                                           var mto = setTimeout(function() {
                                               doLightboxSignupClose();
                                           }, 8000);
                                       } else {
                                           var errorMessage = "Sorry, your registration has not been completed, please try again."
                                           $("#em1 #emOv-errormessage").css({
                                               "color": "red",
                                               "font-weight": "bold"
                                           }).html(errorMessage);
                                           ga('send', 'event', 'email_overlay', 'click', 'email_signup_error');
                                       }
                                   } else {
                                       var errorMessage = "Sorry, your registration has not been completed, please try again."
                                       $("#em1 #emOv-errormessage").html(errorMessage);
                                   }
                               },
                               error: function() {
                                  var errorMessage = "Sorry, your registration has not been completed, please try again."
                                  $("#em1 #emOv-errormessage").html(errorMessage);
                                  ga('send', 'event', 'email_overlay', 'click', 'email_signup_error');
                               },
                           });  //end of api2 POST emailReg call
                       }
                       else 
                       {
                           //issue with the get
                           var errorMessage = "Sorry, your registration has not been completed, please try again."
                           $("#em1 #emOv-errormessage").html(errorMessage);
                           ga('send', 'event', 'email_overlay', 'click', 'email_signup_error');
                       }
                   } 
               }
              }); //end of api GET check if email already subscribe call
            }
            return false;
          });
        }
      },

   timer: function(fnt, nm) {
     setTimeout(fnt, nm); //1700
   }, //
   center: function(ele) {
     jQuery(ele).css("position", "absolute");
     jQuery(ele).css("top", "100px"); //Math.max(0, ((jQuery(window).height() - jQuery(ele).outerHeight()) / 2) + jQuery(window).scrollTop()) + "px");
     jQuery(ele).css("left", Math.max(0, ((jQuery(window).width() - jQuery(ele).outerWidth()) / 2) + jQuery(window).scrollLeft()) +
       "px");
     //return this;
   },
}
 }
 quickTools.init();


 

    return quickTools;
});

require(["quickTools"]);
