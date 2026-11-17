<script>
        (function() {
            const menuBtn = document.getElementById('menuBtn');
            const navLinks = document.getElementById('navLinks');

            if (menuBtn && navLinks) {
                menuBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    navLinks.classList.toggle('active');

                    const icon = menuBtn.querySelector('i');
                    if (navLinks.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });

                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.classList.remove('active');
                        const icon = menuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    });
                });

                document.addEventListener('click', function(event) {
                    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target) && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        const icon = menuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href === "#") return;
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        })();
    </script>