class Restaurant < ApplicationRecord
    has_many :reservations
    has_many :users, through: :reservations
    validates_presence_of :name, :address, :image

    def avg_rating
        ratings_list = []
        ratings = self.reservations.select{|reservation| ratings_list << reservation.rating}
        return ratings_list.sum(0.0) / ratings_list.length
    end

end
