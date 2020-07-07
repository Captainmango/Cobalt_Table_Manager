class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.has_many :bookings
      t.has_many :role
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :mobile_number
      t.string :email_address
      
      t.timestamps
    end
  end
end
