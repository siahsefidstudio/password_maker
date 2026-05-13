function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const specialChars = document.getElementById('specialChars').checked;

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersList = '0123456789';
    const specialCharsList = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let chars = '';

    if (lowercase) chars += lowercaseLetters;
    if (uppercase) chars += uppercaseLetters;
    if (numbers) chars += numbersList;
    if (specialChars) chars += specialCharsList;

    if (chars.length === 0) {
        alert('لطفاً حداقل یک نوع کاراکتر را انتخاب کنید.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('password').innerText = `${password}`;
}
