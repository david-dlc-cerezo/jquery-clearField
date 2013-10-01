/*!
 * jQuery ClearField Widget 1.0.0 (2013-10-01)
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
			focusAfterClear:	true,
			widthChange:		0,
			top:				'auto',
			right:				0
		}, options);
	
		// main function
		function AttachClearButtonEvent(e) {
			if( !e.val() && (e.parent().hasClass('divclearable')) )
				_removeClearButton(e);
			else if( e.val() && !(e.parent().hasClass('divclearable')) )
				_attachClearButton(e);
		}
		
		function _attachClearButton(e)
		{			
			//Change width
			if (config.widthChange)
				_changeWidth(e, config.widthChange);
			
			//Wrap element
			e.wrap('<div class="divclearable"></div>');
			
			//Calculate top
			var currentTop = (config.top == 'auto') ? ((e.outerHeight() - 16) / 2) : config.top;
			
			//Add clear button			
			var nClearLink = '<span class="clearlink ui-icon ui-icon-close" title="' + config.clearText + '"></span>';
			e.parent().append(
					jQuery(nClearLink)
						.css('right', config.right)
						.css('top', currentTop)
						.click(function() {
							var field = jQuery(this).prev();
							field.val('').change();
							if (!field.attr("readonly") && !field.attr("disabled") && config.focusAfterClear)
								field.focus();
						})
			);

			$('img.ui-datepicker-trigger').each(function(){
				if ( $(this).parent('.divclearable').length > 0 )
					$(this).parent('.divclearable').after(this);
			});
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
			var e = $(this)
			e.change(function(){
				AttachClearButtonEvent(e)
			});
			AttachClearButtonEvent(e);
		});

		return this;
	};

})(jQuery);
