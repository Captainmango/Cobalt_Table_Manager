class SpecialConsideration < ApplicationRecord
    belongs_to :bookings
    validates :consideration_title, uniqueness: true
end
