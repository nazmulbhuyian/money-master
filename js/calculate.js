
document.getElementById('calculate').addEventListener('click', function(){


    const foodFieldId = document.getElementById('food');
    const foodFieldString = foodFieldId.value;
    const foodField = parseFloat(foodFieldString);

    const rentFieldId = document.getElementById('rent');
    const rentFieldString = rentFieldId.value;
    const rentField = parseFloat(rentFieldString);

    const clothesFieldId = document.getElementById('clothes');
    const clothesFieldString = clothesFieldId.value;
    const clothesField = parseFloat(clothesFieldString);

    const totalCoast = foodField + rentField + clothesField;

    if(isNaN(totalCoast)){
        alert('plz confirm our right information')
    }
    else{
        const totalExpenciveField = document.getElementById('total-expences');
        const totalExpenciveFieldString = totalExpenciveField.innerText;
        // const totalExpencive = parseFloat(totalExpenciveFieldString);
        totalExpenciveField.innerText = totalCoast;
    }

    
    const incomeFieldId = document.getElementById('income');
    const incomeFieldString = incomeFieldId.value;
    const incomeField = parseFloat(incomeFieldString);

    const totalBalanceField = incomeField - totalCoast;

    if(isNaN(totalBalanceField)){
        alert('plz valid right information');
    }
    else{
        const totalBalanceId = document.getElementById('total-balance');
        const totalBalanceString = totalBalanceId.innerText;
        // const totalBalance = parseFloat(totalBalanceString);
        totalBalanceId.innerText = totalBalanceField;
    }

    





const saveInputField = document.getElementById('save-input');
    const saveInputFieldString = saveInputField.value;
    const saveInput = parseFloat(saveInputFieldString);

    const savingAcount = (incomeField / 100) * saveInput

    const savingAcountField = document.getElementById('saving');
    const savingAcountFieldString = savingAcountField.value;
    savingAcountField.value = savingAcount;

    const remainingBalanceField = document.getElementById('remaining');
    const remainingBalanceFieldString = remainingBalanceField.value;
    const remainingBalance = totalBalanceField -savingAcount;
    remainingBalanceField.value = remainingBalance;
})


document.getElementById('save').addEventListener('click', function(){
    const saveInputField = document.getElementById('save-input');
    const saveInputFieldString = saveInputField.value;
    const saveInput = parseFloat(saveInputFieldString);

    const incomeFieldId = document.getElementById('income');
    const incomeFieldString = incomeFieldId.value;
    const incomeField = parseFloat(incomeFieldString);

    const savingAcount = (incomeField / 100) * saveInput

    if(isNaN(saveInput)){
        alert ('plz valid a number');
    }
    else{
        const savingAcountField = document.getElementById('saving');
        const savingAcountFieldString = savingAcountField.value;
        savingAcountField.value = savingAcount;
    }
    


})