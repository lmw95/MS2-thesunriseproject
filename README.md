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
        * [Static components]()
        * [Interactive components]()
    * [v. Skeleton]()
        * [Wireframes]()
    * [vi. Surface]()
        * [Initial considerations]()
        * [Palette]()
        * [Typography]()
        * [Iconography & imagery]()
* [Features]()
    * [i. Initial impressions]()
    * [ii. Navigation]()
    * [iii. Information center & sub-sections]()
        * [Information center design]()
        * [What is the Sunrise Coast?]()
        * [What is the Sunrise Project?]()
        * [Be inspired...]()
    * [iv. Online guide]()
        * [Interactive quiz]()
        * [Location page toggling]()
    * [v. Location pages]()
    * [Possible future features]()
* [Responsive design]()
* [Accessibility]()
* [Testing]()
* [Issues & improvements]()
* [Deployment]()
* [Technologies & tools]()
* [Credits & acknowledgements]()

# UX
## i. User stories
The website is targeted at anyone who wishes to visit the Sunrise Coast (both local and external visitors), and aims to provide them with the best location for their day out.

### Users
*As a user, I want...*
* The website to immediately communicate its purpose so I know what to expect from the site
* The website to be easily readable and easy to navigate so that I can find the information that I need
* To see the various attractions and activities that are available in each location
* To see images of each location so that I know it's somewhere I would like to visit
* The website to engage with me and guide me towards my final decision
* Contact information of the tourism board available in case I have any queries
* To know the story behind the Sunrise Coast and each location to decide whether I would like to visit the area
* The website to respond to my interaction, without any unresponsive buttons
* The website to be responsive so I can view it on my phone or tablet if I am out and about
* To see maps of the local area so I know where to go

### Owners
*As the business owner, I want...*
* Highlight the fact that this website specialises in days out and local events
* The website to allow and encourage users to engage with the interactive parts of the website to encourage them to visit the area based on its recommendations
* To promote the local area and advertise local events to visitors
* To offer our top 5 recommended attractions for each area
* To make visitors feel welcome to the site and in turn, to the local area
* Encouage visitors to get in touch with us if they have any questions regarding their day out

## ii. Strategy
### Project inception
I was inspired to create this website due to the rise in staycations around the UK following the COVID-19 travel restrictions from 2020 - 2021, and possibly beyond. My hometown sits on a strip of coastline called the 'Sunrise Coast', and has historically been a tourism spot since the Victorian times (since the town was connected to London by railway).

I thought that a guide to the Sunrise Coast would be an ideal project to work on for two main reasons:
1) The area needs revenue from tourism more than ever, due to the economic and social decline the area has experienced in the last 20-30 years, and the rise in staycations could be a perfect time to encourage visitors to the area
2) It would help and uplift local people by pointing out little corners of the area that they might be unaware of, or haven't had the chance to visit yet, and also raise awareness of local businesses and organisations who rely on local (and external visitor) spending

### Research
To find my own inspiration for the site, I looked at other tourism board's websites for ideas, whilst taking into consideration time restraints and my own JavaScript/jQuery abilities. I was looking out for interactive elements of the websites that I could apply to my own fictional tourism board, and I found myself drawing the most inspiration from [Visit Devon](https://www.visitdevon.co.uk/), [Visit England](https://www.visitengland.com/) and [Discover Lowestoft](https://www.discoverlowestoft.co.uk/).

## iii. Scope
### Target audience
The target users of this website are both local people and external visitors who wish to look for some inspiration for their visit to the Sunrise Coast, and as the area is not well-known outside of the county of Suffolk, this means that the website serves as an introduction and a guide to the local area.

### Scope table of interactive features
To ensure I was including the most important interactive features/information that potential visitors would need, I planned out exactly what the scope for this website would be:

* A simple guide for those looking for a day out in the Sunrise Coast

Now that I had a scope, I could focus and define exactly what I would need for the upcoming project. I began to plan and asked various friends and family what they believed should be included on a local tourism board's website. The interactive guide was the component that interested users the most, as it engaged with potential visitors and suggested helpful information for those visiting the area for the first time. Below is all of the suggestions I accumulated which helped me to decide what to include:

Potential feature | Importance | Viability | Overall score
------------ | ------------- | ------------ | -------------
*INTERACTIVE GUIDE*
Clickable activity options | 5 | 5 | 10
Reset button for guide | 5 | 5 | 10
Button to 'show all' locations | 3 | 5 | 8
Blur effect on unselected activities | 2 | 5 | 7
Toggle for visitor age range | 3 | 2 | 5
Toggle/calendar for date range | 3 | 2 | 5
Toggle for specific location | 2 | 2 | 4
*LOCATION PAGE*
Google Map with markers for top 5 attractions | 5 | 5 | 10
Key using Google Map markers with attraction info (accordian) | 5 | 5 | 10
Live weather report | 1 | 3 | 4
Live pollen report | 1 | 3 | 4
Clickable Google Maps markers that trigger accordians | 1 | 1 | 2
*VISITOR CENTER*
Toggleable tabs for each sub-section (company info, history and events) | 5 | 5 | 10
*CONTACT MODAL* 
Submissable enquiry to owner | 5 | 5 | 10
Clickable submit button | 5 | 5 | 10

### Final interactive features
I narrowed down the scope to the final interactive features which would be included alongside the HTML/CSS features:

*INTERACTIVE GUIDE*
* Clickable activity buttons
* Reset button
* 'Show all' locations button
* Blur effect on unselected activities

*LOCATION PAGE*
* Google Map with markers for top 5 attractions
* Key using Google Map markers with attraction info (accordian)

*VISITOR CENTER*
* Toggleable tabs for each sub-section (company info, history and events)

*CONTACT MODAL*
* Submissable enquiry to owner
* Clickable submit button 

### Limitations
I realised that I would need to keep the scope quite tight due to time constraints and my JavaScript / jQuery abilities, but this helps to keep the website to the the most important components that users will require. I also only have one previous experience building a website, so there may be limitations in terms of user experience and desgin combined with interactive elements.

## iv. Structure








