const fetchPortfolioItems = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/findall`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status === 200) {
            return data.result;
        } else {
            throw new Error(`API returned status ${data.status}`);
        }
    } catch (error: any) {
        console.error('Failed to fetch portfolio items:', error);
    }
};

export default fetchPortfolioItems;