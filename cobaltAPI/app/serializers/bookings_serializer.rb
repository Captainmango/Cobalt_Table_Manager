class BookingsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :datetime, :number_of_diners
  belongs_to :user
  belongs_to :location
  belongs_to :table
end
