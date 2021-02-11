Rails.application.routes.draw do

  get "/restaurants/:search_term", to: "restaurants#get_by_search_term"
  get "/restaurants", to: "restaurants#index"
  
  get "/users/:user_id/reservations", to: "reservations#index"
  post "/users/:user_id/reservations", to: "reservations#create"
  get "/users/:user_id/reservations/:reservation_id", to: "reservations#show"
  
  post "/signup", to: "users#create"
  post "/login", to: "users#login"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
