// +build !static

package server

import (
	"net/http"
)

// Assets contains the filesystem for the web server
var Assets http.FileSystem = http.Dir("frontend/build")
