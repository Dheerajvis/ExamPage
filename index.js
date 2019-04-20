function KeepCount() {
  var inputTags = document.getElementsByName('ans_selection[]');
  var total = 0;

  for (var i = 0; i < inputTags.length; i++) {
    if (inputTags[i].checked) {
      total = total + 1;
    }

    if (total > 2) {
      // alert('Pick Just One Please');
      inputTags[i].checked = false;
      return false;
    }
  }
}
