class UsersSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :username, :email_address, :mobile_number
  has_many :bookings
  has_many :restaurants
  
  attribute :token do |user, params|
    params[:token]
  end
  
end
