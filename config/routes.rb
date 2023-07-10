Rails.application.routes.draw do
  get "root/index"

  # The route of greetings API is /api/v1/greetings
  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end

  root "root#index"
end
