class LocationsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :owners, :servers
  has_many :tables


end
