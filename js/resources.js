//file updated at 03/08/19 11:42:58.523



$(function(){
      
var $filterCheckboxes = $('input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });

  // create a collection containing all of the filterable elements
  var $filteredResults = $('.venue');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {

    // filter each .venue element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .venue's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .venue element is returned
      return matched;

    });
  });

  $('.venue').hide().filter($filteredResults).show();

});


    });


  setTimeout(function(){
 $("#venues").load( "https://rawgit.com/christian-lorange/hh_denver/master/hh.html" );
  },200);

 
  function days() {

   var x = document.getElementsByClassName("card");
    var y = document.getElementsByClassName("btn btn-link");
    var z = document.getElementById("refresh_btn");

   
 


  setTimeout(function(){

   $("#modal-content").load("https://rawgit.com/christian-lorange/hh_denver/master/cards.html");
  
   var d = new Date();
   var n = d.getDay();

   var now = new Date();
   var l = now.getDay();
   var today1 = new Date().getHours()
   var today2 = new Date().getMinutes()/60;
   var today = today1+today2;


   var weekday=new Array(7);
       weekday[0]="sunday";
       weekday[1]="monday";
       weekday[2]="tuesday";
       weekday[3]="wednesday";
       weekday[4]="thursday";
       weekday[5]="friday";
       weekday[6]="saturday";

var hh = {0:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},1:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},2:{0: {1:0,2:0},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:0,2:0}},3:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},4:{0: {1:12,2:20},1: {1:16,2:20},2: {1:16,2:20},3: {1:16,2:20},4: {1:16,2:20},5: {1:16,2:20},6: {1:12,2:20}},5:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:11,2:17}},6:{0: {1:14.3,2:17.3},1: {1:14.3,2:17.3},2: {1:14.3,2:17.3},3: {1:14.3,2:17.3},4: {1:14.3,2:17.3},5: {1:14.3,2:17.3},6: {1:14.3,2:17.3}},7:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},8:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},9:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},10:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},11:{0: {1:12,2:21.3},1: {1:11,2:9.3},2: {1:11,2:9.3},3: {1:11,2:9.3},4: {1:11,2:9.3},5: {1:11,2:22},6: {1:12,2:22}},12:{0: {1:0,2:0},1: {1:14.3,2:18.3},2: {1:14.3,2:18.3},3: {1:14.3,2:18.3},4: {1:14.3,2:18.3},5: {1:14.3,2:18.3},6: {1:0,2:0}},13:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},14:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},15:{0: {1:0,2:0},1: {1:0,2:0},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:15,2:17}},16:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},17:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},18:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},19:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},20:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},21:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},22:{0: {1:15,2:17},1: {1:15,2:17},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:15,2:17}},23:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},24:{0: {1:15,2:17.3},1: {1:15,2:17.3},2: {1:15,2:17.3},3: {1:15,2:17.3},4: {1:15,2:17.3},5: {1:15,2:17.3},6: {1:15,2:17.3}},25:{0: {1:0,2:0},1: {1:0,2:0},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},26:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},27:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},28:{0: {1:0,2:0},1: {1:17,2:18.3},2: {1:17,2:18.3},3: {1:17,2:18.3},4: {1:17,2:18.3},5: {1:17,2:18.3},6: {1:0,2:0}},29:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},30:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},31:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},32:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},33:{0: {1:15,2:17},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:15,2:17}},34:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},35:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},36:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},37:{0: {1:0,2:0},1: {1:15,2:18},2: {1:11,2:22},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},38:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},39:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:0,2:0},6: {1:0,2:0}},40:{0: {1:12,2:19},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},41:{0: {1:11,2:18},1: {1:11,2:18},2: {1:11,2:18},3: {1:11,2:18},4: {1:11,2:18},5: {1:11,2:18},6: {1:11,2:18}},42:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},43:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},44:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},45:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},46:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},47:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},48:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},49:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},50:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},51:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},52:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},53:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},54:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},55:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},56:{0: {1:0,2:0},1: {1:17,2:18},2: {1:17,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},57:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},58:{0: {1:16,2:18},1: {1:0,2:0},2: {1:16,2:21},3: {1:16,2:21},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},59:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},60:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},61:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},62:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},63:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},64:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},65:{0: {1:14.3,2:18.3},1: {1:14.3,2:18.3},2: {1:14.3,2:18.3},3: {1:14.3,2:18.3},4: {1:14.3,2:18.3},5: {1:14.3,2:18.3},6: {1:14.3,2:18.3}},66:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},67:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},68:{0: {1:0,2:0},1: {1:14,2:17},2: {1:14,2:17},3: {1:14,2:17},4: {1:14,2:17},5: {1:14,2:17},6: {1:0,2:0}},69:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},70:{0: {1:0,2:0},1: {1:16,2:18.3},2: {1:16,2:18.3},3: {1:16,2:18.3},4: {1:16,2:18.3},5: {1:16,2:18.3},6: {1:0,2:0}},71:{0: {1:11,2:23},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:11,2:14}},72:{0: {1:0,2:0},1: {1:12,2:13},2: {1:12,2:13},3: {1:12,2:13},4: {1:12,2:13},5: {1:12,2:13},6: {1:12,2:13}},73:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},74:{0: {1:15,2:24},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},75:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},76:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},77:{0: {1:0,2:0},1: {1:0,2:0},2: {1:11,2:17},3: {1:11,2:17},4: {1:11,2:17},5: {1:11,2:17},6: {1:0,2:0}},78:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},79:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},80:{0: {1:15,2:18},1: {1:0,2:0},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},81:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},82:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},83:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},84:{0: {1:15,2:21},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},85:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},86:{0: {1:0,2:0},1: {1:17,2:20},2: {1:17,2:20},3: {1:17,2:20},4: {1:17,2:20},5: {1:17,2:20},6: {1:0,2:0}},87:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},88:{0: {1:14.3,2:18.3},1: {1:11,2:22},2: {1:14.3,2:18.3},3: {1:14.3,2:18.3},4: {1:14.3,2:18.3},5: {1:14.3,2:18.3},6: {1:14.3,2:18.3}},89:{0: {1:17,2:18.3},1: {1:17,2:18.3},2: {1:17,2:18.3},3: {1:17,2:18.3},4: {1:17,2:18.3},5: {1:17,2:18.3},6: {1:17,2:18.3}},90:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},91:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},92:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},93:{0: {1:15.3,2:23},1: {1:0,2:0},2: {1:15.3,2:23},3: {1:15.3,2:23},4: {1:15.3,2:23},5: {1:15.3,2:23},6: {1:15.3,2:23}},94:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},95:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},96:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},97:{0: {1:10,2:24},1: {1:11,2:24},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:11,2:24},6: {1:10,2:24}},98:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},99:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:16,2:22},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},100:{0: {1:16,2:19},1: {1:16,2:22},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},101:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},102:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},103:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},104:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},105:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},106:{0: {1:0,2:0},1: {1:0,2:0},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},107:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},108:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},109:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},110:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},111:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},112:{0: {1:0,2:0},1: {1:11,2:18},2: {1:11,2:18},3: {1:11,2:18},4: {1:11,2:18},5: {1:11,2:18},6: {1:15,2:18}},113:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},114:{0: {1:16,2:19},1: {1:11.3,2:0},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},115:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},116:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},117:{0: {1:0,2:0},1: {1:0,2:0},2: {1:16.3,2:18},3: {1:16.3,2:18},4: {1:16.3,2:18},5: {1:16.3,2:18},6: {1:0,2:0}},118:{0: {1:0,2:0},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:0,2:0}},119:{0: {1:0,2:0},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:0,2:0}},120:{0: {1:0,2:0},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:0,2:0}},121:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},122:{0: {1:0,2:0},1: {1:11,2:19},2: {1:11,2:19},3: {1:11,2:19},4: {1:11,2:19},5: {1:11,2:19},6: {1:0,2:0}},123:{0: {1:0,2:0},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:0,2:0}},124:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:16},5: {1:15,2:16},6: {1:0,2:0}},125:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},126:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},127:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},128:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},129:{0: {1:14,2:21.3},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:14,2:21.3}},130:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},131:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},132:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},133:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},134:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},135:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:0,2:0},6: {1:0,2:0}},136:{0: {1:0,2:0},1: {1:0,2:0},2: {1:18,2:19},3: {1:18,2:19},4: {1:18,2:19},5: {1:18,2:19},6: {1:17,2:19}},137:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},138:{0: {1:16,2:18},1: {1:16,2:23},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},139:{0: {1:16,2:18},1: {1:16,2:23},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},140:{0: {1:16,2:18.3},1: {1:16,2:18.3},2: {1:16,2:18.3},3: {1:16,2:18.3},4: {1:16,2:18.3},5: {1:16,2:18.3},6: {1:16,2:18.3}},141:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},142:{0: {1:15,2:18},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:15,2:18}},143:{0: {1:0,2:0},1: {1:15,2:18},2: {1:0,2:0},3: {1:15,2:18},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},144:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},145:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},146:{0: {1:0,2:0},1: {1:15,2:24},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},147:{0: {1:21,2:24},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},148:{0: {1:14,2:18.3},1: {1:14,2:18.3},2: {1:14,2:18.3},3: {1:14,2:18.3},4: {1:14,2:18.3},5: {1:14,2:18.3},6: {1:14,2:18.3}},149:{0: {1:0,2:0},1: {1:14,2:17},2: {1:14,2:17},3: {1:14,2:17},4: {1:14,2:17},5: {1:14,2:17},6: {1:14,2:17}},150:{0: {1:15,2:20},1: {1:15,2:20},2: {1:15,2:20},3: {1:15,2:20},4: {1:15,2:20},5: {1:15,2:20},6: {1:15,2:20}},151:{0: {1:0,2:0},1: {1:16,2:18.3},2: {1:16,2:18.3},3: {1:16,2:18.3},4: {1:16,2:18.3},5: {1:16,2:18.3},6: {1:0,2:0}},152:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},153:{0: {1:15,2:18},1: {1:0,2:0},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},154:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},155:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},156:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},157:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},158:{0: {1:14.3,2:17},1: {1:0,2:0},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:14.3,2:17}},159:{0: {1:0,2:0},1: {1:18,2:20},2: {1:18,2:20},3: {1:18,2:20},4: {1:18,2:20},5: {1:18,2:20},6: {1:0,2:0}},160:{0: {1:0,2:0},1: {1:11,2:18},2: {1:11,2:18},3: {1:11,2:18},4: {1:11,2:18},5: {1:11,2:18},6: {1:0,2:0}},161:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},162:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},163:{0: {1:0,2:0},1: {1:11,2:18},2: {1:11,2:18},3: {1:11,2:18},4: {1:11,2:18},5: {1:11,2:18},6: {1:0,2:0}},164:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},165:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},166:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},167:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:17.3},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},168:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},169:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},170:{0: {1:0,2:0},1: {1:17,2:19},2: {1:0,2:0},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:17,2:19}},171:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},172:{0: {1:16,2:20},1: {1:16,2:20},2: {1:16,2:20},3: {1:16,2:20},4: {1:16,2:20},5: {1:16,2:20},6: {1:16,2:20}},173:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},174:{0: {1:0,2:0},1: {1:11,2:19},2: {1:11,2:19},3: {1:11,2:19},4: {1:11,2:19},5: {1:11,2:19},6: {1:0,2:0}},175:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},176:{0: {1:0,2:0},1: {1:15.3,2:18},2: {1:15.3,2:18},3: {1:15.3,2:18},4: {1:15.3,2:18},5: {1:15.3,2:18},6: {1:0,2:0}},177:{0: {1:16,2:18.3},1: {1:16,2:18.3},2: {1:16,2:18.3},3: {1:16,2:18.3},4: {1:16,2:18.3},5: {1:16,2:18.3},6: {1:16,2:18.3}},178:{0: {1:0,2:0},1: {1:16.3,2:18.3},2: {1:16.3,2:18.3},3: {1:16.3,2:18.3},4: {1:16.3,2:18.3},5: {1:16.3,2:18.3},6: {1:0,2:0}},179:{0: {1:0,2:0},1: {1:0,2:0},2: {1:17,2:19},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:0,2:0}},180:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},181:{0: {1:15,2:17},1: {1:15,2:17},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:15,2:17}},182:{0: {1:0,2:0},1: {1:0,2:0},2: {1:19,2:20.3},3: {1:19,2:20.3},4: {1:19,2:21},5: {1:19,2:21},6: {1:19,2:21}},183:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:15,2:18}},184:{0: {1:15,2:18},1: {1:11,2:18},2: {1:11,2:18},3: {1:11,2:18},4: {1:11,2:18},5: {1:11,2:18},6: {1:15,2:18}},185:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},186:{0: {1:0,2:0},1: {1:15.3,2:18},2: {1:15.3,2:18},3: {1:15.3,2:18},4: {1:15.3,2:18},5: {1:15.3,2:18},6: {1:15.3,2:18}},187:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},188:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},189:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},190:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},191:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},192:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},193:{0: {1:16,2:18},1: {1:0,2:0},2: {1:0,2:0},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},194:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},195:{0: {1:0,2:0},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:0,2:0}},196:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},197:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},198:{0: {1:0,2:0},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:0,2:0}},199:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},200:{0: {1:16.3,2:18.3},1: {1:16.3,2:18.3},2: {1:0,2:0},3: {1:16.3,2:18.3},4: {1:16.3,2:18.3},5: {1:16.3,2:18.3},6: {1:16.3,2:18.3}},201:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},202:{0: {1:16,2:21},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},203:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},204:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},205:{0: {1:0,2:0},1: {1:0,2:0},2: {1:17,2:19},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:0,2:0}},206:{0: {1:9,2:17},1: {1:11,2:17},2: {1:11,2:17},3: {1:11,2:17},4: {1:11,2:17},5: {1:11,2:17},6: {1:9,2:17}},207:{0: {1:0,2:0},1: {1:14,2:20},2: {1:14,2:20},3: {1:14,2:20},4: {1:14,2:20},5: {1:14,2:20},6: {1:0,2:0}},208:{0: {1:0,2:0},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:0,2:0}},209:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},210:{0: {1:0,2:0},1: {1:13,2:19},2: {1:13,2:19},3: {1:13,2:19},4: {1:11,2:18},5: {1:11,2:18},6: {1:0,2:0}},211:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},212:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},213:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},214:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},215:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},216:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},217:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},218:{0: {1:17,2:19},1: {1:17,2:19},2: {1:0,2:0},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:17,2:19}},219:{0: {1:11,2:2},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:11,2:19}},220:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},221:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},222:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},223:{0: {1:15,2:18},1: {1:15,2:18},2: {1:0,2:0},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},224:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},225:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},226:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},227:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},228:{0: {1:0,2:0},1: {1:16,2:18.3},2: {1:16,2:18.3},3: {1:16,2:18.3},4: {1:16,2:18.3},5: {1:16,2:18.3},6: {1:0,2:0}},229:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},230:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},231:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},232:{0: {1:15,2:20},1: {1:15,2:20},2: {1:15,2:20},3: {1:15,2:20},4: {1:15,2:20},5: {1:15,2:20},6: {1:15,2:20}},233:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},234:{0: {1:15.3,2:18},1: {1:0,2:0},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15.3,2:18}},235:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},236:{0: {1:10,2:24},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},237:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},238:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},239:{0: {1:15,2:18.3},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:15,2:18.3}},240:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},241:{0: {1:0,2:0},1: {1:14,2:19},2: {1:14,2:19},3: {1:14,2:19},4: {1:14,2:19},5: {1:14,2:19},6: {1:0,2:0}},242:{0: {1:0,2:0},1: {1:15.3,2:18},2: {1:15.3,2:18},3: {1:15.3,2:18},4: {1:15.3,2:18},5: {1:15.3,2:18},6: {1:0,2:0}},243:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},244:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},245:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},246:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},247:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},248:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},249:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:0,2:0}},250:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},251:{0: {1:0,2:0},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:0,2:0}},252:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},253:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},254:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},255:{0: {1:15,2:18},1: {1:0,2:0},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},256:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},257:{0: {1:14,2:18},1: {1:14,2:18},2: {1:14,2:18},3: {1:14,2:18},4: {1:14,2:18},5: {1:14,2:18},6: {1:14,2:18}},258:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},259:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},260:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},261:{0: {1:0,2:0},1: {1:14,2:18.3},2: {1:14,2:18.3},3: {1:14,2:18.3},4: {1:14,2:18.3},5: {1:14,2:18.3},6: {1:0,2:0}},262:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},263:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},264:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},265:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},266:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},267:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},268:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},269:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},270:{0: {1:16,2:18},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:18}},271:{0: {1:0,2:0},1: {1:0,2:0},2: {1:16,2:18.3},3: {1:16,2:18.3},4: {1:16,2:18.3},5: {1:16,2:18.3},6: {1:0,2:0}},272:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:17}},273:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},274:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},275:{0: {1:0,2:0},1: {1:16,2:17},2: {1:16,2:17},3: {1:16,2:17},4: {1:16,2:17},5: {1:16,2:17},6: {1:0,2:0}},276:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},277:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},278:{0: {1:17,2:19},1: {1:17,2:19},2: {1:17,2:19},3: {1:17,2:19},4: {1:17,2:19},5: {1:17,2:19},6: {1:0,2:0}},279:{0: {1:15,2:19},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:15,2:19}},280:{0: {1:0,2:0},1: {1:17,2:18.3},2: {1:17,2:18.3},3: {1:17,2:18.3},4: {1:17,2:18.3},5: {1:16,2:18.3},6: {1:16,2:18.3}},281:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},282:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},283:{0: {1:15,2:18},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:15,2:18}},284:{0: {1:0,2:0},1: {1:15,2:19},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:0,2:0}},285:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},286:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},287:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:0,2:0},6: {1:0,2:0}},288:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},289:{0: {1:17,2:18.3},1: {1:17,2:18.3},2: {1:17,2:18.3},3: {1:0,2:0},4: {1:17,2:18.3},5: {1:17,2:18.3},6: {1:17,2:18.3}},290:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},291:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},292:{0: {1:16,2:24},1: {1:16,2:24},2: {1:16,2:24},3: {1:16,2:24},4: {1:16,2:24},5: {1:16,2:24},6: {1:16,2:24}},293:{0: {1:0,2:0},1: {1:15,2:18.3},2: {1:15,2:18.3},3: {1:15,2:18.3},4: {1:15,2:18.3},5: {1:15,2:18.3},6: {1:0,2:0}},294:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}},295:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},296:{0: {1:0,2:0},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},297:{0: {1:17,2:19},1: {1:0,2:0},2: {1:17,2:19},3: {1:17,2:19},4: {1:17,2:19},5: {1:0,2:0},6: {1:17,2:19}},298:{0: {1:14,2:21},1: {1:14,2:21},2: {1:14,2:21},3: {1:14,2:21},4: {1:14,2:21},5: {1:14,2:21},6: {1:14,2:22}},299:{0: {1:12,2:18},1: {1:16,2:24},2: {1:15,2:19},3: {1:15,2:19},4: {1:15,2:19},5: {1:15,2:19},6: {1:12,2:18}},300:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},301:{0: {1:15,2:17},1: {1:15,2:17},2: {1:15,2:17},3: {1:15,2:17},4: {1:15,2:17},5: {1:15,2:17},6: {1:15,2:17}},302:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},303:{0: {1:16,2:19},1: {1:16,2:19},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:0,2:0}},304:{0: {1:0,2:0},1: {1:0,2:0},2: {1:16,2:19},3: {1:16,2:19},4: {1:16,2:19},5: {1:16,2:19},6: {1:16,2:19}},305:{0: {1:16,2:17},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:16,2:17}},306:{0: {1:0,2:0},1: {1:15,2:18},2: {1:15,2:18},3: {1:15,2:18},4: {1:15,2:18},5: {1:15,2:18},6: {1:0,2:0}},307:{0: {1:11,2:19},1: {1:11,2:19},2: {1:11,2:19},3: {1:11,2:19},4: {1:11,2:19},5: {1:11,2:19},6: {1:11,2:19}},308:{0: {1:15,2:17.3},1: {1:15,2:17.3},2: {1:15,2:17.3},3: {1:15,2:17.3},4: {1:15,2:17.3},5: {1:15,2:17.3},6: {1:15,2:17.3}},309:{0: {1:0,2:0},1: {1:0,2:0},2: {1:0,2:0},3: {1:0,2:0},4: {1:0,2:0},5: {1:0,2:0},6: {1:0,2:0}},310:{0: {1:0,2:0},1: {1:16,2:18},2: {1:16,2:18},3: {1:16,2:18},4: {1:16,2:18},5: {1:16,2:18},6: {1:0,2:0}}};






   var elements = document.getElementsByClassName(weekday[d.getDay()]);
    for(i=0; i<elements.length; i++) {
      elements[i].style.display =    'inline';

            if (today >=hh[i][l][1] && today <= hh[i][l][2]-1) {
               elements[i].style.color = 'blue';
               elements[i].style.fontSize='1.4em';
               elements[i].parentElement.style.backgroundColor='#adc5ed';
                elements[i].parentNode.setAttribute("data-category",  elements[i].parentNode.getAttribute("data-category")+" hh");
            } else if (today >=hh[i][l][1]-1 && today <= hh[i][l][1]) {
              elements[i].parentElement.style.backgroundColor='#fff772';
               elements[i].parentNode.setAttribute("data-category",  elements[i].parentNode.getAttribute("data-category")+" hh");
            } else if (today >=hh[i][l][2]-1 && today <= hh[i][l][2]) {
              elements[i].style.color = 'blue';
              elements[i].style.fontSize='1.4em';
              elements[i].parentElement.style.backgroundColor='#ef7a7a';
               elements[i].parentNode.setAttribute("data-category",  elements[i].parentNode.getAttribute("data-category")+" hh");
            } else {}
    }


// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";
  }


    }, 800);

}

