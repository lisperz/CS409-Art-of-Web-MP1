# MP #1: One Web Page To Rule Them All
### Due: September 23 2025, 11:59PM CDT

## Table of Contents
1. [Assignment](#assignment)
2. [Grading Breakdown](#grading-breakdown)
3. [Rules](#rules)
4. [Getting Started](#getting-started)
5. [Submission Details](#submission-details)
5. [Large Language Model Usage Policy](#large-language-model-usage-policy)

## Assignment

### Task

In this programming assignment, you will design and implement a single-page website with specified functionality and formatting using only HTML, SCSS, and Javascript. The content of the website is up to you. For example, the subject can be a company/organization, a product, or a personal/portfolio page. This assignment will give you first-hand experience with HTML5 (e.g. header, canvas, video), CSS3/SASS (e.g. use of webfonts, animations, layout), and Javascript(ES5 or ES6).

### Requirements

Your webpage will have to implement the features listed below. Note that the examples are only meant to illustrate the features. You do not have to make your webpage look similar to the examples. You just have to incorporate that feature in some form.

1. Layout: All content must be laid out in a single page with full-width horizontal stripes/sections including a header and a footer - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/2.png)
2. Sticky Navbar: A top navigation bar that sticks to the top of the window when scrolling - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/3.gif)
3. Position Indicator: Indicator of the current reading position visible in the navigation bar (see above gif for example). Make sure your implementation highlights the last menu item when you scroll to the bottom of the page. ( __Implementation Tip__ : To figure out which menu item to highlight, you’ll have to figure out which section lies directly below the bottom margin of the navigation bar. You can use methods that give you the height and position of different divs to figure that out. You will want to recompute this whenever there is a scroll event.)
4. Navbar Resizing: Navigation bar must be larger when users are at the top of the page. As users start scrolling down, it should resize and become smaller. Note that the text font size should also start larger and become smaller as users scroll down - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/4.gif)
5. Smooth Scrolling: Smooth scrolling when navigating to a different section using the navigation bar - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/5.gif)
6. Carousel: A section with a carousel/slider using a minimum of three slides. It should include the navigation arrows on the side - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/6.gif)
7. Multi-column layout: A section with Multi-column content - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/8.png)
8. Centering: Content in each horizontal stripe/section must be horizontally centered. At least one element on the page must be vertically centered. The vertically-centered element should remain centered even if the dimensions of its outer element changes.
9. Responsiveness: Your webpage should look good when resized to the following resolutions:
  - 1920x1080
  - 1366x768
  - 1280x720
  - 1024x768
10. Background Image: A section which uses a fixed-position background image - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/9.gif)
11. Modal: A section which uses modal windows with additional content - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/10.gif)
12. Video: Embedded video using HTML5 video tag - [Example](https://uiuc-web-programming.gitlab.io/sp20/images/mp1/11_2.gif)
13. CSS3 Animations: At least one use of CSS3 animations (e.g. fade in/out, transitions)
14. At least one use of scalable vector icons through CSS (e.g. FontAwesome)
15. Inclusion of social media icons

## Grading Breakdown

- Layout and Overall Design - 20%
- Code (follows HTML5, SASS/SCSS, ES5 or ES6 best practices) - 13%
- Smooth Scrolling - 10%
- Carousel - 10%
- Modal - 10%
- Responsiveness - 10%
- Position Indicator - 5%
- Navbar Resizing - 5%
- Multi-column layout - 5%
- CSS3 Animations - 5%
- Centering - 2%
- Video - 2%
- Sticky Navbar - 1%
- Background Image - 1%
- Scalable vector icons and inclusion of social media icons - 1%

## Rules
1. This is an individual assignment. No collaboration is permitted.
2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
3. No libraries are permitted (i.e. Bootstrap, JQuery, React, UIKit...etc.).
4. There should be no use of inline styling.
5. No inline script tags should be used.
6. HTML tables cannot be used for layout.
7. If you think something you’re doing might not be acceptable, please ask on Piazza.
8. You must utilize some SCSS features (variables, mixins, etc). A plain CSS file will receive less points.

## Getting Started
### Clone Class Repo
1. Clone the repository:
`git clone git@github.com:cs409-fa25/mp1.git mp1`, then `cd mp1`
2. [Create a public repository on GitHub.](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository) Make sure "Initialize this repository with a README" is **not** checked.
3. Change the remote url for the mp1 directory to the url of the new private repository you created.
```
git remote rename origin old-origin
git remote add origin git@github.com:<your-gitlab-username>/mp1.git
# run `git remote -v` to check your origin 
```
4. Install dependencies:
`npm install`
5. Start the dev server:
`npm start`
6. Open a browser and go to `http://localhost:8080/` to view your page. You should see "Hello World! Welcome to MP1!" at the top of the screen. Note that if for some reason your port 8080 is occupied, it will default to 8081.
7. Work on your MP code and satisfy all the grading [requirements](#Requirements)

### Deploy your code
In order for us to view and grade your MP, you will be deploying your webpage with GitHub's pipelines. This should happen automatically after pushing to your repository, through Github Actions deployment pipeline.

You will need to do some additional work to properly deploy the website. There are a few settings you will need to change in your GitHub repository.
1. Set GitHub Pages Deployment Source to Github Actions
   - In your Github repo, go to Settings > Pages > Build and Deployment > Source > Select "GitHub Actions"
`.github/workflows/static.yml` file automatically makes a GitHub CI pipeline run to build and deploy your code as a website. After the pipeline finishes, your site should be live at `https://<your-github-username>.github.io/mp1`. **It may take up to 10-30 minutes for the site to go live after the first deployment.**

## Submission Details

1. Make a video (3 minutes max) demo-ing your deployed website and upload it to Google Drive. Share it with `uiuc.web.programming@gmail.com` and put the share link in the google form.
  - Show the url to prove you are on your deployed website. Then show all the requirement features you fulfilled in your mp.
  - If you were unable to deploy your website, you can demo your mp locally for some point deduction (hard capped at 80%)
    - Just make sure you do `git status` and `git log` first so we can see your last edits.
2. Fill out and submit the form [here](https://forms.gle/Xyr7YhBBLdafny3H6)

## Large Language Model Usage Policy

We acknowledge the transformative potential of Large Language Models (LLM) in generating code; however, we are still in the nascent stages of understanding how to embed LLMs in developer workflows to write code more efficiently while maintaining quality. Therefore, we will not be teaching students directly how to use LLMs to develop web applications.

As part of this class, we *do* encourage students to experiment with LLM services such as OpenAI's ChatGPT to generate source code for MPs. If LLMs are used to generate code for an MP, students *must* (1) submit their chatlogs along with their source code, and (2) answer survey questions related to their experience using LLMs in the grading form. Failure to do this will be a violation of the academic integrity policy of this course.

