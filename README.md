# MozillaCreate
Mozilla extension project


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