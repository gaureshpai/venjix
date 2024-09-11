import { WorkItemModel, FilmItemModel, PortfolioItemModel } from "./Schemas";
import { WorkItem, FilmItem, PortfolioItem } from "./Interface";
import connectToDB from "./database";

export const saveWorkItems = async (workItems: WorkItem[]) => {
    try {
        connectToDB();
        await WorkItemModel.insertMany(workItems);
        console.log('Work items saved successfully!');
    } catch (error) {
        console.error('Error saving work items:', error);
    }
};

export const fetchWorkItems = async (): Promise<WorkItem[]> => {
    try {
        connectToDB();
        const workItems = await WorkItemModel.find({});
        return workItems;
    } catch (error) {
        console.error('Error fetching work items:', error);
        return [];
    }
};

export const deleteWorkItem = async (id: string) => {
    try {
        connectToDB();
        await WorkItemModel.findByIdAndDelete(id);
        console.log('Work item deleted successfully!');
    } catch (error) {
        console.error('Error deleting work item:', error);
    }
};

export const updateWorkItem = async (id: string, updatedWorkItem: Partial<WorkItem>) => {
    try {
        connectToDB();
        await WorkItemModel.findByIdAndUpdate(id, updatedWorkItem);
        console.log('Work item updated successfully!');
    } catch (error) {
        console.error('Error updating work item:', error);
    }
};

export const saveFilmItems = async (filmItems: FilmItem[]) => {
    try {
        connectToDB();
        await FilmItemModel.insertMany(filmItems);
        console.log('Film items saved successfully!');
    } catch (error) {
        console.error('Error saving film items:', error);
    }
};

export const fetchFilmItems = async (): Promise<FilmItem[]> => {
    try {
        connectToDB();
        const filmItems = await FilmItemModel.find({});
        return filmItems;
    } catch (error) {
        console.error('Error fetching film items:', error);
        return [];
    }
};

export const deleteFilmItem = async (id: string) => {
    try {
        connectToDB();
        await FilmItemModel.findByIdAndDelete(id);
        console.log('Film item deleted successfully!');
    } catch (error) {
        console.error('Error deleting film item:', error);
    }
};

export const updateFilmItem = async (id: string, updatedFilmItem: Partial<FilmItem>) => {
    try {
        connectToDB();
        await FilmItemModel.findByIdAndUpdate(id, updatedFilmItem);
        console.log('Film item updated successfully!');
    } catch (error) {
        console.error('Error updating film item:', error);
    }
};

export const savePortfolioItems = async (portfolioItems: PortfolioItem[]) => {
    try {
        connectToDB();
        await PortfolioItemModel.insertMany(portfolioItems);
        console.log('Portfolio items saved successfully!');
    } catch (error) {
        console.error('Error saving Portfolio items:', error);
    }
};

export const fetchPortfolioItems = async (): Promise<PortfolioItem[]> => {
    try {
        connectToDB();
        const portfolioItems = await PortfolioItemModel.find({});
        return portfolioItems;
    } catch (error) {
        console.error('Error fetching Portfolio items:', error);
        return [];
    }
};

export const deletePortfolioItem = async (id: string) => {
    try {
        connectToDB();
        await PortfolioItemModel.findByIdAndDelete(id);
        console.log('Portfolio item deleted successfully!');
    } catch (error) {
        console.error('Error deleting portfolio item:', error);
    }
};

export const updatePortfolioItem = async (id: string, updatedPortfolioItem: Partial<PortfolioItem>) => {
    try {
        connectToDB();
        await PortfolioItemModel.findByIdAndUpdate(id, updatedPortfolioItem);
        console.log('Portfolio item updated successfully!');
    } catch (error) {
        console.error('Error updating portfolio item:', error);
    }
};