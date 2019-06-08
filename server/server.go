package server

import (
	"log"
	"net"
	"net/http"
)

// Serve serves the dailies server
func Serve() (net.Addr, error) {
	http.Handle("/", http.FileServer(Assets))

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		return nil, err
	}

	go func() {
		defer ln.Close()
		log.Fatal(http.Serve(ln, nil))
	}()

	return ln.Addr(), nil
}
