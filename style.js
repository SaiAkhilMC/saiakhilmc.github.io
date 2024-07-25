<script>
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('.section');
        const navLi = document.querySelectorAll('nav ul li a');

        window.onscroll = () => {
            var current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLi.forEach((li) => {
                li.classList.remove('active');
                if (li.getAttribute('href').includes(current)) {
                    li.classList.add('active');
                }
            });
        };
    });
</script>
