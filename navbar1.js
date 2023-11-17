$(document).ready(function(){
    $("#navbar").html(`
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">BookSeat</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" id="navlogin">
            <a class="nav-link" href="/login.html">Login</a>
          </li>
          <li class="nav-item" id="navsignup">
            <a class="nav-link" href="/signup.html">Signup</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Availibility
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/avail33.html">Block 33</a></li>
              <li><a class="dropdown-item" href="/avail34.html">Block 34</a></li>
            </ul>
          </li>
          <li>
          <li class="nav-item">
            <button id="modeToggle" class="btn btn-dark">Dark Mode</button>
           </li>
        </ul>
      </div>
    </div>
    `);
  $('#modeToggle').click(function () {
    $('nav,table').toggleClass('dark-mode');
    if ($('nav').hasClass('dark-mode')) {
      $('#modeToggle').text('Light Mode');
      $('#modeToggle').addClass('btn-light');
      $('#modeToggle').removeClass('btn-dark');
      $("nav").removeClass('bg-light');
      $("nav").addClass('bg-dark');
      $("button .navbar-toggler").addClass("text-light")
      $("form h4, form div, a").removeClass('text-dark');
      $("form h4, form div, a").addClass('text-light')
      $("form").removeClass("bg-white");
      $("form").addClass("bg-dark");
      $("#list").addClass("bg-light");
      $("#list").removeClass("bg-dark");
    } else {
      $('#modeToggle').text('Dark Mode');
      $('#modeToggle').addClass('btn-dark');
      $('#modeToggle').removeClass('btn-light');
      $("nav").removeClass('bg-dark');
      $("nav").addClass('bg-light');
      $("button .navbar-toggler").addClass("text-dark")
      $("form h4, form div, a").removeClass('text-light');
      $("form h4, form div, a").addClass('text-dark');
      $("form").removeClass("bg-dark");
      $("form").addClass("bg-white");
      $("#list").addClass("bg-dark");
      $("#list").removeClass("bg-light");
    }
  });

})