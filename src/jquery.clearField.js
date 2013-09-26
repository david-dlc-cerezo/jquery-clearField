/*!
 * jQuery ClearField Widget 1.0pre (2013-09-26)
 * Adds a clear button to the input.
 * 
 * Copyright (c) 2013 David de la Calle
 * https://github.com/david-dlc-cerezo/jquery-clearField
 * 
 * Depends:
 *   - jQuery 
 *   - jQuery UI 1.8
 *   
 * Optional:
 * 
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html 
 */
(function($) {
	$.fn.clearField = function(options) {
	
		// default configuration
		var config = $.extend({}, {
			clearText:			'Clear field',
			focusAfterClear:	false,
			widthChange:		10,
			top:				'auto',
			right:				1
		}, options);
	
		// main function
		function AttachClearButtonEvent(e) {
			e.change(function(){			
				if( !e.val() && (e.parent().hasClass('divclearable')) )
					_removeClearButton(e);
				else if( e.val() && !(e.parent().hasClass('divclearable')) )
					_attachClearButton(e);
			});
		}
		
		function _attachClearButton(e)
		{			
			//Change width
			if (config.widthChange)
				_changeWidth(e, config.widthChange);
			
			//Wrap element
			e.wrap('<div class="divclearable ' + jQuery(this).attr('class') + '"></div>')
			
			//Add clear button			
			var nClearLink = '<span class="clearlink ui-icon ui-icon-close" title="' + config.clearText + '"></span>';
			e.parent().append(
					jQuery(nClearLink)
						.css('right', config.right)
						.css('top', config.top)
						.click(function() {
							var field = jQuery(this).prev();
							field.val('').change();
							if (!field.attr("readonly") && !field.attr("disabled"))
								field.focus();
				})
			);
		}
		
		function _changeWidth(e, widthChange)
		{
			if (_isNumber(widthChange))
			{
				var widthNow = parseInt(e.css('width').replace('px', ''));
				e.css('width', widthNow + widthChange);
			}
		}
		
		function _isNumber(n) {
			  return !isNaN(parseFloat(n)) && isFinite(n);
		}
		
		function _removeClearButton(e)
		{
			//Change width
			if (config.widthChange)
				_changeWidth(e, -config.widthChange);

			//Un-wrap element
			e.unwrap('.divclearable');
			
			//Remove clear button
			e.siblings('.clearlink').remove();
		}

		// initialize every element
		this.each(function() {
			AttachClearButtonEvent($(this));
		});

		return this;
	};

	// auto-start
	/*$(function() {
		$("#select").clearField();
	});*/

})(jQuery);
