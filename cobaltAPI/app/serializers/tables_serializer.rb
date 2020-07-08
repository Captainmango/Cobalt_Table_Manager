class TablesSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :location
  has_many :users
  has_many :bookings
end
