class Restaurant < ApplicationRecord
    has_many :reservations
    has_many :users, through: :reservations
    validates_presence_of :name, :address, :img

    def avg_rating
        ratings = self.reservations.select{|reservation| reservation.rating}
        return ratings.sum(0.0) / ratings.length
    end

end
