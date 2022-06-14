package main

import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/TIshow/learn-to-donate/pkg/graph"
	"github.com/TIshow/learn-to-donate/pkg/graph/generated"
)

func main() {
	envLoad() // Load from .env file

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)
}
