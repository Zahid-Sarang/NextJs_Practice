import mongoose from "mongoose";
import { connected } from "process";

export async function connect() {
	try {
		mongoose.connect(process.env.MONGO_URL!);
		const connection = mongoose.connection;

		connection.on("connected", () => {
			console.log("Database connection established");
		});
		connection.on("error", (err) => {
			console.log(
				"Database connection error. please make sure your database connection." +
					err
			);
			process.exit();
		});
	} catch (err) {
		console.log(err);
	}
}
