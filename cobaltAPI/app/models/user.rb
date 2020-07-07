class User < ApplicationRecord
    has_many :bookings
    belongs_to :role
    belongs_to :location, optional: true
    belongs_to :table, optional: true

    has_secure_password
    validates_presence_of :first_name, :last_name
    validates :username, uniqueness: true
    validates :email_address, uniqueness: true

end
