# SequentialSounds

### Background

SequentialSounds is a unique audio sequencer-- delivering atmospheric chord progressions that a user can manipulate using various settings!


### Functionality & MVP  

With SequentialSounds, a user can

- Start, stop and reset the sequence playback
- Click on and alter elements that represent different musical intervals
- Choose to add on top of, or manipulate default audio output settings.
- See a visualization of the sequence playback through a progression over the interval elements

This project will also include:

- An instructional README
- Links to my relevant pages

### Wireframes

SequentialSounds will render on a single page with a series of circular elements representing tones. These circles are either selected or unselected for playback in the sequence.  There will also be buttons/ selector options for altering playback based on the listed criteria.
![wireframes](/assets/Wireframe.png)


### Architecture and Technologies


This project will be implemented with the following technologies:

- `JavaScript` for foundational code
- `Tone.js`, `Howler.js` or similar framework for creating interactive audio
- `Webpack` to bundle js files.

In addition to the entry file:

`sequence.js` will manage behind-the-scenes information about the sequencer's settings and structure.


### Implementation Timeline

**Day 1**: Setup project files, git repo, and research the functionality/docs corresponding the audio framework. 
Goals for the day:

- Research and outline necessary operations for accomplishing MVP's
- Make basic design/rendering choices

**Day 2**: Structure the sequencer.js code and begin work on implementing options for user manipulation.
Goals for the day:

- Complete sequencer.js code
- Write code for user manipulation

**Day 2**: Structure the sequencer.js code and begin work on implementing options for user manipulation.
Goals for the day:

- Complete sequencer.js code
- Write code for user manipulation
- Instantiate controls for stop, start and reset.


**Day 3**: Finish loose ends and style rendered elements.
Goals for the day:

- Style with CSS to create an engaging user experience
- Finish final functions/ code



### Bonus features

Create beautiful visualizations to accompany the striking of a given pitch or interval

- Alter visualization throughout sequence
- Render different visual effects based on interval type or playback option
