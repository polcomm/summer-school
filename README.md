# ICA Polcomm Summer School Quarto template

This is a document for teaching updating the ICA Polcomm Summer School template. 

## Installation

To upload this template, install R and [Quarto](https://quarto.org/docs/get-started/), and then clone this repository or create a new repository using this repository as a template (see screenshot below)

![image](https://github.com/satRdays/quarto-satrdays-template/assets/11357251/f61229ae-29a2-468d-862d-3cddd96813da)

If you use RStudio as your IDE, typing `quarto preview` in the terminal starts the preview server and shows the home page on your browser.

To render the website, type `quarto render` in the terminal and all the `.qmd` files are rendered to `.html` files. The HTML files that are produced after rendering the Quarto documents are located in the `docs` folder. 

## Design

The template is designed to make updating the website easy and in very few time.

### Title, Menu and Footer

Locate `_quarto.yml` to customize the website title, menu and footer information.

### Styling/Customization

The styles for this template is located in a `css/styles.scss` file. The purpose for using `scss` is so that we can declare variables that could be easily reused within the stylesheet. This makes it possible to change the entire theme-color of the website easily, as well as the banner images, etc.

To change the default styling variables, locate the `scss` defaults in the `css/styles.scss` file and modify these variables to customize the general styling of the website:

```         
/*-- scss:defaults --*/

$body-bg:    #fff; // body background color
$primary:    #0a3263; // primary theme color for the website. The darker the better
$countdown-bg: rgba($primary, .15); // the background color of the countdown section
$countdown-color: #5d5d76; // font-color of the countdown text
$banner-img: './img/banner-img.jpg'; // home page banner image
$banner-text-position: center; // position of the home page banner text
$title-bg-img: './img/background.jpg'; // banner image for all other pages
$title-text-h-position: left; // horizontal position of banner text for all other pages
$title-text-v-position: center; // vertical position of banner text for all other pages
```

### Images

The most important image to be updated is banner-img.jpg, with the information of the summer school taking place in each year.

Make sure also to include in the file img any relevant image, such as speaker photos and sponsors.

### Customizing Listings (e.g. speakers, sponsors, key dates, etc)

Most of the information to be presented like speakers, sponsors, key dates, and even the countdown can be provided in `.yml` files. This makes it easy for non-advanced users to provide these information without the knowledge of HTML/CSS. The HTML is already provided in an `.ejs` template file that is based on [Quarto listing template](https://quarto.org/docs/websites/website-listings-custom.html#listing-templates)

To do this, access the related folder (e.g. `program/speakers`) and open the `.yml` file (e.g. `speakers.yml`) and use the existing format there to provide your data. For `speakers.yml`, you do not need to provide all the social links for each speaker. It is alright to provide only the social links that are available.

After filling the `.yml` file, to show this information on any page, for example, the information for speakers, add the following meta information to meta section of any `.qmd` page (see `program/speakers/index.qmd`):

```         
listing:
  - id: speakers
    template: speakers.ejs
    contents: speakers.yml
```

and the following in the body of the page

```         
::: {#speakers .g-col-12}
:::
```

The advantage of this approach is: the website developer can define the speaker information once in a `.yml` file and display this same information on multiple pages by adding the last two code snippets above to any page on this website.

It is possible to add multiple listings on one page (e.g. having speakers, sponsors, etc on one page)


### Deployment

The resulting output after `quarto render` is a bunch of static files that are located in the `docs` folder. These files could be deployed using GitHub Pages or Netlify or on any other web server of the users' choice.

