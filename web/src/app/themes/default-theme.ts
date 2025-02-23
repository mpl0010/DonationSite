import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const values = palette('#96B4D1');

export const customTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: values["50"],
            100: values["100"],
            200: values["200"],
            300: values["300"],
            400: values["400"],
            500: values["500"],
            600: values["600"],
            700: values["700"],
            800: values["800"],
            900: values["900"],
            950: values["950"]
        }
    }
});
