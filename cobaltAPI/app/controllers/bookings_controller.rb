class BookingsController < ApplicationController

    def index
        user = User.find_by(id: booking_params[:user_id])
        bookings = user.bookings
        render json: BookingsSerializer.new(bookings).serialized_json
    end

    private

    def booking_params
        params.permit(:user_id)
    end


end
