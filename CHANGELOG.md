# Version 0.3.10.1 - Whoops forgot about localization
- Fixes localization strings for features added in v0.3.10

# Version 0.3.10 - Custom Logos
- Fixed DND5e Advancement Dialog for Classes
- Improved Style Registration to use libThemer so that custom css variables are in private stylesheet instead of global html element
- Added option to set icon used on canvas.
- Added option to customize the Game Paused image

# Version 0.3.9 - Patches
- Fixed Dialog buttons being styled. Should now only style `button[type="submit"]` and `.dialog-buttons button`
- Fixed `.window-resizable-handle` handle being under `.header-button`

# Version 0.3.8 - Compatibility Patches
- Removed Theme Styling from Card Hand Mini Toolbar (Basically wont attempt to style these windows)
- An actual sorta fix for MIDI Reaction Dialog
  - Hide all images in `.dialog .dialog-buttons button` *Buttons will cascade downwards, not a perfect solution*
- Fixed Tile View in File Picker so images don't scale off of page.

# Version 0.3.7.1 - Compatibility Patches
- Fixed Selector for **Better Rolls 2 for Savage Worlds**
- Fixed Missing Localization for **Better Rolls 2 for Savage Worlds**

# Version 0.3.7 - Compatibility Patches
- Fixed issue with Small Time Settings Widget.
- Removed `.sheet.actor` from General Window Theming. This will allow systems and modules to theme the actor sheet instead.
  - Added Option to theme `.sheet.actor`
- Added Support for **Better Rolls 2 for Savage Worlds**
- Hide images in Dialog buttons
  - Temporary Fix for MIDI - QOL Reaction Dialog

# Version 0.3.6 - Compatibility Patches
- Added Basic Support to Pathfinder 2e System
  - Character Sheets
  - Heading for Settings Sidebar
- Added Support for Window Controls
- Fixed Compendium and Settings Sidebar Headings from staying fixed while scrolling through content
- Removed Theme Styling from Monster Blocks (Basically wont attempt to style these windows)
- Changed Migration Logic to handle updating Preset only if GM

# Version 0.3.5 - Compatibility Patches
- Removed Theme Styling from About Time (Basically wont attempt to style these windows)
- Removed Theme Styling from Simple Calendar (Basically wont attempt to style these windows)
- Added Support for Always HP
- Added Support for Pop Out
  - Header Buttons will not be seen in the PopOut. Click on the couplings will trigger the button, but there is no way to see the text of the button at the moment.

# Version 0.3.4 - Linux Nerds Exists
- Changed LICENSED assets folder name from `.private` to `_private` for better support for linux systems blocking hidden folders

# Version 0.3.3 - My Side Chick is Kitted Out
- Added Theme Support for `select` elements
- Added Theme Support for `range` elements
- Added Theme Support for Prose Mirror Menu Bar
- Added Theme Support for Sidebar Tab - Combat
- Added Theme Support for Sidebar Tab - Actors
- Added Theme Support for Sidebar Tab - Items
- Added Theme Support for Sidebar Tab - Journal
- Added Theme Support for Sidebar Tab - Tables
- Added Theme Support for Sidebar Tab - Cards
- Added Theme Support for Sidebar Tab - Playlists
- Added Theme Support for Sidebar Tab - Compendium
- Added Support for Module Compatibility Checker

# Version 0.3.2 - I'M ALIVE
Overhauls Foundry Virtual Tabletops UI into a Classic Fantasy RPG Theme.
- Completed Handcrafted Windows
  - Dialog Windows
  - Journal Sheet
  - Interface
  - Sidebar
    - Navigation
    - Tab - Chat
    - Tab - Scenes
    - Tab - Settings
- Generic Windows
  - Applies a generic theme to all Windows.