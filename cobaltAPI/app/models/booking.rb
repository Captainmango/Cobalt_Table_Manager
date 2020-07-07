class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :location
    belongs_to :table
    validates_presence_of :datetime, :number_of_diners

end
