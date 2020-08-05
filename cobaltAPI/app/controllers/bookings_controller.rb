class BookingsController < ApplicationController
    before_action :find_user

    def index
        bookings = @user.bookings
        render json: BookingsSerializer.new(bookings).serialized_json
    end

    def create
        location = Location.find_by(name: booking_params[:location])
        table = location.tables.where("capacity >= '#{booking_params[:number_of_diners]}'")[0]
        nu_booking = @user.bookings.create(booking_params.except(:user_id, :location))
        nu_booking.location = location
        nu_booking.table = table
        nu_booking.save
        send_message(@user.mobile_number, "You've created a booking at #{location.name} to start at #{nu_booking.datetime}. We look forward to seeing you :)")
        render json: BookingsSerializer.new(nu_booking).serialized_json
    end

    private

    def send_message(phone_number, alert_message)
        @twilio_number = ENV['TWIL_NUMBER']
        @client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
            
            message = @client.messages.create(
              :from => @twilio_number,
              :to => phone_number,
              :body => alert_message,
            )
    end

    def find_user
        @user = User.find_by(id: booking_params[:user_id])
    end

    def booking_params
        params.permit(:user_id,
                      :location,
                      :datetime,
                      :number_of_diners,
                      :notes)
    end


end
