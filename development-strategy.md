# Development Strategy

> This development strategy for Local storage & event delegation project.

## User stories

0 . Set-up

> Assigned to `Anna`

- Create project repo
- Get starter-template
- Create a project board
- Make development Strategy
- Turn on github pages to share live demo

1. As a user I should see a description of what this website is, and what I can do with it

> Assigned to `Abdulhamid`

- Create an issue and label the issue based on it's concern (ie. handler, logic, listener, style, ..) and update the development-strategy for any changes.
- Make a ‘readme’ branch
- Write a good documentation for the project
- Make a PR, assign reviewers, and merge to master when completed

2. As a user I should see the see the representation page of local tapas restaurant.

> Assigned to `Abdulhamid`

- Make a ‘uix’ branch
- Create an issue and label the issue based on it's concern (ie. handler, logic, listener, style, ..) and update the development-strategy for any changes.
- Create boiler plate index.html, styling and folder and files to be included in the project
- Create a form in index.html to add-items and submit
- Create list to list-up added items which can be checked/unchecked by using checkboxes
- Make a PR, assign reviewers, and merge to master when completed

3. As a user I want to be able to add variety into tapas list (to add my items into list), and click enter/button to be stored in the list. I should also be able to see the when I refresh the page

> Assigned to `Harun`

- Make a `add` branch
- Create an issue and label the issue based on it's concern (ie. handler, logic, listener, style, ..) and update the development-strategy for any changes.
- Grab information from form, and listen to submit event
- Make a function addItem() to prevent default sending data to server side from form, so it stays in client side
- Store these things in array of objects
- The object should have checked/unchecked item and the item name
- Make a PR, assign reviewers, and merge to master when completed
    
4. As a user I should be check and uncheck things. I should also be able to see the status when I refresh the page

> Assigned to ‘ Yulia ’

- Make a ‘check’ branch
- Create an issue and label the issue based on it's concern (ie. handler, logic, listener, style, ..) and update the development-strategy for any changes.
- Make a function toggledone()
- Make a PR, assign reviewers, and merge to master when completed

5. As a user I should be able to see everything that I have added and checked/unchecked in the page

> Assigned to `Yulia`

- Make a `populate` branch
- Create an issue and label the issue based on it's concern (ie. handler, logic, listener, style, ..) and update the development-strategy for any changes.
- Make a populate function
- Make a PR, assign reviewers, and merge to master when completed

6. As a user I should be able to check all, or uncheck all menu items

> Assigned to `Anna`

- Make a `all` branch
- Create an issue and label the issue based on it's concern (ie. handler, logic, listener, style, ..) and update the development-strategy for any changes.
- Make button: check/uncheck all buttons
- Grab information from form, and listen to submit event
- Make a function toggleAll() to check/uncheck all menu items
- The page should mirror the button event
- Make a PR, assign reviewers, and merge
- Next mile : make delete all button

7. As a user I should be able to clear all
