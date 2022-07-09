// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"time"
)

type LoginUser struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type NewUser struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type NewsOutput struct {
	ID          string    `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Content     string    `json:"content"`
	Level       int       `json:"level"`
	Donated     int       `json:"donated"`
	ImageURL    string    `json:"image_url"`
	SketPoint   int       `json:"sket_point"`
	CategoryID  int       `json:"category_id"`
	CreatedAt   time.Time `json:"created_at"`
	IsDeleted   bool      `json:"is_deleted"`
}

type QuestOutput struct {
	ID         string `json:"id"`
	Question   string `json:"question"`
	CategoryID int    `json:"category_id"`
	IsAnswer   int    `json:"is_answer"`
	Choice     string `json:"choice"`
}

type User struct {
	ID        string    `json:"id"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
	Password  string    `json:"password"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	IsDeleted bool      `json:"is_deleted"`
}
