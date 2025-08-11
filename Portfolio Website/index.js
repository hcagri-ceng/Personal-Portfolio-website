
/* Mail Kontrol */ 
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Geçerli bir e-posta adresi girin!');
    } else {
        alert('Mesajınız gönderildi! (');
        this.reset(); 
    }
});