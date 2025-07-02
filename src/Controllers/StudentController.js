import StudentModel from "../Models/StudentModel.js";

export default class StudentController {
	static async createStudents(req, res) {
		try {
			const { firstName, lastName, email, age } = req.body;
			if (!firstName || !lastName || !email || !age) {
				res.status(400).json({
					success: false,
					message: "All fields are required",
				});
			}

			if (await StudentModel.checkIfExist("email", email)) {
				return res.status(409).json({
					success: false,
					message: "Email is already exist",
				});
			}

			const student = await StudentModel.create({
				firstName,
				lastName,
				email,
				age,
			});
			res.status(201).json({
				success: true,
				message: "Student created successfully",
				data: student,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				success: false,
				message: "Something went wrong",
			});
		}
	}

	static async getStudents(req, res) {
		try {
			const {page = 1, limit= 5, lastName } = req.query;
			const skip = (page - 1) * limit ;
			const filter = lastName?{lastName}:{};
			const {students, totalCount} = await StudentModel.getAll(limit, skip,filter);
			res.status(200).json({
				success: true,
				message: "Students retrieved successfully",
				data: {
					students, controls: {
						page,
						limit,
						totalCount,
						totalPage: Math.ceil(totalCount / limit),
					}},
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				success: false,
				message: "Something went wrong",
			});
		}
	}

	static async getStudent(req, res) {
		try {
			const { id } = req.params;
			const student = await StudentModel.get(id);
			res.status(200).json({
				success: true,
				message: "Student retrieved successfully",
				data: student,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				success: false,
				message: "Something went wrong",
			});
		}
	}

	static async editStudent(req, res) {
		try {
			const { id } = req.params;
			const { firstName, lastName, email, age } = req.body;
			let student = await StudentModel.edit(id, {
				firstName,
				lastName,
				email,
				age,
			});

			if (!student) {
				res.status(404).json({
					success: false,
					message: "Student does not exist",
				});
			}

			res.status(200).json({
				success: true,
				message: "Student record edited successfully",
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				success: false,
				message: "Something went wrong",
			});
		}
	}

	static async deleteStudent(req, res) {
		try {
			const { id } = req.params;
			let student = await StudentModel.delete(id);

			if (!student) {
				res.status(404).json({
					success: false,
					message: "Student does not exist",
				});
			}

			res.status(200).json({
				success: true,
				message: "Student record deleted successfully",
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				success: false,
				message: "Something went wrong",
			});
		}
	}

	static async countStudents(req, res) {
		try {
			const studentsCount = await StudentModel.count();
			res.status(200).json({
				success: true,
				message: "Students Counts retrieved successfully",
				data: { studentsCount },
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({
				success: false,
				message: "Something went wrong",
			});
		}
	}
}
