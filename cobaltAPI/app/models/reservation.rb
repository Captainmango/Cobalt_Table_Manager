class Reservation < ApplicationRecord
    belongs_to :users
    belongs_to :restaurants

    validates_presence_of :diners, :time
end
