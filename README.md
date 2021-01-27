# Homerun 🏠
A data visualization tool that helps you compare apartments and make a data-driven "homerun" on your next purchase.<br /> 
Try Homerun here: https://johan-akerman.github.io/Homerun
<br />

<img src="/src/images/ReadMe/preview.gif" alt="gif"
	title="Gif" width="600" /> <br /><br/>

## Story about the project
When my older brother was going to buy his first apartment he used to get frusterated about how the prices increased tremendously once the bidding process started. He found it difficult to predict what the final price would be for the type of apartments that he was interested in. It got me interested in what kind of apartment X SEK could get you in Stockholm and what factors you should take into consideration (such as time of the year, broker etc) when buying an apartment. I talked to my friend Hannes and we started discussing how we could apply programming to solve this problem. We came up with the idea to scrape the web for sold apartments. Our main idea was to let the user apply different filters to sort the data and then visualize the result in various charts. The result? Homerun 👇

## Screenshots
<img src="/src/images/ReadMe/1.png" alt="Logo"
	title="Desktop preview" width="400" /> 
<img src="/src/images/ReadMe/2.png" alt="Logo"
	title="Desktop preview" width="400" /> 
  <img src="/src/images/ReadMe/3.png" alt="Logo"
	title="Desktop preview" width="400" /> 
  <img src="/src/images/ReadMe/4.png" alt="Logo"
	title="Desktop preview" width="400" /> 
	
## Technologies used
I built the frontend in React JS, Material UI and Chart JS. Hannes scraped the data with Python. 

## How to use it
1. Try out the tool here: https://johan-akerman.github.io/Homerun
1. In the bottom left corner you can add filters of the apartments that you are interested in. 
3. Add more filters if you would like to compare different types of apartments against each other.
4. Observe the data visualizations.

## About the data
Hannes is currenlty writing a python script that collects all the data from the sold apartments during 2020 (in Stockholm) from Hemnet. While waiting for this script to being completed, I collected some random apartments from hemnet on my own to get some data to display. I randomly choose 3 apartments sold in each month of 2020 in Kungsholmen, Östermalm and Södermalm. In other words, 3 * 12 * 4 = 144 apartments. This is the data that is currently displayed in the tool. Imagine the result when the 50 000+ apartments sold in Stockholm during 2020 are being displayed 🤯

Try out Homerun here: https://johan-akerman.github.io/Homerun
<br />
View Hannes progress here: https://github.com/hannesbrinklert/Hemnet-web-scraping.  
