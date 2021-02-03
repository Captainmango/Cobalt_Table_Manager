class Reservation < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant

    validates_presence_of :diners, :time, :restaurant_id
end
