class Table < ApplicationRecord
    belongs_to :location
    has_many :users
    has_many :bookings

#not sure if I need to have separation of the users attribute for the table

    # def diners
    #     self.users.select{|user| user.role.id ==  }
    # end

    # def servers
        
    # end
end
