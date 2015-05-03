# NetflixRemote
This is a Chrome extension and small web app utilizing SignalR (websockets) to control basic features of the Netflix web player

In order to get this working:

1) Build and publish this app somewhere (IIS on an intranet machine is recommended.)

2) Open up content.js and change $.connection.hub.url to point to where you hosted the app in step 1. Save your changes.

3) In Chrome, type chrome://extensions, turn developer mode on, click "Load unpacked extension" and point to the "netflixRemoteExtension" folder.

Now when you are running netflix, load up the web site and the buttons should control whatever you're viewing.
