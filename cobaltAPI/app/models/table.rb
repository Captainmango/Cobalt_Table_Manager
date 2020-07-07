class Table < ApplicationRecord
    belongs_to :location
    has_many :users
    has_many :bookings


    def diners
        
    end

    def servers
        
    end
end
