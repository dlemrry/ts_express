import app from "./index";

const PORT: Number = 8080;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
