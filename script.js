document.getElementById('addTransaction').addEventListener('click', addTransaction);
document.getElementById('resetButton').addEventListener('click', resetTracker);

let totalAmount = 0;

function addTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount greater than 0.');
        return;
    }

    if (type === 'income') {
        totalAmount += amount;
    } else if (type === 'expense') {
        totalAmount -= amount;
    }

    updateTotal();
    addTransactionToList(amount, type);
    clearFields();
}

function updateTotal() {
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function addTransactionToList(amount, type) {
    const transactionList = document.getElementById('transactionList');
    const li = document.createElement('li');
    li.textContent = `$${amount.toFixed(2)} (${type})`;
    transactionList.appendChild(li);
}

function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('type').value = '';
}

function resetTracker() {
    totalAmount = 0;
    updateTotal();
    document.getElementById('transactionList').innerHTML = '';
    clearFields();
}