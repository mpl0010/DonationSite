import { definePreset, palette } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const primaryValues = palette('#2381A0');
const secondaryValues = palette('#96B4D1')

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
        // TODO: Implement color theme for components that will be commonly used.
        // components: {
        //     button: {
        //         colorScheme: {
        //             light: {
        //                 root: {
        //                     background: '{surface.0}',
        //                     color: '{surface.700}'
        //                 },
        //                 subtitle: {
        //                     color: '{surface.500}'
        //                 }
        //             },
        //             dark: {
        //                 root: {
        //                     background: '{surface.900}',
        //                     color: '{surface.0}'
        //                 },
        //                 subtitle: {
        //                     color: '{surface.400}'
        //                 }
        //             }
        //         }
        //     }
        // }
    }
});
