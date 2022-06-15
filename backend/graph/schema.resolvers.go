package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"strconv"
	"time"

	"github.com/TIshow/learn-to-donate/db"
	"github.com/TIshow/learn-to-donate/graph/generated"
	"github.com/TIshow/learn-to-donate/graph/model"
	"golang.org/x/crypto/bcrypt"
)

type Credentials struct {
	Id       int64  `db:"id" json:"id"`
	Username string `db:"username" json:"username"`
	Password string `db:"password" json:"password"`
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	db, err := db.ConnectDB()
	if err != nil {
		panic(err)
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
	}

	defer db.Close()

	return &user, nil
}

func (r *mutationResolver) LoginUser(ctx context.Context, input model.LoginUser) (*model.User, error) {
	db, err := db.ConnectDB()
	if err != nil {
		panic(err)
	}

	stored := &Credentials{}
	var user model.User
	user.Email = input.Email
	user.Password = input.Password

	result := db.QueryRow(`SELECT id, username, password FROM users WHERE email=?;`, user.Email)
	if err != nil {
		panic(err)
	}

	// Store the obtained password from DB in `storedCreds`
	err = result.Scan(&stored.Id, &stored.Username, &stored.Password)
	if err != nil {
		panic(err)
	}

	if err = bcrypt.CompareHashAndPassword([]byte(stored.Password), []byte(user.Password)); err != nil {
		panic(err)
	}

	// Store fetched DB data
	user.ID = strconv.Itoa(int(stored.Id))
	user.Username = stored.Username

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
