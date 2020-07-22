Rails.application.routes.draw do
  resources :tables
  get "/users/:user_id/locations", to: "locations#index"
  get "/users/:user_id/bookings", to: "bookings#index"

  get "/users/:user_id/locations/:location_id/tables", to: "tables#index"
  
  post "/signup", to: "users#create"
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
