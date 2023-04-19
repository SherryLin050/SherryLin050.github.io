<script>
export default {

};
window.addEventListener('DOMContentLoaded', event => {

// Navbar shrink function
var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
        navbarCollapsible.classList.remove('fixed-top');
    } else {
        navbarCollapsible.classList.add('navbar-shrink');
        navbarCollapsible.classList.add('fixed-top');
    }

};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});

});
</script>

<template>
  <!-- Navigation-->
  <nav
    class="navbar navbar-expand-lg text-uppercase"
    id="mainNav"
  >
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="/sherrylogo.svg" class="img-responsive" alt="sherry's portfolio">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link" href="/#portfolio"
              >Portfolio</a
            >
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link" href="/about.html"
              >About</a
            >
          </li>
          <li class="nav-item mx-0 mx-lg-1">
            <a class="nav-link" href="/#contact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
    #mainNav {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-weight: 700;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2 ;
        @media (min-width: 992px) {
            transition: padding-top 0.3s, padding-bottom 0.3s;
        }
        .navbar-brand{
            width: 30%;
            @media (min-width: 992px) {
                width: 100px;
                transition: font-size 0.3s;
            }
        }
        .navbar-nav{
            margin-top: 1rem;
            @media (min-width: 992px) {
                margin-top: 0;
            }
            li.nav-item{
                a.nav-link{
                    &:hover{
                        color: #ef8d33;
                    }
                    &:active,&:focus{
                        color: #fff;
                    }
                    &.active{
                        color: #ef8d33;
                        @media (min-width: 992px) {
                            color: #ef8d33;
                        }
                    }
                    @media (min-width: 992px) {
                            &:hover,&:active,&:focus{
                                color: #ef8d33;
                            }
                        }
                }
            }
        }
        .navbar-toggler{
          font-size: 1.2rem;
          border: none;
          padding: 0.8rem;
          color: #999999;
          &:focus{
            box-shadow: none;
          }
        }
        &.navbar-shrink{
            @media (min-width: 992px) {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
            }
            .navbar-brand{
                font-size: 1.5em;
            }
        }
    }
</style>
