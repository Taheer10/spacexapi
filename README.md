# Getting Started with Create React App

In this project i may not have been able to create the project as specified by you.
Some of the code has been repeated which could have been elimintated using the HOC/RenderProps/Custom Hooks method.

--One of the Major bug or error is whenever we try to hard search on the basis of button the prblem that arises is
In the beginning it runs fine and data are fetched from Api but whenever we try to search again clicking on next button the currentUrl gets attached with the new clicked Url. I believe the proble arising cause is related to react-router-dom.

Error Explanation with example:
Localhost:3000

search -2006(Data is fetched perfectly)
When clicked again for successful landing
Url= Localhost:300/search/successfulllanding(Causes error to retrieve data)
Url Must be
Url= Localhost:300/successfulllanding

As my exams were going on I did not have much time to give my 100 % effort into this project.
