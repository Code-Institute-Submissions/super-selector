# Super Selector - Interactive Frontend Development Milestone Project

This is an interactive data dashboard-based game which uses the filtering capabilities of Crossfilter and DC.js to filter a large dataset containing approximately 500 individual records and displaying a single result. The concept allows users to find their perfect superhero or comic book character based on characteristics that they can select through use of data charts.

## UX

My goal in the design of the website was to create a simple and functional game using the filtering capabilities of Crossfilter as the primary system behind the game process. I also wanted to emulate the style of a comic book and present the game and the information in an engaging and light-hearted way which would provide entertainment as well as information to the end user.

I designed the site with responsiveness in mind, as although the charts do not all scale to all devices effectively, the game felt like something which would primarily be played on a mobile device rather than loading up the website on a desktop computer.

A series of User Stories can be found in the [User Stories folder](/docs/user-stories.md).

A set of wireframes can be found in the wireframes folder. The final design of the dashboard remained largely similar to these mockups with a few small changes based on functionality.

## Technologies

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    * The project uses **HTML5** for the overall structure and content of the website
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    * The project uses **CSS3** for the style and format of the website.
- [Bootstrap v4.3.1](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
    * The project uses **Bootstrap v4.3.1** for additional style and format options, including the grid system and mobile responsive elements. The Bootstrap jQuery script has also been included in the site to facilitate the section transitions.
- [DC.js v3.0.11](https://dc-js.github.io/dc.js/)
    * The project uses **DC.js** to utilise the dataset displayed on the dashboard.
- [Crossfilter.js 1.3.12](http://crossfilter.github.io/crossfilter/)
    * The project uses **Crossfilter** to filter the data displayed on the dashboard.
- [D3.js v5.8.0](https://d3js.org/)
    * The project uses **D3.js** to help visualise the dataset and display it on the dashboard.
- [Hover](http://ianlunn.github.io/Hover/)
    * The project uses **Hover** for hover effects on the buttons throughout.
- Google Fonts [‘Bangers’](https://fonts.google.com/specimen/Bangers) and [‘Delius’](https://fonts.google.com/specimen/Delius)
    * The project uses these two **Google Fonts** to create a comic book-inspired style throughout the site.

## Features

The features of the dashboard are designed to allow users to carry out a variety of actions as part of the User Stories listed in the User Stories folder.

### Existing Features

The header is responsive and uses a media query to decrease the font size when viewed on mobile, as the original font size did not scale down and ended up stretched off the edges of the screen. I also used techniques sourced from [CSS Tricks](https://css-tricks.com/adding-stroke-to-web-text/) to add a stroke to the h1 element to evoke a comic book text style. The background of the header was adapted from this example of Comic Book UI provided by [CodePen user borntofrappe](https://codepen.io/borntofrappe/pen/GeXMgm).

The charts primarily use standard DC.js functionality, but I have utilised some customisation as follows:

- **Single-select charts** - In order to effectively filter the dataset down to a single result it was important that the user was only able to select a single option on the charts. I used advice given in this [Stack Overflow thread](https://stackoverflow.com/questions/33602608/rowchart-select-only-a-single-bar-in-dc-js-crossfilter) to use an addFilterHandler parameter to ensure that only one row or slice can be selected at a time.
- **Custom Colours** - I used a custom colorScale to pull in colours outlined in a separate dataset called ‘costume-colors.csv’. This was primarily for the purposes of the Costume Colour pie chart but based on the colour scheme of the rest of the site I also applied it to other charts.
- **Results dataGrid** - I modified the dataGrid chart type to display a single result including text and images. I initially tried to set this up using the dataTable chart type but found it difficult to set this up in a way that I was happy with, so turned to the dataGrid and found that it was a better fit for the display I wanted to build. The images are inserted using URLs included in the dataset as loading 500 separate image files within the site directory would have had an impact on loads speeds.

While all data charts are displayed on the same page fulfilling the brief of a single-page app, jQuery show/hide functions are used to separate the data charts into separate ‘pages’ in order to break the game down into individual sections. This utilises click events to add or remove the ‘hide’ class from the sections containing different charts in a set order to create a flow through the game as it was designed.

The ‘Start Again’ button in the final section of the game utilises a combination of the dc.redraw function and the show/hide function to take the user back to the beginning of the game and reset all the charts to the default display, allowing them to make a fresh set of selections.

### Features Left to Implement

In future I would like to work more on the responsiveness of the charts. My initial attempts to do this using ‘useBoxResizing(true)’ caused the charts to stop displaying across the whole site and as it was not an immediate priority I ultimately decided to focus on making other elements of the site responsive in the first instance.

I would also like to add an option for users to share the result of the game directly to their own personal social media accounts with a single click however in the initial development I did not have the capacity to build this function in a way which would ensure the user’s personal data remained secure.

## Testing

Automated tests were created using Jasmine to ensure the buttons and section transitions worked correctly. However I created these tests after building the jQuery file where I should have used a test-first approach to writing the jQuery code. It was only after I had written the transitions.js file that I realised automated testing would be beneficial, so in future I would ensure that testing was carried out before the final code was written.

Due to the nature of the dashboard and the technologies used manual testing was required for the DC.js, Crossfilter and d3.js elements. This involved a combination of self-testing using different data selections to ensure that the final results were accurate, and user testing carried out by friends and family to ensure the site behaved as expected.

Google Chrome Dev Tools was used to test responsiveness across a range of devices, and the site has been tested on Microsoft Edge, Google Chrome and Mozilla Firefox to ensure compatibility.

I also ran the HTML and CSS through validators to ensure they were written to accepted standards. Initially I forgot to put ‘alt’ details in the image tags but the validator highlighted this omission and I was able to fix it before deployment.

## Deployment

The site is deployed on GitHub pages directly under the master branch.

## Credits

### Content

The data used on the dashboard was compiled from the following sources:

- [Claudio Davi via Kaggle](https://www.kaggle.com/claudiodavi/superhero-set#heroes_information.csv) - original source of data, ultimately broken down into multiple datasets
- [Marvel Comics Database](https://marvel.wikia.com/wiki/Marvel_Database) - additional information about Marvel Comics characters
- [DC Comics Database](https://dc.wikia.com/wiki/Main_Page) - additional information about DC Comics characters.

### Media

The image used in the background was sourced from [Sam Howzit on Flickr](https://www.flickr.com/photos/aloha75/8015843393), found on Google under a Creative Commons 2.0 License. Full credit has been provided to the original creator on the frontend of the website.

All character images included on the dashboard are property of Marvel Comics and DC Comics, shared here for educational purposes. The images are included via links and are not stored within the file directory of the data dashboard. Credit has been provided on the frontend of the website.

### Acknowledgements

I used the following resources for the purposes outlined below:

- Advice on how to load multiple data sources and apply dynamic colour charting using a separate csv data file was requested and received via this [Stack Overflow thread](https://stackoverflow.com/questions/54064463/dynamic-colors-in-dc-charts/54362312#54362312)
- Adding a [stroke to the h1 element](https://css-tricks.com/adding-stroke-to-web-text/)
- Adding multiple borders to the page containers to emulate [comic book panels](https://css-tricks.com/snippets/css/multiple-borders/)
- Adding a box shadow to various elements to emulate [comic book captions](https://css-tricks.com/snippets/css/css-box-shadow/)
- Visual style of header element and text boxes was adapted from this [CodePen example by user borntofrappe](https://codepen.io/borntofrappe/pen/GeXMgm)
- addFilterHandler parameter details sourced from [Stack Overflow thread](https://stackoverflow.com/questions/33602608/rowchart-select-only-a-single-bar-in-dc-js-crossfilter)
- Formatting the header title as a link to hard refresh the page sourced from [Stack Overflow thread](https://stackoverflow.com/questions/8174282/link-to-reload-current-page)
