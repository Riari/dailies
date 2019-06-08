// +build ignore

package main

import (
	"log"
	"net/http"
	"os"
	"os/exec"
	"strings"

	"github.com/shurcooL/vfsgen"
)

func cd(dir string) {
	if err := os.Chdir(dir); err != nil {
		log.Fatal("cd ", dir, " ", err)
	}
}

func run(command string, args ...string) {
	cmd := exec.Command(command, args...)
	if err := cmd.Run(); err != nil {
		log.Fatal(command, " ", strings.Join(args, " "), " ", err)
	}
}

func main() {
	cd("frontend")
	run("npm", "install")
	run("npm", "run", "build")
	cd("..")
	frontend := http.Dir("frontend/build")
	err := vfsgen.Generate(frontend, vfsgen.Options{
		Filename:     "server/assets_vfsdata.go",
		PackageName:  "server",
		BuildTags:    "static",
		VariableName: "Assets",
	})
	if err != nil {
		log.Fatalln(err)
	}
}
