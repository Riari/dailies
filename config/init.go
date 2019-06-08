package config

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"

	"github.com/kirsle/configdir"
)

// Init initialises the configuration
func Init() (Settings, error) {
	configPath := configdir.LocalConfig("dailies")
	err := configdir.MakePath(configPath)
	if err != nil {
		return Defaults, err
	}

	configFile := filepath.Join(configPath, "settings.json")
	if _, err = os.Stat(configFile); os.IsNotExist(err) {
		f, err := os.Create(configFile)
		if err != nil {
			return Defaults, err
		}
		defer f.Close()

		enc := json.NewEncoder(f)
		err = enc.Encode(&Defaults)
		return Defaults, err
	}

	f, err := os.Open(configFile)
	if err != nil {
		return Defaults, err
	}
	defer f.Close()

	dec := json.NewDecoder(f)
	var settings Settings
	if err = dec.Decode(&settings); err != nil {
		return Defaults, err
	}

	if _, ok := Themes[settings.Theme]; !ok {
		err = fmt.Errorf("invalid theme %q", settings.Theme)
		settings.Theme = "light"
	}

	return settings, err
}
