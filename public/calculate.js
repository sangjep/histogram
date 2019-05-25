function calculate() {

  // declaring variables

  var grades, num_grades, f_range, d_range, cm_range, c_range, cp_range, bm_range, b_range, bp_range, am_range, a_range, ap_range, max, ap, a, am, bp, b, bm, cp, c, cm, d, f, i, max_group;

  grades = [65.95, 56.98, 78.52, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
  num_grades = grades.length;
  ap = document.getElementsByName("ap")[0].value;
  a = document.getElementsByName("a")[0].value;
  am = document.getElementsByName("am")[0].value;
  bp = document.getElementsByName("bp")[0].value;
  b = document.getElementsByName("b")[0].value;
  bm = document.getElementsByName("bm")[0].value;
  cp = document.getElementsByName("cp")[0].value;
  c = document.getElementsByName("c")[0].value;
  cm = document.getElementsByName("cm")[0].value;
  d = document.getElementsByName("d")[0].value;
  f = document.getElementsByName("f")[0].value;
  max = document.getElementsByName("max")[0].value;
  ap_range = 0;
  a_range = 0;
  am_range = 0;
  bp_range = 0;
  b_range = 0;
  bm_range = 0;
  cp_range = 0;
  c_range = 0;
  cm_range = 0;
  d_range = 0;
  f_range = 0;

  // check for invalid inputs

  if (!document.getElementsByName("max")[0].checkValidity() || !document.getElementsByName("ap")[0].checkValidity() || !document.getElementsByName("a")[0].checkValidity() || !document.getElementsByName("am")[0].checkValidity() || !document.getElementsByName("bp")[0].checkValidity() || !document.getElementsByName("b")[0].checkValidity() || !document.getElementsByName("bm")[0].checkValidity() || !document.getElementsByName("cp")[0].checkValidity() || !document.getElementsByName("c")[0].checkValidity() || !document.getElementsByName("cm")[0].checkValidity() || !document.getElementsByName("d")[0].checkValidity() || !document.getElementsByName("f")[0].checkValidity()) {
    reset_graph();
    document.getElementById("inval_err").hidden = false;
    return 1; // negative input
  } else {
    document.getElementById("inval_err").hidden = true;
  }

  if (max - ap < 0 || ap - a < 0 || a - am < 0 || am - bp < 0 || bp - b < 0 || b - bm < 0 || bm - cp < 0 || cp - c < 0 || c - cm < 0 || cm - d < 0 || d - f < 0) {
    reset_graph();
    document.getElementById("range_err").hidden = false;
    return 2; // invalid grade range
  } else {
    document.getElementById("range_err").hidden = true;
  }

  for (i = 0; i < num_grades; i++) {
    if (grades[i] > max) {
      ap_range++;
    } else if (grades[i] >= ap) {
      ap_range++;
    } else if (grades[i] >= a) {
      a_range++;
    } else if (grades[i] >= am) {
      am_range++;
    } else if (grades[i] >= bp) {
      bp_range++;
    } else if (grades[i] >= b) {
      b_range++;
    } else if (grades[i] >= bm) {
      bm_range++;
    } else if (grades[i] >= cp) {
      cp_range++;
    } else if (grades[i] >= c) {
      c_range++;
    } else if (grades[i] >= cm) {
      cm_range++;
    } else if (grades[i] >= d) {
      d_range++;
    } else if (grades[i] >= f) {
      f_range++;
    } else {
      f_range++;
    }
  }

  ap_range = ap_range / num_grades;
  a_range = a_range / num_grades;
  am_range = am_range / num_grades;
  bp_range = bp_range / num_grades;
  b_range = b_range / num_grades;
  bm_range = bm_range / num_grades;
  cp_range = cp_range / num_grades;
  c_range = c_range / num_grades;
  cm_range = cm_range / num_grades;
  d_range = d_range / num_grades;
  f_range = f_range / num_grades;

  max_group = Math.max(ap_range, a_range, am_range, bp_range, b_range, bm_range, cp_range, c_range, cm_range, d_range, f_range)

  document.getElementById("ap_bar").style.width = ap_range/max_group*100 + "%";
  document.getElementById("a_bar").style.width = a_range/max_group*100 + "%";
  document.getElementById("am_bar").style.width = am_range/max_group*100 + "%";
  document.getElementById("bp_bar").style.width = bp_range/max_group*100 + "%";
  document.getElementById("b_bar").style.width = b_range/max_group*100 + "%";
  document.getElementById("bm_bar").style.width = bm_range/max_group*100 + "%";
  document.getElementById("cp_bar").style.width = cp_range/max_group*100 + "%";
  document.getElementById("c_bar").style.width = c_range/max_group*100 + "%";
  document.getElementById("cm_bar").style.width = cm_range/max_group*100 + "%";
  document.getElementById("d_bar").style.width = d_range/max_group*100 + "%";
  document.getElementById("f_bar").style.width = f_range/max_group*100 + "%";

  return 0;
}

function reset_graph() {
  document.getElementById("ap_bar").style.width = 0;
  document.getElementById("a_bar").style.width = 0;
  document.getElementById("am_bar").style.width = 0;
  document.getElementById("bp_bar").style.width = 0;
  document.getElementById("b_bar").style.width = 0;
  document.getElementById("bm_bar").style.width = 0;
  document.getElementById("cp_bar").style.width = 0;
  document.getElementById("c_bar").style.width = 0;
  document.getElementById("cm_bar").style.width = 0;
  document.getElementById("d_bar").style.width = 0;
  document.getElementById("f_bar").style.width = 0;
}
