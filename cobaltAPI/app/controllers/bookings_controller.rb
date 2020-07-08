class BookingsController < ApplicationController

    def index
        @bookings = Booking.all
        render json: BookingSerializer.new(@bookings).serialized_json
    end

end
