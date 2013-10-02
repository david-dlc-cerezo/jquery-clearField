jquery-clearField
=================

This plugin adds a "cross" (ui-icon-close) to an input field, when this field hasn't an empty value. By clicking on it, the field will be emptied. 

Forked from https://github.com/jk3us/jquery-clearable, adding options and improving behaviour.

Requires
========
* jQuery
* jQuery-UI
 

Example
=======

##Simple usage

````
<script src='http://code.jquery.com/jquery-1.9.1.js'></script>
<script src='http://code.jquery.com/ui/1.10.3/jquery-ui.js'></script>
<script src='src/jquery.clearField.js'></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="css/jquery.clearField.css">

<p>
<input name="test1" id="test1" clas="test" type='text'><br/>
<input name="test2" id="test2" clas="test" type='text' value='abc'>
</p>
<script>
	$('.test').clearField();
</script>
```

![Example #1](/example1.png)


##Use of ``widthChange`` option
Sets the width (in pixels) to add to the input when the empty button is attached.
````
<script>
	$(function(){
		$('.test').clearField({
			widthChange: 20
		});
	});
</script>
````
![Example #2](/example2a.png)

![Example #2 explained](/example2b.png)

##Use of ``clearText`` option
Sets a different text as title to show when mouse is over the closing element. Usefull to show it in a 
different language or just to customize the message.

###Default functionality
![Example #3 Default functionality](/example3a.png)

###Customized text
````
<script>
	$(function(){
		$('.test').clearField({
			clearText: 'Empty field'
		});
	});
</script>
````
![Example #2 Customized text](/example3b.png)
