package config

import (
	"fmt"
	"regexp"
	"strings"
)

// Settings is the configuration for the app
type Settings struct {
	Width       int
	Height      int
	Recent      []string
	Theme       string
	CustomTheme *theme
}

var colourRegex = regexp.MustCompile("^#(?:[0-9a-f]{3}|[0-9a-f]{6})$")

type colour string

func (c *colour) UnmarshalText(data []byte) error {
	col := string(data)
	if !colourRegex.MatchString(strings.ToLower(col)) {
		return fmt.Errorf("%q is an invalid colour", col)
	}

	*c = colour(col)
	return nil
}

type theme struct {
	PrimaryColor        colour
	PrimaryColorDark    colour
	PrimaryColorLight   colour
	SecondaryColor      colour
	SecondaryColorDark  colour
	SecondaryColorLight colour
	LinkColor           colour
	LinkColorDark       colour
	DarkColor           colour
	LightColor          colour
	GrayColor           colour
	GrayColorLight      colour
	GrayColorDark       colour
	BorderColor         colour
	BorderColorDark     colour
	BgColor             colour
	BgColorDark         colour
	BgColorLight        colour
	ControlSuccessColor colour
	ControlWarningColor colour
	ControlErrorColor   colour
	CodeColor           colour
	HighlightColor      colour
	NotifyBgColor       colour
	ListActiveColor     colour
}
