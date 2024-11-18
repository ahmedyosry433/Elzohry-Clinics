
let allNav = document.querySelectorAll('.nav-link');
allNav.forEach(function(ele){
    ele.onclick = function() {
        allNav.forEach(function (nav) {
            nav.classList.remove('active');
        });
        this.classList.add('active');
   }
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




