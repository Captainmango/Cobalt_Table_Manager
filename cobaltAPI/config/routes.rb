Rails.application.routes.draw do
  resources :bookings
  get "/signup", to: "users#signup"
  get "/login", to: "users#login"
  get "/dashboard", to: "users#dashboard"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
