class BookingsController < ApplicationController

    def index
        @bookings = Booking.all
        render json: BookingsSerializer.new(@bookings).serialized_json
    end

end
