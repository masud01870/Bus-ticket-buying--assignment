







function scrollToSeatSection() {
    const seatSection = document.getElementsByClassName('seat-section')[0];
    const sectionPosition = seatSection.offsetTop;

    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}



const keys = document.getElementsByClassName("grid-item");
// console.log(keys)

let count = 0;
let availableSeat = 8;

for (const key of keys) {
    key.addEventListener('click', function (event) {
        count++;
        // console.log(count)
        event.target.classList.add("selected");
        console.log(event.target.innerText);
        availableSeat--;
        // console.log( availableSeat)
    })
}



function addItem(item) {

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('grid-items');
    itemContainer.textContent = item;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('grid-items');
    descriptionContainer.textContent = 'Economy';

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('grid-items');
    priceContainer.textContent = '550';

    const resultContainer = document.getElementById('result');
    resultContainer.appendChild(itemContainer);
    resultContainer.appendChild(descriptionContainer);
    resultContainer.appendChild(priceContainer);


    updateTotalPrice('550');
    updateGrandPrice()
}


function updateGrandPrice(status) {
    const totalPrice = getConvertedValue("total-price");

    if (status == undefined) {
        
    document.getElementById("grand-price").innerText = totalPrice;
    }
    else{
        const couponCode = document.getElementById("coupon-code").value;
        
        if (couponCode =="NEW15") {
            const discounted = totalPrice * 0.15;
            document.getElementById("grand-price").innerText = totalPrice - discounted;
        }
        else {
            if (couponCode =="Coupon 20") {
                const discounted = totalPrice * 0.20;
                document.getElementById("grand-price").innerText = totalPrice - discounted;
            }
            else {
                alert("please enter valid coupon code")
            }
        }
    }
}



function updateTotalPrice(value) {
    // console.log(value);
    const totalPrice = getConvertedValue("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;

}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
    // console.log(convertSeat);
}



    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('my_modal_5');
    
    openModalBtn.addEventListener('click', function() {
        modal.showModal();
    });
