import { readFileSync } from '@skpm/fs';
import color from "./color";

export default function(filePath) {

    let assetContent = readFileSync(filePath, 'utf-8');
    let colors = JSON.parse(assetContent).colors;

    colors = colors.map(item => {
        let nscolor = color.colorWithRGBA(
            item.red * 255,
            item.green * 255,
            item.blue * 255,
            item.alpha
        );
        let hexValue = color.toHexValue(nscolor);
        return {
            name: null,
            color: hexValue
        };
    });

    return colors;

}