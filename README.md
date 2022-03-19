![CoolPics](https://user-images.githubusercontent.com/93034891/159118375-becc028b-b725-4dc8-ab98-7696feb12583.png)
# Revel frontend test

Basically, the exercise consisted of requesting 9 photos from the api https://picsum.photos/ and paint them on a responsive grid.

## 🦾 INSTALLATION AND USAGE 🦾
- ### `git clone https://github.com/NataliaaJN/revel-test.git`
- ### `npm install`
    Install this project

- ### `npm start`
    Runs the app in the development mode.
    Open http://localhost:3000 to view it in your browser.

- ### `npm test`
    Launches the test runner in the interactive watch mode.


## ABOUT THE TEST 📋
- Connect the API to your frontend code.
- Display the images in the grid as shown in the Figma design (responsive versions for mobile and desktop).
    - Using one or multiple endpoints to get the images. 
- The number on the top right of the card is always incremental.

    ## ❌ Error handling ❌
    To handle the possible errors in the app, and trying to be the most user friendly, it has been implemented 3 different methods to show the user that something is wrong with the application, and the reason why it's not working property:
    - A catch
    - Error boundaries
    - 404 error page

    ## 💥 Highlighting code samples  💥
    - ### **Header scroll animation**
        ![customHook](https://user-images.githubusercontent.com/93034891/159118469-5a61b560-f2b6-4311-a248-e154d4185787.png)

        ![header](https://user-images.githubusercontent.com/93034891/159118442-4c929db2-d2be-407f-a68b-c21ab2e0f98d.png)
    

    - ### **Incremental index number**
    Although the app just ask for 9 photos, if we would need 10 results, the numbering would follow the same numerical pattern of three digits. By doing this, it would only **display #10, instead of #010**
        ![getIndexNumber](https://user-images.githubusercontent.com/93034891/159118550-9a557073-65c4-4a6b-b29a-65f7a74806ff.png)

    ## 🥵 Challenges 🥵
    ### **404 page** ☠️
    I have added a 404 error page, for which I have used routes.
    Everything was going fine, until I had to upload it to GitHub Pages. It was at this point that it started to give me problems: first I was being directed to my 404 page.  
    After spending hours and hours searching and reading documentation, it finally worked. This is how I did:

    ![scriptsToFix404](https://user-images.githubusercontent.com/93034891/159118574-463f8e42-f62b-4cc9-b428-ac9b9b9a393b.png)
    
    ![indexjsToFix404](https://user-images.githubusercontent.com/93034891/159118575-a080b801-7727-4404-8c39-0e362f4df1de.png)


    ## 🤙 Bonus 🤙
    - It has been added a **Loader** that is shown to the user while the images are loaded
    - More responsive: mediaquerie for small devices and tablets, the last one with a grid of two columns
    - Unit test

## 🛠️ USED TECHNOLOGIES  🛠️
- React 
- JavaScript 
- HTML5 
- Gulp 
- Sass 
- CSS3