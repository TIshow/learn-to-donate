package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/TIshow/learn-to-donate/graph/generated"
	"github.com/TIshow/learn-to-donate/graph/model"
)

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	// user := &model.User{
	// 	ID:        fmt.Sprintf("T%d", rand.Int()),
	// 	Username:  input.Username,
	// 	Email:     input.Email,
	// 	Password:  input.Password,
	// 	CreatedAt: input.created_at,
	// 	UpdatedAt: input.updated_at,
	// 	IsDeleted: input.is_deleted,
	// }
	// r.users = append(r.users, user)
	// return user, nil
	var user model.User
	user.Username = input.Username
	user.Email = input.Email
	user.Password = input.Password
	user.CreatedAt = input.CreatedAt
	user.UpdatedAt = input.UpdatedAt
	user.IsDeleted = input.IsDeleted
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
