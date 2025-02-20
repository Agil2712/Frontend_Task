
function selectOption(option) {
    let options = document.querySelectorAll('.option');

    options.forEach((opt, index) => {
        if (index + 1 === option) {
            opt.classList.add('expanded');
        } else {
            opt.classList.remove('expanded');
        }
    });  
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    const selectedOption = document.querySelector('.option.expanded input[type="radio"]:checked');

    if (selectedOption) {ஃ
        total = parseFloat(selectedOption.value);
    }

    document.getElementById('total').innerText = total;
}