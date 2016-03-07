	// Tabs
	$(function(){
		$('.tabs-nav a').click(function(){

			//Check if the tabs menu has active class
			$('.tabs-nav li').removeClass('active');
			$(this).parent().addClass('active');

			// Display active tab
			var currentTab = $(this).attr('href');
			$('.tabs-content div').hide();
			$(currentTab).show();

			return false;
		});
	});

	$(document).ready(function () {
		// Financial Data
		$.getJSON('code-test.json',
		function (data) {
			data.sort(function(a, b){
				return b.earnings - a.earnings;
			});

			var tr;
			for (var i = 0; i < data.length; i++) {
				tr = $('<tr/>');
				tr.append('<td>' + data[i].name + '</td>');
				tr.append('<td class="text-right">' + data[i].apy + ' %' + '</td>');
				tr.append('<td class="text-right">' + '$' + data[i].earnings.toFixed(2) + '</td>');
				$('table').append(tr);
			}
		});

		// Modal
		$('.login').click(function() {
			$('.modal-overlay').fadeToggle(300, 'linear');
			$('.login-modal').show();
		});

		$('.close-modal').click(function() {
			$('.modal-overlay').fadeToggle(300, 'linear');
			$('.login-modal').hide();
		});

		// Mobile Menu 
		$('.mobile-toggle').click(function() {
			$('ul.menu').slideToggle();
		});

	});
