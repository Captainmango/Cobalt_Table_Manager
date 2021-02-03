class User < ApplicationRecord
    has_many :reservations
    has_many :restaurants, through: :reservations

    validates_presence_of :email
    validates :email, uniqueness: true

    has_secure_password

end
