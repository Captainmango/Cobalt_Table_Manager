class Location < ApplicationRecord
    has_many :users
    has_many :tables
    has_many :bookings, through: :tables
    validates :name, uniqueness: true
    validates_presence_of :location_password

    def owners
    end

    def servers
    end
    
end
