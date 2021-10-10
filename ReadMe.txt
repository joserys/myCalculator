Issues:
As of right now the currrent code only has design elements to it, the functionality of the calculator
does not work. The design of the caculator however matches closely to the one given to me.
Also when I was creating the zip file the node_modules folder would not be zipped so i left it
out, I beleived it contained the files for ionic capactir with react js.

About:
This Calculator app was built using Ionic capacitor with React JS. The Design was implemented by
using several Ionic Components, an Ionic side menu template, and the princples of mobile first design.
Using the design given to me, I broke up the design into several components those being button,
functionButtons, KeyPad, and Display. Once I broke the image down into different componets I started
implementing the design with a screen size simalr to that of an android phone. With capacitor I only
had to edit the code for the web application, and I can then instantly was able create mobile app
version of it.

Challenges and thought progress:
The main challenge was making time, I had a busy schedule lined up for these last few days which defintly
didn't help. The first 3 days I only had 2-4 hours to work on the code, However they were spent on learning
what Ionic Capacitor was and getting it to work on my windows enviroment. I honestly only had one full day
to work on the code which was spent on developing the design of the calculator.

Refrences:
I used the offcial Documentation of Ionic and capcitor as a reference and source.
https://ionicframework.com/
https://capacitorjs.com/

Detailed Information:

Components:
Button.tsx - Generates a button which is associated with a numerical value
Display.tsx - Displays the inputs from the user and output when requested
FunctionButtons.tsx - Generates a button assocted with an Mathmatical expression or calculator function.
KeyPad.tsx - Generates all the buttons needed for the calculator and lays out the buttons as needed
Menu.tsx - side menu used for accessing settings, conversion tool, and history log(currently just opens a side panel)
Other componets where generated from ionic for the side menu template.

How to run:
Web Application - Use the command line and make sure its pointing to the directory myCalculator.
Then run the script "npm start"

Android-Using android studio you can run the android version of the application on an emulator. All the files are
located in the android directory folder.

IOS-Mac Device Required, using the device you can run the code using an IOS emulator. All the required files are
in the IOS folder directory.