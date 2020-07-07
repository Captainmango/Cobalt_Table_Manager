class User < ApplicationRecord
    belongs_to :booking
    belongs_to :role
    belongs_to :location
    belongs_to :table

    has_secure_password
    validates_presence_of :first_name, :last_name
    validates :username, uniqueness: true
    validates :email_address, uniqueness: true

end
