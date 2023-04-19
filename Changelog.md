# Table of Contents
- [Beta](#Beta)
- [Alpha](#Alpha)
- [Prototype](#Prototype)

## Beta Version
### 4/18/23 Version 1.1.0b
- Implemented saving and displaying of powers, skills, merits, and lores
### 4/10/23 Version 1.0.0b
- Added in basic inputs of powers, skills, merits, and lores
- Renaming some previous versions to match a more standard naming convention

## Alpha Version
### 3/29/23 Version 0.9.0a
- Added in claimed options for humans
- Added in rank and deed name fields for shifters
- Added in passion field for wraith
- Moved shadow selection options to be with passion
- Added in generation and sire fields for vampires
- Added in handling for setting and getting the new inputs
- Added in handling for rendering the new faction information additions
- Modified some styling classes to work with the new render method
### 3/28/23 Version 0.8.0a
- Added in some styling for all pages to make it look nicer and easier to read
### Patch 0.7.2a
- Fixed the sheet setting and getting the wrong variables for certain factions
- Added Spectre and Enfant as "legion" options
- Removed testing blocks
- Modified how sheet gets information to make the process more streamlined on the backend
- Finished implementing wraith subfaction information to the page
### 3/27/23 Patch 0.7.1a
- Added in subfaction options for Wraith
- Implemented the handling to save wraith subfaction information
- Started to implement rendering wraith subfaction information on the back end
### 3/24/23 Version 0.7.0a
- Added dynamic subfaction menu with updating labels
- Split up the sheet making process on the back end so it can make specific faction sheets
- Sheets now save their faction-specific subfactions (Still working on Wraith shadows, legions, and guilds)
- Created a separate sheet viewing process for each faction
- Made some small visual adjustments to the create sheet form
- Splitting up the script so each page does not need to load code it doesn't need
- Fixed a bug that prevented the sheet from saving if the user's faction was Vampire
- Fixed a bug that prevented resetting/clearing selections and inputs when refreshing the page
### 3/21/23 Version 0.6.0a
- Removed redundant code
- Removed several variables and renamed values of menu options
- Removed an old link used for testing
- Added handling to make sure required fields are filled out
#### Hotfix 0.5.1a
- Fixed footer sometimes overlapping with the main part of the page
- Improved dynamic variables
- Small optimization fixes
### 3/20/23 Version 0.5.0a
- Replaced the faction textbox with a dropdown menu
- Replaced the subfaction textbox with a dropdown menu. The menu will change based on the faction selected
- Put the footer into a fixed position at the bottom of the page
- Updated how we name versions in the changelog and beyond
## Prototype Version
#### Hotfix 0.4.1p
- Implemented a workaround to prevent browser from caching and displaying old inputs
### 3/8/23 Version 0.4.0p
- Fixed bug that prevented going to the viewing page after sheet was made
- Fixed bug that prevented retrieving data from the db file
- Fixed typos
- Added html to help with populating data to page
- Added script to handle populating data to the page
### 3/6/23 Version 0.3.0p
- Added script to handle getting the data from the database
- Started on script to handle rendering information to page
- Added button to home page to go view current saved sheet
- Added button to view sheet page to go create new sheet
- Added button to view sheet page to go back to home page
- Updated viewsheet page script to run automatically
#### Hotfix 0.2.1p
- Fixed a bug that required optional fields to be filled out
- Fixed a few typos
### 3/3/23 Version 0.2.0p
- Updated variable names
- Added in a route and a new page to view the sheet once completed
- Added in sheet save handling
- Old templates/boilerplate archived or replaced with current code
- Fixed a bug that blocked routes and functions from running
### 2/22/23 Version 0.0.1p
- Created the changelog file to track changes
- Removed all files and folders and replacing it with a basic file layout
- Archiving the Development.md file and making a new Roadmap.md
- Brought over reusable code/data from previous versions of the app
- Updated the README to include the new roadmap file