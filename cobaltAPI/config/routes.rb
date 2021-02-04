Rails.application.routes.draw do
  resources :reservations
  resources :restaurants
  resources :users
  resources :tables
  get "/users/:user_id/locations", to: "locations#my_locations"
  get "/locations", to: "locations#index"
  
  get "/users/:user_id/bookings", to: "bookings#index"
  post "/users/:user_id/reservations", to: "bookings#create"
  
  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
