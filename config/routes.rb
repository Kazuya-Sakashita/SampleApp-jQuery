Rails.application.routes.draw do
  namespace :messages do 
    resources :searches, only: :index, defaults: { format: :json }
  end

  resources :messages
end
