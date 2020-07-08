class UsersSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :username, :email_address, :mobile_number
  belongs_to :role
  has_many :bookings
  belongs_to :location
  belongs_to :table
  
  attribute :token do |user, params|
    params[:token]
  end
  
end
