class Messages::SearchesController < ApplicationController
  def index
    @messages = Message.where('title LIKE(?)', "%#{params[:title]}%")
    respond_to do |format| # リクエスト形式によって処理を切り分ける
      format.html { redirect_to :root } # html形式の場合
      format.json { render json: @messages } # json形式の場合
    end
  end
end