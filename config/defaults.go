package config

var (
	// Defaults are the default settings
	Defaults = Settings{
		Width:  1280,
		Height: 1024,
		Theme:  "light",
	}

	// Themes contains a map of the builtin themes
	Themes = map[string]theme{
		"light": {
			PrimaryColor:        "#E91E63",
			PrimaryColorDark:    "#C2185B",
			PrimaryColorLight:   "#F8BBD0",
			SecondaryColor:      "#E91E63",
			SecondaryColorDark:  "#C2185B",
			SecondaryColorLight: "#F8BBD0",
			LinkColor:           "#E040FB",
			LinkColorDark:       "#E040FB",
			DarkColor:           "#212121",
			LightColor:          "#fffff",
			GrayColor:           "#757575",
			GrayColorLight:      "#757575",
			GrayColorDark:       "#757575",
			BorderColor:         "#BDBDBD",
			BorderColorDark:     "#BDBDBD",
			BgColor:             "#FFFFFF",
			BgColorDark:         "#CCCCCC",
			BgColorLight:        "#FFFFFF",
			ControlSuccessColor: "#32b643",
			ControlWarningColor: "#ffb700",
			ControlErrorColor:   "#e85600",
			CodeColor:           "#e06870",
			HighlightColor:      "#ffe9b3",
			NotifyBgColor:       "#ececec",
			ListActiveColor:     "#f0f3f5",
		},
	}
)
