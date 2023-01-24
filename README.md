# Getting Started with Photo Blog

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed with [Vercel](https://vercel.com/).

## Home page

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/Home.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/Home-not-logged.png)

This is the home page found when the user is not yet logged into the blog. In it, the user can find all the posts made by other users. 

If the 'see full post' button is clicked, the user is taken to a page that presents the post details.

## Post details

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/Home-not-logged.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/FullPostLakeHouse.png)

In the About page, the user can see that the website was created with React and Firebase, and click on the button to create a new post. If the user is not logged yet, they will be redirected to the log in page.

## About us page

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/FullPostLakeHouse.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/About.png)

## Log in page

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/About.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/Login.png)

In this page, the user can log in by writting their e-mail and password, which will then be pulled from Firebase's database and verified. If they're both correct, the user will be logged.

Although, if the user is not registered yet, they can do it so through the register page:

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/About.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/Register.png)

The password has to be at least six characters, and it has to be identical to the confirm password input.

Once the user is logged in, the navigation bar will be different: the login and registration buttons will no longer be displayed and there will be two new options available: create a new post and go to the user's dashboard.

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/About.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/CreatePost.png)

## Create a new post

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/About.png" alt="Home Page Image" style="height: 500px;"/>](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/CreatePost.png)

To create a new post, the user will have to insert the post details, such as title, the image URL, the post content and tags. All of these details will be verified. If the URL isn't valid, for exemple, the post will not be created. All inputs must be filled correctly. 

Once the post is created, the user will be redirected to the Home page and they'll be able to see their fresh new post there. 

To see all the posts that they created, the user must navigate to the dashboard page:

[<img src="https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/CreatePost.png](https://github.com/veridiana-maricato/photo-blog/blob/main/src/assets/img/Dashboard.png

















## Available Features

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

The project deployment was made with Vercel (https://vercel.com/)

