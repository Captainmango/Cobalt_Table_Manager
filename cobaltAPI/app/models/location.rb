class Location < ApplicationRecord
    has_many :owners
    has_many :servers
    has_many :tables
    has_many :bookings
    validates :name, uniqueness: true
    validates_presence_of :location_password
end
