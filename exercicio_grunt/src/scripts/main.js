function generatePassword(length, includeNumbers, includeUppercase, includeSpecial) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characters = lowercase;
    
    if (includeNumbers) {
        characters += numbers;
    }
    
    if (includeUppercase) {
        characters += uppercase;
    }
    
    if (includeSpecial) {
        characters += special;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}

document.getElementById('generate-btn').addEventListener('click', function() {
    const length = parseInt(document.getElementById('password-length').value);
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeSpecial = document.getElementById('include-special').checked;
    
    const password = generatePassword(length, includeNumbers, includeUppercase, includeSpecial);
    document.getElementById('generated-password').textContent = password;
});
