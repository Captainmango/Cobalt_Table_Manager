class Location < ApplicationRecord
    has_many :users
    has_many :tables
    has_many :bookings, through: :tables
    validates :name, uniqueness: true
    validates_presence_of :location_password

    def owners
        self.users.select { |user| user.role.id == 2 }
    end

    def servers
        self.users.select { |user| user.role.id == 3 }
    end
    
end
