import { Document, Model, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

class BaseServiceDemo<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async findOne(query: FilterQuery<T>, options?: QueryOptions): Promise<T | null> {
    return this.model.findOne(query, null, options).exec();
  }

  async find(query: FilterQuery<T>, options?: QueryOptions): Promise<T[]> {
    return this.model.find(query, null, options).exec();
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async updateById(id: string, update: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, update, { new: true }).exec();
  }

  async deleteById(id: string): Promise<T | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}

export default BaseServiceDemo;
