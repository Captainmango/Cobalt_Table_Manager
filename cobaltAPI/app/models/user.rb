class User < ApplicationRecord
    has_many :bookings
    has_many :roles
    has_secure_password
    validates_presence_of :first_name, :last_name
    validates :username, uniqueness: true
    validates :email_address, uniqueness: true

end
