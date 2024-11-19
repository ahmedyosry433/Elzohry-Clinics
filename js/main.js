
let allNav = document.querySelectorAll('.nav-link');
allNav.forEach(function(ele){
    ele.onclick = function() {
        allNav.forEach(function (nav) {
            nav.classList.remove('active');
        });
        this.classList.add('active');
   }
});

// Services
const services = [
    {
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 9h2v2h-2z"/></svg>`,
        title: 'فحص شامل',
        description: 'فحص كامل للأسنان مع الأشعة السينية والاستشارة المهنية',
        action: 'احجز موعداً',
        goTo:'#appointment'
    },
    {
        icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 14H9v-2.5L15.5 8H17v2.5L10.5 17zm-1-7h1v1h-1v-1z"/></svg>`,
        title: 'حالات طارئة',
        description: 'رعاية فورية للحالات الطارئة وعلاج الألم الشديد',
        action: 'اتصل الآن',
        goTo:'tel:+201017394834'
    },
    {
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 9h2v2h-2z"/></svg>`,
        title: 'تنظيف الأسنان',
        description: 'تنظيف احترافي وتلميع مع العناية الوقائية الشاملة',
        action: 'احجز جلسة',
        goTo:'#appointment'

      
    },
    {
        icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V9h-2V8h2V7h-3v7h3v-1h-2v-1h2v-1h-3zm-1-4h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-7 2h3v1H4z"/></svg>`,
        title: 'تقويم الأسنان',
        description: 'تقويم تجميلي متطور لتصحيح تناسق الأسنان',
        action: 'استشارة مجانية',
        goTo:'tel:+201017394834'
    },
    {
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 9h2v2h-2z"/></svg>`,
        title: 'تجميل الأسنان',
        description: 'ابتسامة هوليود، تبييض، وتجميل متكامل',
        action: 'احجز جلسة',
        goTo:'#appointment'

    },
    {
        icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V9h-2V8h2V7h-3v7h3v-1h-2v-1h2v-1h-3zm-1-4h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm-7 2h3v1H4z"/></svg>`,
        title: 'زراعة الأسنان',
        description: 'زراعة أسنان دائمة بأحدث التقنيات العالمية',
        action: 'احجز الان',
        goTo:'#appointment'

    }
  ];

  const servicesGrid = document.getElementById('servicesGrid');

  services.forEach((service, index) => {
    const delay = index * 100;
    const grid = document.createElement('div');
    grid.className = 'col-md-6 col-lg-4 pb-5';
    const card = document.createElement('div');
    card.className = 'service-card fade-in bg-white p-4 text-center shadow position-relative';
    card.style.animationDelay = `${delay}ms`;
    
    card.innerHTML = `
      <div class="service-content position-relative z-2">
        <div class="service-icon rounded-circle d-flex align-items-center justify-content-center">${service.icon}</div>
        <h3 class="service-title text-dark fs-3 fw-bold mb-3">${service.title}</h3>
        <p class="service-description text-black-50 fs-4 lh-lg">${service.description}</p>
        <a href="${service.goTo}"class="service-action mt-3 pb-3 pt-3 ps-5 pe-5 fw-bold fs-5 text-decoration-none">${service.action}</a>
      </div>
    `;
    
    card.addEventListener('click', () => {
      // Handle click event
    });

    servicesGrid.appendChild(grid);
    grid.appendChild(card);
  });

// More BTN
document.addEventListener('DOMContentLoaded', function () {
    const toggleSections = [
        {
            buttonId: 'toggleBtn',
            sectionClass: '.cases',
            showText: 'عرض أقل', // "Show Less"
            hideText: 'المزيد',  // "More"
        },
        {
            buttonId: 'reviewBtn',
            sectionClass: '.review',
            showText: 'عرض أقل', // "Show Less"
            hideText: 'المزيد',  // "More"
        },
    ];

    toggleSections.forEach(({ buttonId, sectionClass, showText, hideText }) => {
        const button = document.getElementById(buttonId);
        const hiddenImages = document.querySelectorAll(`${sectionClass} .hidden-image`);
        let isExpanded = false;

        button.addEventListener('click', function (e) {
            e.preventDefault();

            if (!isExpanded) {
                // Show all hidden images
                hiddenImages.forEach(img => img.classList.add('show'));
                button.textContent = showText;
            } else {
                // Hide all hidden images
                hiddenImages.forEach(img => img.classList.remove('show'));
                button.textContent = hideText;
            }

            isExpanded = !isExpanded;
        });
    });
});

//Appointment Form
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const inputs = this.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        console.log('تم إرسال النموذج بنجاح');
        alert('شكراً لك! تم إرسال طلب موعدك بنجاح.');
        this.reset();
    }
});




