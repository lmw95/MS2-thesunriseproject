![](/assets/screenshots/responsive-design.png)

# The Sunrise Project - A Visitors Guide
> This project is for purely educational purposes only. Content and information within this project may not be 100% accurate and is based on a fictitious tourism board.

With the event of COVID-19 resulting in the dramatic increase in staycations, The Sunrise Project (a small collective of local buisiness owners) came together to promote the area of the Suffolk coast known locally as the 'Sunrise Coast', the most easterly coastline in the country, not only to visitors from outside the area, but to local people who may not know what lies right on their doorstep.

This website is the company's primary marketing method, and offers an online information center for the Sunrise Coast, complete with an interactive guide to help visitors make the most of their day out. As the area advertised is not well-known outside of Suffolk, this means that the website will serve as an introduction as well as a guide to the local area.

# Table of Contents
* [UX]()
    * [i. User Stories]()
        * [Users]()
        * [Owners]()
    * [ii. Strategy]()
        * [Project inception]()
        * [Research]()
    * [iii. Scope]()
        * [Target audience]()
        * [Requirements]()
        * [Limitations]()
    * [iv. Structure]()
        * [Architecture]()
        * [Website flow]()
    * [v. Skeleton]()
        * [Wireframes & changes]()
    * [vi. Surface]()
        * [Initial considerations]()
        * [Palette]()
        * [Typography]()
        * [Iconography & imagery]()
* [Features]()
    * [i. Navigation menu & hero image]()
    * [ii. Section toggle buttons]()
    * [iii. Online guide]()
        * [Interactive buttons]()
        * [Googe Maps]()
        * [Location results]()
    * [iv. Information page]()
    * [v. Owner profile]()
    * [vi. Contact section]()
    * [vii. Footer]()
    * [vi. Contact modal]()
    * [Possible future features]()
* [Responsive design]()
* [Accessibility]()
* [Validation]()
* [Testing]()
* [Issues & improvements]()
* [Deployment]()
* [Technologies & tools]()
* [Credits & acknowledgements]()

# **UX**
## **i. User stories**
The website is targeted at anyone who wishes to visit the Sunrise Coast (both local and external visitors), and aims to provide them with the best location for their day out.

### Users
*As a user, I want...*
* The website to immediately communicate its purpose so I know what to expect from the site
* The website to be easily readable and easy to navigate so that I can find the information that I need
* To see the various attractions and activities that are available in each location
* To see images of each location so that I know it's somewhere I would like to visit
* Contact information of the owner available in case I have any queries
* To know the story behind the Sunrise Coast to decide whether I would like to visit the area
* The website to respond to my interaction, without any unresponsive buttons
* The website to be responsive so I can view it on my phone or tablet if I am out and about
* To see maps of the local area so I know where to go

### Owners
*As the business owner, I want...*
* Highlight the fact that this website is a guide for visitors
* The website to allow and encourage users to engage with the interactive parts of the website to encourage them to visit the area based on its recommendations
* To promote the local area to visitors
* To offer our top 5 recommended attractions for each area
* To make visitors feel welcome to the site and in turn, to the local area
* Encouage visitors to get in touch with us if they have any questions regarding their day out

## **ii. Strategy**
### Project inception
I was inspired to create this website due to the rise in staycations around the UK following the COVID-19 travel restrictions from 2020 - 2021, and possibly beyond. My hometown sits on a strip of coastline called the 'Sunrise Coast', and has historically been a tourism spot since the Victorian times (since the town was connected to London by railway).

I thought that a guide to the Sunrise Coast would be an ideal project to work on for two main reasons:
1) The area needs revenue from tourism more than ever, due to the economic and social decline the area has experienced in the last 20-30 years, and the rise in staycations could be a perfect time to encourage visitors to the area
2) It would help and uplift local people by pointing out little corners of the area that they might be unaware of, or haven't had the chance to visit yet, and also raise awareness of local businesses and organisations who rely on local (and external visitor) spending

### Research
To find my own inspiration for the site, I looked at other tourism board's websites for ideas, whilst taking into consideration time restraints and my own JavaScript/jQuery abilities. I was looking out for interactive elements of the websites that I could apply to my own fictional tourism board, and I found myself drawing the most inspiration from [Visit Devon](https://www.visitdevon.co.uk/), [Visit England](https://www.visitengland.com/) and [Discover Lowestoft](https://www.discoverlowestoft.co.uk/).

## **iii. Scope**
### Target audience
The target users of this website are both local people and external visitors who wish to look for some inspiration for their visit to the Sunrise Coast, and as the area is not well-known outside of the county of Suffolk, this means that the website serves as an introduction and a guide to the local area.

### Scope table of interactive features
To ensure I was including the most important interactive features/information that potential visitors would need, I planned out exactly what the scope for this website would be:

* A simple guide for those looking for a day out in the Sunrise Coast

Now that I had a scope, I could focus and define exactly what I would need for the upcoming project. I began to plan and asked various friends and family what they believed should be included on a local tourism board's website. The interactive guide was the component that interested users the most, as it engaged with potential visitors and suggested helpful information for those visiting the area for the first time. Below is all of the suggestions I accumulated which helped me to decide what to include:

Potential feature | Importance | Viability | Overall score
------------ | ------------- | ------------ | -------------
***INTERACTIVE GUIDE***
Clickable activity options | 5 | 5 | 10
Reset button for guide | 1 | 4 | 5
Button to 'show all' locations | 1 | 5 | 8
Blur effect on unselected activities | 2 | 5 | 7
Toggle for visitor age range | 3 | 2 | 5
Toggle/calendar for date range | 3 | 2 | 5
Toggle for specific section of the webpage | 5 | 2 | 4
Zoomable Google Maps with markers for each location | 5 | 5 | 10
***INFOMATION PAGE***
Live weather report | 1 | 3 | 4
Live pollen report | 1 | 3 | 4
Clickable Google Maps markers that trigger accordians | 1 | 1 | 2
***OWNER INFORMATION***
Accordian with the owner's name, backstory and information | 5 | 4 | 10
***CONTACT MODAL*** 
Submissable enquiry to owner | 5 | 5 | 10
Clickable submit button | 5 | 5 | 10

### Final interactive features
I narrowed down the scope to the final interactive features which would be included alongside the HTML/CSS features:

*INTERACTIVE GUIDE*
* Clickable activity buttons which drops makers on the map
* Zoomable Google Maps
* Map locations to display image, name and link to 'top 5' picks from the activities

*LOCATION PAGE*
* In the end, this ended up being a toggleable static section using [Bulma tiles](https://bulma.io/documentation/layout/tiles/) to create an inviting layout for the user, and each tile is hoverable so the background colour changes

*OWNER INFORMATION*
* Due to time constraints, this page is also a simple static, toggleable section detailing the owners aim with the website

*CONTACT MODAL*
* Submissable enquiry to owner
* Clickable submit button 

### Limitations
I realised that I would need to keep the scope quite tight due to time constraints and my JavaScript / jQuery abilities, but this helps to keep the website to the the most important components that users will require. I also only have one previous experience building a website, so there may be limitations in terms of user experience and desgin combined with interactive elements. There were also considerable time constraints which meant  alot of elements and ideas were either dropped or rearranged into a new feature.

## **iv. Structure**
### Architecture

*INFORMATION ARCHITECTURE*
* The original idea for this website was to have the location pages on separate pages, but after speaking with my mentor, it became apparent that it would be more efficient and sleeker to have the top 5 picks toggled when the activities were selected by the user. Therefore, the website is contained to one page, with static and dynamic display of content depending on user interaction.

*ORGANISATION ARCHITECTURE*
* **Header**: The header contains a collapsable navigation menu, the main title of the webpage and links to social media 
* **Circular tabs (toggle each section)**: These tabs toggle the sections below
* **Interactive guide**: The guide contains the activity buttons and the Google Maps render, which markers drop onto depending on the activity chosen
* **Information**: The information section is a static page which displays general information and facts about the area
* **Owner information**: The owner info section is a static page which describes the owner of the website and her aim
* **Contact**: The contact section is not toggleable, but displays the methods by which the user can get in touch with the owner, including a link to toggle the contact form modal
* **Footer**: Social media links, contact information reinforced and the company logo 

### Website flow
The website is designed on one page with three toggleable sections, one small contact section, the footer and a toggleable contact form modal. The idea is that the user is welcomed with the header (and the hero image of the sunrise) and is indicated downwards by the layout and icons. 

From there, they can toggle each section as they please - each section toggles downwards, and the user is guided down the page by the design and interactive components. The contact section and the footer remain at the bottom of the page as per good UX practices.

## v. Skeleton
### Initial design 
The inital design of the website was different to how the deployed product turned out. [These wireframes](https://github.com/lmw95/MS2-thesunriseproject/tree/main/assets/wireframes) demonstrate the original idea - I have described the differences in the wireframes below, [click here]() to see the updated wireframes. I used [Balsamiq](https://balsamiq.com/) to build my wireframes.

* **Header**: The webpage title is now centered within a div which is itself also centered in the middle of the hero body. There are now only two items in the navigation menu and the background no longer scrolls, it is just a static image.
* **Information center**: This is now a toggleable subsection with Bulma tiles containing content about the area.
* **'Meet the team'**: This is now one singular owner with her own toggleable section. Half of the section is her profile picture and the other half is information about her.
* **'Be inspired'** This section does not exist anymore.
* **Online guide**: The online guide is now in its own toggable section, but retains a similar layout to the wireframe, only now there are 12 activites for the user to interact with, and each one returns markers on the map. Below the map, there are now five [Bulma cards](https://bulma.io/documentation/components/card/) which return an image, the name of the locations marked on the map, and a link to the company's site. The activity buttons no longer return a location, rather places markers on the map and returns information about the local companies themselves. I found this to a much better experience building but also in the mindset of a user, who would rather see local companies than pages about whole towns.
* **Contact**: The contact section retains the 'Download a brochure' and a button that toggles the contact modal, but there is also an extra section that provides a phone number too. 
* **Footer**: The footer remains the same, but with the company logo at center.

## **vi. Surface**
### Initial considerations
I wanted to the website to be fun yet informative, and match the overall theme of the area (rugged countryside and the sea, but turned readable and bubbly). I used a consistent palette that kept on theme throughout the site, using only three colours.

*COLOUR PALETTE*

![](assets/screenshots/colour-palette.png)

The palette is fresh and provides plenty of contrast, and includes a light green to represent the countryside, a navy blue for the sea and white for section backgrounds. It helps the user to visualise the area they are looking into. I used [Coolors](https://coolors.co/) to generate this palette.

*TYPOGRAPHY*

I used two fonts from [Google Fonts](https://fonts.google.com/):
* [Staatliches](https://fonts.google.com/specimen/Staatliches?category=Display,Handwriting&query=staat) for subtitles and general content
* [Alfa Slab One](https://fonts.google.com/specimen/Alfa+Slab+One?category=Display,Handwriting&query=alfa+sla) for headings, as it is bold and packs a punch on the site on first viewing

*ICONOGRAPHY & IMAGERY*

I used icons from [Font Awesome](https://fontawesome.com/) and flaticons from [Flaticon](https://www.flaticon.com/). All images were used to represent the content of the site, and the sources can be found in the [credits]().

# **Features**
## **Navigation menu & hero image**
![](assets/screenshots/landing-page-header.png)
The navigation menu is set to transparent when at the top of the page, but turns green when the user starts to scroll down the page. It is fully responsive and the menu collapses into a burger menu when viewed on mobile and tablet screens. The home item takes the user to the top of the page, and the contact item opens the contact form modal.

Upon entering the website, the hero image of the sunset and the desription in the central box is the first thing the user sees, indicating what the website is for. Underneath the title is the social media links and a bouncing icon which indicates the user to go down the page.

## **Section toggle buttons**
![](assets/screenshots/toggle-buttons.png)
The round toggle buttons sit underneath the bouncing icon which indicates the user to page down. When clicked, each button toggles a different section: 'Online guide' toggles the online guide section, 'The sunrise coast' toggles the information section and the 'About the project' section toggles the owner profile.


## **Online guide**
### Interactive buttons
![](assets/screenshots/activities.png)
These buttons describe different activities that the user can select from. Each button drops five markers on the map below, using the coordinates of the 'top 5' businesses used in [maps.js](https://github.com/lmw95/MS2-thesunriseproject/blob/main/assets/js/maps.js). Each button has an activity name and a corresponding icon.

### Google Maps
![](assets/screenshots/google-maps.png)
This section is where the Google Maps is rendered. The markers are dropped on the map, as seen in the picture; the example used here is 'Music & Art'. The map is zoomable. The previous markers clear off the map when each activity is clicked. 

### Location results
*Before*
![](assets/screenshots/location-results-before.png)

*After*
![](assets/screenshots/location-results-after.png)

The location results display according to user interaction. Before selection, the results are shown as blank, as seen in the before picture above, whereas after user selection, they will display the 'top 5' locations (i.e. the locations marked on the map). The letters correspond to the markers on the map. The links will take the user to the company's website. These cards were made using [Bulma cards](https://bulma.io/documentation/components/card/).

## Information page 
![](assets/screenshots/info.png)
This section is toggleable and is a static page displaying information about the local area. It is formatted using [Bulma tiles](https://bulma.io/documentation/layout/tiles/). The tiles are hoverable and change the background colour. The page would have revealed more content when the user scrolled down, but due to time constraints this idea was abandoned.

## Owner profile
![](assets/screenshots/owner-profile.png)
This section is toggleable and is also a static page displaying information about the owner 'Rose' and her aim with and the purpose of the website. I had an idea of placing an accordian inside the content section, which toggled backstory, aim and profile, but due to time constraints this idea also did not come to fruition. 

## Contact section 
![](assets/screenshots/contact-section.png)
The contact section simply displays contact details of the owner, and also includes a link on the 'click here' paragraph which toggles the contact modal.

## Footer 
![](assets/screenshots/footer.png)
The footer includes reinforcement of contact information of the owner on the left, a different version of the logo of the company in the center and social media links in the right corner.

## Contact modal 
![](assets/screenshots/modal.png)
The modal is toggled when the user clicks on the 'contact' menu item, or on the 'click here' link. The user is able to submit an enquiry, and upon submission a paragraph appears confirming submission if successful. The form also clears upon submission. 

## Possible future features
Some ideas that I would like to implement in the future would be:
* A weather API displaying the current weather in the local area.
* A carousel in the information section displaying the list of endangered animals that live locally.
* The accordian feature in the owner profile as mentioned previously
* More sections of the website - such as local / upcoming events, information about the actual towns (Lowestoft, Yarmouth, Kessingland and Oulton Broad) and a broader history section. 

# **Responsive design**
The website is designed to be fully responsive on screens sized from 320px and upwards. I achieved this by utilising media queries in my [stylesheet](https://github.com/lmw95/MS2-thesunriseproject/blob/main/assets/css/style.css). As seen in the [Am I Responsive?](http://ami.responsivedesign.is/) viewer, the website is able to be viewed on all popular screen sizes. See responsive testing [here]().

![](assets/screenshots/responsive-design.png)

# **Accessibility**
I wanted to ensure that my website would be able to be accessabile to a wide as an audience as possible, taking into consideration screen readers, colourblindness and other sight conditions. 

*SCREEN READERS*

To ensure that my website is fully accessbile to users with screen readers, I ensured that all the ```<img>``` tags had an ```alt``` property which would allow the user to know what the image depicted.

*COLOURBLINDNESS* 

When choosing my colour palette, I chose colours that would still provide contrast to users who have sight conditions that affect seeing colour. This process was done using [Coolors](https://coolors.co/) colourblindness tester, as seen below the colours I selected still provide a contrast and would be readable for a user with these conditions:

**Protanopia**

![](assets/screenshots/protanopia.png)

**Deuteranopia**

![](assets/screenshots/deuteranopia.png)

**Tritanopia**

![](assets/screenshots/tritanopia.png)

**Achromatopsia**

![](assets/screenshots/archromatopsia.png)

**Protanomaly**

![](assets/screenshots/protanomaly.png)

**Deuteranomaly**

![](assets/screenshots/deuteranomaly.png)

**Tritanomaly**

![](assets/screenshots/tritanomaly.png)

**Achromatomaly**

![](assets/screenshots/achromatomaly.png)



