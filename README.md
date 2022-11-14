
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


### folder structur

src/
┣ assest/
┃ ┣ icons/
┃ ┃ ┣ chatUser/
┃ ┃ ┃ ┣ flag1.svg
┃ ┃ ┃ ┣ flag2.svg
┃ ┃ ┃ ┣ postUser.svg
┃ ┃ ┃ ┣ sendBtn.svg
┃ ┃ ┃ ┣ user1.svg
┃ ┃ ┃ ┗ user2.svg
┃ ┃ ┣ menuIcon/
┃ ┃ ┃ ┣ activeDot.svg
┃ ┃ ┃ ┣ arrowDown.svg
┃ ┃ ┃ ┣ arrowRight.svg
┃ ┃ ┃ ┣ badge.svg
┃ ┃ ┃ ┣ bookOpen.svg
┃ ┃ ┃ ┣ briefcase.svg
┃ ┃ ┃ ┣ disableDot.svg
┃ ┃ ┃ ┣ handFist.svg
┃ ┃ ┃ ┗ home.svg
┃ ┃ ┣ bookmark.svg
┃ ┃ ┣ btnGroup.svg
┃ ┃ ┣ chatIcon.svg
┃ ┃ ┣ comment.svg
┃ ┃ ┣ commentIcon.svg
┃ ┃ ┣ commentUser.svg
┃ ┃ ┣ commentUser1.svg
┃ ┃ ┣ dot.svg
┃ ┃ ┣ filter.svg
┃ ┃ ┣ flag3.svg
┃ ┃ ┣ footer1.svg
┃ ┃ ┣ footer2.svg
┃ ┃ ┣ footer3.svg
┃ ┃ ┣ group.svg
┃ ┃ ┣ hand.svg
┃ ┃ ┣ indianFlag.svg
┃ ┃ ┣ japFlag.svg
┃ ┃ ┣ langauge.svg
┃ ┃ ┣ leftArrow.svg
┃ ┃ ┣ logo.svg
┃ ┃ ┣ notification.svg
┃ ┃ ┣ offline.svg
┃ ┃ ┣ online.svg
┃ ┃ ┣ onlineChat.svg
┃ ┃ ┣ onlineUser1.svg
┃ ┃ ┣ onlineUser2.svg
┃ ┃ ┣ onlineUser3.svg
┃ ┃ ┣ pencil.svg
┃ ┃ ┣ polygyn.svg
┃ ┃ ┣ ukFlag.svg
┃ ┃ ┣ unmute.svg
┃ ┃ ┣ user.svg
┃ ┃ ┣ user1.svg
┃ ┃ ┣ user2.svg
┃ ┃ ┣ user3.svg
┃ ┃ ┣ userReaction.svg
┃ ┃ ┣ userReaction1.svg
┃ ┃ ┗ video.svg
┃ ┣ images/
┃ ┃ ┣ chatImg.png
┃ ┃ ┣ meetUser1.png
┃ ┃ ┣ meetUser2.png
┃ ┃ ┣ meetUser3.png
┃ ┃ ┗ moderatorImg.png
┃ ┗ scss/
┃   ┣ component/
┃ ┃ ┃ ┣ _addcoment.scss
┃ ┃ ┃ ┣ _commentLayout.scss
┃ ┃ ┃ ┣ _header.scss
┃ ┃ ┃ ┣ _highlightBox.scss
┃ ┃ ┃ ┣ _postFooter.scss
┃ ┃ ┃ ┣ _postcomment.scss
┃ ┃ ┃ ┣ _sidebar.scss
┃ ┃ ┃ ┣ _teamMeetingPage.scss
┃ ┃ ┃ ┗ _usercommunity.scss
┃   ┣ partials/
┃ ┃ ┃ ┣ _breakpoins.scss
┃ ┃ ┃ ┣ _genral.scss
┃ ┃ ┃ ┣ _mixin.scss
┃ ┃ ┃ ┗ _variables.scss
┃   ┗ style.scss
┣ component/
┃ ┣ Button.jsx
┃ ┣ Card.jsx
┃ ┣ Popover.jsx
┃ ┗ SearchBox.jsx
┣ layout/
┃ ┣ Dashbord/
┃ ┃ ┣ AddComment.jsx
┃ ┃ ┣ CommentsLayout.jsx
┃ ┃ ┣ DashbordBody.jsx
┃ ┃ ┣ HighLightBox.jsx
┃ ┃ ┣ PostComment.jsx
┃ ┃ ┣ PostFooter.jsx
┃ ┃ ┗ UserOnlineCommunity.jsx
┃ ┣ Header/
┃ ┃ ┗ Header.jsx
┃ ┣ Sidebar/
┃ ┃ ┣ MenuItems.js
┃ ┃ ┗ Sidebar.jsx
┃ ┗ TeamMeeting/
┃   ┗ ChatSection.jsx
┣ pages/
┃ ┣ Dashbord.jsx
┃ ┗ TeamMeetingPage.jsx
┣ App.js
┣ index.js
┗ index.scss
