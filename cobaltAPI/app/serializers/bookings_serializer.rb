class BookingsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :datetime, :number_of_diners

  attribute :location do |booking|
    booking.location
  end

  belongs_to :user
  belongs_to :table
end
