# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![destop - overview](results/desktop%20-%20overview.png)
![destop - active state](results/desktop%20-%20active%20state.png)
![mobile - overview](results/mobile%20-%20overview.png)
![mobile - collapsed menu](results/mobile%20-%20collapsed%20menu.png)
![destop - collapsed menu active](results/mobile%20-%20collaped%20menu%20active.png)

### Links

- Solution URL: [github](https://github.com/rose-de-pur-nguyen/-frontend-mentor-Intro-dropdown-nav.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Bootstrap 
- Javascript
- Mobile-first workflow

### What I learned

- a little about animmation, transform, and transition for the arrow active state

```css
.arrow {
    background-image: url('images/icon-arrow-down.svg');
    transition: transform .5s ease-in;
}

.arrow.change {
    transform: rotate(180deg);
}

```
- a some new JS event listener like MOUSEOVER and MOUSEOUT, and being more fluent with parentElemnt, nextElementSibling, etc
```js
if (company) {
    company.addEventListener('mouseover', () => {
        companyMenu.classList.toggle('active');
        company.nextElementSibling.classList.toggle('change');
    })
    company.addEventListener('mouseout', () => {
        companyMenu.classList.toggle('active');
        company.nextElementSibling.classList.toggle('change');
    })
}
```

### Continued development

- Javascript: in the end I still successfully achieved the task's requirements but I think my js is a mess, I mean it can be more organizing and logical 
- adjusting elements in CSS: yes this is a simple concept but combining bootstrap together sometimes makes me wonder myself how it can be like that, things not always follow my idea from the first try 

### Useful resources

- [tranform](https://www.youtube.com/watch?v=4qnWreynXLU&t=13s) - This helped me for the arrow rotate part. the video is short so I recommend for those who is still not smooth in the accordion or little transform concept as I titled


## Author

- Frontend Mentor - [@rose-de-pur-nguyen](https://www.frontendmentor.io/profile/rose-de-pur-nguyen)

