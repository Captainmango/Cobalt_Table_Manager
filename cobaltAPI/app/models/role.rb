class Role < ApplicationRecord
    belongs_to :users
    validates :role_title, uniqueness: true
end
