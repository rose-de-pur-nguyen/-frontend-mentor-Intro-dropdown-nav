const arrows = document.querySelectorAll('.arrow');
const arrowMenu = document.querySelectorAll('.arrow-menu');
const featureMenu = document.querySelector('.dropdown-menu-features');
const companyMenu = document.querySelector('.drop-company');
const closeBtn = document.querySelector('.closeBtn');
const menuIcon = document.querySelector('.collapse-menu-icon');
const collapseMenu = document.querySelector('.collapse-menu');
const blur = document.querySelector('.bg-blur');
const collapseMenuFeature = document.querySelector('.menu-features-2');
const collapseMenuCompany = document.querySelector('.menu-company-2');
const features = document.querySelector('#features');
const company = document.querySelector('#company');

// CLICK AT THE ARROW AND THE DROPDOWN MENUS SHOW UP
arrows.forEach(arrow => {arrow.addEventListener('click', () => {
    if (arrow.parentElement.classList.contains('feature')) {
        featureMenu.classList.toggle('active');
        arrow.classList.toggle('change');

    }
    if (arrow.parentElement.classList.contains('compani')) {
        companyMenu.classList.toggle('active');
        arrow.classList.toggle('change');
    }
})})

// CLICK AT THE ARROW IN THE COLLAPSED PART
arrowMenu.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if(arrow.parentElement.parentElement.classList.contains('menu-features-li')) {
            collapseMenuFeature.classList.toggle('active');
            arrow.classList.toggle('change');
        }
        if(arrow.parentElement.parentElement.classList.contains('menu-company-li')) {
            collapseMenuCompany.classList.toggle('active');
            arrow.classList.toggle('change');
        }
    })
})

// BLURRED BACKGROUND
menuIcon.addEventListener('click', () => {
    collapseMenu.classList.toggle('active');
    blur.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
    collapseMenu.classList.toggle('active');
    blur.classList.toggle('active');
})

// HOVER AND THE DROPDOWN MENUS SHOW UP
if (features) {
    features.addEventListener('mouseover', () => {
        featureMenu.classList.toggle('active');
        features.nextElementSibling.classList.toggle('change');
    })
    features.addEventListener('mouseout', () => {
        featureMenu.classList.toggle('active');
        features.nextElementSibling.classList.toggle('change');
    })
}

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