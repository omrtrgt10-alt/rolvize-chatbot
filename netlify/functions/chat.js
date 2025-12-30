// Netlify Serverless Function - Chat API Proxy
// API key is stored in Netlify environment variables

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    try {
        const { messages } = JSON.parse(event.body);

        if (!messages || !Array.isArray(messages)) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Messages array required' })
            };
        }

        // API key from environment variable or fallback
        const apiKey = process.env.OPENROUTER_API_KEY || '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';

        if (!apiKey) {
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'API key not configured' })
            };
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'https://rolvize.com',
                'X-Title': 'Rolvize Vize Danismanlik'
            },
            body: JSON.stringify({
                model: 'xiaomi/mimo-v2-flash:free',
                messages: messages,
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return {
                statusCode: response.status,
                headers,
                body: JSON.stringify({ error: data.error?.message || 'API request failed' })
            };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                content: data.choices[0].message.content
            })
        };

    } catch (error) {
        console.error('Chat API Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
