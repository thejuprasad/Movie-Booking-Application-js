const urlParams = new URLSearchParams(window.location.search);
const price = urlParams.get("price");
const title = urlParams.get("title");
document.getElementById("ticket-price").innerHTML = price;
    document.getElementById("movie-name").innerHTML = title;

const numberOfTickets=document.getElementById('number-of-ticket');
const tax=document.querySelector('#fee');
const total=document.querySelector('#subtotal');

function getAmount(){
    tax.textContent=parseFloat((Number(numberOfTickets.value)*price)*(1.75/100)).toFixed(2);
    total.textContent=Number(tax.textContent)+Number(numberOfTickets.value)*price;
}

const credit=document.getElementById('credit-card');
const debit=document.getElementById('debit-card');
const upi=document.getElementById('upi');

const paymentDetail=document.querySelector('.paymentDetail');

const currentYear = new Date().getFullYear();

// Select the "Expiry Year" dropdown
const expiryYearDropdown = document.getElementById('expiryYear');

// Generate and populate the years from the current year to 10 years in the future (you can adjust the range as needed)
for (let i = currentYear; i <= currentYear + 20; i++) {
    const option = document.createElement('option');
    option.value = i.toString();
    option.textContent = i.toString();
    expiryYearDropdown.appendChild(option);
}


function displayPaymentMethod(){
    if(credit.checked){
        paymentDetail.innerHTML=`<label for="nameOnCard">Name on card</label><br>
        <input type="text" id="nameOnCard"><br>
        <label for="creditCardNumber">Credit Card Number</label><br>
        <input type="number" id="creditCardNumber"><br>
        <div>
            <label for="expiry">Expiry</label><br>
            <input type="date" id="expiry"><br>
            <label for="cvv">CVV</label><br>
            <input type="password" id="cvv">
        </div>`
    }

    if(debit.checked){
        paymentDetail.innerHTML=`
        <label for="nameOnCard">Name on card</label><br>
        <input type="text" id="nameOnCard"><br>
        <label for="debitCardNumber">Debit Card Number</label><br>
        <input type="number" id="debitCardNumber"><br>
        <div>
            <label for="expiry">Expiry</label><br>
            <input type="date" id="expiry"><br>
            <label for="cvv">CVV</label><br>
            <input type="password" id="cvv">
        </div>`
    }

    if(upi.checked){
        paymentDetail.innerHTML=`<label for="upi-id">UPI ID</label><br>
        <input type="text" id="upi-id" placeholder="xyz@abcbank"><br>
        <button>Verify UPI ID</button>`
    }


}

function submitForm(event){
    event.preventDefault();

    var firstName=document.getElementById("fname").value;
    var lastName=document.getElementById("lname").value;

    var message="Payment successful for "+firstName+" "+lastName;
    alert(message);
}

