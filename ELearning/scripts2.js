document.getElementById('payment-method').addEventListener('change', function() {
    const creditCardInfo = document.getElementById('credit-card-info');
    const paypalInfo = document.getElementById('paypal-info');

    if (this.value === 'credit-card') {
        creditCardInfo.style.display = 'flex';
        paypalInfo.style.display = 'none';
    } else if (this.value === 'paypal') {
        creditCardInfo.style.display = 'none';
        paypalInfo.style.display = 'block';
    } else {
        creditCardInfo.style.display = 'none';
        paypalInfo.style.display = 'none';
    }
});

document.getElementById('enroll-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const course = document.getElementById('course').value;
    const paymentMethod = document.getElementById('payment-method').value;
    alert(`You have enrolled in ${course} using ${paymentMethod} as your payment method!`);
});
