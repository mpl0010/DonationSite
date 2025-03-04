import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const primaryValues = palette('#2381A0');
const secondaryValues = palette('#96B4D1');
const tertiaryValues = palette('#F9F8F8');

export const customTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: primaryValues["50"],
            100: primaryValues["100"],
            200: primaryValues["200"],
            300: primaryValues["300"],
            400: primaryValues["400"],
            500: primaryValues["500"],
            600: primaryValues["600"],
            700: primaryValues["700"],
            800: primaryValues["800"],
            900: primaryValues["900"],
            950: primaryValues["950"]
        },
        secondary: {
            50: secondaryValues["50"],
            100: secondaryValues["100"],
            200: secondaryValues["200"],
            300: secondaryValues["300"],
            400: secondaryValues["400"],
            500: secondaryValues["500"],
            600: secondaryValues["600"],
            700: secondaryValues["700"],
            800: secondaryValues["800"],
            900: secondaryValues["900"],
            950: secondaryValues["950"]
        },
        tertiary: {
            50: tertiaryValues["50"],
            100: tertiaryValues["100"],
            200: tertiaryValues["200"],
            300: tertiaryValues["300"],
            400: tertiaryValues["400"],
            500: tertiaryValues["500"],
            600: tertiaryValues["600"],
            700: tertiaryValues["700"],
            800: tertiaryValues["800"],
            900: tertiaryValues["900"],
            950: tertiaryValues["950"]
        }
    },
    components: {
        card: {
            colorScheme: {
                light: {
                    root: {
                        background: '{tertiary.500}',
                        color: '{neutral.950}',
                        shadow: '5px 5px 10px 0 rgba(0,0,0,0.2),0 8px 20px 0 rgba(0,0,0,0.19)'
                    },
                    subtitle: {
                        color: '{neutral.500}'
                    }
                }
            }
        },
        button: {
            colorScheme: {
                light: {
                    raised: {
                        shadow: '5px 5px 10px 0 rgba(0,0,0,0.2),0 8px 20px 0 rgba(0,0,0,0.19)'
                    }
                }
            }
        }
    }
});
