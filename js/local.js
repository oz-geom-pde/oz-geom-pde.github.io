var loaded = [];

$(document).ready(function(){
    $('.collapse').on('show.bs.collapse', function () {
	$(this).parent().find(".abstract-arrow").toggleClass('fa-caret-down fa-caret-up');
	if (! loaded.includes($(this).attr("id"))) {
	    $(this).load($(this).attr("data-post"), function(){MathJax.typeset($(this));});
	    loaded.push($(this).attr("id"));
	}
    });

    $('.collapse').on('hide.bs.collapse', function () {
	$(this).parent().find(".abstract-arrow").toggleClass('fa-caret-up fa-caret-down');
    });
});

function getCompareDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('');
}

$('[post-date]').each(function() {
  if($(this).attr('post-date') > getCompareDate()) $(this).show();
});
