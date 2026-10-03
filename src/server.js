import "dotenv/config";

import app from "./app.js";
import sequelize from "./config/database.js";

const PORT =
  process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log(
      "Database connection established."
    );

    app.listen(
      PORT,
      () => {
        console.log(
          `Server running on http://localhost:${PORT}`
        );
      }
    );
  } catch (error) {
    console.error(
      "Failed to start server:",
      error
    );

    process.exit(1);
  }
};

startServer();
