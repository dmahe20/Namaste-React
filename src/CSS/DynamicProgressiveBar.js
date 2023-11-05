//HTML

// <h3>Dynamic Progress Bar</h3>
// <p>Running progress bar from 0% to 100% in 10 seconds</p>
// <div class="progress">
//   <div id="dynamic" class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" 
//        aria-valuemin="0" aria-valuemax="100" style="width: 0%">
//     <span id="current-progress"></span>
//   </div>
// </div>

//CSS

// .progress {
//     margin: 10px;
//     width: 700px;
//   }

  //JS

  $(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 10;
        $("#dynamic")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 100)
            clearInterval(interval);
    }, 1000);
  });