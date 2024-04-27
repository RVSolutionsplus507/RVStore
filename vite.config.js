import { defineConfig } from "vite";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react-swc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    assetsInclude: ["**/*.md"],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
