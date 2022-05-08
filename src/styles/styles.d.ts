import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            navbar: string;
            main: string;
            cards: string;
            text: string;
            subText: string;
            border: string;
            icons: string;
            buttheme:string;
            button: string;
            mode: boolean;
            titleHome: string;
        };
        widget: {
            backgroundButton: string;
            colorButton: string;
            surfacePrimary: string;
            surfaceSecondary: string;
            textPrimary: string;
            textSecondary: string;
            borderItemsWidget: string;
        };
    }
}