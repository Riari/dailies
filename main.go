package main

import (
	"log"

	"github.com/riari/dailies/config"
	"github.com/riari/dailies/server"
	"github.com/zserge/webview"
)

//go:generate go run gen.go

func main() {
	settings, err := config.Init()
	if err != nil {
		log.Fatalln(err)
	}

	addr, err := server.Serve()
	if err != nil {
		log.Fatalln(err)
	}

	w := webview.New(webview.Settings{
		Width:     settings.Width,
		Height:    settings.Height,
		Title:     "Dailies",
		Resizable: true,
		URL:       "http://" + addr.String() + "/index.html",
	})
	defer w.Exit()
	w.Run()
}
