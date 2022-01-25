import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        100: "#6500b6",
    },
    secondary: {
        100: "#7c72fa"
    },
    accent:{
        100: "#ffffff"
    },
    buttons:{
        100: "#89efe5"
    }
   
    
};

const customTheme = extendTheme({ colors });

export default customTheme;