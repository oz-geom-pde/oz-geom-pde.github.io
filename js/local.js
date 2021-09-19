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
