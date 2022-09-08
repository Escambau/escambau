import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      divTituloModal: string;
      icons: string;
      placeholder: string;
      backgroundInput: string;
      logoColor: string;
      headerColor: string;
      textButton: string;
      textGeneral: string;
      backgroundGeneral: string;
      lightGreyBackground: string;
      lightGrey: string;
      grey: string;
      darkGrey: string;
      blue: string;
      lightGreen: string;
      green: string;
      greenOpacity: string;
      red: string;
      redOpacity: string;
      redSpan: string;
      orange: string;
    };
  }
}
