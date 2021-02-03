class User < ApplicationRecord
    has_many :bookings
    has_many :bookings, through: :restaurants

    validates_presence_of :email
    validates :email, uniqueness: true

    has_secure_password

end
