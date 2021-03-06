import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#93c5fd",
    },
  },

  overrides: {
    MuiCard: {
      root: {
        backgroundColor: "#424242",
      },
    },

    MuiDrawer: {
      root: {
        "& .MuiDivider-root": {
          marginTop: "5px",
        },
      },
      paper: {
        backgroundColor: "#303133",
        width: "240px",
        color: "#efefef",
        padding: "0px",
        marginTop: "0px",

        // "&:hover": {
        //   backgroundColor: "rgb(239, 239, 239, 0.4)",
        // },
      },
    },

    MuiDivider: {
      root: {
        backgroundColor: "#efefef",
        opacity: "0.6",
        margin: "10px 0",
        width: "100%",
      },
    },

    MuiDialog: {
      // root: { color: "#efefef" },
      paper: { backgroundColor: "#303133" },
      MuiDivider: {
        backgroundColor: "#efefef",
      },
    },

    MuiDialogTitle: {
      root: { color: "#efefef" },
    },

    MuiDialogContent: {
      // root: {
      //   "& .MuiDialogContent-dividers": {
      //     borderTop: " 1px solid #efefef",
      //   },

      // },
      dividers: {
        borderTop: " 1px solid rgb(239,239,239,0.4)",
        borderBottom: " 1px solid rgb(239,239,239,0.4)",
      },
    },

    MuiInputLabel: {
      root: {
        color: "#efefef",
        fontSize: "1.1rem",
        marginLeft: "20px",
        // "&.Mui-focused": {
        //   // increase the specificity for the pseudo class
        //   color: "rgb(239,239,239,1)",
        // },
      },
    },

    MuiOutlinedInput: {
      root: {
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "rgb(239,239,239,0.4) 2px solid",
          },
        },
      },

      // .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline

      // notchedOutline: {
      //   border: "red 1px solid",
      //   "&.Mui-focused": {
      //     border: "red 1px solid",
      //   },
      // },

      // root: {
      //   borderColor: "red 1px solid",
      // },
    },

    MuiInputBase: {
      root: {
        margin: "10px",
        color: "#efefef",
        height: "3rem",
        fontSize: "1.1rem",
        backgroundColor: "rgba(0,0,0,0.1)",

        "& .MuiInputBase-input": {
          marginLeft: "10px",
        },

        "&:hover": {
          backgroundColor: "#000",
        },
        "&.Mui-focused": {
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      },
    },

    MuiButton: {
      containedPrimary: {
        backgroundColor: "#00000033",
        color: "#93c5fd",

        "&:hover": {
          color: "#000",
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#262729",
        color: "#efefef",
        padding: "10px",
        marginTop: "10px",
      },
    },
    MuiAppBar: {
      root: {},
      colorPrimary: {
        backgroundColor: "#3C3D3F",
        paddingBottom: "0px",
        paddingTop: "0px",
      },
    },

    MuiTabs: {
      indicator: {
        backgroundColor: "#BB432C",
      },
    },

    MuiTab: {
      root: {
        "& > .MuiTab-wrapper": {
          color: "#c0c0c0",
        },

        "&.Mui-selected": {
          backgroundColor: "#262729",
        },
      },
    },

    MuiToggleButtonGroup: {
      root: {
        backgroundColor: "#00000033",
      },
    },

    MuiToggleButton: {
      root: {
        backgroundColor: "#262729",
        color: "#efefef",

        "&.Mui-selected": {
          backgroundColor: "#414244",
          color: "#efefef",
        },
      },
    },
  },
});
