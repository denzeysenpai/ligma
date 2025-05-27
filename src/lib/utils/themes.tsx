
import img1 from "../assets/common/japanese-theme-1.jpg";
import img2 from "../assets/common/japanese-theme-2.jpg";

const themes  = new Map<string, string>([
    ["japanese-theme-1", img1],
    ["japanese-theme-2", img2],
])



export function FetchImage(url: string): string {
 return themes.get(url.split('.')[0]) || "../assets/common/default-theme.jpg";
}


export function FetchThemeColor(url: string): string {
    const theme = url.split('.')[1];
    switch (theme) {
        case "vue-green":
            return "green";
        case "ocean-blue":
            return "ocean-blue";
        default:
            return "default-color"; // Fallback color
    }
}