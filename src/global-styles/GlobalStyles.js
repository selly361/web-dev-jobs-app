import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb:window-inactive {
      background: rgba(255, 255, 255, 0.3);
    }


    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Kumbh Sans', sans-serif;   
        }


    body {
        min-height: 100vh;
        width: 100vw;
        overflow-x: hidden;
    }


     button, input, a {
        border: unset;
        outline: unset;
        background-color: unset;
        text-decoration: none;
    }

    &.Scoot {
    background-color: hsl(36, 87%, 49%);
  }

  .Blogr {
    background-color: hsl(12, 79%, 52%);
  }

  .Vector {
    background-color: hsl(235, 10%, 23%);
  }

  .OfficeLite {
    background: hsl(227, 62%, 48%);
  }

  .Pod {
    background-color: hsl(216, 46%, 14%);
  }

  .Creative {
    background-color: hsl(295, 55%, 21%);
  }

  .Pomodoro {
    background-color: hsl(254, 71%, 45%);
  }

  .Maker {
    background-color: hsl(218, 58%, 31%);
  }

  .Coffeeroasters {
    background-color: hsl(29, 60%, 87%);
  }

  .Mastercraft {
    background-color: hsl(0, 0%, 12%);
  }

  .Crowdfund {
    background-color: hsl(157, 57%, 50%);
  }

  .Typemaster {
    background-color: hsl(22, 89%, 52%);
  }

`;

export const pageAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
