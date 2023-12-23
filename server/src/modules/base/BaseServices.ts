import { Model } from 'mongoose';

class BaseServices<T> {
  public model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  /**
   * create document into database
   * @param payload
   * @returns
   */
  async create(payload: Record<string, unknown>) {
    return await this.model.create(payload);
  }

  /**
   * Get One Document by ObjectId
   * @param id ObjectId
   * @returns
   */
  async getSingleById(id: string) {
    return await this.model.findById(id);
  }

  /**
   * Get One Document by ObjectId
   * @param query
   * @returns
   */
  async getSingleByQuery(query: Record<string, unknown>) {
    return await this.model.findOne(query);
  }

  /**
   * Get All document on query
   * @param query
   * @returns
   */
  async getAll(query: Record<string, unknown> = {}) {
    return await this.model.find(query);
  }

  /**
   * update
   * @param id ObjectId
   * @param payload
   * @returns
   */

  async update(id: string, payload: Record<string, unknown>) {
    return await this.model.findByIdAndUpdate(id, payload);
  }

  /**
   * delete by ObjectId
   * @param id ObjectId
   */
  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
  }
}

export default BaseServices;
