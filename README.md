# Lorel Popup
Simple, Elegant, Beautiful, and "**Open Source**".

A simple "POPUP" written in javascript, with state of art CSS and minimal HTML.

Design is simple, yet like an eye catching candy with a close button inspired from linux Adwaita Theme.

Very light weight, no jQuery required, with only two files ( yeah! one CSS stylesheet and another javascript code) is light like a feather weights only 6kB on disk space.

Written to be used as POPUP, also incorporates basic functionality of window objects of Alert, Confirm and Prompt, using them is as simple as originals of Windows.

How to use it. Well its as simple as making a toast.

Just include these two files in you html code, and just call "lorel.init()" with only few parameters.

example:
```
        lorel.init({
            title:"This is title",        //tittle of POPUP--- optional
            content:"This is content",        //main contents of the POPUP. HTML is supported? YES.
            actions:[        //for bottom action buttons
                {value:"Ok",type:"success",onclick:"dothis()"},
                {value:"cancel",type:"cancel"},
		{value:"about",type:"info"}
		]
        });
```
brief summary:
1. **lorel.init()** -this initiate the popup and create a new container in document. It doesn't need a target div to apply on. It further divided into three parts.
	1. title
	2. content
	3. actions
2. **tittle** - this contains the tittle of the popup, is optional. It draws a tittle bar containing a title text with an eye catching close button.
	Note: If you skip to give to title then the popup will not show the close button.
3. **content** - this is the main container area where you can put the text or content of the popup you want to display. It accepts HTML tags too. (My kindda popup).

4. **actions**- may be most important part of popup. this defines the actions this popup can take. It also draws a sneaky bottom bar.

Basically, an array of button objects with three values
1. **value**: the text to be displyed in button
2. **type**: type of the button for view purpose(optional) currently available: "success", "cancel", "info"		// do experimenting yourself
3. **onclick**: yes as the name suggest a fucntion that it will execute on click.
		
		
		
So with all this core fucntionality there are three built-in types

	lorel.alert(str);
	lorel.confirm(str);
	lorel.prompt(str);

# Lorel Calculator ( In Development )

Simple Calculator with elegant design and perks.
Just do calculations, minimize it or place anywhere on the page. It's fun to play with it.
It has smooth animations and transitions, yet powerful.















