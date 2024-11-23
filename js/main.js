
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
        icon: `<img class ="img-fluid p-4" src="img/care.png">`,
        title: 'تنضيف جير و تلميع ',
        description: 'هو إجراء طبي وتجميلي يهدف إلى إزالة التراكمات الجيرية واستعادة لمعان الأسنان الطبيعي.',
        action: 'احجز موعداً',
        goTo:'#appointment'
    },
    {
        icon: `<img class ="img-fluid p-4" src="img/white.png">`,
        title: 'تبييض اسنان ',
        description: ' إجراء تجميلي يُستخدم لإزالة التصبغات واستعادة اللون الطبيعي أو تحسين بياض الأسنان باستخدام تقنيات متقدمة.',
        action: 'اتصل الآن',
        goTo:'tel:+201017394834'
    },
    {
        icon:`<img class ="img-fluid p-4" src="img/implant.png">`,
        title: 'زراعه الأسنان ',
        description: ' إجراء طبي لتعويض الأسنان المفقودة بزرعات دائمة مصنوعة من مواد متينة تُثبت في الفك لاستعادة الوظائف والمظهر الطبيعي.',
        action: 'احجز جلسة',
        goTo:'#appointment'

      
    },
    {
        icon: `<img class ="img-fluid p-4" src="img/ta2wem.png">`,
        title: 'تقويم الأسنان',
        description: 'يُستخدم لتصحيح اعوجاج الأسنان ومشاكل الإطباق من خلال أجهزة ثابتة أو متحركة، لتحسين مظهر الأسنان ووظيفتها.',
        action: 'استشارة مجانية',
        goTo:'tel:+201017394834'
    },
    {
        icon: `<img class ="img-fluid p-4" src="img/tagmil.png">`,
        title: 'تجميل الأسنان',
        description: ' مجموعة من الإجراءات الطبية والتجميلية تهدف إلى تحسين مظهر الأسنان والابتسامة، مثل ابتسامة هوليود، تبييض، وتجميل متكامل',
        action: 'احجز جلسة',
        goTo:'#appointment'

    },
    {
        icon: `<img class ="img-fluid p-4" src="img/tarkeb.png">`,
        title: 'تركيبات الاسنان ثابته و متحركه ',
        description: 'تركيبات الأسنان تشمل الثابتة لتعويض دائم والمتحركة لتعويض مرن وقابل للإزالة حسب حاجة المريض.',
        action: 'احجز الان',
        goTo:'#appointment'
    
    },
    {
        icon: `<img class ="img-fluid p-4" src="img/3sb.png">`,
        title: 'علاج جزور الاسنان   ',
        description: ' إجراء طبي يهدف إلى تنظيف وحشو قنوات جذور الأسنان المتضررة نتيجة التسوس أو الالتهابات للحفاظ عليها ومنع فقدانها.',
        action: 'احجز الان',
        goTo:'#appointment'
    
    },
    {
        icon: `<img class ="img-fluid p-4" src="img/74w.png">`,
        title: 'حشوات تجميليه',
        description: ' إصلاح تجاويف الأسنان أو الشقوق باستخدام مواد عالية الجودة تُطابق لون الأسنان الطبيعي، مع الحفاظ على شكلها ووظيفتها.',
        action: 'احجز الان',
        goTo:'#appointment'
    
    },
    {
        icon: `<img class ="img-fluid p-4" src="img/children.png">`,
        title: 'طب اسنان الاطفال',
        description: ' تقديم خدمات وقائية وعلاجية لأسنان الأطفال مع مراعاة احتياجاتهم النفسية، بما في ذلك علاج التسوس والتوجيه للعناية بالأسنان.',
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




