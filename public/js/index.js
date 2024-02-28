document.getElementById('translationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const englishText = document.getElementById('englishText').value;
    const submitBtn = document.querySelector('button[type=submit]');
    submitBtn.innerText = "Translating...";
    submitBtn.setAttribute('disabled', true);

    const response = await fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: englishText })
    });

    const data = await response.json();
    const translationResultDiv = document.getElementById('translationResult');
    submitBtn.innerText = "Translate";
    submitBtn.removeAttribute('disabled');
    
    if (data.error) {
        translationResultDiv.innerText = data.error;
    } else {
        translationResultDiv.innerText = data.translation;
    }
});