class Role < ApplicationRecord
    has_many :users
    validates :role_title, uniqueness: true
end
