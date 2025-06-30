import {model, Schema} from 'mongoose';

const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true, index: true},
    age: Number,
},{
    timestamps: true,
    versionKey: false
})

const studentModel = model('User', StudentSchema);

export default class StudentModel {
    static #model = studentModel;

    static async create(studentData) {
      try {
          const model = new this.#model(studentData);
          await model.save();
          return model;
      } catch (error) {
          console.error(error);
          throw error;
      }
    }

    static async getAll(limit,skip, filter) {
        try {
            const [students, totalCount] = await Promise.all([
                this.#model.find(filter).limit(limit).skip(skip),
                this.#model.countDocuments(filter)
            ]);

            return {students, totalCount};
        }catch(error) {
            console.error(error);
            throw error;
        }
    }

    static async count(){
        try {
            return await this.#model.countDocuments();
        }catch(error) {
            console.error(error);
            throw error;
        }
    }

    static async get(id) {
        try {
            let user = await this.#model.findById(id);
            return user;
        }catch(error) {
            console.error(error);
            throw error;
        }
    }

    static async edit(id, studentData) {
        try {
            return await this.#model.findByIdAndUpdate(id,studentData, {new: true});
        }catch(error) {
            console.error(error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            return await this.#model.findByIdAndDelete(id);
        }catch(error) {
            console.error(error);
            throw error;
        }
    }


    static async checkIfExist(field, value) {
        try {
            return await this.#model.exists({[field]: value});
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}