class SMSController < ApplicationController
    before_action :find_user

    def confirm_booking
        phone_number = user.mobile_number
        
        begin
            send_message(phone_number, )

    end



    private

    def send_message(phone_number, alert_message)
        @twilio_number = ENV['TWIL_NUMBER']
        @client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
            
            message = @client.messages.create(
              from: @twilio_number,
              to: phone_number,
              body: alert_message
            )
    end

    def find_user
        user = User.find_by(id: sms_params[:user_id])
    end

    def find_reservation
        reservation = Reservation.find_by(id: sms_params[:reservation_id])
    end
end
