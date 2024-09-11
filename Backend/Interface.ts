export interface WorkItem extends Document {
    title: string;
    ytUrl: string;
}

export interface FilmItem extends Document {
    title: string;
    description: string;
    ytUrl: string;
}

export interface PortfolioItem extends Document {
    title: string;
    year: number;
    type: string;
    ytUrl: string;
}