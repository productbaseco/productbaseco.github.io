$(document).ready(function () {

  AOS.init();
  $('[data-toggle="tooltip"]').tooltip();

  // Login, forgot password, reset password and sign up page
  $('.forgot-password-link').on('click', function () {
    $('#login-form').addClass('d-none');
    $('#forgot-password-form').removeClass('d-none');
  });

  $('.btn-login-link').on('click', function () {
    $('#forgot-password-form, #signup-form').addClass('d-none');
    $('#login-form').removeClass('d-none');
  });

  $('#forgot-password-button').on('click', function () {
    $('#reset-password-form').removeClass('d-none');
    $('#forgot-password-form').addClass('d-none');
  });

  $('#reset-password-button').on('click', function () {
    $('#login-form').removeClass('d-none');
    $('#reset-password-form').addClass('d-none');
  });

  $('.btn-signup-link').on('click', function () {
    $('#login-form').addClass('d-none');
    $('#signup-form').removeClass('d-none');
  });

  // Navbar mobile
  $('.navbar-toggler').on('click', function () {
    $('.navbar-overlay').addClass('navbar-overlay-show');
    $('body').addClass('overflow-hidden');
  });
  $('.navbar-mobile-close, .navbar-overlay').on('click', function () {
    $('.navbar-collapse').removeClass('show');
    $('body').removeClass('overflow-hidden');
    window.setTimeout(function () {
      $('.navbar-overlay').removeClass('navbar-overlay-show');
    }, 40);

  });

  // Filter click event
  $(".feedback-filter-xs .card-header").on('click', function () {
    $(".feedback-filter-xs").toggleClass("filter-mobile-show");
  });

  // Sticky sidebar
  if ($(window).width() > 991) {
    $('#feedback-filter-sidebar, #changelog-filter-sidebar').stickySidebar({
      topSpacing: 72
    });
  }

  //Custom Dropdown
  $('#custom-cat-dropdown').select2({
    placeholder: 'Select an option',
    dropdownParent: '#ss-custom-cat-dropdown',
    tags: true
  });
  $('#custom-state-dropdown').select2({
    placeholder: 'Select an option',
    dropdownParent: '#ss-custom-state-dropdown'
  });
  $('#custom-type-dropdown').select2({
    placeholder: 'Select an option',
    dropdownParent: '#ss-custom-type-dropdown'
  });
  $('#custom-status-dropdown').select2({
    placeholder: 'Select an option',
    dropdownParent: '#ss-custom-status-dropdown'
  });

  // File upload
  bsCustomFileInput.init();

  //Tag input
  $(".custom-taginput").tagsinput('items');


  // Drag and Drop feature in Roadmap page
  dragula([document.getElementById("RoadMapPlanned"), document.getElementById("RoadMapInProgress"), document.getElementById("RoadMapCompleted")]);



  // Roadmap page dynamic height
  var RoadmapHeight = $(window).height() - $(".ss-navbar").outerHeight() - $(".page-title").outerHeight() - $(".ss-footer").outerHeight() - 40;
  $('.roadmap-card-body').height(RoadmapHeight);

  //Roadmap page view
  $("#btn-boardview").on('click', function () {
    $(this).addClass('active');
    $("#btn-tableview").removeClass('active');

    $("#BoardView").removeClass('d-none');
    $("#TableView").addClass('d-none');
  });
  $("#btn-tableview").on('click', function () {
    $(this).addClass('active');
    $("#btn-boardview").removeClass('active');

    $("#TableView").removeClass('d-none');
    $("#BoardView").addClass('d-none');
  });

  // Profile page file upload
  $("#imageUploadButton").click(function () {
    $("#imageUploadInput").click();
  });

  //Setting tab
  if ($(window).width() <= 767) {
    $(".setting-tab-list .nav-link").removeClass("active");
    $(".setting-tab-body .tab-pane").removeClass("fade active show");
    $(".setting-tab-body").parent().parent().hide();

    $(".setting-tab-list .nav-link").click(function () {
      $(".setting-tab-list").parent().hide();
      $(".setting-tab-body").parent().parent().show();
    });
    $(".setting-tab-body .card-title-separator").click(function () {
      $(".setting-tab-list").parent().show();
      $(".setting-tab-body").parent().parent().hide();
      $(".setting-tab-list .nav-link").removeClass("active");
    });
  }

  // Upgrade Plan Click event
  $("#btnUpgrade").click(function () {
    $("#subscribedPlan").addClass("d-none");
    $("#UpgradePlanList").removeClass("d-none");
  });
  $("#backToSubscribedPlan").click(function () {
    $("#UpgradePlanList").addClass("d-none");
    $("#subscribedPlan").removeClass("d-none");
  });


  //Back to Top
  $("#back2Top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });


});

//Back to Top
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 150) {
    $('#back2Top').fadeIn();
  } else {
    $('#back2Top').fadeOut();
  }
});