window.addEventListener('DOMContentLoaded', () => {

    const tabsParent = document.querySelector('.left-bar'),
    tabs = document.querySelectorAll('.tab'),
    tabsContent = document.querySelectorAll('.tab-content');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('block', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tab-active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('block', 'fade');
        tabs[i].classList.add('tab-active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', event => {
        const target = event.target;

        if (target && target.classList.contains('tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })

    
})
