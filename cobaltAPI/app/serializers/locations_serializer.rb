class LocationsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :owners, :servers
  has_many :users
  has_many :tables
  has_many :bookings


end
