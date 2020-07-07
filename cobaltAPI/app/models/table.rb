class Table < ApplicationRecord
    has_one :location
    has_many :users
    has_many :bookings


    def diners
        
    end

    def servers
    end
end
