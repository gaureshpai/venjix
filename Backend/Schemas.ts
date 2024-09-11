import mongoose, { Schema, Document } from 'mongoose';
import { WorkItem, FilmItem, PortfolioItem } from '@/Backend/Interface';

const workItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    ytUrl: { type: String, required: true }
});

export const WorkItemModel = mongoose.models.WorkItem || mongoose.model<WorkItem>('WorkItem', workItemSchema);

const filmItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ytUrl: { type: String, required: true }
});

export const FilmItemModel = mongoose.models.FilmItem || mongoose.model<FilmItem>('FilmItem', filmItemSchema);

const PortfolioItemSchema: Schema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    ytUrl: { type: String, required: true },
    year: { type:Number, required: true }
});

export const PortfolioItemModel = mongoose.models.PortfolioItem || mongoose.model<PortfolioItem>('PortfolioItem', filmItemSchema);