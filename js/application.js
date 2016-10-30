// Some general UI pack related JS
// Extend JS String with repeat method

String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this);
};

(function($) {

  // Add segments to a slider
  $.fn.addSliderSegments = function (amount, orientation) {    
    return this.each(function () {
      if (orientation == "vertical") {
        var output = ''
          , i;
        for (i = 1; i <= amount - 2; i++) {
          output += '<div class="ui-slider-segment" style="top:' + 100 / (amount - 1) * i + '%;"></div>';
        };
        $(this).prepend(output);
      } else {
        var segmentGap = 100 / (amount - 1) + "%"
          , segment = '<div class="ui-slider-segment" style="margin-left: ' + segmentGap + ';"></div>';
        $(this).prepend(segment.repeat(amount - 2));
      }
    });
  };

  $(function() {

    // Custom Selects
    $("select[name='huge']").selectpicker({style: 'btn-hg btn-primary', menuStyle: 'dropdown-inverse'});
    $("select[name='large']").selectpicker({style: 'btn-lg btn-danger'});
    $("select[name='info']").selectpicker({style: 'btn-info'});
    $("select[name='small']").selectpicker({style: 'btn-sm btn-warning'});

    // Tabs
    $(".nav-tabs a").on('click', function (e) {
      e.preventDefault();
      $(this).tab("show");
    })

    // Tooltips
    $("[data-toggle=tooltip]").tooltip("show");

    // Tags Input
    $(".tagsinput").tagsInput();

    // jQuery UI Sliders
    var $slider = $("#slider");
    if ($slider.length > 0) {
      $slider.slider({
        min: 1,
        max: 5,
        value: 3,
        orientation: "horizontal",
        range: "min"
      }).addSliderSegments($slider.slider("option").max);
    }

    var $slider2 = $("#slider2");
    if ($slider2.length > 0) {
      $slider2.slider({
        min: 1,
        max: 5,
        values: [3, 4],
        orientation: "horizontal",
        range: true
      }).addSliderSegments($slider2.slider("option").max);
    }

    var $slider3 = $("#slider3")
      , slider3ValueMultiplier = 100
      , slider3Options;

    if ($slider3.length > 0) {
      $slider3.slider({
        min: 1,
        max: 5,
        values: [3, 4],
        orientation: "horizontal",
        range: true,
        slide: function(event, ui) {
          $slider3.find(".ui-slider-value:first")
            .text("$" + ui.values[0] * slider3ValueMultiplier)
            .end()
            .find(".ui-slider-value:last")
            .text("$" + ui.values[1] * slider3ValueMultiplier);
        }
      });

      slider3Options = $slider3.slider("option");
      $slider3.addSliderSegments(slider3Options.max)
        .find(".ui-slider-value:first")
        .text("$" + slider3Options.values[0] * slider3ValueMultiplier)
        .end()
        .find(".ui-slider-value:last")
        .text("$" + slider3Options.values[1] * slider3ValueMultiplier);
    }

    var $verticalSlider = $("#vertical-slider");
    if ($verticalSlider.length) {
      $verticalSlider.slider({
        min: 1,
        max: 5,
        value: 3,
        orientation: "vertical",
        range: "min"
      }).addSliderSegments($verticalSlider.slider("option").max, "vertical");
    }

    // Add style class name to a tooltips
    $(".tooltip").addClass(function() {
      if ($(this).prev().attr("data-tooltip-style")) {
        return "tooltip-" + $(this).prev().attr("data-tooltip-style");
      }
    });

    // Placeholders for input/textarea
    $(":text, textarea").placeholder();

    // Make pagination demo work
    $(".pagination").on('click', "a", function() {
      $(this).parent().siblings("li").removeClass("active").end().addClass("active");
    });

    $(".btn-group").on('click', "a", function() {
      $(this).siblings().removeClass("active").end().addClass("active");
    });

    // Disable link clicks to prevent page scrolling
    $(document).on('click', 'a[href="#fakelink"]', function (e) {
      e.preventDefault();
    });

    // jQuery UI Spinner
    $.widget( "ui.customspinner", $.ui.spinner, {
      widgetEventPrefix: $.ui.spinner.prototype.widgetEventPrefix,
      _buttonHtml: function() { // Remove arrows on the buttons
        return "" +
        "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
          "<span class='ui-icon " + this.options.icons.up + "'></span>" +
        "</a>" +
        "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
          "<span class='ui-icon " + this.options.icons.down + "'></span>" +
        "</a>";
      }
    });

    $('#spinner-01, #spinner-02, #spinner-03, #spinner-04, #spinner-05').customspinner({
      min: -99,
      max: 99
    }).on('focus', function () {
      $(this).closest('.ui-spinner').addClass('focus');
    }).on('blur', function () {
      $(this).closest('.ui-spinner').removeClass('focus');
    });


    // Focus state for append/prepend inputs
    $('.input-group').on('focus', '.form-control', function () {
      $(this).closest('.input-group, .form-group').addClass('focus');
    }).on('blur', '.form-control', function () {
      $(this).closest('.input-group, .form-group').removeClass('focus');
    });

    // Table: Toggle all checkboxes
    $('.table .toggle-all').on('click', function() {
      var ch = $(this).find(':checkbox').prop('checked');
      $(this).closest('.table').find('tbody :checkbox').checkbox(!ch ? 'check' : 'uncheck');
    });

    // Table: Add class row selected
    $('.table tbody :checkbox').on('check uncheck toggle', function (e) {
      var $this = $(this)
        , check = $this.prop('checked')
        , toggle = e.type == 'toggle'
        , checkboxes = $('.table tbody :checkbox')
        , checkAll = checkboxes.length == checkboxes.filter(':checked').length

      $this.closest('tr')[check ? 'addClass' : 'removeClass']('selected-row');
      if (toggle) $this.closest('.table').find('.toggle-all :checkbox').checkbox(checkAll ? 'check' : 'uncheck');
    });

    // jQuery UI Datepicker
    var datepickerSelector = '#datepicker-01';
    $(datepickerSelector).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: "d MM, yy",
      yearRange: '-1:+1'
    }).prev('.btn').on('click', function (e) {
      e && e.preventDefault();
      $(datepickerSelector).focus();
    });
    $.extend($.datepicker, {_checkOffset:function(inst,offset,isFixed){return offset}});

    // Now let's align datepicker with the prepend button
    $(datepickerSelector).datepicker('widget').css({'margin-left': -$(datepickerSelector).prev('.input-group-btn').find('.btn').outerWidth()});

    // Switch
    $("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch();

    // Typeahead
    /*$('#typeahead-demo-01').typeahead({
      name: 'states',
      limit: 4,
      local: ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
      "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
      "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
      "Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota",
      "North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
      "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
    });*/

    // make code pretty
    window.prettyPrint && prettyPrint();
  });

  //plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
  $('.btn-number').click(function(e){
    e.preventDefault();

    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if(type == 'minus') {

        if(currentVal > input.attr('min')) {
          input.val(currentVal - 1).change();
        }
        if(parseInt(input.val()) == input.attr('min')) {
          $(this).attr('disabled', true);
        }

      } else if(type == 'plus') {

        if(currentVal < input.attr('max')) {
          input.val(currentVal + 1).change();
        }
        if(parseInt(input.val()) == input.attr('max')) {
          $(this).attr('disabled', true);
        }

      }
    } else {
      input.val(0);
    }
  });
  $('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
  });
  $('.input-number').change(function() {

    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());

    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
      $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
      alert('Sorry, the minimum value was reached');
      $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
      $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
      alert('Sorry, the maximum value was reached');
      $(this).val($(this).data('oldValue'));
    }


  });
  $(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
          // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
          // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });

  $('.btn-order').on('click', function(event) {
    $("#order").removeClass('hidden');
  });

  $('#5buy').on('click', function(event) {
    $("#size").val('1');
  });

  $('#9buy').on('click', function(event) {
    $("#size").val('2');
  });

  $('#20buy').on('click', function(event) {
    $("#size").val('3');
  });

  $('#36buy').on('click', function(event) {
    $("#size").val('4');
  });


  $('.control-order input[required], .control-order textarea[required], .control-order select[required]').on('keyup change', function() {
    var $form = $(this).closest('form'),
        $group = $(this).closest('.control-order'),
        $addon = $group.find('.input-group-addon'),
        $icon = $addon.find('span'),
        state = false;

    if (!$group.data('validate')) {
      state = $(this).val() ? true : false;
    }else if ($group.data('validate') == "email") {
      state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
    }else if($group.data('validate') == 'phone') {
      state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
    }else if ($group.data('validate') == "length") {
      state = $(this).val().length >= $group.data('length') ? true : false;
    }else if ($group.data('validate') == "number") {
      state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
    }

    if (state) {
      $addon.removeClass('danger');
      //$addon.removeClass('hidden');
      $addon.addClass('success');
      $icon.attr('class', 'glyphicon glyphicon-ok');
    }else{
      $addon.removeClass('success');
     // $addon.removeClass('hidden');
      $addon.addClass('danger');
      $icon.attr('class', 'glyphicon glyphicon-remove');
    }

    if ($form.find('.input-group-addon.danger').length == 0) {
      $form.find('[type="submit"]').prop('disabled', false);
    }else{
      $form.find('[type="submit"]').prop('disabled', true);
    }
  });

  $('#deliveryType').on('change', function(event) {

    var deliveryTypeNumber = document.getElementById("deliveryType").value;

    var paymentType = document.getElementById("paymentType");

    var deliveryAddressInput = document.getElementById("deliveryAddress");
    var deliveryAddressAddon = document.getElementById("deliveryAddressAd")

    if(deliveryTypeNumber == 1){

      $("#mailPostForm").addClass("hidden");
      $("#deliveryAddressForm").removeClass('hidden');

      deliveryAddressInput.required = true;
      $("#deliveryAddressAd").addClass('danger');

      paymentType.disabled = false;
      paymentType.selectedIndex = "0";
      paymentType.remove(2);
      paymentType.remove(2);

    } else if(deliveryTypeNumber == 2 ){

      $("#deliveryAddressForm").addClass('hidden');
      $("#mailPostForm").removeClass("hidden");

      //delivery address sheet to be changed
      deliveryAddressInput.required = false;
      $("#deliveryAddressAd").removeClass('danger');

      var newPaymentOption = document.createElement("option");

      newPaymentOption.text = "Оплата у Новой Поште";
      newPaymentOption.value = "3";
      newPaymentOption.selected = true;

      paymentType.add(newPaymentOption, 2);
      paymentType.disabled = true;

    } else if(deliveryTypeNumber == 3){

      $("#deliveryAddressForm").addClass("hidden");
      $("#mailPostForm").addClass("hidden");

      //delivery address sheet to be changed
      deliveryAddressInput.required = false;
      $("#deliveryAddressAddon").removeClass('danger');

      var newPaymentOption = document.createElement("option");

      newPaymentOption.text = "Оплата при отриманни";
      newPaymentOption.value = "4";
      newPaymentOption.selected = true;

      paymentType.add(newPaymentOption, 3);
      paymentType.disabled = true;
    }

  });

   $('.control-order input[required], .control-order textarea[required], .control-order select[required]').trigger('change');

  $(function() {
    $(".candy-revert")
        .mouseover(function() {
          var src = $(this).attr("src").match(/[^\.]+/) + "-back.jpg";
          $(this).attr("src", src);
        })
        .mouseout(function() {
          var src = $(this).attr("src").replace("-back.jpg", ".jpg");
          $(this).attr("src", src);
        });
  });

})(jQuery);




