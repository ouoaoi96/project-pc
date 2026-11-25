(function() {
    emailjs.init({
      publicKey: "CZpYvRfponAdlLO_W",
    });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_rky5dan', 'template_zxqy4kt', this)
        .then(() => {
            console.log('SUCCESS!');
            alert('메일 전송에 성공하였습니다.');
        }, (error) => {
            console.log('FAILED...', error);
            alert('메일 전송에 실패하였습니다.');
        });
});