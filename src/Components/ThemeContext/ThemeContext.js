// create theme context and export it

import React from "react";

const ThemeContext = React.createContext();

export default ThemeContext;

// at app js level store and provide the theme context to the entire app

// grandchildreceives the theme context and uses it to apply the style to the div tag with lorem ipsum text

