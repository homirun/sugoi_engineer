class EngineersController < ApplicationController
  def create
    @engineer = Engineer.new
    @engineer.github_id = params[:engineer][:name]
    respond_to do |format|
      format.json do
        if @engineer.save
          render json: { message: "https://sugoi.engineer/" + @engineer.github_id }, status: 201
        else
          render json: { message: @engineer.errors.full_messages }, status: 400
        end
      end
    end
  end

  def show
    @engineer = Engineer.find_by(github_id: params[:id])
    unless @engineer
      render 'static_pages/404', status: 404, layout: 'application', content_type: 'text/html'
    end
    redirect_to "https://github.com/" + @engineer.github_id
  end
end
