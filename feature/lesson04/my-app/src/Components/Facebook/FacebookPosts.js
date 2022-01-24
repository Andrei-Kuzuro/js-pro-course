 export const posts = [{
   id: 0,
   name: 'Jason Kincaid',
   backgroundImageUrl: './Images/user.JPG',
   postDescription: 'I have something insightful to say, as usual.',
   location: 'UCLA',
   timeText: '2 seconds ago',
   onClickLike() {
     alert('Like')
 },
   onClickReply() {
     alert('Reply')
   },
 },
   {
     id: 1,
     name: 'Lex Fridman',
     backgroundImageUrl: './Images/userLex.JPG',
     postDescription: 'I\'m talking with Mark Zuckerberg on the podcast in a few weeks. If you have questions or topic suggestions, please let me know.',
     location: 'Canada',
     timeText: '2 hours ago',
     onClickLike() {
       alert('Like')
     },
     onClickReply() {
       alert('Reply')
     },
   },
   {
     id: 2,
     name: 'Joe Rogan',
     backgroundImageUrl: './Images/userJoe.jpeg',
     postDescription: 'I have something insightful to say, as usual.',
     location: 'UCLA',
     timeText: '22 minutes ago',
     onClickLike() {
       alert('Like')
     },
     onClickReply() {
       alert('Reply')
     },
   },
 ]