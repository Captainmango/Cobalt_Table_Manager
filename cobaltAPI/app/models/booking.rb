class Booking < ApplicationRecord
    belongs_to :users
    belongs_to :location, optional: true
    belongs_to :table
    validates_presence_of :datetime, :number_of_diners

end
