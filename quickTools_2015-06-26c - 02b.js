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


var uniqloObj = uniqloObj || {};

///////////////////////
/////////toc 0/////////
uniqloObj.tocZeroImageName = "toc_0_062615_2";
uniqloObj.tocZeroCoordinates = [
                                {coord:"0,0,688,892", url:"/us/women/bottoms/shorts.html"},
                                {coord:"692,0,1460,376", url:"/us/women/bottoms/shorts.html"},
                                {coord:"696,382,1454,896", url:"/us/men/bottoms/shorts.html"}
                                // {coord:"999,2,1225,65", url:"/us/women/featured/active-clothing.html"},
                               ];
///////////////////////
/////////toc 0 (75%)/////////
uniqloObj.tocZeroSecondImageName = "010515_hp_m";
uniqloObj.tocZeroSecondCoordinates = [ //if tocZero has 2 images to show 75% of the time
                                {coord:"2,4,364,770", url:"/us/men/outerwear/ultra-light-down.html"},
                                {coord:"4,774,178,846", url:"/us/women/outerwear/ultra-light-down.html"},
                                {coord:"182,774,364,847", url:"/us/men/outerwear/ultra-light-down.html"},
                                {coord:"368,2,1462,850", aurl:"/us/men/outerwear/ultra-light-down.html"}
                               ];

uniqloObj.tocZeroSecondShowRatio = [1,0,1,1,1];

///////////////////////
/////////toc 0.5/////////
uniqloObj.tocZero75ImageName = "";
uniqloObj.tocZero75Coordinates = [
                                {coord:"1,2,729,440", url:"/us/women/innerwear-and-loungewear/airism.html"},
                                {coord:"1184,282,1379,322", url:"/us/women/innerwear-and-loungewear/airism.html"},
                                {coord:"1182,330,1380,370", url:"/us/men/innerwear-and-loungewear/airism.html"},
                                {coord:"1183,378,1378,421", url:"/us/kids/featured/airism.html"}
                               ];

///////////////////////
/////////toc 1/////////

    uniqloObj.tocOneImgName = "toc_1_062615_3";
    uniqloObj.tocOneNumImgLinks = "2"; //link count for image anchor overlay
    uniqloObj.tocOneLinks = [
                                ["Shop Men's", "/us/men/featured/tennis-performance-wear.html"],
                                ["Shop Men's UT", "/us/men/featured/ut.html"],
                                ["Shop Kids' UT", "/us/kids/featured/ut.html"]

                            ];
    uniqloObj.tocOneTitle =  "Get in the Game with New Performance Wear From $49.90 & Fun UT Mickey Plays T-shirts Men’s $12.90, Kids’ $9.90";
    uniqloObj.tocOneDescrip = "Ace your serve with Djokovic & Nishikori Performance Wear or have fun with UT Mickey Plays t-shirts featuring playful Mickey sports poses.";
///////////////////////
/////////toc 2/////////

    uniqloObj.tocTwoImgName = "toc_2_062615";
    uniqloObj.tocTwoNumImgLinks = "2";
    uniqloObj.tocTwoLinks = [
                                ["Shop Women's", "/us/women/featured/active-clothing.html"],
                                ["Shop Men's", "/us/men/featured/active-clothing.html"]
                               
                            ];
    uniqloObj.tocTwoTitle = "Get Moving in Sweat-Wicking T-shirts, Bratops, Hoodies, and Pants! Reg. From $19.90, <font color='red'>Now From $9.90</font>";
    uniqloObj.tocTwoDescrip = "Perfect for sports or everyday activities that keep you active.";

///////////////////////
/////////toc 3/////////

    uniqloObj.tocThreeImgName = "toc_3_062615";
    uniqloObj.tocThreeNumImgLinks = "3";
    uniqloObj.tocThreeLinks = [
                                ["Shop Women's", "/us/women/featured/weekly-promotion.html"],
                                ["Shop Men's", "/us/men/featured/weekly-promotion.html"],
                                ["Shop Kids'", "/us/kids/featured/weekly-promotion.html"]
                            ];
    uniqloObj.tocThreeTitle =  "Celebrate UNIQLO’s store openings with these special promotions! <font color='red'>Prices starting from $9.90</font>";
    uniqloObj.tocThreeDescrip = "Shop specially-priced products in celebration of Skyview and UNIQLO store openings!";


// ///////////////////////
// /////////toc 4/////////

    uniqloObj.tocFourImgName = "toc_4_062615";
    uniqloObj.tocFourNumImgLinks = "2";
    uniqloObj.tocFourLinks = [
                                ["Shop Women's", "/us/women/outerwear/water-defender-ultra-light-down.html"],
                                ["Shop Men's", "/us/men/outerwear/water-defender-ultra-light-down.html"]
                                // ["Shop Kid's", "/us/kids/featured/ut.html"]
                            ];
    uniqloObj.tocFourTitle = "Ultra Light Down Water Defender Fall/Winter 2015 From $79.90";
    uniqloObj.tocFourDescrip = "New features include an aluminum inner lining for men’s styles that retains body heat, adding 1.5 times more warmth than ever before! Plus, a water-resistant outer lining has been added to all new styles.";

// ///////////////////////
/////////hp banners/////////

var bannerData = {
    height: 60,
    randomNum: 20,

    banner: [{
        order: 1,
        time: 10000,
        link: "/us/help/shipping.html",
        images: [
            {size:"s", name:"freeshipping_061515_720-1", width:720, height:60},
            {size:"m", name:"freeshipping_061515_960-1", width:960, height:60},
            {size:"l", name:"freeshipping_061515_1464-1", width:1464, height:60},
        ]},
        {
        order: 2,
        time: 5000,
        link: "http://uniqlo.scene7.com/is/content/UNIQLO/us_site_assets/store_opens/pdf/15SS_Big_Flyer_Santa_Monica_Place_For_EC_061715.PDF",
        images: [
            {size:"s", name:"santamonica_061915_720", width:720, height:60},
            {size:"m", name:"santamonica_061915_960", width:960, height:60},
            {size:"l", name:"santamonica_061915_1464", width:1464, height:60},
        ]}
       // { 
       // {
        // order: 2,
        // time: 5000,
        // link: "http://uniqlo.scene7.com/is/content/UNIQLO/us_site_assets/store_opens/pdf/Skyview_Big_Flyer_for_EC2.pdf", 
        // target: "_blank",
        // images: [
            // {size:"s", name:"store_060515_720", width:720, height:60},
            // {size:"m", name:"store_060515_960", width:960, height:60},
            // {size:"l", name:"store_060515_1464", width:1464, height:60},
        //]

    //}
       ]

/*
to hotspot the banner sizes:
,{
        order: 2,
        time: 5000,
        link: "#",
        images: [
            {size:"s", name:"store_daily_1212_720", width:720, height:150,
        html: [{
            coords: "314,113,509,147", coordUrl: "/us/women/featured/hot-daily-deals.html", target: "_self"
        },{
            coords: "509,115,701,146", coordUrl: "http://uniqlo.scene7.com/is/content/UNIQLO/us_site_assets/life_stories/home/2014/12/12/DecemberDailyPromo1212_1224Easel.pdf", target: "_blank"
        }]},
            {size:"m", name:"store_daily_1212_960", width:960, height:150,
        html: [{
            coords: "428,114,657,148", coordUrl: "/us/women/featured/hot-daily-deals.html", target: "_self"
        },{
            coords: "667,115,869,148", coordUrl: "http://uniqlo.scene7.com/is/content/UNIQLO/us_site_assets/life_stories/home/2014/12/12/DecemberDailyPromo1212_1224Easel.pdf", target: "_blank"
        }]},
            {size:"l", name:"store_daily_1212_1464", width:1464, height:150,
        html: [{
            coords: "681,115,911,148", coordUrl: "/us/women/featured/hot-daily-deals.html", target: "_self"
        },{
            coords: "920,115,1122,149", coordUrl: "http://uniqlo.scene7.com/is/content/UNIQLO/us_site_assets/life_stories/home/2014/12/12/DecemberDailyPromo1212_1224Easel.pdf", target: "_blank"
        }]},
        ]
    }

*/

}


uniqloObj.doInit = function(){
    //this kicks off the whole thing...in order of appearance: 
    var self = this;
    uniqloObj.headerBanners("#topBanners");
   // uniqloObj.promoTOCzeroOne();
    uniqloObj.promoTOCzero();
    uniqloObj.promoTOCs();

    //uniqloObj.doHpBlogPosts();
    uniqloObj.categoryTOCs();
    //uniqloObj.categoryTOCsToo("#siteTOContainer");
}




/* ==================================================
 * =============== STOP EDITING =====================
 * ==================================================
 */


uniqloObj.headerBanners = function(bannerContainer) {


/***
 *      _  _   ___     ___     _     _  _   _  _   ___   ___   ___ 
 *     | || | | _ \   | _ )   /_\   | \| | | \| | | __| | _ \ / __|
 *     | __ | |  _/   | _ \  / _ \  | .` | | .` | | _|  |   / \__ \
 *     |_||_| |_|     |___/ /_/ \_\ |_|\_| |_|\_| |___| |_|_\ |___/
 *                                                                 
 */ 

    var bannerTpl = '<span id="pause" style="padding:2px 0 0 5px;position:absolute;display:none;font-weight:bold;font-size:10px">||</span> <ul style="position:absolute;display:none"> <li style="list-style: none">{{#banner}}</li> <li><a href="#{{order}}" style="width:16px;height:16px;display:block;font-size:16px;text-shadow:2px 1px #ABABAB;text-align:center">ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢</a>{{/banner}}</li> </ul> <div id="bannerContainer"> {{#banner}} <div class="banner" data-order="{{order}}" data-time="{{time}}"> <a href="{{link}}"> {{#images}} <span class="{{size}}"> <img height="{{height}}" src="http://uniqlo.scene7.com/is/image/UNIQLO/{{name}}?$jpgMQ$&wid={{width}}&hei={{height}}&randNum={{randomNum}}" usemap="#bannerMap{{order}}{{size}}" width="{{width}}"> <map id="bannerMap{{order}}{{size}}" name="bannerMap{{order}}{{size}}"> {{#html}} <area coords="{{coords}}" href="{{coordUrl}}" shape="rect" target="{{target}}" alt="" title=""> {{/html}} </span> </map>{{/images}} </a> </div> {{/banner}} </div>';
    var bannerHtml = Mustache.render(bannerTpl, bannerData);
    jQuery(bannerContainer).html(bannerHtml);
    jQuery("#bannerContainer .banner, #topBanners").attr({"style":"height:"+bannerData.height+"px !important;"});

    jQuery("#bannerContainer .banner a, #bannerContainer .banner img").attr({"style":"height:"+bannerData.height+"px !important;width: inherit; display: block;"});
    //jQuery()

    var bannerCount = bannerData.banner.length;
    var doBannerRotate;
    var indexCounter = 0;
            doRotator();

    function doRotator() {
        showTime = bannerData.banner[indexCounter].time;
        bannerOrder = bannerData.banner[indexCounter].order;

        var moveBanner = function(theTime, theCounter) {
            showTime = bannerData.banner[indexCounter].time;

            if (theCounter == (bannerCount - 1)) {
                jQuery("#bannerContainer").animate({
                    "margin-top": "0px"
                });
                indexCounter = 0;
            } else {
                jQuery("#bannerContainer").animate({
                    "margin-top": "-="+bannerData.height+"px"
                });
                indexCounter++;
            }
            doRotator();
        }

        doBannerRotate = setTimeout(function() {
            moveBanner(showTime, indexCounter);
        }, bannerData.banner[indexCounter].time);
    }

    jQuery(bannerContainer+" ul li a").on({
        click: function(){
            console.log(jQuery(this).index());
        }
    });
/*
    jQuery(bannerContainer+" .banner").on({
        mouseenter: function(){
            jQuery("#pause").fadeIn();
            indexCounter = 999;
        },
        mouseleave: function(){
            jQuery("#pause").fadeOut();
            indexCounter = jQuery(this).index();
            doRotator();
        }
    });
    */
}//end hpbanners

/***
 *      _____    ___     ___      __  
 *     |_   _|  / _ \   / __|    /  \ 
 *       | |   | (_) | | (__    | () |
 *       |_|    \___/   \___|    \__/ 
 *                                    
 */                             

    uniqloObj.promoTOCzero = function() {
         var self = this;

    var tocZeroWidth = jQuery("#headerNavArea").width();
    var tocZeroTpl = '<img src="http://uniqlo.scene7.com/is/image/UNIQLO/{{img}}" border="0" usemap="#topHeaderMap" width="1464" style="display:none"><map id="topHeaderMap" name="topHeaderMap">{{#areas}}<area shape="rect" alt="" title="" coords="{{{coord}}}" href="{{url}}" target="" />{{/areas}}</map>';
         var tocZeroImg = self.tocZeroImageName; //"top_0302";
    
         var tocZeroData = {
             img: tocZeroImg+"?$jpgMQ$",
            areas: self.tocZeroCoordinates
    }

   var randArray = self.tocZeroSecondShowRatio;
     var randArrayNum = Math.floor(Math.random()*4);

     if(randArray[randArrayNum] == 0 && 1!=1){//randArray[randArrayNum]

     var tocZeroData = {
                    img:self.tocZeroSecondImageName+"?$jpgMQ$&resMode=trilin&qlt=50,0",
                    areas: self.tocZeroSecondCoordinates
                 }
     }

         var tocZero = Mustache.render(tocZeroTpl,tocZeroData);
         jQuery("#headerNavArea").html(tocZero);

/*
 * =============== STOP EDITING =====================
 */

         //setTimeout(function() {
             if(jQuery("#tocHeaderImg #headerNavArea img").attr("src") != ""){
           jQuery("#tocHeaderImg #headerNavArea img").attr("height", jQuery("#tocHeaderImg #headerNavArea img").attr("height")).attr(
             "width", jQuery("#tocHeaderImg #headerNavArea img").attr("width"));
           jQuery("#headerNavArea").attr("height", jQuery("#tocHeaderImg #headerNavArea img").attr("height"));
           var topCss = {
             "border": "none",
             "height": "auto",
             "max-width": "100%",
             "width": "auto"
           }
            jQuery("#headerNavArea img").css(topCss);
            jQuery("#headerNavArea img").rwdImageMaps();
            jQuery("#headerNavArea img").fadeIn(400);
             }
         //}, 1800);
         jQuery(window).on("resize", function(e) {
           jQuery("#headerNavArea").height(jQuery("#headerNavArea img").attr("height"));
         });
   }

/***
 *      _____    ___     ___      
 *     |_   _|  / _ \   / __|    
 *       | |   | (_) | | (__    () 
 *       |_|    \___/   \___|    
 *                                    
 */                             


uniqloObj.promoTOCzeroOne = function() {
     var self = this;
    var tocZeroOneWidth = jQuery("#secondaryNavArea").width();
    var tocZeroOneTpl = '<img src="http://uniqlo.scene7.com/is/image/UNIQLO/{{img}}" border="0" usemap="#topSecondaryMap" width="1464" style="display:none"><map id="topSecondaryMap" name="topSecondaryMap">{{#areas}}<area shape="rect" alt="" title="" coords="{{{coord}}}" href="{{url}}" target="" />{{/areas}}</map>';
     var tocZeroOneImg = self.tocZero75ImageName; //"toc_0_1_0217";

     var tocZeroOneData = {
         img: tocZeroOneImg+"?$jpgMQ$",
        areas: self.tocZero75Coordinates
}

         var tocZeroOne = Mustache.render(tocZeroOneTpl,tocZeroOneData);
         jQuery("#secondaryNavArea").html(tocZeroOne);

/*
 * =============== STOP EDITING =====================
 */

         //setTimeout(function() {
             if(jQuery("#tocSecondaryImg #secondaryNavArea img").attr("src") != ""){
           jQuery("#tocSecondaryImg #secondaryNavArea img").attr("height", jQuery("#tocSecondaryImg #secondaryNavArea img").attr("height")).attr(
             "width", jQuery("#tocSecondaryImg #secondaryNavArea img").attr("width"));
           jQuery("#headerNavArea").attr("height", jQuery("#tocHeaderImg #secondaryNavArea img").attr("height"));
           var topCss = {
             "border": "none",
             "height": "auto",
             "max-width": "100%",
             "width": "auto"
           }
            jQuery("#secondaryNavArea img").css(topCss);
            jQuery("#secondaryNavArea img").rwdImageMaps();
            jQuery("#secondaryNavArea img").fadeIn(400);
             }
         //}, 1800);
         jQuery(window).on("resize", function(e) {
           jQuery("#secondaryNavArea").height(jQuery("#secondaryNavArea img").attr("height"));
         });
   }

uniqloObj.promoTOCs = function() {
     var self = this;

/***
 *      _____    ___     ___     _         _ _  
 *     |_   _|  / _ \   / __|   / |  ___  | | | 
 *       | |   | (_) | | (__    | | |___| |_  _|
 *       |_|    \___/   \___|   |_|         |_| 
 *                                              
 */

   var tocData = [
     ///////////////////////
     ///////////////////////
     //toc1
     [
        ["http://uniqlo.scene7.com/is/image/UNIQLO/"+self.tocOneImgName], //image
     //['<iframe width="720" height="315" src="https://www.youtube.com/embed/ypAYC95-bZ4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'], //video
       self.tocOneLinks,
       [self.tocOneTitle], //title
       [self.tocOneDescrip], //description
       self.tocOneNumImgLinks //link count for image anchor overlay
     ],
     ///////////////////////
     ///////////////////////
     //toc2
     [
       ["http://uniqlo.scene7.com/is/image/UNIQLO/"+self.tocTwoImgName], //image
       self.tocTwoLinks,
       [self.tocTwoTitle], //title
       [self.tocTwoDescrip], //description
       self.tocTwoNumImgLinks //link count for image anchor overlay
     ],
     ///////////////////////
     ///////////////////////
     //toc3
     [
       ["http://uniqlo.scene7.com/is/image/UNIQLO/"+self.tocThreeImgName], //image
       self.tocThreeLinks,
       [self.tocThreeTitle], //title
       [self.tocThreeDescrip], //description
       self.tocThreeNumImgLinks //link count for image anchor overlay
     ],
     ///////////////////////
     ///////////////////////
     //toc4
     [
       ["http://uniqlo.scene7.com/is/image/UNIQLO/"+self.tocFourImgName], //image
       // ['<iframe width="100%" height="338" src="https://www.youtube.com/embed/wmZDrVx_FjU?rel=0" frameborder="0" allowfullscreen></iframe>'], //video
       self.tocFourLinks,
       [self.tocFourTitle], //title
       [self.tocFourDescrip], //description
       self.tocFourNumImgLinks //link count for image anchor overlay
     ]
   ];
//console.log(tocData[3][0]).indexOf('iframe')));

/*
 * =============== STOP EDITING =====================
 */

     //needs a rewrite
    var tocMarkup1 = '{{#toc}}<section class="table-of-contents-tile n{{tocCounter}}"> <div class="parbase TOCPromoLarge largePromo1"> <div class="table-of-contents-promos-component"> <a class="table-of-contents-promo-component uql-component" data-component-name="table-of-contents-promo" href="#home-{{index}}"> <div class="banner-frame with-border"> <img alt="{{{title}}}" class="banner" data-animated-gif="{{image}}?$HomePageTOC$&&fmt=jpg&qlt=85&{{randNum}}" src="{{image}}?$HomePageTOC$&$jpgMQ$&resMode=sharp2&qlt=75,0&{{randNum}}"> {{anchorOverlays}} </div> <div class="textBox"> <div class="textHolder"> <div class="product-overview"> <div class="tocMenu"> {{#links}} <a class="tocMenu" href="{{links.[0]}}">{{links.[1]}}</a> {{/links}} </div> <h2>{{{title}}}</h2> <p>{{{body}}}</p> </div> </div> </div> </a> </div> </div> </section>{{/toc}}';

   var tocMarkup = "";
   var tocCounter = 0;
   var randNum = 150;
   for (var x = 0; x < tocData.length; x++) {
     tocCounter++;
     tocMarkup = tocMarkup + '<section class="table-of-contents-tile n' + tocCounter +
       '"> <div class="parbase TOCPromoLarge largePromo1"> <div class="table-of-contents-promos-component"> <a href="#home-' + x +
       '" class="table-of-contents-promo-component uql-component" data-component-name="table-of-contents-promo">';
     tocMarkup = tocMarkup + '<div class="banner-frame with-border"> <img class="banner" src="' + tocData[x][0] +
       '?$HomePageTOC$&$jpgMQ$&' + randNum + '" data-animated-gif="' + tocData[x][0] + '?$HomePageTOC$&&fmt=jpg&qlt=85&' + randNum + '" alt="' +
       tocData[x][2] + '"/>';
     var tocDataLinks = tocData[x][1];

     if (tocData[x][4] !== "") {
       var tocDataLinksLength = tocData[x][4];
     } else {
       var tocDataLinksLength = tocDataLinks.length;
     }
     var anchorWidth = (100 / tocDataLinksLength);
     for (var y = 0; y < tocDataLinksLength; y++) {
       tocMarkup = tocMarkup + '<a href="' + tocData[x][1][y][1] + '" class="tocImgAnchor" style="width:' + anchorWidth + '%"></a>';
     }
     tocMarkup = tocMarkup + '</div><div class="textBox"> <div class="textHolder"> <div class="product-overview"> <div class="tocMenu">';
     var tocDataLinks = tocData[x][1];
       if(tocDataLinksLength >= 3){
         var anchorWidth = (92 / tocDataLinksLength);
         var showAllLinks =  "style=\"width:" + anchorWidth + "%\"";
       }
     for (var z = 0; z < tocDataLinks.length; z++) {
       tocMarkup = tocMarkup + '<a href="' + tocData[x][1][z][1] + '" class="tocMenu" '+showAllLinks+'><nobr>' + tocData[x][1][z][0] + '</nobr></a>';
     }
     tocMarkup = tocMarkup + '</div> <h2>' + tocData[x][2] + '</h2> <p>' + tocData[x][3] + '</p> </div> </div> </div>';
     tocMarkup = tocMarkup + '</a></div></div></section>';

     jQuery("#mainTOCs .table-of-contents-component").append(tocMarkup);
    jQuery(".tocMenu").show();
     var tocMarkup = "";
     if (tocCounter == 2) {
       tocCounter = 0;
     }
   }
   var tocNav = function(thisTOC, index) {
     if (x < 2) {
       //var thisTOC = "#mainTOCs .table-of-contents-component section.n"+tocCounter+":eq(0)";
     } else {
       //var thisTOC = "#mainTOCs .table-of-contents-component section.n"+tocCounter+":eq(1)";
     }
   }
   var tocEle = 1;
   var ts2 = 0;
   for (var ts = 0; ts < 4; ts++) {
     tocNav("#mainTOCs .table-of-contents-component section.n" + tocEle + ":eq(" + ts2 + ")", ts);
     if (tocEle == 2) {
       tocEle = 1;
       ts2++;
     } else {
       tocEle++;
     }
   }
   setTimeout(function() {
     jQuery(".emailSignup .rfk_rw").insertAfter("#reflektionWidget");
   }, 2000);


    jQuery(".table-of-contents-component section").each(function(){
        jQuery(this).find(".tocMenu a:first").css({"margin-left": 0});
    });

    //tocs as mustache
    //Mustache.parse(tocMarkup1);
    //var tocMarkup2 = Mustache.render(tocMarkup1,tocData1);
    //jQuery("#mainTOCs .table-of-contents-component").html(tocMarkup2);
}


uniqloObj.categoryTOCsToo = function(displayContainer) {
     var self = this;
var tocTemplate = '{{#data}} <section class="siteTOC{{containerCounter}}"> {{#subsection}} <div class="siteTOCwrapper"> <div class="siteTOCmenu"> <a href="javascript:;" class="sectionHeader" style="background-color: {{color}}; color: white">{{title}}</a> </div> <div class="siteTOCBody" style=""> <div class="siteTOCbodyContent" style="margin: 0; padding: 0; width: {{setSiteTOCbodyContentWidth}}px"> {{#subsectiondata}} <div style="" class="siteTOCbodyContentSubtainer"><ul class="sectionItemGenders"> <li>{{#items}}<div class="{{slug}}GenderPanel{{submenu}} {{slug}}GenderPanel" data-gender="{{submenu}}" data-price="{{price}}" data-pricecopy="{{pricecopy}}" data-salecopy="{{salecopy}}" data-saleprice="{{saleprice}}" style="display:none"> <a href="http://www.uniqlo.com/us/{{submenu}}/{{sectionslug}}.html" class="sectionBodyHeader" style="color: #888;text-align: center; width: 100%; height: 23px; display: block; padding:5px 0 0">{{subtitle}}</a> <div style="margin: 0; padding: 0; height: 315px; text-align: center; list-style: none; overflow: hidden; "> {{#newflag}} <span style="position: absolute; background: #F00; color: #FFF; padding: 5px 8px 6px; text-align: center; z-index: 99;">New</span> {{/newflag}} <img src="http://uniqlo.scene7.com/is/image/UNIQLO/{{imagename}}?$jpgMQ$&resMode=sharp2&qlt=75,0&crop=50,0,377,315" style="z-index: 98; left: -9px; margin: 0 auto; " data-imagename="{{imagename}}"> </div> <h4 style="margin: 10px 0;padding: 0 10px; font-weight: bold; font-size: 14px">{{{copyheader}}}</h4> <p style="padding: 0 10px;margin: 10px 0;height: 60px">{{{copybody}}}</p> </div>{{/items}} <div class="siteTOCfooter" style="margin: 10px 10px 0;"> <div class="siteTOCprice" style=""> <p style="margin: 7px 0 0; height: 14px; padding: 0">{{salePriceCopy}}{{pricePriceCopy}}</p> <h2 style="margin: 6px 0 0;{{isOnsale}}">{{salePriceNumber}}{{price}}</h2> </div> <div style="padding: 15px 0 0; float: right; " align="right">{{#items}} <a href="http://www.uniqlo.com/us/{{submenu}}/{{sectionslug}}/{{slug}}.html" class="sectionItemGendersButton {{submenu}}" data-sectionslug="{{slug}}" style="" data-gender="{{submenu}}" data-price="{{#price}}{{.}}{{/price}}{{^price}} {{/price}}" data-pricecopy="{{#pricecopy}}{{.}}{{/pricecopy}}{{^pricecopy}} {{/pricecopy}}" data-salecopy="{{#salecopy}}{{.}}{{/salecopy}}{{^salecopy}} {{/salecopy}}" data-saleprice="{{#saleprice}}{{.}}{{/saleprice}}{{^saleprice}} {{/saleprice}}">{{submenu}}</a>{{/items}} </div> </div> <!-- .siteTOCfooter --> </li> </ul><!-- .sectionItemGenders --> </div> {{/subsectiondata}} </div> <div class="sectionNav" style="position: absolute; z-index: 99; text-align: right;right: 0;top: 340px;"> <ul style="margin: 0; text-align: right; padding: 0 10px; height: 35px "> {{#subsectiondata}}<li style="display: inline-block; list-style: none; "><a href="#" data-index="{{navCount}}" ></a></li> {{/subsectiondata}} </ul></div> </div> <!-- .siteTOCBody --> </div> <!-- .siteTOCwrapper --> {{/subsection}} </section> {{/data}}';

var containerIndex = 0; 
var containerCnt = 1; 
var tocMarkup; 
var rt = 0;
var cnt = 0;
var sectionCounter = -1; 

//jQuery.getJSON("/us/etc/designs/uniqlo/js/custom/t.json",function(tocData){  //used for testing and edited in CRX
jQuery.getJSON("/us/special/js/t.json", function(tocData) {
    jQuery.each(tocData, function(a, b) {
        tocCounter = 0;
        tocMarkup = Mustache.render(tocTemplate, {
            data: b,
            containerCounter: function() {
                return containerCnt++;
            },
            priceNumber: function() {
                //console.log(this.subsectiondata.items);
                //return this.subsectiondata;
            },
            setSiteTOCbodyContentWidth: function() {
                sectionCounter++; //jQuery(".siteTOCbodyContent").width
                cnt = 0;
                jQuery.each(this.subsectiondata, function(ah, bh) {
                    cnt++;
                });
                return 488 * cnt;
            },
            thisTOCbodyCount: function() { 
                cnt = 0;
                jQuery.each(this.subsectiondata, function(ah, bh) {
                    cnt++;
                });
                return cnt;
            },
            navCount: function() {
                return sectionCounter++;
            },
            isNew: function() {
                if (this.newflag) {
                    return '';
                }
            },
            getSectionItemsCount: function() {
                rt = 0;
                jQuery.each(this.subsectiondata, function(ah, bh) {
                    rt++;
                });
                return rt;
            }
        });
        jQuery("#siteTOContainer").empty().append("<div align='center'>"+tocMarkup+"</div>");
        jQuery(".siteTOCbodyContent div").each(function() {
            jQuery(this).find("ul.sectionItemGenders li div").eq(0).show();

            var getFirstCTA = jQuery(this).find(".sectionItemGendersButton").eq(0);
            jQuery(getFirstCTA).addClass("selectedGender").attr("data-linked", "1");
            var getRegPrice = "$" + jQuery(this).find(".sectionItemGendersButton").eq(0).data("price");
            var getRegPriceCopy = "" + jQuery(this).find(".sectionItemGendersButton").eq(0).data("pricecopy");
            var getSalePrice = "$" + jQuery(this).find(".sectionItemGendersButton").eq(0).data("saleprice");
            var getSalePriceCopy = "" + jQuery(this).find(".sectionItemGendersButton").eq(0).data("salecopy");

            if (getSalePrice != "$ " && getSalePrice != undefined) {
                jQuery(this).find(".siteTOCprice p").eq(0).text(getSalePriceCopy);
                jQuery(this).find(".siteTOCprice h2").eq(0).text(getSalePrice);
            }else{
                jQuery(this).find(".siteTOCprice h2").eq(0).text("");
            }

            if (getRegPrice != "$ " && getRegPrice != undefined) {
                jQuery(this).find(".siteTOCprice p").eq(0).text(getRegPriceCopy);
                jQuery(this).find(".siteTOCprice h2").eq(0).text(getRegPrice);
            }else{
                jQuery(this).find(".siteTOCprice h2").eq(0).text("");
            }
        });
    });
    jQuery(".sectionItemGendersButton").on({
        click: function() {
            var thisNewLink = jQuery(this).data("linkoverride");
            if (thisNewLink != "") {
                wi
            }
        },
        mouseenter: function() {
            if (jQuery(this).data("linked") == "1") {
                //return true;
            }
            var parentSection = jQuery(this).parents("section");
            var sectionParent = jQuery
            var subSectionSubmenu = jQuery(this).data("sectionsubmenu");
            var subSectionSlug = jQuery(this).data("sectionslug");
            var subSectionGender = jQuery(this).data("gender");
            var getRegPrice = "$" + jQuery(this).data("price");
            var getRegPriceCopy = "" + jQuery(this).data("pricecopy");
            var getSalePrice = "$" + jQuery(this).data("saleprice");
            var getSalePriceCopy = "" + jQuery(this).data("salecopy");
            if (getSalePrice != "$ " && getSalePrice != undefined) {
                jQuery(this).parents(".sectionItemGenders").find(".siteTOCfooter .siteTOCprice p").text(getSalePriceCopy);
                jQuery(this).parents(".sectionItemGenders").find(".siteTOCfooter .siteTOCprice h2").text(getSalePrice);
            }
            if (getRegPrice != "$ " && getRegPrice != undefined) {
                jQuery(this).parents(".sectionItemGenders").find(".siteTOCfooter .siteTOCprice p").text(getRegPriceCopy);
                jQuery(this).parents(".sectionItemGenders").find(".siteTOCfooter .siteTOCprice h2").text(getRegPrice);
            }
            jQuery(this).parents(".siteTOCfooter").find(".sectionItemGendersButton").not(".sectionItemGendersButton." + subSectionGender).removeClass("selectedGender").text(jQuery(this).siblings(
                ".sectionItemGendersButton").data("gender")).attr("data-linked", "0");
            jQuery(this).addClass("selectedGender selectedGenderCTA").html("shop " + jQuery(this).data("gender")).attr("data-linked", "1");
            jQuery(this).parents(".sectionItemGenders").find("div." + subSectionSlug + "GenderPanel").hide();
            jQuery(this).parents(".sectionItemGenders").find("div." + subSectionSlug + "GenderPanel" + subSectionGender).show();
        },
        mouseleave: function() {
            jQuery(this).removeClass("selectedGenderCTA").html("" + jQuery(this).data("gender")).attr("data-linked", "1");
        }
    });
    jQuery(".sectionNav").each(function(a, b) {
        if (jQuery(this).find("ul li a").length <= 1) {
            jQuery(this).find("ul li a").hide();
        }
        jQuery(this).find("ul li a").each(function(c, d) {
            if (c == 0) {
                jQuery(this).addClass("currentNav");
            }
            jQuery(this).attr("data-index", c);
        });
    });
    jQuery(".sectionNav ul li a").on("click", function() {
        var navClickedIndex = jQuery(this).data("index");
        var containerWidth = -(jQuery(".siteTOCbodyContentSubtainer").width());
        jQuery(this).parents(".sectionNav").find("ul li a").removeClass("currentNav");
        jQuery(this).addClass("currentNav").parents(".siteTOCBody").find(".siteTOCbodyContent").animate({
            "margin-left": containerWidth * navClickedIndex + "px"
        });
        return false;
    });

        jQuery(window).resize(function(){
            tocImageCheckSize();
        });
            tocImageCheckSize();
}); //getJSON


var tocImageCheckSize = function(){
    var currentWindowSize = jQuery("body").width();
    var scene7path = "http://uniqlo.scene7.com/is/image/UNIQLO/";
    var imageAttr = "?$jpgMQ$&resMode=sharp2&qlt=75,0";
    var containerWidth = jQuery("#siteTOContainer").width();
    jQuery("#siteTOContainer section").removeClass("sectionWidth485 sectionWidth353 sectionWidth317");
    jQuery("#siteTOContainer .siteTOCbodyContentSubtainer").removeClass("sectionContentWidth485 sectionContentWidth353 sectionContentWidth317");
    
    if(containerWidth >= 1464){
        //section: 485px
        jQuery("#siteTOContainer section").addClass("sectionWidth485");
        jQuery("#siteTOContainer .siteTOCbodyContentSubtainer").addClass("sectionContentWidth485");
        jQuery(".siteTOCprice").addClass("sectionPriceWidth485");
           jQuery("ul.sectionItemGenders li img").each(function(){
             jQuery(this).attr("src",scene7path+""+jQuery(this).data("imagename")+""+imageAttr);
        });
    }
    if(containerWidth > 1006 && containerWidth < 1464){
        //section: 353px
        jQuery("#siteTOContainer section").addClass("sectionWidth353");
        jQuery("#siteTOContainer .siteTOCbodyContentSubtainer").addClass("sectionContentWidth353");
        jQuery(".siteTOCprice").addClass("sectionPriceWidth353");
           jQuery("ul.sectionItemGenders li img").each(function(){
             jQuery(this).attr("src",scene7path+""+jQuery(this).data("imagename")+""+imageAttr+"&crop=50,0,377,315");
        });
    }
    if(containerWidth < 1006){
        //section: 317px
        jQuery("#siteTOContainer section").addClass("sectionWidth317");
        jQuery("#siteTOContainer .siteTOCbodyContentSubtainer").addClass("sectionContentWidth317");
        jQuery(".siteTOCprice").addClass("sectionPriceWidth317");
           jQuery("ul.sectionItemGenders li img").each(function(){
             jQuery(this).attr("src",scene7path+""+jQuery(this).data("imagename")+""+imageAttr+"&crop=50,0,377,315");
        });
    }
}

}


uniqloObj.categoryTOCs = function(){
var self = this;

/***
 *      _____    ___     ___     ___         _    __  
 *     |_   _|  / _ \   / __|   | __|  ___  / |  /  \ 
 *       | |   | (_) | | (__    |__ \ |___| | | | () |
 *       |_|    \___/   \___|   |___/       |_|  \__/ 
 *                                                    
 */

 var tocData = [["Outerwear",[["Blazers","blazers","w_outer_blazer|m_outer_blazer|","women|men|","",["^49.90^^^Women's Light Cotton Jacket^Features the natural feel of cotton, the blazer is garment-dyed for added casual charm.","^129.90^^^Men's Blazer^Classic style with a modern twist, features four inner pockets and a striped lining."]],["Jackets & Coats","jackets-and-coats","w_outer_JacketsCoats|m_outer_SoutienCoat|","women|men|","",["^89.90^^^Women's Short Trench Coat^A timeless classic with contemporary style, it features traditional trench coat details for comfort.","^129.90^^^Men's Light Comfort Convertiable Collar Coat^A durable, lightweight coat that's water-repellent."]],["Ultra light down","ultra-light-down","w_outer_uld|m_outer_uld|","women|men|","",["^69.90^^^Women's Ultra Light Down Quilted Blouson Jacket^Combines incredible lightness and warmth.","^69.90^^^Men's Water Defender Ultra Light Down Jacket^A water-repellent coating protects against light rain."]]], "outerwear","#1ac3cd","Outerwear_w_blazer_720x315|",["women","men","girls","boys","baby","kids"],"",[]],["Tops",[["Sweaters","sweaters","w_tops_sweater|m_tops_sweater|","women|men|","",["^29.90^^^Women's Cotton Cashmere V-Neck Sweater^Made of a premium blend of cotton & cashmere.","^29.90^^^Men's Cotton Cashmere V-Neck Sweater^Made of a premium blend of cotton & cashmere."]],["Sweatshirts","sweatshirts","w_tops_sweatshirt|m_tops_sweatshirt|","women|men|","",["^29.90^^^Women's Long Sleeve Sweat Pullover^This classic sweatshirt has a soft and sporty feel. ","^34.90^^^Men's Dry Stretch Sweat Full-Zip Hoodie^Made with durable sweat material that wicks dry.  "]],["Shirts","shirts","w_tops_silkshirt|m_tops_shirt|","women|men|","women:tops/shirts-and-blouses|men:tops/dress-shirts|",["^59.90^^^Women's Silk Long Sleeve Blouse^Made of 100% silk, and features the smooth, supple feel of top-quality silk. Machine-washable.","^39.90^^^Men's Easy Care Oxford Shirt^Made of wrinkle-resistant fabric, it features a smooth, fine texture that completes any elegant look."]],["T-shirts","t-shirts","tops_w_tshirt_720x315|tops_m_tshirt_720x315|","women|men|","",["^14.90^^^Women's Supima Cotton Modal Crewneck T-Shirt^Soft, flowing fabric that's easy to wear. ","^19.90^^^Men Washed Striped Long Sleeve T-Shirt^Prewashed for a casual look and feel."]] ], "tops","#1a77cd","tops_w_sweaters_720x315|",["women","men","girls","boys","baby"],"",[]],["Innerwear",[["Airism","airism","w_inner_ht|m_inner_ht|","women|men|","",["^12.90^^^Women's AIRism Scoop Neck T-Shirt^Made from ultra-fine fibers that are so light you'll forget you're wearing it. Wicks away sweat.","^12.90^^^Men's AIRism Crewneck T-Shirt^Made from ultra-fine fibers for an amazingly light, smooth feel. Wicks away sweat. "]],["Inner Tops","inner-tops","w_inner_tops|m_inner_tops|","women|men|","|men:undershirts|",["^19.90^^^Women's Shelf Bra Camisole^A soft, gentle fit, with support from bra cups. Adjustable straps. ","^12.90^^^Men's Supima Cotton T-Shirt^The seamless knit feels comfortable and keeps you cool and dry all year long."]],["Loungewear","loungewear","w_innerwear_loungewear|m_inner_loungeset|","women|men|","",["^19.90^^^Women's Sweat Set^Relax in style with this soft and comfortable top & bottom sweats combination. ","^29.90^^^Men's Sweat Set^Relax in style with this soft and comfortable top & bottom sweats combination. "]],["Socks","socks-and-legwear","w_inner_socks|","women|","",["^12.90^^^Women's Socks^Better than your basic socks, these are made with comfort and style in mind."]],["Legwear","socks-and-legwear","w_inner_legwear|","women|","",["From^7.90^^^Women's Leggings^These simple, solid leggings are super stretchy for a gentle, snug fit."]] ], "innerwear-and-loungewear","#cd1a44","w_innerwear_heattech|",["women","men","girls","boys","baby"],"",[]],["Bottoms",[["Jeans","jeans","w_bottoms_jeans_usj|m_bottoms_jeans|","women|men|","",["^39.90^^^Women's Ultra Stretch Jeans^With unparalleled stretch for maximum ease of movement and a flattering, slimming fit.","^49.90^^^Men's Selvedge Jeans^Our selvedge denim is carefully woven on old-fashioned looms. Just gets better with age."]],["Sweatpants","sweat-pants","w_bottoms_ankle_pants_stretchjersey|","women|","",["^29.90^^^Women's Stretch Jersey Ankle Pants^Stylish sweatpants design with comfortable fabric. "]],["Pants","pants","w_bottoms_pants|m_bottoms_pants_slimfitchino|","women|men|","",["^39.90^^^Women's Ankle Length Pants^Stylish and feminine with an elastic waist. ","^39.90^^^Men's Slim Fit Chino Pants^The stretch material provides a sleek and stylish look thatÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢s comfortable to move in. "]],["Leggings","leggings","w_leggings_leggingspants|","women|","women:bottoms/leggings-pants|",["^22.90^^^Women's Leggings Pants^Soft, stretchy, and super comfortable with a button-front waist and side pockets."]] ], "bottoms","#7bcd1a","w_bottoms_jeans|",["women","men","girls","boys","baby"],"",[]],["Accessories",[], "accessories","#B61ACD","accessories|accessory_m_720x157|",["women","men"],"kids:featured/winter-accessories|",["From^7.90^^^Women's Accessories^Finish off your look with a few stylish extras.","From^7.90^^^Men's Accessories^Finish off your look with a few stylish extras."]],["Kids & Baby",[["Tops","tops","k_girls_TopsandOuterwear|k_boy_tops_outerwear|","girls|boys|","",["From^24.90^^^Girls' Graphic Sweat Pullover^She'll love expressing herself in fun, colorful graphic UT sweatshirts with her favorite prints.","^24.90^^^Boys' Sweat Full Zip Hoodie^Made from soft, comfortable sweat material, with a napped lining for added warmth. "]],["Bottoms","bottoms","k_girls_SkinnyFitJeans|kids_boy_cutandsaw_sweatpants|","girls|boys|","",["^24.90^^^Girls' Skinny Fit Jeans^These stylish, skinny-fit jeans made with stretch fabric are easy to move in. ","^19.90^^^Boys' Cut & Sewn Sweatpants^The soft material and loose fit combine for cozy comfort. Pockets add a grown-up look to this toddler pants."]],["Innerwear & Loungewear","innerwear-and-loungewear","kids_girls_inner_loungewear|kids_boy_inner_loungewear|","girls|boys|","",["From^5.90^^^Girls' Lounge Set^Cozy pieces that are perfect for relaxing at home or for lounging at slumber parties.","From^5.90^^^Boys' Lounge Set^Cozy pieces that are perfect for relaxing at home."]],["Baby","toddlers-and-babies","kids_toddler_cut_sewn_dress|","baby|Boy|","",["^14.90^^^Toddler Dress^The soft material and loose fit combine for cozy comfort. ","^19.90^^^Toddler Sweatpants^Soft, comfortable and great for at home or at play. "]] ], "kids-and-baby","#ff781e","girls_tops_720x157|",[],"",[]]];


/*
 * =============== STOP EDITING =====================
 */


   var tocMarkup = "";
   var tocCounter = 0;
   var showLevelOneOverride;
   var randNum = 75;
   var topTOC = jQuery("#headerNavArea img").attr("src");
   // jQuery("#headerNavArea img").attr("src", topTOC + "&rand=" + randNum);
   for (var x = 0; x < tocData.length; x++) {
     tocCounter++;
     tocData[x][1].sort();
     var tocMenuLinks = tocData[x][1];
     var hasKidsBaby = tocData[x][2];
     var urlOverrides = tocData[x][6];
     var sectionHeaderCopy = tocData[x][7];
     var submenuIndex = 0;
     if (sectionHeaderCopy == "" || sectionHeaderCopy == undefined) {
       var showSectionHeaderCopy = "";
     } else {
       var sectionHeaderCopyFull = "";
       for (var z1 = 0; z1 < sectionHeaderCopy.length; z1++) {
         var sectionHeaderCopyFull = sectionHeaderCopyFull + sectionHeaderCopy[z1] + "|";
       }
       var showSectionHeaderCopy = " data-copy=\"" + sectionHeaderCopyFull + "\"";
     }
     if (urlOverrides == "" || urlOverrides == "undefined") {
       var showLevelOneOverride = "";
     } else {
       var showLevelOneOverride = " data-override=\"" + urlOverrides + "\"";
     }
     tocMarkup = tocMarkup + '<section class="siteTOC' + tocCounter +
       '" style="display:none"><div class="siteTOCwrapper"><div class="siteTOCmenu"> ';
     tocMarkup = tocMarkup + '<a href="javascript:;" class="siteTOCheader" data-color="' + tocData[x][3] + '" data-subcats="' + tocData[x]
       [2] + '" data-img="' + tocData[x][4] + '" data-title="' + tocData[x][0] + '" data-url="' + tocData[x][2] + '" ' +
       showLevelOneOverride + ' ' + showSectionHeaderCopy + '>' + tocData[x][0] + '</a><ul>';
     if (tocData[x][2] == "kids-and-baby") {
       hasKidsBaby = "";
     } else {
       hasKidsBaby = tocData[x][2] + "/";
     }
     for (var y = 0; y < tocMenuLinks.length; y++) {
       var urlOverride = tocMenuLinks[y][4];
       if (urlOverride == "" || urlOverride == "undefined") {
         var showLevelTwoOverride = "";
       } else {
         var showLevelTwoOverride = " data-override=\"" + urlOverride + "\"";
       }
       var sectionCopy = tocMenuLinks[y][5];
       if (sectionCopy == "" || sectionCopy == undefined) {
         var showCopy = "";
       } else {
         var sectionCopyFull = "";
         for (var yz = 0; yz < sectionCopy.length; yz++) {
           var sectionCopyFull = sectionCopyFull + sectionCopy[yz] + "|";
         }
         var showCopy = " data-copy=\"" + sectionCopyFull + "\"";
       }
       if (y == 0) {
         tocMarkup = tocMarkup + '<li class="arrow_box arrow_boxSelected siteTOCselected" data-color="' + tocData[x][3] +
           '"><a href="javascript:;" data-subcats="' + tocMenuLinks[y][3] + '" data-img="' + tocMenuLinks[y][2] + '" data-title="' +
           tocMenuLinks[y][0] + '" data-url="' + hasKidsBaby + '' + tocMenuLinks[y][1] + '" ' + showLevelTwoOverride + ' ' + showCopy +
           '>' + tocMenuLinks[y][0] + '</a></li>';
       } else {
         tocMarkup = tocMarkup + '<li class="arrow_box_border" data-color="' + tocData[x][3] + '"><a href="javascript:;" data-subcats="' +
           tocMenuLinks[y][3] + '" data-img="' + tocMenuLinks[y][2] + '" data-title="' + tocMenuLinks[y][0] + '" data-url="' +
           hasKidsBaby + '' + tocMenuLinks[y][1] + '" ' + showLevelTwoOverride + ' ' + showCopy + '>' + tocMenuLinks[y][0] + '</a></li>';
       }
     }
     if (tocMenuLinks.length <= 0) {
       tocMarkup = tocMarkup +
         '</div> <div class="siteTOCimage" style="background:url(http://uniqlo.scene7.com/is/content/UNIQLO/us/custom/prettyPhoto/loader.gif) 50% 50% no-repeat"><div style="position:relative;"><img src="#"></div> <div class="siteTOCsubmenu">';
     } else {
       tocMarkup = tocMarkup +
         '</div> <div class="siteTOCimage" style="background:url(http://uniqlo.scene7.com/is/content/UNIQLO/us/custom/prettyPhoto/loader.gif) 50% 50% no-repeat"><div style="position:relative;"><img src="#"></div> <div class="siteTOCsubmenu">';
     }
     tocMarkup = tocMarkup + '<ul><li class="copyContainer"><div><h3></h3><p></p></div><h2></h2></li>';
     if (tocData[x][1].length <= 0) {
       var tocSubMenuLinks = tocData[x][5];
     } else {
       var tocSubMenuLinks = ["women", "men", "girls", "boys", "baby", "kids"]; //tocData[x][5];
     }
     var priceCopy = tocData[x][1][5];
     for (var z = 0; z < tocSubMenuLinks.length; z++) {
       tocMarkup = tocMarkup + '<li class="submenu"><a href="#" class="' + tocSubMenuLinks[z] + '" data-index="' + submenuIndex + '" data-override="' + showLevelTwoOverride + '">' +
         tocSubMenuLinks[z] + '<i class="chevron"></i></a></li>';
       submenuIndex++;
     }
     tocMarkup = tocMarkup + '</ul></div></div></div></div></section>';
     jQuery("#siteTOContainer").append(tocMarkup);
     //wack ass override for the menu order
     var section6 = ["Tops", "Bottoms", "Innerwear & Loungewear", "Baby"];
     jQuery(".siteTOC6 .siteTOCmenu ul li").eq(3).insertBefore(jQuery(".siteTOC6 .siteTOCmenu ul li").eq(0));
     jQuery(".siteTOC6 .siteTOCmenu ul li").eq(1).insertAfter(jQuery(".siteTOC6 .siteTOCmenu ul li").eq(3));
     jQuery(".siteTOC6 .siteTOCmenu ul li").eq(3).removeClass("arrow_box siteTOCselected arrow_boxSelected").addClass("arrow_box_border");
     jQuery(".siteTOC6 .siteTOCmenu ul li").eq(0).removeClass("arrow_box_border").addClass("arrow_box siteTOCselected arrow_boxSelected").click();
     jQuery("#siteTOContainer section.siteTOC" + tocCounter).fadeIn(500);
     var tocMarkup = "";
     if (tocCounter == 2) {
       //tocCounter = 0;
     }
   }
   jQuery(".siteTOCsubmenu ul li a").on({
     mouseenter: function(e) {
       var thisIndex = jQuery(this).data("index");
       var thisSection = "." + jQuery(this).parents("section").attr("class");
       if (jQuery(this).parents("section").find(".siteTOCmenu ul li").length == 0) {
         var thisSectionCopyArray = jQuery(thisSection + " .siteTOCmenu a.siteTOCheader").data("copy");
         var thisSectionCopy = thisSectionCopyArray.split("|");
         var thisSectionImgArray = jQuery(thisSection + " .siteTOCmenu a.siteTOCheader").data("img");
         var thisSectionImg = thisSectionImgArray.split("|");
         var overridesArray = jQuery(thisSection + " .siteTOCmenu a.siteTOCheader").data("override");
         var overrides = overridesArray.split("|");
       } else {
         var thisSectionCopyArray = jQuery(thisSection).find(" .siteTOCmenu ul li.siteTOCselected a").data("copy");
         var thisSectionCopy = thisSectionCopyArray.split("|");
         var thisSectionImgArray = jQuery(thisSection).find(" .siteTOCmenu ul li.siteTOCselected a").data("img");
         var thisSectionImg = thisSectionImgArray.split("|");
         var overridesArray = jQuery(thisSection).find(" .siteTOCmenu ul li.siteTOCselected a").data("override");
         if (overridesArray) {
           var overrides = overridesArray.split("|");
         }else{
           var overrides = "";
         }
       }
       if (jQuery(thisSection + " .siteTOCimage img").attr("src") != "http://uniqlo.scene7.com/is/image/UNIQLO/" + thisSectionImg[
         thisIndex] + "?$jpgMQ$&resMode=sharp2&qlt=75,0&" + randNum) {
         jQuery(thisSection + " .siteTOCimage img").fadeOut(300, function() {
           jQuery(this).attr("src", "http://uniqlo.scene7.com/is/image/UNIQLO/" + thisSectionImg[thisIndex] + "?$jpgMQ$&resMode=sharp2&qlt=75,0&" +
             randNum);
           jQuery(thisSection + " .siteTOCimage img").delay(100).fadeIn(500);
         });
         var setThisCopy = thisSectionCopy[thisIndex].split("^");
         if (setThisCopy[0] == "") {
           var thisPriceCopy = "";
         } else {
           var thisPriceCopy = setThisCopy[0];
         }
         if (setThisCopy[1] == "") {
           var thisPrice = "";
         } else {
           var thisPrice = setThisCopy[1];
         }
         if (setThisCopy[2] == "") {
           var thisSalePriceCopy = "";
         } else {
           var thisSalePriceCopy = setThisCopy[2];
         }
         if (setThisCopy[3] == "") {
           var thisSalePrice = "";
         } else {
           var thisSalePrice = setThisCopy[3];
         }
         if (thisPriceCopy == "" && thisSalePrice != "") {
           var thisPriceCopy = "Reg. ";
         }
         if (thisSalePriceCopy == "" && thisSalePrice != "") {
           var thisSalePriceCopy = "Now";
         }
         if (setThisCopy[4] == "") {
           var thisTitleCopy = "";
         } else {
           var thisTitleCopy = setThisCopy[4];
         }
         if (setThisCopy[5] == "") {
           var thisCopy = "";
         } else {
           var thisCopy = setThisCopy[5];
         }
         var setThisName = thisTitleCopy.replace("'", "\'");
         var setThisDesc = thisCopy.replace("'", "\'");
         if (thisSalePriceCopy != "") {
           var setThisPrice = "<p>" + thisPriceCopy + " $" + thisPrice + "<span> " + thisSalePriceCopy +
             ":</span></p><div class='sectionRed'>$" + thisSalePrice + "</div>";
         } else {
           var setThisPrice = "<p>" + thisPriceCopy + " &nbsp;</p><div>$" + thisPrice + "</div>";
         }
         var mm1 = setTimeout(function() {
           jQuery(thisSection + " .siteTOCsubmenu ul li.copyContainer h3").html(setThisName).fadeIn();
           jQuery(thisSection + " .siteTOCsubmenu ul li.copyContainer div p").html(setThisDesc).fadeIn();
           jQuery(thisSection + " .siteTOCsubmenu ul li.copyContainer h2").html(setThisPrice).fadeIn();
         }, 500);
       }
             console.log(overrides[0]);
       if (overrides[0] != "") {
         //overrides
         jQuery.each(overrides, function(c, d) {
           var newURLs = d.split(":");
           if (newURLs[0] == "women" || newURLs[0] == "men") {
             jQuery(thisSection + " .siteTOCsubmenu ." + newURLs[0]).attr("href", "/us/" + newURLs[0] + "/" + newURLs[1] +
               ".html");
           }
           if (newURLs[0] == "baby") {
             jQuery(thisSection + " .siteTOCsubmenu .baby").attr("href", "/us/kids-and-baby/toddlers-and-babies/" + newURLs[1] +
               ".html");
           }
           if (newURLs[0] == "girls" || newURLs[0] == "boys") {
             jQuery(thisSection + " .siteTOCsubmenu ." + newURLs[0]).attr("href", "/us/kids-and-baby/" + newURLs[0] + "/" +
               newURLs[1] + ".html");
           }
           if (newURLs[0] == "kids") {
             jQuery(thisSection + " .siteTOCsubmenu .kids").attr("href", "/us/kids-and-baby/" + newURLs[1] + ".html");
           }
         });
       }
     }
   });
   jQuery(".siteTOCmenu .arrow_box a, .siteTOCmenu .arrow_box_border a").on("click", function() {
     var parentClass = jQuery(this).parents('section').attr("class");
     jQuery("section." + parentClass + " .siteTOCmenu ul li").removeClass("arrow_box siteTOCselected arrow_boxSelected").addClass(
       "arrow_box_border");
     jQuery(this).parent().removeClass("arrow_box_border").addClass("arrow_box siteTOCselected arrow_boxSelected");
     jQuery("section." + parentClass + " .siteTOCmenu ul li.arrow_box:after").css({
       "border-top-color": jQuery(this).data("color") + " !important"
     });
     var url = jQuery(this).data("url");
     var title = jQuery(this).data("title");
     var iimgData = jQuery(this).data("img");
     var iimgArray = iimgData.split("|");
     var iimg = "http://uniqlo.scene7.com/is/image/UNIQLO/" + iimgArray[0] + "?$jpgMQ$&resMode=sharp2&qlt=75,0&" + randNum;
     var parentID = jQuery(this).parents('section');
     var allowedSubCats = ["women", "men", "girls", "boys", "baby", "kids"];
     var subCatsArray = jQuery(this).data("subcats");
     var subCats = subCatsArray.split("|");
     var overridesArray = jQuery(this).data("override");
     if (overridesArray) {
       var overrides = overridesArray.split("|");
     }
     jQuery.each(allowedSubCats, function(a, b) {
       if (jQuery.inArray(b, subCats) >= 0) {
         jQuery("section." + parentClass + " .siteTOCsubmenu ." + allowedSubCats[a]).parent().css({
           "display": "inline-block"
         });
       } else {
         jQuery("section." + parentClass + " .siteTOCsubmenu ." + allowedSubCats[a]).parent().hide().insertAfter(jQuery(
           "section." + parentClass + " .siteTOCsubmenu ul li:last"));
       }
     });
     jQuery("section." + parentClass + " .siteTOCsubmenu ul li a").each(function(e, f) {
       jQuery(this).attr("data-index", e);
     });
     jQuery("section." + parentClass + " .siteTOCsubmenu .women").attr("href", "/us/women/" + url + ".html");
     jQuery("section." + parentClass + " .siteTOCsubmenu .men").attr("href", "/us/men/" + url + ".html");
     jQuery("section." + parentClass + " .siteTOCsubmenu .girls").attr("href", "/us/kids-and-baby/girls/" + url + ".html");
     jQuery("section." + parentClass + " .siteTOCsubmenu .boys").attr("href", "/us/kids-and-baby/boys/" + url + ".html");
     jQuery("section." + parentClass + " .siteTOCsubmenu .baby").attr("href", "/us/kids-and-baby/toddlers-and-babies/" + url +
       ".html");
     jQuery("section." + parentClass + " .siteTOCsubmenu .kids").attr("href", "/us/kids-and-baby/" + url + ".html");
     jQuery("section." + parentClass + " .siteTOCimage img").fadeOut(300, function() {
       jQuery(this).attr("src", iimg);
       var mm = setTimeout(function() {
         jQuery("section." + parentClass + " .siteTOCimage img").fadeIn(500);
       }, 300);
     });
     if (subCats == undefined) {
       //
       var unlinkedIMG = jQuery("section." + parentClass + " .siteTOCimage img");
       jQuery("section." + parentClass + " .siteTOCimage div").not("section." + parentClass + " div.siteTOCsubmenu, section." +
         parentClass + " div.siteTOCsubmenu ul li.copyContainer div").html(unlinkedIMG);
       jQuery("section." + parentClass + " .siteTOCimage img").not("section." + parentClass + " div.siteTOCsubmenu, section." +
         parentClass + " div.siteTOCsubmenu ul li.copyContainer div").wrap("<a href='" + url + ".html'></a>");
     } else {
       var unlinkedIMG = jQuery("section." + parentClass + " .siteTOCimage img");
       jQuery("section." + parentClass + " .siteTOCimage div").not("section." + parentClass + " div.siteTOCsubmenu, section." +
         parentClass + " div.siteTOCsubmenu ul li.copyContainer div").html(unlinkedIMG);
     }
     var thisSectionCopyArray = jQuery(this).data("copy");
     if ((thisSectionCopyArray == "" || thisSectionCopyArray == undefined)) {} else {
       var thisSectionCopy = thisSectionCopyArray.split("|");
       var setThisCopy = thisSectionCopy[0].split("^");
       if (setThisCopy[0] == "") {
         var thisPriceCopy = "";
       } else {
         var thisPriceCopy = setThisCopy[0];
       }
       if (setThisCopy[1] == "") {
         var thisPrice = "";
       } else {
         var thisPrice = setThisCopy[1];
       }
       if (setThisCopy[2] == "") {
         var thisSalePriceCopy = "";
       } else {
         var thisSalePriceCopy = setThisCopy[2];
       }
       if (setThisCopy[3] == "") {
         var thisSalePrice = "";
       } else {
         var thisSalePrice = setThisCopy[3];
       }
       if (thisPriceCopy == "" && thisSalePrice != "") {
         var thisPriceCopy = "Reg. ";
       }
       if (thisSalePriceCopy == "" && thisSalePrice != "") {
         var thisSalePriceCopy = "Now";
       }
       if (setThisCopy[4] == "") {
         var thisTitleCopy = "";
       } else {
         var thisTitleCopy = setThisCopy[4];
       }
       if (setThisCopy[5] == "") {
         var thisCopy = "";
       } else {
         var thisCopy = setThisCopy[5];
       }
       var setThisName = thisTitleCopy.replace("'", "\'");
       var setThisDesc = thisCopy.replace("'", "\'");
       if (thisSalePriceCopy != "") {
         var setThisPrice = "<p>" + thisPriceCopy + " $" + thisPrice + "<span> " + thisSalePriceCopy +
           ":</span></p><div class='sectionRed'>$" + thisSalePrice + "</div>";
       } else {
         var setThisPrice = "<p>" + thisPriceCopy + " &nbsp;</p><div>$" + thisPrice + "</div>";
       }
       var mm1 = setTimeout(function() {
         jQuery("section." + parentClass + " .siteTOCsubmenu ul li.copyContainer h3").html(setThisName).fadeIn();
         jQuery("section." + parentClass + " .siteTOCsubmenu ul li.copyContainer p").html(setThisDesc).fadeIn();
         jQuery("section." + parentClass + " .siteTOCsubmenu ul li.copyContainer h2").html(setThisPrice).fadeIn();
       }, 500);
     }
   });
   jQuery("#siteTOContainer section").find(".siteTOCmenu ul li a:first").click();
   jQuery.each(jQuery("#siteTOContainer section"), function(a, b) {
     if (jQuery(this).find(".siteTOCmenu ul li").length <= 0) {
       //siteTOCheader
       //jQuery(b).click();
       var url = jQuery(this).find(".siteTOCheader").data("url");
       var title = jQuery(this).find(".siteTOCheader").data("title");
       var color = jQuery(this).find(".siteTOCheader").data("color");
       var parentClass = jQuery(this).attr("class");
       jQuery(this).find(".siteTOCheader").attr("style", "border-right:2px solid " + color + " !important");
       var iimgData = jQuery(this).find(".siteTOCheader").data("img")
       var iimgArray = iimgData.split("|");
       var iimg = "http://uniqlo.scene7.com/is/image/UNIQLO/" + iimgArray[0] + "?fmt=jpg&" + randNum;
       jQuery(this).find(".siteTOCsubmenu .women").attr("href", "/us/women/" + url + ".html");
       jQuery(this).find(".siteTOCsubmenu .men").attr("href", "/us/men/" + url + ".html");
       jQuery(this).find(".siteTOCsubmenu .girls").attr("href", "/us/kids-and-baby/girls/" + url + ".html");
       jQuery(this).find(".siteTOCsubmenu .boys").attr("href", "/us/kids-and-baby/boys/" + url + ".html");
       jQuery(this).find(".siteTOCsubmenu .baby").attr("href", "/us/kids-and-baby/toddlers-and-babies/" + url + ".html");
       jQuery(this).find(".siteTOCsubmenu .kids").attr("href", "/us/kids-and-baby/" + url + ".html");
       jQuery(this).find(" .siteTOCimage img").fadeOut(300, function() {
         jQuery(this).attr("src", iimg);
         jQuery(this).delay(500).fadeIn(500);
       });
       var thisSectionCopyArray = jQuery(this).find(".siteTOCheader").data("copy");
       if ((thisSectionCopyArray == "" || thisSectionCopyArray == undefined)) {} else {
         var thisSectionCopy = thisSectionCopyArray.split("|");
         var setThisCopy = thisSectionCopy[0].split("^");
         if (setThisCopy[0] == "") {
           var thisPriceCopy = "";
         } else {
           var thisPriceCopy = setThisCopy[0];
         }
         if (setThisCopy[1] == "") {
           var thisPrice = "";
         } else {
           var thisPrice = setThisCopy[1];
         }
         if (setThisCopy[2] == "") {
           var thisSalePriceCopy = "";
         } else {
           var thisSalePriceCopy = setThisCopy[2];
         }
         if (setThisCopy[3] == "") {
           var thisSalePrice = "";
         } else {
           var thisSalePrice = setThisCopy[3];
         }
         if (thisPriceCopy == "" && thisSalePrice != "") {
           var thisPriceCopy = "Reg. ";
         }
         if (thisSalePriceCopy == "" && thisSalePrice != "") {
           var thisSalePriceCopy = "Now";
         }
         if (setThisCopy[4] == "") {
           var thisTitleCopy = "";
         } else {
           var thisTitleCopy = setThisCopy[4];
         }
         if (setThisCopy[5] == "") {
           var thisCopy = "";
         } else {
           var thisCopy = setThisCopy[5];
         }
         var setThisName = thisTitleCopy.replace("'", "\'");
         var setThisDesc = thisCopy.replace("'", "\'");
         if (thisSalePriceCopy != "") {
           var setThisPrice = "<p>" + thisPriceCopy + " $" + thisPrice + "<span> " + thisSalePriceCopy +
             ":</span></p><div class='sectionRed'>$" + thisSalePrice + "</div>";
         } else {
           var setThisPrice = "<p>" + thisPriceCopy + " &nbsp;</p><div>$" + thisPrice + "</div>";
         }
         var mm1 = setTimeout(function() {
           jQuery("section." + parentClass + " .siteTOCsubmenu ul li.copyContainer h3").html(setThisName).fadeIn();
           jQuery("section." + parentClass + " .siteTOCsubmenu ul li.copyContainer p").html(setThisDesc).fadeIn();
           jQuery("section." + parentClass + " .siteTOCsubmenu ul li.copyContainer h2").html(setThisPrice).fadeIn();
         }, 500);
       }
     }
   });
 }

uniqloObj.doHpBlogPosts = function() {
    var self = this;
     var blogTpl = '{{#.}}<li><div class="postTile"> <a href="http://www.uniqlo.com/us/special/blog/post/{{slug}}/"><img src="http://www.uniqlo.com/us/special/blog/data/uploads/{{thumbnail}}?&fmt=jpg&qlt=85,0" align="left" class="postLeadImg"></a> <div class="postCopy"> <h3>{{{title}}}</h3> <h5>Posted {{date}}</h5> <hr>{{{text}}}...</div> <div class="postCTA"> <a href="http://www.uniqlo.com/us/special/blog/post/{{slug}}/"><img src="http://uniqlo.scene7.com/is/image/UNIQLO/wht%5Fbtn%5Fcontinue?&fmt=jpg&qlt=85,0"></a> </div> </div></li>{{/.}}';

     //img, title, date, copy, url
        jQuery.getJSON("/us/special/blog/getData.php", function(d) { // /us/etc/designs/uniqlo/js/custom/test.json

        var htmls = Mustache.render(blogTpl,d);
        jQuery('#postsContainer').html(htmls);
   });
 }

    jQuery(document).ready(function(){

        uniqloObj.doInit();
        setTimeout(function(){
             jQuery(".emailSignup .rfk_rw").insertAfter("#reflektionWidget");
        },800);

    });



 //////////////////////////
 /////////////////////////
 //\\\\\\\\\\\\\\\\\\\\\\\
 //\\\\\\\\\\\\\\\\\\\\\\\\

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
   doStoreOpenings: function(ele) {
    if(self.siteDate.getFullYear() != 2014){
        jQuery(".HtmlBlockCompImages h3").remove();
        return false;
    }
     jQuery(ele).css({
       "display": "block",
       "clear": "both"
     }).html(
       '<div id="storeOpenings"> <h1>Just Announced: New Uniqlo Store Openings!</h1> <div id="storeOpeningStores" style="width: 880px !important"> <ul></ul> </div> </div>'
     );
     jQuery(ele).append("<div style='display:block; clear:both'>&nbsp;</div>");
     var storeInfo = [
       ["New York", "Now Open!", "Roosevelt Field Shopping Mall in Garden City"], //,"40.7380572,-73.6128962"
       ["NEW JERSEY", "Now Open!", "Willowbrook Mall in Wayne"],
       ["NEW JERSEY", "Now Open!", "Jersey Gardens in Elizabeth", "40.660944, -74.173266"],
       ["", "Now Open!", "Cherry Hill Mall"],
       ["connecticut", "Now Open!", "Westfield Connecticut Post Mall in Milford", "41.2364014,-73.0388566"],
       ["", "Now Open", "Danbury Fair Mall in Danbury"],
       ["Boston", "Now Open!", "Natick Mall in Natick", "42.3002758,-71.38345"],
       ["", "Now Open!", "The Mall at Chestnut Hill in Newton", "42.3214068,-71.17605"],
       ["", "Now Open!", "Northshore Mall in Peabody"],
       ["", "Now Open!", "Legacy Place in Dedham"],
       ["PHILADELPHIA", "Now Open!", "1608 Chestnut Street in Center City"],
       ["", "Now Open!", "Willow Grove Park Mall in Willow Grove"],
       ["SF BAY AREA/NORTHERN CALIFORNIA", "Now Open!", "Stoneridge Shopping Center in Pleasanton", "37.69541,-121.928674"],
       ["", "Now Open!", "Plaza Escuela in Walnut Creek"],
       ["", "Now Open!", "Great Mall of the Bay Area in Milpitas"],
       ["Southern California", "Now Open!", "South Coast Plaza in Costa Mesa"],
       ["Los Angeles", "Now Open!", "Glendale Galleria in Glendale"],
       ["", "Now Open!", "Northridge Fashion Center in Northridge"],
       ["", "Now Open!", "Beverly Center in Los Angeles"]
     ];
     var counter = 0;
     var column = 0;
     jQuery.each(storeInfo, function(a, b) {
       if (b[0] != "") {
         if (counter == 4) {
           jQuery("#storeOpeningStores").append("</ul><ul>");
           column++;
         }
         jQuery("#storeOpeningStores ul:eq(" + column + ")").append("<li class=\"storeHeaderName\"><h3>" + b[0] + " //</h3></li>");
         counter++;
       }
       if (b[1] == "Now Open!" || b[1] == "Coming Soon!") {
         nowOpenStyle = " "; 
       } else {
         nowOpenStyle = "";
       }
       if (b[3] != "") {
         showMap =
           "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=500x150&maptype=roadmap%20%20%20%20%20%20%20%20%20%20%20%20&visual_refresh=true&sensor=false&markers=icon:http%3A%2F%2Funiqlo%2Escene7%2Ecom%2Fis%2Fimage%2FUNIQLO%2Fus-pc-140131-stores-storelocations-ny-34th-st-logo_en_25%3Fscl%3D1%26qlt%3D95%2C1%26fmt%3Dgif%7C" +
           b[3];
         jQuery("#storeOpeningStores ul:eq(" + column + ")").append("<li><span class=\"storeOpeningDate\" " + nowOpenStyle + ">" +
           b[1] + "</span><span class=\"storeOpeningName\">" + b[2] +
           "</span><a href=\"javascript:;\" rel=\"<a target='_blank' href='http://maps.google.com/?q=" + b[3] + "'><img src='" +
           showMap + "'/></a><h2>" + b[2] + "</h2><h3>--</h3>\"></a></li>");
       } else {
         showMap = "";
         jQuery("#storeOpeningStores ul:eq(" + column + ")").append("<li><span class=\"storeOpeningDate\"" + nowOpenStyle + ">" + b[
           1] + "</span><span class=\"storeOpeningName\">" + b[2] + "</span><a href=\"javascript:;\"></a></li>");
       }
     });
     jQuery("#storeOpeningStores ul li a").on("click", function() {
       if (jQuery(this).attr("rel") != undefined) {
         self.createOverlay('' + jQuery(this).attr("rel") + '', '500px', '');
       }
     });
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
   isProd: function() {
     if (window.location.host == "www.uniqlo.com") {
       return true;
     } else {
       return false;
     }
   }, //
   rand: function() {
     return Math.ceil(Math.random() * 10000);
   },
   isHome: function() {
     if (window.location.pathname == "/us/" || window.location.pathname == "/content/uniqlo/us/en/toppage.html" || window.location.pathname == "/content/uniqlo/us/en/toppage-lightbox.html" || window.location.pathname == "/us/toppage-lightbox.html") {
       return true;
     } else {
       return false;
     }
   }, //
   doRedirect: function() {
     if (self.isProd()) {
       if (window.location.pathname == "/us/adamscott/index.html") {
         window.location = "http://www.uniqlo.com/us/adamscott/lifewearwithadamscott.html";
       }
       if (window.location.pathname == "/us/sprzny-thank-you.html") {
         window.location = "http://www.uniqlo.com/us/special/sprzny-2014/thank-you/";
       }
       if (window.location.pathname == "/us/inespinterest.html") {
         window.location = "http://www.uniqlo.com/us/pinterest.html";
       }
     } else {
       //console.log("not production");
     }
   },
     sortObj: function(obj, type, caseSensitive) {
  var temp_array = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!caseSensitive) {
        key = (key['toLowerCase'] ? key.toLowerCase() : key);
      }
      temp_array.push(key);
    }
  }
  if (typeof type === 'function') {
    temp_array.sort(type);
  } else if (type === 'value') {
    temp_array.sort(function(a,b) {
      var x = obj[a];
      var y = obj[b];
      if (!caseSensitive) {
        x = (x['toLowerCase'] ? x.toLowerCase() : x);
        y = (y['toLowerCase'] ? y.toLowerCase() : y);
      }
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  } else {
    temp_array.sort();
  }
  var temp_obj = {};
  for (var i=0; i<temp_array.length; i++) {
    temp_obj[temp_array[i]] = obj[temp_array[i]];
  }
  return temp_obj;
}
 }
 quickTools.init();


 

    return quickTools;
});

require(["quickTools"]);
