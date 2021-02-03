class Restaurant < ApplicationRecord
    has_many :reservations
    has_many :users, through: :reservations
    validates_presence_of :name, :address, :img
end
