const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0.7';
    card.style.transition = 'opacity 0.5s ease';
    observer.observe(card);
});

const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.onload = function() {
        const profilePicture = document.querySelector('.profile-picture');
        if (profilePicture) {
            profilePicture.style.setProperty('--show-placeholder', 'none');
        }
    };
    
    profileImg.onerror = function() {
        const profilePicture = document.querySelector('.profile-picture');
        if (profilePicture) {
            profilePicture.style.setProperty('--show-placeholder', 'flex');
        }
    };
    
    if (profileImg.src && !profileImg.src.includes('profile.jpg') && profileImg.complete) {
        const profilePicture = document.querySelector('.profile-picture');
        if (profilePicture) {
            profilePicture.style.setProperty('--show-placeholder', 'none');
        }
    }
}

const navProfileImg = document.querySelector('.nav-profile-img');
if (navProfileImg) {
    navProfileImg.onload = function() {
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.style.setProperty('--show-nav-placeholder', 'none');
        }
    };
    
    navProfileImg.onerror = function() {
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.style.setProperty('--show-nav-placeholder', 'flex');
        }
    };
    
    if (navProfileImg.src && !navProfileImg.src.includes('profile.jpg') && navProfileImg.complete) {
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.style.setProperty('--show-nav-placeholder', 'none');
        }
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
