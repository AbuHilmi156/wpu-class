// export const fetchAPI = async (url: string, Options: RequestInit) => {
//     const response = await fetch(url, {
//         headers: {
//             'Content-Type' : 'application/json',
//         },
//         ...Options,
//     });
//     const data = await response.json();
//     return data;
// };

export const fetchAPI = async (url: string, Options: RequestInit) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...Options,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error || 'Request failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};