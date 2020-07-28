class LocationsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :owners, :servers

  attribute :tables do |location|
    location.tables.map do |table|
      {id: table.id,
      capacity: table.capacity}
      end
  end


end
