export interface WorkItem {
    id: string;
    title: string;
    yturl: string;
}

interface ApiResponse {
    status: number;
    result: WorkItem[];
}

const fetchWorkItems = async (): Promise<WorkItem[] | void> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/findall`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();

        if (data.status === 200) {
            return data.result.slice(0, 6);
        } else {
            throw new Error(`API returned status ${data.status}`);
        }
    } catch (error) {
        console.error('Failed to fetch work items:', error);
    }
};

export default fetchWorkItems;