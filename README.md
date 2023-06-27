# Webflow Video Pauser
I came up with this solution as a result of getting stuck on a project where I had built a CMS modal that contained a video player (YT or vimeo) along with some text and buttons/links.

The modal had a "close" or "X" button in the top right corner. The functionality I was looking for was the modal to close if the user clicked on the close button, or on the background around the modal. Closing - or hiding - the modal is relatively simple, but webflow has no built-in handlers for videoplayers, and so after some searching around I came up with this solution which closes the modal **and** auto-pauses the video that was inside the modal. 

✌️
