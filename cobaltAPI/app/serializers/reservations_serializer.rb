class ReservationsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :time, :diners, :rating

  belongs_to :user
  belongs_to :restaurant
end
