# WebProject2

-----------
WORK REPORT
-----------
DISCLAIMER
* Technical implementation of each aspect of 
website will be shown via demonstration
* Demonstration will also elaborate on the layout/design of 
webpage

BASIC CONTEXT

* This project is a simple mock company website made with HTML,Javascript and CSS
* Project has been done alone
* git was used for source control, it's published on github pages,
with the repository being available to the public

TOOLS

-3 main tools:
* HTML
* CSS
* Javascript

* (https://coolors.co/) 
- This website helped me choose some 
coloring for the website

WEB/DESIGN - PUBLISHING PLACE
* This is my own web design, with images
taken from different places over the web
* Some of the images were designed by me

VALID HTML/CSS
* both have been checked and confirmed as valid
* Will be seen on presentation
* Validated with HTML5(experimental) validator + CSS3 validator 
from W3.org

RESPONSIVE DESIGN
* meta tag is used to create a responsive website
* intial zoom is 1x
* Content adjusts based on viewport size
* Each image fits properly on different sizes
* text is legible on all sizes as well
* content is aligned consistently to the center
on each webpage (more on this in demonstration)

USABILITY 

* The UI of the website covers some of the 25-point usability checklist:
(https://web.wsu.edu/web-training/usability/website-usability-checklist/25-point-usability-checklist/)
- each button has clear feedback
- site is easy to navigate: 
1. navigation bar available on each webpage
2. back/top functionality allows quicker navigation
- related topics are put together (mutually exclusive content)
- labels are simple and descriptive
- footer shows contact information, back/top functionality, copyright
- headings are used liberally
- legible font on all devices (will be seen in demonstration)

FUNCTIONALITY (Javascript Implementations)

* Website is split into multiple webpages
- Home page includes all content
- Phones, Desktop, Laptops act as a display
for products

* Shipping section (JavaScript implementation 1):
- It takes in your contact information, then shows your
what you have given.
- It overrides previous changes with each button click
- This implementation is triggered upon clicking the submit button,
with changes being seen when typing in the textboxes
- Demonstration + source code will be shown

* Store (JavaScript implementation 2):
- Store section is a basic mock shopping cart
- Each time add to cart is clicked, your shopping cart will:
1. Show what you bought, based on the button clicked
2. Will calculate final price, based on the value of the products
listed
- By pressing buy, you will be prompted to type "yes". Failing,
or canceling to do so does nothing
1. If you decide to finally buy these products, by typing
"yes" on the buy prompt, your purchase will be noted via
a message. This will clear the listed items and the price
2. After clicking any purchase item (the tech) button again,
the noted message will dissappear, while still remembering
final price, and adding any additional purchase in the list