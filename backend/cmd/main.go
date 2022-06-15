package main

import (
	"log"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/TIshow/learn-to-donate/cmd/loader"
	"github.com/TIshow/learn-to-donate/graph"
	"github.com/TIshow/learn-to-donate/graph/generated"
)

const defaultPort = "3306"

func main() {
	loader.EnvLoad() // Load from .env file

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", "3306")
	log.Fatal(http.ListenAndServe(":"+"3306", nil))
}
