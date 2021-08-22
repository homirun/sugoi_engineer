Rails.application.routes.draw do
  root 'static_pages#home'
  resources :engineers
  resources :engineers, path: '/', only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
