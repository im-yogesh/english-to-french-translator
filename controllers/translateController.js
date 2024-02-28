const translateText = async (req, res) => {

    const { translate } = require('@vitalets/google-translate-api');

    try {
        // Check if the request body contains the 'text' key
        if (!req.body.text) {
            return res.status(400).json({ error: 'Text to translate is missing.' });
        }

        const { text } = req.body;

        // Translate the text from English to French
        const translation = await translate(text, { to: 'fr' });
        
        // Respond with the translated text
        res.json({ translation: translation.text });
    } catch (error) {
        // Handle errors during translation
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = translateText;