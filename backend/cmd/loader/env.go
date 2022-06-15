package loader

import (
	"log"

	"github.com/joho/godotenv"
)

func EnvLoad() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading env target")
	}
}
