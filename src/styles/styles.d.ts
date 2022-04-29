import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            navbar: string;
            main: string;
            cards: string;
            text: string;
            subText: string;
            border: string;
            icons: string;
        }
    }
}