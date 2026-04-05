tailwind.config = {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1e40af',
                    900: '#0f172a'
                }
            }
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    let isVisible = false;

    if (toggleBtn && passwordInput) {
        toggleBtn.addEventListener('click', function() {
            isVisible = !isVisible;
            
            if (isVisible) {
                passwordInput.type = 'text';
                toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
            } else {
                passwordInput.type = 'password';
                toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            
            if (username.trim() === '') {
                alert('Vui lòng nhập email hoặc số điện thoại!');
                return;
            }

            alert('Đăng nhập thành công! 🎉\n\n(Đây là phiên bản demo)');
        });
    }
});