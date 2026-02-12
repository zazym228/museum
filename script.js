document.addEventListener('DOMContentLoaded', () => {
    const amountButtons = document.querySelectorAll('.amount-button');
    
    amountButtons.forEach(button => {
        const minus = button.querySelector('.minus');
        const plus = button.querySelector('.plus');
        const valueDisplay = button.querySelector('.value');
        
        let count = parseInt(valueDisplay.textContent);
        const min = 1;
        const max = 9;
        
        minus.addEventListener('click', (e) => {
            e.stopPropagation();
            if (count > min) {
                count--;
                valueDisplay.textContent = count;
                updateTotal();
            }
        });
        
        plus.addEventListener('click', (e) => {
            e.stopPropagation();
            if (count < max) {
                count++;
                valueDisplay.textContent = count;
                updateTotal();
            }
        });
    });
    
    function updateTotal() {
        const buttons = document.querySelectorAll('.amount-button');
        let totalAmount = 0;
        
        buttons.forEach(button => {
            const value = parseInt(button.querySelector('.value').textContent);
            const price = parseInt(button.dataset.price);
            totalAmount += value * price;
        });
        
        const totalElement = document.querySelector('.Amount h4');
        totalElement.textContent = `Total €${totalAmount}`;
    }
    
    updateTotal();
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.Booking-tickets');
    const openButton = document.getElementById('Buy-Now');
    const closeButton = document.querySelector('.close-tickets');
    
    if (openButton) {
        openButton.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        });
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');
    const welcomeContent = document.querySelector('.Welcome-content');

    burgerIcon.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        welcomeContent.classList.toggle('hidden');
    });
});
