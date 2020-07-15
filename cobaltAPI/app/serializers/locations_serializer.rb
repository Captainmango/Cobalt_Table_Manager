class LocationsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :owners, :servers


end
