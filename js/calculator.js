document.getElementById('discount-btn').addEventListener('click', function () {

    let textField = document.getElementById('coupon-code');
    let text = textField.value;
    
    if (text == "dis30") {
        let priceText = document.getElementById('price');
        let price = parseFloat(priceText.innerText);
        
        let discountPrice = price - (price * .3);
    
        let previousPrice = document.getElementById('discount');
        let afterDiscount = discountPrice;
        previousPrice.innerText = afterDiscount;

        textField.value = '';
    }

    else {
        alert('Give a correct coupon code');
    }

    

})