package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"time"

	"github.com/TIshow/learn-to-donate/db"
	"github.com/TIshow/learn-to-donate/pkg/graph/generated"
	"github.com/TIshow/learn-to-donate/pkg/graph/model"
	"golang.org/x/crypto/bcrypt"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	db, err := db.ConnectDB()
	if err != nil {
		panic(err)
	} else {
		fmt.Println("successful...")
	}

	var user model.User
	user.Username = input.Username
	user.Email = input.Email
	user.Password = input.Password
	user.IsDeleted = false

	now := time.Now()
	user.CreatedAt, user.UpdatedAt = now, now

	// hashing password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)

	_, err = db.Exec(`INSERT INTO users (username, email, password, created_at, updated_at, is_deleted) VALUES (?, ?, ?, ?, ?, ?)`, user.Username, user.Email, hashedPassword, user.CreatedAt, user.UpdatedAt, user.IsDeleted)
	if err != nil {
		panic(err)
	} else {
		fmt.Println("successful...")
	}

	defer db.Close()

	return &user, nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return r.users, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
