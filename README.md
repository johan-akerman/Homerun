# Homerun 🏠

A data visualization tool that helps you compare apartments and make a data-driven "homerun" on your next purchase.<br />

<strong>Try Homerun here:</strong> https://johan-akerman.github.io/Homerun
<br />

<img src="/src/images/ReadMe/preview.gif" alt="gif"
	title="Gif" width="600" /> <br /><br/>

## Story about the project

When my older brother was going to buy his first apartment he used to get frusterated about how the prices increased tremendously once the bidding process started. He found it difficult to predict what the final price would be for the type of apartments that he was interested in. It got me interested in what kind of apartment X SEK could get you in Stockholm and what factors you should take into consideration (such as time of the year, broker etc) when buying an apartment. I talked to my friend Hannes and we started discussing how we could apply programming to solve this problem. We came up with the idea to scrape the web for sold apartments. Our main idea was to let the user apply different filters to sort the data and then visualize the result in various charts. The result? Homerun 👇

## How Homerun works

<strong>Step 1:</strong> The user gets greeted by a homepage with some instructions.
<br />
<img src="/src/images/ReadMe/1.png" alt="Logo"
	title="Desktop preview" width="500" />
	<br />

<strong>Step 2:</strong> The user can add filters for what kind of apartments they want to learn more about. Multiple filters could be added at the same time to compare different types of apartments. <br />
<img src="/src/images/ReadMe/2.png" alt="Logo"
	title="Desktop preview" width="500" />
	<br />



<strong>Step 3:</strong> After a filter is added, the data is being displayed in different charts.  <br />
<img src="/src/images/ReadMe/3.png" alt="Logo"
	title="Desktop preview" width="400" />
<img src="/src/images/ReadMe/4.png" alt="Logo"
	title="Desktop preview" width="400" />

<strong>Step 4:</strong> The user can choose to view a specific chart card in fullscreen for greater details.<br />
<img src="/src/images/ReadMe/6.png" alt="Logo"
	title="Desktop preview" width="500" />

## Technologies used

I built the frontend in React JS, Material UI and Chart JS. My friend Hannes is scraping the data with Python.

## About the data and project status

My friend Hannes is currenlty writing a python script that collects all the data from the sold apartments during 2020 (in Stockholm) from Hemnet. While waiting for this script to being completed, I collected some random apartments from hemnet.se on my own to get some data to display. I randomly choose 3 apartments sold in each month of 2020 in Kungsholmen, Östermalm and Södermalm. In other words, 3 _ 12 _ 4 = 144 apartments. This is the data that is currently displayed in the tool. Imagine the result when the 50 000+ apartments sold in Stockholm during 2020 are being displayed 🤯

<strong>Try out Homerun here:</strong> https://johan-akerman.github.io/Homerun
<br />
<strong>View Hannes progress here:</strong>https://github.com/hannesbrinklert/Hemnet-web-scraping.
