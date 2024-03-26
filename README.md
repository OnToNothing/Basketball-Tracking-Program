# How to get the Live Server up and running!

First, make sure you have installed LiveServer on VSCode. To do this, open
VSCode and in the Extensions tab on the left, search LiveServer in the 
searchbar. Click on the first result and install LiveServer.

Open the terminal application 
- choose/make a folder 
- double click the folder, so that a options column pops up
- click the "new terminal at folder" and this will open terminal in the folder

Clone the repository from GitHub.
- use command "git clone" and paste the GitHub url after the command in the
 the terminal window

Open the repository in VSCode

Navigate to the basketballtrackingnew folder in the repository.

Navigate to the index.html file.

In the bottom right corner, click the button that says Live Server

It will open up a website with the application running! This is in development, so whenever a change is made in the repo, it will update the website. 

# Basketball-Tracking-Program Database
Create a .env file and place your database credentials in it like so:
```
DATABASE_USERNAME=""
DATABASE_PASSWORD=""

You must have a database called BasketballDB in order for this implementation to work.

Your password must not have a hash in it.
