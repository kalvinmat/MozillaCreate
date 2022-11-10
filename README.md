# MozillaCreate
Mozilla extension project

#-----------------------------------------DOWNLOADING OUR EXTENSION-----------------------------------------------------------------------------
#Starting
To git the project downloaded to your desktop you will need a location where you will download it. 
Before you can download it you will need to have git installed. 
If you don't you can download it here "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git".
Once you have it down, you will open your terminal.
In the terminal you will **"cd" to the location of the folder"** and go inside.
E.g cd Desktop/Projects/CS4540
The example provided is the location where i have my project.
Once you are in the location you will type in the following command **"git clone https://github.com/kalvinmat/MozillaCreate.git"**
Then you should have it cloned to your folder.

Following you will need to cd into the MozillaCreate folder, then cd into the mozzi folder.

Once you are inside the mozzi folder, write the following command **npm install**.

If you recieve a error probably means you do not have node.js installed.
Follow the following website to install node **https://nodejs.org/en/download/** 18.12.1 version.

Once you have node installed, redo the command if not skip this step.

Git commands to know

git clone https://github.com/kalvinmat/MozillaCreate
    // clones the project into your local pc

git branch 
    // see what branch you are on

git checkout <branch name>
    // to go into the branch you named

git checkout -b <new branch name>
    //go into a new branch you created

git add -A 
    // adds all the changes you have made in your current local respository to the git push you are going to make

git commit -m "what changes are you creating"
    // commit to the changes you will push and describing the changes you will make for others to know

git push
    // push all the changes you made into the current branch you are part of
    // **make sure you are in the correct branch you want to push the changes into**
#------------------------------------------------------------------------------------------------------------------------------------------------
    
#-----------------------------------------------ASSIGNMENT-2 IMPLEMENTATION---------------------------------------------------------------------- /*   
    The Mozilla Collaborative Curriculum
    
- What did you build during this phase?
    
During this phase, we were able to build a text-to-speech recorder. Its functionality is not exactly what we want, but the skeleton is there for us to put it together. Three of us branched off the original design and are altering and implementing our own version of the first phase for our extension and one person is going to build the documentation for our presentation and demo. The extension at the moment can take our spoken speech and record it into written text. At the moment we can save our spoken text. For testing purposes, we’re leaving the feature to save the recorded text until the next phase, and we figure out how to pass it onto the search engine. 

- High-level design of your software.
    
For our high-level design, the user shall click on our extension “Mozi” for activation. Mozi shall open a pop-out box in an open overlay and request access to the microphone. Mozi shall record and display the user's speech-to-text in the textbox. Mozi will then contact google servers to render the user text to their search engine. The results shall then be displayed in the same pop-out box rendered at the activation of Mozi. The user shall then be able to navigate through the results rendered without losing the current data on the current webpage.
Technical highlights: interesting bugs, challenges, lessons learned, observations, etc.
During the completion of our first phase, we completed the conversion of our speech to text. One unfortunate occurrence is that we forgot to commit our changes that were made one night and when we began to work on the extension one weekend, we broke something in our extension and had to debug our code to take us back to being able to record our voice again. In that instance, we noted to make certain we commit to our repository after the completion of each phase. We learned how to use Figma and build a style guide for our CSS and HTML. We’ve had difficulty merging our CSS and HTML from Figma, so we will implement what we were taught and just write the code for our CSS. One problem we managed to fix is when we try to load our Mozilla extension, it gives an error. The problem was that we were zipping the folder that contains our manifest.json, and not zipping the contents of the folder containing our manifest.json. At the moment we’re facing two big challenges:
Rendering our speech to a search engine.
 Our extension will not run for some of us on Firefox at the moment. We were having trouble executing our extension for about an hour until we just tried a different browser.
Those issues will be addressed this upcoming week to speed up the competition of our project.
  
- Reflect on your teamwork and process. What worked well, what  needs improvement.
    
Coming together and collaborating on the project rather than working individually had led to more progress being done. Occurrences in which an individual had greater strengths in certain areas of the project, worked well in many situations. When we ran into an instance where a topic was not as familiar to an individual in the group, we guided each individual through the process to ensure their understanding. We are able to get our extension to recognize and record our voice but not advance to the next phase in opening a window for the search engine result. For the remainder of the following week, each individual will have a chance to play with the design, and as a group, we will decide by the end of the week which design to build on. An improvement that needs to be done is the documentation of the work everyone is contributing. We began using Jira to assign tasks, but it has been forgotten about because when we meet, we designate task on discord.

    
- Triage: What will you build for the final demo?
    
For the final demo, we will build a working Mozilla Firefox extension called Mozi. This extension will incorporate the voice of the user to convert their words, phrases, or sentences into text and search it online in a search engine which will be google in this case. When the user clicks on the extension, they will be asked if they want to allow the extension to use their microphone, and a box will pop up. Once the user allows the use of their microphone, the user will be able to use the extension. The user's voice is fully converted to text, and the extension will then take that text and run it through an online search engine. The box that popped up previously will contain the text and the search results that came with it to show the user what the search engine found.
*/
#------------------------------------------------------------------------------------------------------------------------------------------------    
    
    
    
    
    
    
    
