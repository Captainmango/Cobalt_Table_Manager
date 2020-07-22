class BookingsController < ApplicationController
    before_action :find_user

    def index
        bookings = user.bookings
        render json: BookingsSerializer.new(bookings).serialized_json
    end

    def create
        location = Location.find_by(id: location_id)
        table = Table.find_by(id: table_id)
        nu_booking = user.bookings.create(booking_params.except(:user_id, :location_id, :table_id))
        render json: BookingsSerializer.new(nu_booking).serialized_json
    end

    private

    def find_user
        user = User.find_by(id: booking_params[:user_id])
    end

    def booking_params
        params.permit(:user_id,
                      :location_id,
                      :table_id,
                      :datetime,
                      :number_of_diners,
                      :notes)
    end


end
