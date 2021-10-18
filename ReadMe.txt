version 2.0

Issues:
currently there is no implementation of the conversion tool or settings "changing the theme"
everything else should work.

About:
This Calculator app was built using Ionic capacitor with React JS. The Design was implemented by
using several Ionic Components, an Ionic side menu template, and the princples of mobile first design.
Using the design given to me, I broke up the design into several components those being App, button,
functionButtons, KeyPad, Display, menu, and modal. Once I broke the image down into different componets I started
implemented the design with a screen size simaler to that of an android phone. With capacitor I only
had to edit the code for the web application, and I can then instantly create a mobile app version of it.

Challenges and thought progress:
I had an issue with getting react to notice any changes made to the application so it wouldn't
update the display. I ended up just using the react component library to create a state and update
that state when needed.
Another issue was passing functions from one component to another, I've tried several things and
eventually I figured out that I can just pass them through as properties.
One thing I didnt really know how to tackle was the settings page and having different themes,
I was thinking of having the system check a config file and import specific css files based on
the config file. the config file would have a defualt setting but that can be changed with a
users input ona form under the settings page

Refrences:
I used the offcial Documentation of Ionic and capcitor as a reference and source.
https://ionicframework.com/
https://capacitorjs.com/

new source is a react crash course video from Programming with Mosh
https://www.youtube.com/watch?v=Ke90Tje7VS0&t=5088s

Detailed Information:

Components:
old:
Button.tsx - Generates a button which is associated with a numerical value
Display.tsx - Displays the inputs from the user and output when requested
FunctionButtons.tsx - Generates a button assocted with an Mathmatical expression or calculator function.
KeyPad.tsx - Generates all the buttons needed for the calculator and lays out the buttons as needed
Menu.tsx - side menu used for accessing settings, conversion tool, and history log(currently just opens a side panel)
Other componets where generated from ionic for the side menu template.

new:
menu.tsx - generates a side menu panel that contains more user options. once a menu button is
clicked a modal will open.
app.tsx - generates the main layout of the aplication placing all other components in specific spots
Modal.tsx - generates a modal page for a menu tab

List of Modals:
History Log - currently works and it allows the user to look at previously solved expression and can
copy the solution to the display if clicked on.
Settings - currently not implemented
Conversion tool - currently not implemented

How to run:
Web Application - Use the command line and make sure its pointing to the directory myCalculator.
Then run the script "npm start"

Android-Using android studio you can run the android version of the application on an emulator. All the files are
located in the android directory folder.

IOS-Mac Device Required, using the device you can run the code using an IOS emulator. All the required files are
in the IOS folder directory.